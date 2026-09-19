import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Server-side Gemini client with telemetry header
const getGenAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// Topic contexts from Dr. Salah's lecture
const LECTURE_SLIDE_CONTEXT = `
Lecture: "Anti-Cancer Drugs" by Dr. Salah.
Reference: Lippincott Pharmacology (p. 457-458) and clinical oncology.

Key Areas Covered:
1. Principles & Epidemiology:
   - Cancer chemotherapy strives for lethal cytotoxic event or apoptosis in cancer cells, targeting DNA or metabolic replication sites.
   - Ideally targets unique malignant processes, but current drugs affect all proliferating cells (normal + abnormal).
   - Definition: >100 diseases of abnormal cells dividing uncontrollably and infiltrating/destroying normal tissue.
   - Neoplasm/Tumor: unregulated growth, forms mass/lump or diffuse. Metastasis spreads throughout body; benign does not spread.
   - Second leading cause of death in US. 4 most common: Prostate, Breast, Lung, Colorectal. Most deaths: Lung cancer (~160,000 deaths/yr).
   - Etiology: 90-95% environmental/lifestyle mutations, 5-10% inherited genetics.
   - Tobacco: 25-30% of all cancer deaths, 87% lung cancer deaths; >=50 carcinogens including Nitrosamines, PAHs, Benzo-pyrene-diol epoxide (BPDE).
   - Alcohol: 3.5% global cancer deaths; 25-68% upper aerodigestive tract cancers. Ethanol is co-carcinogen -> metabolized to acetaldehyde & free radicals; induces CYP2E1.
   - Diet: 30-35% cancer deaths in US, 70% colorectal. Nitrites/Nitrates (E249 potassium nitrite, E250 sodium nitrite, E251 sodium nitrate, E252 potassium nitrate) form nitrosamines in cured meats. Red/charcoal meat, arsenic (bladder/kidney/liver/lung), high salt (gastric cancer), Aflatoxin B1 from Aspergillus flavus (liver cancer), Betel nut chewing (oral cancer).
   - Obesity: 14% men, 20% women US cancer deaths (IGF-1, insulin, leptin).
   - Infections: 17.8% neoplasms globally (HPV, EBV, KSHV/HHV-8, HTLV-1, HIV, HBV, HCV, Opisthorchis viverrini, Schistosoma haematobium, H. pylori).
   - Radiation: Ionizing (radon, x-rays, gamma); Radon is radioactive noble gas from radium/uranium decay in soil/rocks; Non-ionizing: UV causes skin aging & skin cancer.
   - Warning Signs (CAUTION): Change in bowel/bladder, A sore that does not heal, Unusual bleeding/discharge, Thickening/lump, Indigestion/swallowing difficulty, Obvious change in wart/mole, Nagging cough/hoarseness. Pediatric warning signs: weight loss, morning vomiting headache, bone/joint swelling, abdominal/neck mass, white pupil (leukocoria), unexplained fever, bruising/bleeding, paleness/fatigue.
   - Prevention: Vegetables, fruits, whole grains, fish. IARC 2015 processed meat alert. Coffee (reduced liver cancer). Aspirin reduces death by ~7%. Celecoxib for FAP. Tamoxifen/Raloxifene for high-risk breast (risks: uterine cancer, clots, stroke). Finasteride (prostate). Avoid beta-carotene/Centrum lutein in smokers (increases lung cancer). Vaccines: Gardasil/Cervarix (HPV/cervical), Hep B vaccine (liver).

2. Pathophysiology & Cell Cycle:
   - Oncogenes (OCGs): develop from proto-oncogenes via point mutations, chromosomal rearrangements, or gene amplifications. HER family (ErbB-1/EGFR, HER-2, HER-3, HER-4) receptor tyrosine kinases.
   - Tumor Suppressor Genes (TSGs): regulate/inhibit growth. Rb and p53. p53 mutated in ~50% of all malignancies ("guardian of the genome").
   - Cell cycle: Cyclins + CDKs promote progression; CDK inhibitors (p21, p27, p57, p16, p15, p18, p19) stop progression. G0 quiescence; G1 early mitogen-dependent, R point (Cyclin D + CDK4/6 phosphorylates Rb releasing E2F); G1/S checkpoint (monitored by p53/p21); S phase (DNA replication); G2; G2/M checkpoint (Cyclin B + CDK1); M phase mitosis.

3. Drug Class 1: Antimetabolites (S-phase cell-cycle specific):
   - Folic acid analogues: Methotrexate (inhibits DHFR, 1000x affinity; polyglutamation; 7-OH-MTX crystalluria -> alkalinize urine; leucovorin rescue; pregnancy Category X; drug interactions with NSAIDs, Penicillins, PPIs, aminoglycosides), Pemetrexed (inhibits DHFR and thymidylate synthase; mesothelioma and NSCLC; pre-treat with folic acid + Vit B12 + dexamethasone), Pralatrexate (PTCL; folic acid + B12 pre-treatment).
   - Purine analogues: 6-Mercaptopurine (HGPRT -> TIMP; inactivated by xanthine oxidase -> reduce dose by 75% if with Allopurinol; TPMT pharmacogenomics screening needed; ALL & IBD), Fludarabine (prodrug; CLL and NHL; profound immunosuppression -> PCP pneumonia prophylaxis with Co-trimoxazole 3x/wk; DO NOT combine with Pentostatin due to fatal pulmonary toxicity), Cladribine (hairy cell leukemia, CLL, MS), Tioguanine (AML/ALL, liver endothelial toxicity - avoid maintenance), Pentostatin (Hairy cell leukemia refractory to IFN-a).
   - Pyrimidine analogues: 5-Fluorouracil (IV only, topical for skin; DPD pharmacogenomics deficiency causes fatal toxicity; converted to 5-FdUMP which inhibits thymidylate synthase with Leucovorin potentiating, plus 5-FdUTP/5-FUTP incorporation; hand-foot syndrome, coronary vasospasm), Capecitabine (oral prodrug to 5-FU, interacts with Warfarin increasing INR), Floxuridine (intra-arterial hepatic infusion only).
   - Cytidine analogues: Cytarabine (Ara-C; inactive orally, converted to ara-CTP, intrathecal for meningeal leukemia, AML), Gemcitabine (ribonucleotide reductase inhibitor + DNA chain termination, 1st line pancreatic cancer), Azacitidine.

4. Drug Class 2: Alkylating Agents (Cell cycle non-specific, DNA cross-linking at N7 guanine, secondary leukemias):
   - Nitrogen Mustards: History (mustard gas, Goodman & Gilman 1942 Yale, 1943 Bari raid Dr. Alexander), Mechlorethamine (HN2 prototype, MOPP), Cyclophosphamide & Ifosfamide (metabolized to phosphoramide mustard and acrolein; acrolein causes hemorrhagic cystitis and bladder fibrosis; prevented by vigorous hydration + Mesna; ifosfamide high doses cause chloroacetaldehyde neurotoxicity), Chlorambucil (CLL, largely replaced by fludarabine), Melphalan (multiple myeloma, conditioning for HSCT), Bendamustine (CLL, MM).
   - Nitrosoureas: Highly lipid soluble, cross BBB, brain tumors. Carmustine (BCNU, Gliadel wafer), Lomustine (CCNU - oral ONCE EVERY 6 WEEKS, empty stomach), Streptozocin (from S. achromogenes, toxic to pancreatic beta cells, islet cell tumors).
   - Alkyl Sulfonates: Busulfan (conditioning for HSCT/CML; Busulfan lung fibrosis, seizures [antiepileptic prophylaxis], HVOD).
   - Non-classical: Procarbazine (methyl-hydrazine, MAO inhibitor -> hypertensive crisis with aged cheese/tyramine, disulfiram reaction, MOPP/BEACOPP/PCV/CEPP), Dacarbazine (melanoma, converted to MTIC, highly emetogenic), Temozolomide (oral triazene -> MTIC, crosses BBB, 1st line glioblastoma multiforme).
   - Platinum Analogs: Cisplatin (severe vomiting up to 5 days, nephrotoxicity [vigorous hydration], ototoxicity, neurotoxicity), Carboplatin (less nephrotoxic/GI toxic, used when cannot vigorously hydrate), Oxaliplatin (FOLFOX in colorectal, peripheral neuropathy).

5. Drug Class 3: Cytotoxic Antibiotics:
   - Anthracyclines: Daunorubicin (1st discovered 1963, acute leukemias), Doxorubicin ("Red Devil", broad spectrum solid tumors; Doxil liposomal is less cardiotoxic), Idarubicin (AML + cytarabine), Epirubicin (less cardiotoxic, axillary node breast), Valrubicin (intravesical for bladder cancer), Mitoxantrone (anthracenedione, prostate + MS). 4 MOA: Topo II inhibition, DNA intercalation, free radicals, membrane binding. Toxicity: irreversible dose-dependent cardiotoxicity, red urine, extravasation necrosis. Cardioprotective antidote: Dexrazoxane (Zinecard / Totect / Savene).
   - Others: Bleomycin (forms Fe2+ complex, free radicals, G2 phase, lacks hydrolase in skin and lungs -> Bleomycin lung fibrosis and mucocutaneous toxicity >50%), Mitomycin C (alkylating agent under hypoxia, radiation sensitizer, HUS), Dactinomycin (Cosmegen, Wilms tumor, Ewing sarcoma, radiosensitizer).

6. Drug Class 4: Microtubule Inhibitors (M-phase):
   - Vinca Alkaloids (Periwinkle Catharanthus roseus): Inhibit tubulin polymerization. IV ONLY - FATAL if given intrathecally! Vincristine (Oncovin, severe neurotoxicity, constipation/paralytic ileus, SIADH), Vinblastine (Velban, severe myelosuppression), Vinorelbine (Navelbine, NSCLC, less neurotoxic).
   - Taxanes (Yew tree Taxus): Promote tubulin polymerization / prevent depolymerization. Active in G2/M. Paclitaxel (Taxol; premedicate with dexamethasone + antihistamines for anaphylaxis; Abraxane albumin-bound has no hypersensitivity), Docetaxel (Taxotere, neutrophil count must be >=1500), Cabazitaxel (Jevtana, prostate).
   - Epothilones: Ixabepilone (Ixempra; active in taxane-resistant breast cancer).

7. Drug Class 5: Endocrine Therapy:
   - Glucocorticoids: Prednisone (prodrug to prednisolone, ALL, lymphomas, antiemetic & appetite).
   - Antiestrogens: Tamoxifen (SERM: breast antagonist, bone/endometrium agonist; 5 years; risk of endometrial cancer & thromboembolism; CYP2D6 dependent; avoid SSRIs), Raloxifene (SERM: antagonist in breast and uterus, agonist in bone; osteoporosis & breast cancer prevention), Fulvestrant (SERD: degrades ER, IM).
   - Aromatase Inhibitors (CYP19A1): Postmenopausal HR+ breast cancer. Anastrozole & Letrozole (reversible non-steroidal, osteoporosis risk), Exemestane (irreversible steroidal suicide inhibitor, androgenic acne/weight gain).
   - Progestins: Megestrol acetate (MGA, cachexia/anorexia appetite stimulant in AIDS/cancer).
   - GnRH Analogs: Leuprolide, Goserelin, Triptorelin (initial flare then receptor desensitization -> chemical castration; prostate and breast cancer).
   - Antiandrogens: Flutamide, Nilutamide, Bicalutamide (prostate cancer, transgender feminization, gynecomastia; nilutamide causes visual issues and pneumonitis).

8. Drug Class 6: Monoclonal Antibodies:
   - Suffix rules: -omab (murine, allergic), -ximab (chimeric 65%), -zumab (humanized 95%), -umab (fully human 100%).
   - Rituximab (chimeric, anti-CD20, 1st mAb for cancer, tumor lysis syndrome), Trastuzumab (humanized, anti-HER2, cardiotoxicity worsened with anthracyclines), Pertuzumab (anti-HER2 dimerization), Bevacizumab (anti-VEGF, angiogenesis inhibitor, hypertension, bleeding, poor wound healing), Cetuximab (chimeric EGFR) & Panitumumab (human EGFR, acneiform rash, hypomagnesemia).
   - Comprehensive mAbs: Pembrolizumab, Nivolumab, Ipilimumab, Daratumumab, Brentuximab, Blinatumomab, Alemtuzumab, etc.

9. Drug Class 7: Tyrosine Kinase Inhibitors:
   - Imatinib (Gleevec; BCR-ABL in Philadelphia chromosome t(9;22) CML/ALL, GIST; fluid retention/CHF), Nilotinib (QT prolongation), Dasatinib (pulmonary arterial hypertension), Erlotinib (EGFR, NSCLC, pneumonitis), Lapatinib (HER2+EGFR breast), Sorafenib & Sunitinib (RCC, VEGF/PDGF, hand-foot reaction).

10. Drug Class 8 & 9: Topoisomerase Inhibitors & Others:
   - Etoposide & Teniposide (Podophyllotoxin, inhibit Topo II, late S-G2; testicular & SCLC).
   - Topotecan & Irinotecan (Camptothecins, inhibit Topo I, S phase; irinotecan severe diarrhea).
   - Interferons (alfa-2a, alfa-2b), L-Asparaginase (childhood ALL), Abiraterone (CYP17A1 inhibitor in mCRPC), Enzalutamide (antiandrogen in mCRPC).

11. Regimens:
   - CMF, AC, TAC, FAC (Breast)
   - MOPP, ABVD, BEACOPP (Hodgkin's)
   - CHOP, CEPP (NHL)
   - BEP (Germ cell / Testicular)
   - ECF, ECX (Stomach)
   - MVAC (Bladder)
   - CAV (Lung)
   - FOLFOX (Colorectal)
   - PCV (Brain)
   - Neoadjuvant (preoperative to shrink tumor), Adjuvant (postoperative to kill micrometastases), Maintenance (repeated low-dose), Salvage/Palliative (prolong survival/comfort).
`;

