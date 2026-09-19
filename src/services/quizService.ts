import { PRE_CURATED_MCQS, CuratedMCQ } from "../data/curatedQuestions";

export interface GenerateQuizParams {
  apiKey: string;
  count: number;
  questionType: string;
  topic?: string;
  customFocus?: string;
}

export interface GenerateQuizResult {
  success: boolean;
  questions: CuratedMCQ[];
  source: "server_api" | "direct_client_gemini" | "curated_archive";
  message?: string;
  error?: string;
  details?: string;
}

const LECTURE_CONTEXT_BRIEF = `
You are a senior oncology clinical professor and board exam question writer specializing in anti-cancer pharmacology.
Reference topics:
1. Cancer characteristics (CAUTION signs, staging T/N/M, cell cycle specific vs non-specific).
2. Alkylating agents: Cyclophosphamide & Ifosfamide (acrolein, hemorrhagic cystitis, Mesna), Nitrosoureas (Carmustine, Lomustine - once every 6 weeks for delayed prolonged myelosuppression).
3. Platinum compounds: Cisplatin (severe emesis, nephrotoxicity, hydration/mannitol), Carboplatin, Oxaliplatin (peripheral neuropathy).
4. Antimetabolites: Methotrexate (DHFR inhibitor, high-dose Leucovorin rescue, tubular precipitation), 6-MP / Azathioprine (TPMT screening, Allopurinol 75% reduction), 5-FU & Capecitabine (thymidylate synthase, DPD deficiency, hand-foot syndrome, coronary vasospasm).
5. Cytotoxic Antibiotics: Doxorubicin ('Red Devil', semiquinone free radicals, cumulative cardiotoxicity, Dexrazoxane iron chelator), Bleomycin (pulmonary fibrosis).
6. Microtubule Inhibitors: Vinca Alkaloids (Vincristine, Vinblastine - IV ONLY, fatal if intrathecal, neurotoxicity), Taxanes (Paclitaxel, Docetaxel - hyperstabilize microtubules, fluid retention).
7. Hormonal Agents: Tamoxifen (SERM in breast, agonist in endometrium -> adenocarcinoma risk), Aromatase Inhibitors (Anastrozole, Letrozole), Antiandrogens (Flutamide, Bicalutamide), GnRH agonists (Goserelin, Leuprolide).
8. Targeted & Monoclonal Antibodies: Trastuzumab (HER2, cardiotoxicity), Rituximab (CD20 in B-cell lymphoma), Imatinib (BCR-ABL t(9;22) CML), Erlotinib (EGFR), Sorafenib/Sunitinib (VEGF/PDGF).
9. Regimens: MOPP, ABVD (Hodgkin's), CHOP (NHL), CMF, AC (Breast), FOLFOX (Colorectal), BEP (Germ cell).
`;

// Helper to extract JSON from Gemini text output
function cleanAndParseJSON(rawText: string): any {
  if (!rawText) return null;
  // Remove markdown code fences if present
  let cleaned = rawText.trim();
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.replace(/^```json\s*/i, "").replace(/```\s*$/, "");
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```\s*/i, "").replace(/```\s*$/, "");
  }
  return JSON.parse(cleaned.trim());
}

export function getCuratedQuestions(count: number, topic?: string, _questionType?: string): CuratedMCQ[] {
  let list = [...PRE_CURATED_MCQS];
  if (topic && topic !== "All Topics" && topic !== "all") {
    const filtered = list.filter(q => q.topic.toLowerCase().includes(topic.toLowerCase()));
    if (filtered.length >= 3) {
      list = filtered;
    }
  }
  // Shuffle
  list.sort(() => 0.5 - Math.random());
  return list.slice(0, Math.min(list.length, count || 10));
}

// Call Gemini directly from browser via Google REST API (used when hosted on Netlify, GitHub Pages, or Vercel static)
async function generateDirectViaGoogleREST(params: GenerateQuizParams): Promise<GenerateQuizResult> {
  const { apiKey, count, questionType, topic, customFocus } = params;
  const cleanKey = (apiKey || "").trim().replace(/^["']|["']$/g, "");

  if (!cleanKey) {
    throw new Error("مفتاح Gemini API إلزامي لتوليد الأسئلة الحية.");
  }

  const prompt = `${LECTURE_CONTEXT_BRIEF}

Generate exactly ${count} multiple-choice questions (MCQs) for pharmacology students based on the lecture contents.
Topic filter: ${topic || "All topics"}
Question style: ${questionType === "clinical" ? "Realistic clinical case vignettes with patient history and lab findings" : questionType === "direct" ? "Direct factual and mechanistic questions" : "Mix of direct mechanisms and clinical vignettes"}
Additional focus: ${customFocus || "High yield board exam questions"}

Requirements:
- Exactly 4 choices per question (options).
- correctAnswerIndex (0 to 3).
- Detailed scientific explanation quoting slide mechanisms and safety pearls.
- Set questionType to either "direct" or "clinical" for each question.
- Return ONLY valid JSON adhering to the specified schema:
{
  "questions": [
    {
      "id": "string",
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswerIndex": 0,
      "explanation": "string",
      "topic": "string",
      "slideReference": "string",
      "questionType": "direct"
    }
  ]
}`;

  // Candidate models supported for public keys
  const candidateModels = ["gemini-3.5-flash", "gemini-flash-latest"];
  let lastError: any = null;

  for (const modelName of candidateModels) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${cleanKey}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                questions: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      id: { type: "STRING" },
                      question: { type: "STRING" },
                      options: { type: "ARRAY", items: { type: "STRING" } },
                      correctAnswerIndex: { type: "INTEGER" },
                      explanation: { type: "STRING" },
                      topic: { type: "STRING" },
                      slideReference: { type: "STRING" },
                      questionType: { type: "STRING" }
                    },
                    required: ["id", "question", "options", "correctAnswerIndex", "explanation", "topic", "slideReference"]
                  }
                }
              },
              required: ["questions"]
            }
          }
        })
      });

      const data = await res.json();

      if (data.error) {
        lastError = new Error(data.error.message || "خطأ من Google Gemini API");
        (lastError as any).rawDetails = JSON.stringify(data.error);
        const errMsg = String(data.error.message || "");
        if (errMsg.includes("API_KEY_INVALID") || errMsg.includes("not valid")) {
          throw lastError; // Stop immediately on invalid key
        }
        continue; // Try next model
      }

      const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (textOutput) {
        const parsed = cleanAndParseJSON(textOutput);
        if (Array.isArray(parsed?.questions) && parsed.questions.length > 0) {
          return {
            success: true,
            source: "direct_client_gemini",
            questions: parsed.questions,
            message: `تم توليد ${parsed.questions.length} أسئلة بنجاح عبر اتصال Gemini السحابي المباشر.`
          };
        }
      }
    } catch (err: any) {
      lastError = err;
      const msg = String(err?.message || "");
      if (msg.includes("API_KEY_INVALID") || msg.includes("not valid")) {
        throw err;
      }
    }
  }

  if (lastError) {
    throw lastError;
  }

  throw new Error("تعذر الحصول على أسئلة من نموذج Gemini. يرجى التأكد من اتصال الإنترنت وصحة المفتاح.");
}

// Master generator function: automatically chooses the best available engine
export async function generateQuiz(params: GenerateQuizParams): Promise<GenerateQuizResult> {
  const cleanKey = (params.apiKey || "").trim().replace(/^["']|["']$/g, "");

  // 1. Try server endpoint first (e.g. on Google Cloud Run / AI Studio)
  try {
    const res = await fetch("/api/generate-mcqs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: cleanKey,
        count: params.count,
        questionType: params.questionType,
        topic: params.topic === "All Topics" ? undefined : params.topic,
        customFocus: params.customFocus
      })
    });

    const contentType = res.headers.get("content-type") || "";

    // If server responded with HTML (which happens on Netlify / static hosts where /api does not exist)
    // or if 404/405, switch directly to Client-Side Direct REST API!
    if (contentType.includes("text/html") || res.status === 404 || res.status === 405) {
      console.info("[QuizService] Static host detected (Netlify/Vercel/Static). Switching to direct client-side Google API.");
      return await generateDirectViaGoogleREST(params);
    }

    // Try reading JSON safely
    const textData = await res.text();
    let data: any;
    try {
      data = JSON.parse(textData);
    } catch {
      // Returned non-JSON text, switch to client-side REST
      return await generateDirectViaGoogleREST(params);
    }

    if (!res.ok || !data.success) {
      const err = new Error(data.error || "تعذر توليد الأسئلة من الخادم.");
      if (data.details) {
        (err as any).rawDetails = data.details;
      }
      throw err;
    }

    if (Array.isArray(data.questions) && data.questions.length > 0) {
      return {
        success: true,
        source: "server_api",
        questions: data.questions,
        message: data.message || `تم توليد ${data.questions.length} أسئلة بنجاح.`
      };
    }
  } catch (err: any) {
    // If it was an explicit API key validation error, throw it so the user knows
    const msg = String(err?.message || "");
    if (msg.includes("غير صالح") || msg.includes("API_KEY_INVALID") || msg.includes("not valid") || msg.includes("إلزامي")) {
      throw err;
    }

    // If fetch failed completely (e.g. offline or static server), try direct Google REST
    try {
      console.info("[QuizService] Fallback to direct client-side Gemini call.");
      return await generateDirectViaGoogleREST(params);
    } catch (directErr: any) {
      // Re-map friendly Arabic messages
      const directMsg = String(directErr?.message || "");
      let friendlyMessage = directMsg;
      if (directMsg.includes("API_KEY_INVALID") || directMsg.includes("API key not valid")) {
        friendlyMessage = "مفتاح Gemini API غير صالح. تأكد من نسخ المفتاح كاملاً (يبدأ بـ AIzaSy...) من Google AI Studio دون نقص.";
      } else if (directMsg.includes("RESOURCE_EXHAUSTED") || directMsg.includes("quota") || directMsg.includes("429")) {
        friendlyMessage = "تم تجاوز الحصة المجانية المؤقتة لمفتاحك (Rate Limit). انتظر دقيقة واحدة أو استخدم بنك الأسئلة المعتمد.";
      } else if (directMsg.includes("User location is not supported")) {
        friendlyMessage = "خدمة Gemini API غير مدعومة في منطقتك الجغرافية الحالية بدون VPN. يرجى تشغيل VPN أو استخدام بنك الأسئلة المعتمد.";
      }
      const finalErr = new Error(friendlyMessage);
      if ((directErr as any).rawDetails) {
        (finalErr as any).rawDetails = (directErr as any).rawDetails;
      }
      throw finalErr;
    }
  }

  throw new Error("تعذر معالجة طلب الأسئلة. يرجى المحاولة مرة أخرى.");
}