// Fallback high-yield MCQs from lecture slides
const PRE_CURATED_MCQS = [
  {
    id: "q_fallback_1",
    question: "A 55-year-old male with Acute Lymphoblastic Leukemia is receiving high-dose Methotrexate. Which protective agent must be administered 24 hours after weekly dosing to rescue normal cells from lethal toxicity?",
    options: [
      "Mesna",
      "Folinic acid (Leucovorin)",
      "Dexrazoxane",
      "Allopurinol"
    ],
    correctAnswerIndex: 1,
    explanation: "Leucovorin (folinic acid) provides the active form of reduced folate, bypassing the blocked dihydrofolate reductase (DHFR) enzyme in normal proliferating cells 24 hours after Methotrexate administration.",
    topic: "Antimetabolites - Folic Acid Analogues",
    slideReference: "Slides 21-22"
  },
  {
    id: "q_fallback_2",
    question: "Before initiating 6-Mercaptopurine (Purinethol®) or Azathioprine, which enzyme screening is clinically mandated to prevent potentially fatal myelosuppression?",
    options: [
      "Dihydropyrimidine Dehydrogenase (DPD)",
      "Thiopurine S-methyltransferase (TPMT)",
      "CYP2D6",
      "Ribonucleotide Reductase"
    ],
    correctAnswerIndex: 1,
    explanation: "TPMT is responsible for the inactivation of 6-mercaptopurine. Patients with genetic deficiency in TPMT accumulate cytotoxic thioguanine nucleotides, leading to severe or fatal bone marrow suppression.",
    topic: "Antimetabolites - Purine Analogues",
    slideReference: "Slide 24"
  },
  {
    id: "q_fallback_3",
    question: "A patient with Gout is treated with Allopurinol. If this patient subsequently requires 6-Mercaptopurine for Acute Lymphatic Leukemia, what dosage adjustment is required?",
    options: [
      "Increase 6-MP dose by 50%",
      "No dosage adjustment needed",
      "Reduce 6-MP dose by 75% (administer 25% of standard dose)",
      "Double the allopurinol dose"
    ],
    correctAnswerIndex: 2,
    explanation: "Allopurinol inhibits xanthine oxidase, the enzyme that oxidizes 6-MP to inactive thiouric acid. Concurrent therapy leads to dangerously elevated 6-MP levels, so the 6-MP dose must be reduced by 75%.",
    topic: "Antimetabolites - Drug Interactions",
    slideReference: "Slides 24-25"
  },
  {
    id: "q_fallback_4",
    question: "Which toxic metabolite generated by Cyclophosphamide and Ifosfamide is specifically responsible for inducing hemorrhagic cystitis and bladder fibrosis?",
    options: [
      "Phosphoramide mustard",
      "Chloroacetaldehyde",
      "Acrolein",
      "Semiquinone radical"
    ],
    correctAnswerIndex: 2,
    explanation: "Acrolein is urotoxic and concentrates in the bladder, causing hemorrhagic cystitis and bladder fibrosis. Concomitant Mesna and vigorous hydration neutralize acrolein.",
    topic: "Alkylating Agents - Nitrogen Mustards",
    slideReference: "Slides 36-37"
  },
  {
    id: "q_fallback_5",
    question: "Why is Lomustine (CeeNu®) uniquely prescribed to be taken orally strictly ONCE EVERY 6 WEEKS rather than daily or weekly?",
    options: [
      "It has rapid renal clearance within minutes",
      "It induces severe, delayed, and cumulative myelosuppression",
      "It causes immediate irreversible liver cirrhosis",
      "It permanently blocks gastric absorption"
    ],
    correctAnswerIndex: 1,
    explanation: "Both physician and pharmacist must emphasize to patients that Lomustine is taken only once every 6 weeks because its myelosuppressive nadir is delayed and prolonged; taking it more frequently can cause fatal marrow aplasia.",
    topic: "Alkylating Agents - Nitrosoureas",
    slideReference: "Slide 39"
  },
  {
    id: "q_fallback_6",
    question: "What is the primary mechanism of action of Doxorubicin ('Red Devil Chemo') that directly underlies its cumulative, dose-dependent, irreversible cardiotoxicity?",
    options: [
      "Inhibition of tubulin depolymerization",
      "Generation of semiquinone and oxygen free radicals that damage cardiomyocytes",
      "Destruction of pancreatic beta cells",
      "Direct degradation of estrogen receptors"
    ],
    correctAnswerIndex: 1,
    explanation: "Anthracyclines generate semiquinone free radicals and hydrogen peroxide / superoxide that overwhelm low antioxidant defenses in cardiac myocytes, resulting in myofibrillar loss and dilated cardiomyopathy.",
    topic: "Cytotoxic Antibiotics - Anthracyclines",
    slideReference: "Slides 49-51"
  },
  {
    id: "q_fallback_7",
    question: "Which FDA Black Box warning applies strictly to Vinca Alkaloids such as Vincristine (Oncovin®)?",
    options: [
      "Fatal if administered intrathecally; IV ONLY",
      "Oral administration must be taken with heavy milk meals",
      "May cause severe hypertension when combined with Leucovorin",
      "Contraindicated in women with ER-positive tumors"
    ],
    correctAnswerIndex: 0,
    explanation: "Vinca alkaloids (Vincristine, Vinblastine, Vinorelbine) are for IV USE ONLY. Accidental intrathecal administration results in ascending encephalopathy and is uniformly fatal.",
    topic: "Microtubule Inhibitors - Vinca Alkaloids",
    slideReference: "Slide 58"
  },
  {
    id: "q_fallback_8",
    question: "A 48-year-old woman with HER2-positive metastatic breast cancer is receiving Trastuzumab (Herceptin®). Which serious adverse effect requires baseline and routine echocardiography monitoring?",
    options: [
      "Endometrial adenocarcinoma",
      "Heart Failure / Cardiotoxicity (especially if combined with Anthracyclines)",
      "Severe acute interstitial pancreatitis",
      "Idiopathic pulmonary arterial hypertension"
    ],
    correctAnswerIndex: 1,
    explanation: "Trastuzumab targets the extracellular domain of HER2 and can cause cardiotoxicity and heart failure, which is markedly exacerbated when combined with anthracyclines like Doxorubicin.",
    topic: "Monoclonal Antibodies - Trastuzumab",
    slideReference: "Slide 73"
  },
  {
    id: "q_fallback_9",
    question: "In the American Cancer Society's 7 Warning Signs mnemonic (C.A.U.T.I.O.N.), what does the letter 'U' stand for?",
    options: [
      "Unexplained rapid weight gain",
      "Unusual bleeding or discharge",
      "Ulcerative colitis relapse",
      "Unilateral facial weakness"
    ],
    correctAnswerIndex: 1,
    explanation: "In the classic CAUTION mnemonic: C = Change in bowel/bladder habits; A = A sore that does not heal; U = Unusual bleeding or discharge; T = Thickening or lump; I = Indigestion or difficulty swallowing; O = Obvious change in wart/mole; N = Nagging cough or hoarseness.",
    topic: "Cancer Warning Signs",
    slideReference: "Slide 19"
  },
  {
    id: "q_fallback_10",
    question: "Which chemotherapeutic agent works by inhibiting the BCR-ABL tyrosine kinase generated by the Philadelphia chromosome t(9;22) in Chronic Myelogenous Leukemia (CML)?",
    options: [
      "Erlotinib",
      "Lapatinib",
      "Imatinib (Gleevec®)",
      "Cabazitaxel"
    ],
    correctAnswerIndex: 2,
    explanation: "Imatinib is a prototype tyrosine kinase inhibitor that specifically blocks the ATP-binding pocket of the chimeric BCR-ABL kinase formed by the Philadelphia chromosome in CML and Ph+ ALL.",
    topic: "Tyrosine Kinase Inhibitors",
    slideReference: "Slide 78"
  },
  {
    id: "q_fallback_11",
    question: "Which of the following chemotherapy regimens is specifically used for Hodgkin's Disease and contains Mustine, Oncovin, Procarbazine, and Prednisolone?",
    options: [
      "CHOP",
      "MOPP",
      "FOLFOX",
      "BEP"
    ],
    correctAnswerIndex: 1,
    explanation: "MOPP stands for Mechlorethamine (Mustine) + Oncovin (Vincristine) + Procarbazine + Prednisolone, a classic curative regimen for Hodgkin's disease.",
    topic: "Combination Chemotherapy Regimens",
    slideReference: "Slide 84"
  },
  {
    id: "q_fallback_12",
    question: "Why is Beta-Carotene supplementation strictly contraindicated (must be avoided) in cigarette smokers?",
    options: [
      "It binds to Leucovorin and blocks folic acid synthesis",
      "It significantly INCREASES the risk and incidence of lung cancer in smokers",
      "It causes rapid conversion of ethanol to carcinogenic acetaldehyde",
      "It inhibits cytochrome CYP19A1 aromatase"
    ],
    correctAnswerIndex: 1,
    explanation: "Clinical trials demonstrated that beta-carotene supplementation in smokers actually increases lung cancer rates and mortality; multivitamins containing lutein/beta-carotene (e.g. Centrum lutein) must be avoided in smokers.",
    topic: "Cancer Prevention & Lifestyle",
    slideReference: "Slide 11"
  }
];

// Endpoint: Generate randomized MCQs using Visitor's Gemini API Key
app.post("/api/generate-mcqs", async (req, res) => {
  try {
    const {
      topic = "all",
      customFocus = "",
      count = 10,
      questionType = "mixed",
      apiKey = "",
      useCuratedBackup = false
    } = req.body || {};

    // Allow user to use the pre-curated question bank without an API key if desired
    if (useCuratedBackup) {
      const shuffled = [...PRE_CURATED_MCQS].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.min(PRE_CURATED_MCQS.length, Number(count) || 10));
      return res.json({
        success: true,
        source: "curated_archive",
        topic,
        questionType,
        count: selected.length,
        questions: selected,
        message: "تم تحميل أسئلة معتمدة عالية الأهمية من بنك أسئلة المحاضرة.",
      });
    }

    const visitorKey = (typeof apiKey === "string" ? apiKey : "").trim().replace(/^["']|["']$/g, "");
    if (!visitorKey) {
      return res.status(400).json({
        success: false,
        error: "مفتاح Gemini API إلزامي لتوليد أسئلة متجددة. يرجى إدخال مفتاحك الشخصي أو استخدام بنك الأسئلة المعتمد.",
      });
    }

    const ai = new GoogleGenAI({
      apiKey: visitorKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const questionCount = Math.max(3, Math.min(25, Number(count) || 10));

    let styleInstruction = "";
    if (questionType === "direct") {
      styleInstruction = "Strict Question Style Requirement: EVERY question MUST be a direct pharmacology / factual recall question testing exact mechanisms of action, molecular targets, specific enzymes (e.g. TPMT, DPD, CYP2D6, CYP19A1), antidotes (Mesna, Dexrazoxane, Leucovorin), drug classes, classifications, contraindications, and lecture slide facts.";
    } else if (questionType === "clinical") {
      styleInstruction = "Strict Question Style Requirement: EVERY question MUST be a realistic clinical case study / patient vignette (e.g. 'A 63-year-old female with stage IV breast cancer receiving...', 'A 45-year-old male with ALL undergoing high-dose Methotrexate...', presenting signs, laboratory parameters, and choosing the optimal antineoplastic, managing toxicities, or drug interactions).";
    } else {
      styleInstruction = "Strict Question Style Requirement: Provide a balanced 50/50 mix of direct pharmacology questions and clinical patient case vignettes.";
    }

    const prompt = `You are an expert Professor of Medical Oncology and Pharmacology preparing board-style multiple-choice questions (MCQs) for pharmacy and medical students based strictly on Dr. Salah's lecture slides "Anti-Cancer Drugs".

Topic focus requested: "${topic}" ${customFocus ? `with emphasis on: ${customFocus}` : ""}.
Target Question Count: EXACTLY ${questionCount} questions.
Question Type: ${questionType}.
${styleInstruction}

Review the full lecture text below:
${LECTURE_SLIDE_CONTEXT}

Task:
Generate EXACTLY ${questionCount} distinct, challenging, highly educational multiple-choice questions (MCQs) covering the lecture.

Format requirements:
- Each question must have EXACTLY 4 plausible options.
- Options must NOT include "All of the above" or "None of the above".
- The correct answer index must be 0, 1, 2, or 3.
- Provide a clear, high-yield clinical explanation explaining WHY the correct option is right and referencing the lecture facts.
- State the topic and the slide/category reference.
- Set questionType to either "direct" or "clinical" for each question.
- Return ONLY valid JSON adhering to the specified schema.`;

    // Try candidate models compatible with all public Google AI Studio keys
    const candidateModels = ["gemini-flash-latest", "gemini-3.5-flash", "gemini-2.5-flash", "gemini-3.8-flash"];
    let lastError: any = null;
    let parsedResult: any = null;

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            temperature: 0.7,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                questions: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      question: { type: Type.STRING },
                      options: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                      },
                      correctAnswerIndex: { type: Type.INTEGER },
                      explanation: { type: Type.STRING },
                      topic: { type: Type.STRING },
                      slideReference: { type: Type.STRING },
                      questionType: { type: Type.STRING },
                    },
                    required: [
                      "id",
                      "question",
                      "options",
                      "correctAnswerIndex",
                      "explanation",
                      "topic",
                      "slideReference",
                    ],
                  },
                },
              },
              required: ["questions"],
            },
          },
        });

        const parsed = JSON.parse(response.text?.trim() || "{}");
        if (Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          parsedResult = parsed;
          break; // Succeeded!
        }
      } catch (err: any) {
        lastError = err;
        const msg = String(err?.message || "");
        // If it's a key or auth error, don't keep trying models
        if (msg.includes("API_KEY_INVALID") || msg.includes("API key not valid") || msg.includes("PERMISSION_DENIED")) {
          throw err;
        }
        // If 404 model not found, try next candidate model
        continue;
      }
    }

    if (parsedResult && Array.isArray(parsedResult.questions) && parsedResult.questions.length > 0) {
      return res.json({
        success: true,
        source: "gemini_ai",
        topic,
        questionType,
        count: parsedResult.questions.length,
        questions: parsedResult.questions,
        message: `تم توليد ${parsedResult.questions.length} أسئلة بنجاح عبر Gemini AI.`,
      });
    }

    if (lastError) {
      throw lastError;
    }

    return res.status(500).json({
      success: false,
      error: "لم يتمكن الذكاء الاصطناعي من صياغة الأسئلة بالشكل المطلوب، يرجى المحاولة مرة أخرى.",
    });
  } catch (error: any) {
    console.error("Gemini MCQ generation error:", error);
    let userMsg = "حدث خطأ أثناء معالجة الطلب عبر الذكاء الاصطناعي.";
    const errMsg = String(error?.message || "");

    if (errMsg.includes("API_KEY_INVALID") || errMsg.includes("invalid API key") || errMsg.includes("API key not valid")) {
      userMsg = "مفتاح Gemini API غير صالح. تأكد من نسخ المفتاح كاملاً (يبدأ بـ AIzaSy...) من Google AI Studio دون نقص.";
    } else if (errMsg.includes("RESOURCE_EXHAUSTED") || errMsg.includes("quota") || errMsg.includes("rate limit") || errMsg.includes("429")) {
      userMsg = "تم تجاوز الحصة المجانية المؤقتة لمفتاحك (Rate Limit / Quota Exceeded). انتظر دقيقة واحدة أو استخدم مفتاحاً جديداً.";
    } else if (errMsg.includes("User location is not supported") || errMsg.includes("location") || errMsg.includes("geoblocked")) {
      userMsg = "خدمة Gemini API غير مدعومة في منطقتك الجغرافية الحالية بدون VPN. يرجى تفعيل VPN أو الاتصال بشبكة أخرى.";
    } else if (errMsg.includes("PERMISSION_DENIED")) {
      userMsg = "تم رفض الإذن لمفتاح API (Permission Denied). تأكد من تفعيل خدمة Generative Language API لمشروعك.";
    } else if (errMsg.includes("NOT_FOUND")) {
      userMsg = "النموذج غير متاح لهذا المفتاح حالياً، يرجى إعادة المحاولة.";
    }

    return res.status(400).json({
      success: false,
      error: userMsg,
      details: error.message,
    });
  }
});

// Setup Vite development middleware or static production serving
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

start();
