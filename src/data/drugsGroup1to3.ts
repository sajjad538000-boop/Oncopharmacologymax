import { Drug, DrugClass } from "../types";

export const DRUG_CLASSES_1_TO_3: DrugClass[] = [
  {
    id: "class-1",
    romanNumeral: "I",
    title: "Antimetabolites",
    arabicTitle: "مضادات المستقلبات",
    shortDesc: "Cell cycle specific (S-phase) drugs structurally similar to normal endogenous compounds that interfere with purine/pyrimidine synthesis or incorporate into fraudulent DNA/RNA.",
    colorScheme: {
      badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
      border: "border-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-950/40",
      accent: "text-emerald-600 dark:text-emerald-400",
      gradient: "from-emerald-500 to-teal-700"
    },
    subgroups: ["Folic Acid Analogues", "Purine Analogues", "Pyrimidine Analogues", "Cytidine Analogues"],
    keyHighlights: [
      "Interfere with availability of normal purine or pyrimidine nucleotides",
      "Inhibit synthesis of DNA or RNA; maximal cytotoxic effects in S-phase",
      "Pharmacogenomics: TPMT for 6-MP, DPD for 5-FU and Capecitabine"
    ]
  },
  {
    id: "class-2",
    romanNumeral: "II",
    title: "Alkylating Agents",
    arabicTitle: "العوامل المؤلكلة",
    shortDesc: "Cell cycle non-specific drugs that covalently bind alkyl groups to nucleophilic groups on DNA (primarily N7 of guanine), causing cross-linking, miscoding, and strand breaks.",
    colorScheme: {
      badge: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
      border: "border-amber-500",
      bg: "bg-amber-50 dark:bg-amber-950/40",
      accent: "text-amber-600 dark:text-amber-400",
      gradient: "from-amber-500 to-orange-700"
    },
    subgroups: ["Nitrogen Mustards", "Nitrosoureas", "Alkyl Sulfonates", "Non-Classical Alkylating Agents", "Platinum Analogs"],
    keyHighlights: [
      "History traces back to WWI mustard gas & 1943 Bari raid (Goodman, Gilman, & Dr. Alexander)",
      "Cause secondary malignancies (e.g. acute leukemia) due to mutagenic properties",
      "Acrolein toxicity from cyclophosphamide/ifosfamide neutralized by Mesna + hydration"
    ]
  },
  {
    id: "class-3",
    romanNumeral: "III",
    title: "Cytotoxic Antibiotics",
    arabicTitle: "المضادات الحيوية السمية للخلايا",
    shortDesc: "Natural and semisynthetic products isolated from Streptomyces species that disrupt DNA function via topoisomerase II inhibition, intercalation, and free radical generation.",
    colorScheme: {
      badge: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
      border: "border-rose-500",
      bg: "bg-rose-50 dark:bg-rose-950/40",
      accent: "text-rose-600 dark:text-rose-400",
      gradient: "from-rose-500 to-red-700"
    },
    subgroups: ["Anthracyclines", "Other Antibiotics (Bleomycin, Mitomycin C, Dactinomycin)"],
    keyHighlights: [
      "Anthracyclines ('Red Devil Chemo') cause irreversible dose-dependent cardiotoxicity",
      "Dexrazoxane (Zinecard®) is cardioprotective chelator and extravasation antidote (Totect®/Savene®)",
      "Bleomycin lacks inactivating hydrolase in lungs & skin -> Bleomycin Lung and skin toxicities (>50%)"
    ]
  }
];

export const DRUGS_GROUP_1_TO_3: Drug[] = [
  // GROUP I: ANTIMETABOLITES - FOLIC ACID ANALOGUES
  {
    id: "methotrexate",
    name: "Methotrexate (MTX)",
    phonetic: "[meth-oh-TREK-sate]",
    brandNames: ["Trexall®", "Rheumatrex®", "Otrexup®", "Rasuvo®"],
    classId: "class-1",
    subclass: "Folic Acid Analogues",
    cellCyclePhase: "S-phase specific",
    mechanismOfAction:
      "Structurally related to Folic Acid; competitively inhibits dihydrofolate reductase (DHFR), an enzyme that converts Dihydrofolate to its active form, Tetrahydrofolic Acid. The affinity of MTX for DHFR is about 1000-fold that of Dihydrofolate. Folic acid is needed for de novo synthesis of the nucleoside Thymidine, required for DNA synthesis.",
    mechanismPoints: [
      "Competitively blocks DHFR with 1000x binding affinity.",
      "Depletes intracellular tetrahydrofolate cofactors.",
      "Halts thymidylate and purine synthesis, arresting cells in S-phase."
    ],
    pharmacokinetics: {
      absorption: "Orally: Absorption is variably delayed with food and less significant in lower doses. Parenterally: IM, IV, SC, or intrathecal.",
      metabolism: "By liver and intracellularly to poly-glutamated forms which can be converted back to MTX by hydrolase enzymes. A small amount is metabolized to 7-hydroxymethotrexate, which is less water-soluble than MTX and may lead to Crystalluria.",
      excretion: "Urine (80–100% within 24 hours), feces (small amounts). Keep urine alkaline and patient well hydrated to avoid renal toxicity."
    },
    therapeuticUses: [
      "In combination with other drugs: Acute Lymphocytic Leukemia (ALL), Burkitt's Lymphoma in children, Breast Cancer, Bladder Cancer, and Head & Neck Carcinomas.",
      "Low-dose MTX as single agent: Psoriasis, Rheumatoid Arthritis, and Crohn's Disease.",
      "Medical Abortions and Ectopic Pregnancy (in combination with Misoprostol; Pregnancy Category X)."
    ],
    fdaWarnings: [
      "FDA Warning: For intrathecal and high-dose therapy, use the preservative-free formulation of MTX (formulations containing benzyl alcohol can cause fatal neurotoxicity)."
    ],
    commonSideEffects: [
      "Nausea, vomiting, diarrhea",
      "Mucositis (mucosal ulceration) and stomatitis",
      "Myelosuppression (anemia, leukopenia, and thrombocytopenia)"
    ],
    severeSideEffects: [
      "Hepatotoxicity (dose-related)",
      "Acute pneumonitis",
      "Kidney failure due to crystalluria",
      "Pregnancy Category X: MTX is an abortifacient"
    ],
    monitoringAndPearls: [
      "Monitoring: CBC, liver enzyme tests, kidney function tests, and signs of infection.",
      "Rescue Therapy: MTX should be given with folinic acid (Leucovorin®) 24 hours after each weekly dose, or by daily Folic acid (off-days; not on the same day). Although daily folic acid may decrease efficacy by ~10%, it substantially reduces severity of adverse effects."
    ],
    antidoteOrProtectiveAgent: "Leucovorin (Folinic Acid) rescue + Sodium Bicarbonate urinary alkalinization and hydration.",
    administration: ["Oral", "IV", "IM", "SC", "Intrathecal (preservative-free ONLY)"],
    drugInteractions: [
      "NSAIDs, Penicillins, Cephalosporins, Aminoglycosides, Proton-Pump Inhibitors (PPIs), and Valproates increase plasma concentrations of MTX by competing for renal tubular clearance."
    ],
    resistanceMechanisms: [
      "Decreased drug transport via the reduced folate carrier",
      "Decreased formation of cytotoxic MTX poly-glutamates",
      "Increased levels of target enzyme DHFR through gene amplification",
      "Altered DHFR protein structure with reduced affinity for MTX",
      "Decreased accumulation of drug through activation of multidrug resistance transporter P170 glycoprotein"
    ],
    slideRef: "Slides 21-22"
  },
  {
    id: "pemetrexed",
    name: "Pemetrexed",
    phonetic: "[pem-e-TREX-ed]",
    brandNames: ["Alimta®"],
    classId: "class-1",
    subclass: "Folic Acid Analogues",
    cellCyclePhase: "S-phase specific",
    mechanismOfAction:
      "Antifolate antimetabolite similar in mechanism to MTX. In addition to inhibiting DHFR, it also inhibits Thymidylate Synthase and glycinamide ribonucleotide formyltransferase (GARFT).",
    therapeuticUses: [
      "Malignant Mesothelioma (type of cancer in thin layer covering internal organs; most common area affected is lining of the lungs).",
      "Non-Small Cell Lung Cancer (NSCLC).",
      "Recommended in combination with Carboplatin for first-line treatment of advanced NSCLC."
    ],
    monitoringAndPearls: [
      "Premedication: Folic acid and Vitamin B12 (IM) should be given before the first Pemetrexed dose, during therapy, and after therapy to reduce hematologic and GI toxicities.",
      "Dexamethasone should be given to avoid Pemetrexed infusion skin rashes."
    ],
    commonSideEffects: ["Hematologic cytopenias", "GI toxicities", "Skin rash"],
    severeSideEffects: ["Severe myelosuppression", "Renal impairment"],
    antidoteOrProtectiveAgent: "Pre-treatment with Folic Acid, Vitamin B12 (IM), and Dexamethasone.",
    administration: ["IV infusion"],
    slideRef: "Slide 23"
  },
  {
    id: "pralatrexate",
    name: "Pralatrexate",
    phonetic: "[pral-a-TREX-ate]",
    brandNames: ["Folotyn®"],
    classId: "class-1",
    subclass: "Folic Acid Analogues",
    cellCyclePhase: "S-phase specific",
    mechanismOfAction:
      "Newer antifolate antimetabolite designed to accumulate preferentially in malignant lymphoid cells via the reduced folate carrier-1 (RFC-1); potently inhibits DHFR.",
    therapeuticUses: [
      "Relapsed or Refractory Peripheral T-cell Lymphoma (PTCL)."
    ],
    monitoringAndPearls: [
      "Folic acid and Vitamin B12 (IM) should be given before first Pralatrexate dose, during therapy, and after therapy to reduce hematologic and GI toxicities."
    ],
    commonSideEffects: ["Mucositis", "Thrombocytopenia", "Nausea", "Fatigue"],
    severeSideEffects: ["Severe bone marrow suppression", "Liver enzyme elevation"],
    antidoteOrProtectiveAgent: "Folic acid and Vitamin B12 IM supplementation.",
    administration: ["IV push / infusion"],
    slideRef: "Slide 23"
  },

  // GROUP I: ANTIMETABOLITES - PURINE ANALOGUES
  {
    id: "6-mercaptopurine",
    name: "6-Mercaptopurine (6-MP)",
    phonetic: "[mer-kap-toe-PYOOR-een]",
    brandNames: ["Purinethol®"],
    classId: "class-1",
    subclass: "Purine Analogues",
    cellCyclePhase: "S-phase specific",
    mechanismOfAction:
      "6-MP was the first of the thiopurine analogs found effective in cancer therapy with immunosuppressant activity (Azathioprine is an immunosuppressant that exerts cytotoxic effects after conversion to 6-MP via metabolism). 6-MP competes with purine derivatives Hypoxanthine and Guanine for the enzyme Hypoxanthine-Guanine Phospho-Ribosyl-Transferase (HGPRT) and is itself converted to Thio-Inosine Monophosphate (TIMP). TIMP inhibits the first step of de novo purine ring biosynthesis and blocks the formation of Adenosine Monophosphate (AMP) and Xanthinuric Acid from Inosinic Acid. TIMP is further converted to Thioguanine Monophosphate, which after phosphorylation is incorporated into RNA and DNA, resulting in nonfunctional nucleic acids.",
    pharmacokinetics: {
      absorption: "Orally: erratic and incomplete. Bioavailability: 5–37% (due to first-pass hepatic metabolism).",
      distribution: "Widely distributed throughout the body, except CSF.",
      metabolism: "In the liver: 6-MP is converted to 6-methylmercaptopurine derivative or to Thiouric Acid (an inactive metabolite; this reaction is catalyzed by Xanthine Oxidase). Allopurinol (xanthine oxidase inhibitor) increases levels of 6-MP, leading to excessive toxicity.",
      excretion: "In the urine.",
      pharmacogenomics:
        "Thiopurine S-methyl-transferase (TPMT) enzyme is responsible, in part, for the inactivation of 6-Mercaptopurine. Certain genetic variations within the TPMT gene lead to decreased or absent TPMT enzyme activity. TPMT screening should be performed prior to administration in all patients prescribed Azathioprine or 6-Mercaptopurine."
    },
    therapeuticUses: [
      "Acute Lymphatic Leukemia (ALL)",
      "Crohn's Disease and Ulcerative Colitis (IBD)"
    ],
    drugInteractions: [
      "6-MP dose should be reduced by 75% (i.e. give quarter dose) when used concurrently with Allopurinol to prevent fatal marrow toxicity."
    ],
    resistanceMechanisms: [
      "Decreased levels of HGPRT enzyme",
      "Increased dephosphorylation of thiopurine nucleotides",
      "Increased metabolism of the drug to Thiouric Acid or other inactive metabolites"
    ],
    commonSideEffects: ["Nausea", "Vomiting", "Diarrhea", "Myelosuppression", "Hepatotoxicity"],
    severeSideEffects: ["Severe marrow aplasia in TPMT-deficient individuals", "Jaundice / hepatic necrosis"],
    antidoteOrProtectiveAgent: "Dose reduction by 75% with Allopurinol; TPMT gene screening.",
    administration: ["Oral tablets"],
    slideRef: "Slides 24-25"
  },
  {
    id: "fludarabine",
    name: "Fludarabine",
    phonetic: "[floo-DARE-a-been]",
    brandNames: ["Fludara®"],
    classId: "class-1",
    subclass: "Purine Analogues",
    cellCyclePhase: "S-phase specific",
    mechanismOfAction:
      "Purine nucleotide analog. Fludarabine phosphate is a prodrug rapidly dephosphorylated in serum and then phosphorylated intracellularly to fludarabine triphosphate. This active metabolite interferes with DNA polymerase, ribonucleotide reductase, and DNA primase, blocking DNA synthesis and repair. Fludarabine also induces apoptosis in susceptible cells by undetermined mechanisms.",
    therapeuticUses: [
      "Primarily in low-grade Non-Hodgkin's Lymphoma & Chronic Lymphocytic Leukemia (CLL).",
      "Used in various combinations with Cyclophosphamide, Mitoxantrone, Dexamethasone, and Rituximab (FCR regimen)."
    ],
    monitoringAndPearls: [
      "Fludarabine is a potent immunosuppressant that markedly depletes CD4+ T-lymphocytes, increasing risk for opportunistic infections (fungi, herpes, and Pneumocystis jirovecii pneumonia [PCP]). Patients should receive PCP prophylaxis with Co-Trimoxazole at least 3 times a week, continued for a few weeks or up to 1 year after stopping Fludarabine therapy.",
      "Warning: Fludarabine should be avoided in combination with Pentostatin (Deoxycoformycin) for refractory CLL due to a high incidence of fatal pulmonary toxicity."
    ],
    commonSideEffects: ["Myelosuppression", "Fever and chills", "Nausea and vomiting"],
    severeSideEffects: [
      "Opportunistic infections (Pneumocystis jirovecii, fungal, herpes)",
      "Autoimmune hemolytic anemia (AIHA)",
      "Fatal pulmonary toxicity when co-administered with Pentostatin"
    ],
    antidoteOrProtectiveAgent: "Prophylaxis with Co-Trimoxazole 3x/week for up to 1 year post-therapy.",
    administration: ["IV infusion", "Oral (available in some regions)"],
    slideRef: "Slide 26"
  },
  {
    id: "cladribine",
    name: "Cladribine",
    phonetic: "[KL-Adri-been]",
    brandNames: ["Leustatin®", "Mavenclad®"],
    classId: "class-1",
    subclass: "Purine Analogues",
    cellCyclePhase: "S-phase specific",
    chemicalType: "2-Chlorodeoxyadenosine",
    mechanismOfAction:
      "Purine nucleotide analog resistant to deamination by adenosine deaminase. Phosphorylated to 2-CdATP, which incorporates into DNA, causes DNA strand breaks, depletes NAD and ATP, and interferes with DNA synthesis and DNA repair.",
    therapeuticUses: [
      "Hairy Cell Leukemia (first-line treatment with high complete response rates).",
      "Chronic Lymphocytic Leukemia (CLL) & Non-Hodgkin's Lymphoma.",
      "Approved in Europe in 2017 (and globally) for highly active Relapsing-Remitting Multiple Sclerosis (RRMS)."
    ],
    commonSideEffects: ["Myelosuppression", "Infections", "Headache", "Fever"],
    severeSideEffects: ["Prolonged severe lymphopenia", "Neurotoxicity at elevated doses"],
    administration: ["IV infusion", "Oral (Mavenclad)"],
    slideRef: "Slide 27"
  },
  {
    id: "tioguanine",
    name: "Tioguanine (6-Thioguanine)",
    phonetic: "[thye-oh-GWAH-neen]",
    brandNames: ["Lanvis®"],
    classId: "class-1",
    subclass: "Purine Analogues",
    cellCyclePhase: "S-phase specific",
    mechanismOfAction:
      "Purine analogue converted by HGPRT to 6-thioguanine monophosphate (TGMP), inhibiting purine biosynthesis and incorporating into DNA and RNA.",
    therapeuticUses: [
      "Acute Myeloid Leukemia (AML)",
      "Acute Lymphocytic Leukemia (ALL)"
    ],
    fdaWarnings: [
      "Not recommended for maintenance therapy due to the high risk of liver toxicity associated with vascular endothelial damage (Hepatic Veno-Occlusive Disease / Sinusoidal Obstruction Syndrome)."
    ],
    commonSideEffects: ["Nausea", "Vomiting", "Myelosuppression"],
    severeSideEffects: ["Vascular endothelial liver damage", "Portal hypertension"],
    administration: ["Oral tablets"],
    slideRef: "Slide 27"
  },
  {
    id: "pentostatin",
    name: "Pentostatin (Deoxycoformycin)",
    phonetic: "[pen-toe-STAT-in]",
    brandNames: ["Nipent®"],
    classId: "class-1",
    subclass: "Purine Analogues",
    cellCyclePhase: "S-phase specific",
    mechanismOfAction:
      "Potent transition-state inhibitor of adenosine deaminase (ADA), leading to intracellular accumulation of dATP, which inhibits ribonucleotide reductase and causes DNA strand breaks.",
    therapeuticUses: [
      "Used as a single-agent for alpha-interferon-refractory Hairy Cell Leukemia.",
      "Certain Non-Hodgkin's Lymphomas and cutaneous T-cell lymphomas."
    ],
    monitoringAndPearls: [
      "Lymphoma context: Hodgkin's Lymphomas (HL; about 15% of lymphomas) marked by the presence of Reed-Sternberg cells (derived from B lymphocytes). Non-Hodgkin's Lymphomas (NHL; all lymphomas except Hodgkin lymphoma, ~85%).",
      "Signs and symptoms of lymphoma: enlarged lymph nodes, fever, drenching night sweats, unexplained weight loss, itching, and constantly feeling tired."
    ],
    commonSideEffects: ["Nausea", "Rash", "Fever", "Myelosuppression"],
    severeSideEffects: ["Fatal pulmonary toxicity if combined with Fludarabine", "Renal impairment"],
    administration: ["IV infusion"],
    slideRef: "Slide 27"
  },

  // GROUP I: ANTIMETABOLITES - PYRIMIDINE ANALOGUES
  {
    id: "5-fluorouracil",
    name: "5-Fluorouracil (5-FU)",
    phonetic: "[flure-oh-YOOR-ah-sil]",
    brandNames: ["Adrucil®", "Efudex®", "Fluoroplex®"],
    classId: "class-1",
    subclass: "Pyrimidine Analogues",
    cellCyclePhase: "S-phase specific",
    chemicalType: "Pyrimidine analog with a stable fluorine atom at position 5 of uracil ring",
    mechanismOfAction:
      "5-FU is inactive and requires activation via a complex series of enzymatic reactions to ribosyl and deoxyribosyl nucleotide metabolites: 1) 5-FU is converted to 5-Fluoro-Deoxyuridine Monophosphate (5-FdUMP), which inhibits thymidylate synthase enzyme (reduced folate is required, so Leucovorin is administered with 5-FU to stabilize the ternary complex, resulting in enhanced inhibition of DNA synthesis through 'thymineless death'); 2) 5-FU is converted to 5-Fluoro-Deoxyuridine Triphosphate (5-FdUTP), which is incorporated into DNA, inhibiting DNA synthesis and function; 3) 5-FU is converted to 5-Fluoro-Uridine Triphosphate (5-FUTP), which is incorporated into RNA, inhibiting RNA synthesis and processing.",
    pharmacokinetics: {
      absorption: "Parenterally: IV only (not used orally due to severe GI toxicity and unpredictable mucosal metabolism). Topically: for superficial skin cancers and solar/actinic keratosis.",
      metabolism: "Primary catabolism in the liver. Dihydro-pyrimidine Dehydrogenase (DPD) enzyme is responsible for the detoxifying metabolism of Fluoropyrimidines drugs (5-FU, Capecitabine, and Tegafur). Genetic variations within the DPD gene lead to reduced or absent DPD activity. Patients with DPD deficiency have a significantly increased risk of severe or even fatal drug toxicities (severe mucositis, diarrhea, pancytopenia).",
      excretion: "Urine (metabolites) and exhaled as respiratory CO2."
    },
    therapeuticUses: [
      "Primarily in Solid Tumors: Colorectal, Breast, Ovarian, Pancreatic, and Gastric Carcinomas.",
      "5-FU remains the most widely used chemotherapeutic agent in the treatment of Colorectal Cancer."
    ],
    resistanceMechanisms: [
      "Decreased 5-FU conversion into 5-FdUMP",
      "Increased thymidylate synthase expression/levels through gene amplification"
    ],
    commonSideEffects: [
      "Diarrhea",
      "Alopecia",
      "Severe mucositis and stomatitis",
      "Myelosuppression"
    ],
    severeSideEffects: [
      "Hand-foot syndrome (chemotherapy-induced acral erythema / palmar-plantar erythrodysesthesia)",
      "Coronary vasospasm and cardiac ischemia",
      "Fatal toxicity in DPD-deficient patients"
    ],
    antidoteOrProtectiveAgent: "DPD screening; Uridine triacetate (Vistogard®) for overdose; Leucovorin co-therapy enhances anti-tumor efficacy.",
    administration: ["IV infusion (bolus or continuous)", "Topical cream"],
    slideRef: "Slides 28-29"
  },
  {
    id: "capecitabine",
    name: "Capecitabine",
    phonetic: "[cape-SITE-a-been]",
    brandNames: ["Xeloda®"],
    classId: "class-1",
    subclass: "Pyrimidine Analogues",
    cellCyclePhase: "S-phase specific",
    chemicalType: "Oral fluoropyrimidine carbamate prodrug",
    mechanismOfAction:
      "Oral fluoropyrimidine carbamate with 70–80% oral bioavailability. It undergoes a 3-step enzymatic cascade (hepatic carboxylesterase -> cytidine deaminase -> thymidine phosphorylase within tumor tissue) where it is converted into active 5-Fluorouracil selectively inside the tumor.",
    therapeuticUses: [
      "Treatment of Colorectal Cancer (adjuvant and metastatic).",
      "Metastatic Breast Cancer."
    ],
    fdaWarnings: [
      "Warning: Capecitabine may increase the anticoagulant effects of Warfarin, significantly increasing the INR several days up to several months after initiating Capecitabine or within one month after stopping therapy. Frequent INR monitoring is mandatory."
    ],
    commonSideEffects: [
      "Diarrhea",
      "Hand-foot syndrome (palmar-plantar erythrodysesthesia - tingling, numbness, redness, blistering of palms and soles)"
    ],
    severeSideEffects: ["Severe diarrhea and dehydration", "Coronary vasospasm", "Severe toxicity in DPD deficiency"],
    administration: ["Oral tablets twice daily within 30 minutes after a meal"],
    slideRef: "Slide 30"
  },
  {
    id: "floxuridine",
    name: "Floxuridine (FUDR)",
    phonetic: "[flox-URE-i-deen]",
    brandNames: ["FUDR®"],
    classId: "class-1",
    subclass: "Pyrimidine Analogues",
    cellCyclePhase: "S-phase specific",
    chemicalType: "5-Fluorodeoxyuridine",
    mechanismOfAction:
      "Prodrug rapidly catabolized to 5-FU and phosphorylated to 5-FdUMP, inhibiting thymidylate synthase and halting DNA synthesis.",
    therapeuticUses: [
      "GI Adenocarcinoma with Metastasis to Liver, Gallbladder, and Bile Ducts."
    ],
    fdaWarnings: [
      "Floxuridine is given by rapid intra-arterial injection ONLY by or under the supervision of a qualified physician who is experienced in cancer chemotherapy and intra-arterial drug therapy."
    ],
    commonSideEffects: ["GI ulceration", "Biliary sclerosis", "Diarrhea", "Liver function abnormalities"],
    severeSideEffects: ["Chemical hepatitis", "Biliary tract strictures", "Severe myelosuppression"],
    administration: ["Intra-arterial hepatic infusion ONLY"],
    slideRef: "Slide 30"
  },

  // GROUP I: ANTIMETABOLITES - CYTIDINE ANALOGUES
  {
    id: "cytarabine",
    name: "Cytarabine (Ara-C)",
    phonetic: "[sye-TARE-ah-been]",
    brandNames: ["Ara-C®", "Cytosar-U®", "DepoCyt®"],
    classId: "class-1",
    subclass: "Cytidine Analogues",
    cellCyclePhase: "S-phase specific",
    chemicalType: "Cytosine arabinoside (analog of 2'-deoxycytidine with arabinose sugar)",
    mechanismOfAction:
      "Converted by deoxycytidine kinase to mononucleotide (ara-CMP), then to diphosphate and triphosphate metabolites (ara-CTP). ara-CTP is incorporated into DNA and RNA, acting as a competitive inhibitor of DNA polymerase and causing chain termination, resulting in inhibition of DNA synthesis and function.",
    pharmacokinetics: {
      absorption: "Given IV, IM, SC, and intrathecal. It is NOT effective when given orally because of rapid deamination to non-cytotoxic uracil arabinoside (ara-U) by cytidine deaminase in the intestinal mucosa and liver.",
      distribution: "Does NOT penetrate the CNS well; therefore injected intrathecally into the CSF (liposomal preparation provides sustained slow release into the CSF).",
      metabolism: "Via oxidative deamination to ara-U (inactive metabolite) by cytidine deaminase.",
      excretion: "Both Cytarabine and ara-U are excreted in urine."
    },
    therapeuticUses: [
      "Acute Myeloid (non-lymphocytic) Leukemia (AML) - frontline standard in '7+3' induction.",
      "Acute Lymphocytic Leukemia (ALL).",
      "Meningeal Leukemia (intrathecal; IT administration)."
    ],
    commonSideEffects: ["Nausea", "Vomiting", "Mucositis", "Myelosuppression"],
    severeSideEffects: [
      "Neurotoxicity (cerebellar toxicity: dysmetria, ataxia, nystagmus at high doses)",
      "Ocular toxicity (chemical conjunctivitis - prevented by prophylactic steroid eye drops)",
      "Non-cardiogenic pulmonary edema"
    ],
    antidoteOrProtectiveAgent: "Dexamethasone ophthalmic eye drops to prevent conjunctivitis; frequent cerebellar neuro checks.",
    administration: ["IV infusion", "Intrathecal (IT)", "SC", "IM"],
    slideRef: "Slide 31"
  },
  {
    id: "gemcitabine",
    name: "Gemcitabine",
    phonetic: "[jem-SITE-ah-been]",
    brandNames: ["Gemzar®"],
    classId: "class-1",
    subclass: "Cytidine Analogues",
    cellCyclePhase: "S-phase specific",
    chemicalType: "Difluorodeoxycytidine analog",
    mechanismOfAction:
      "Gemcitabine is converted to mononucleotide, then to diphosphate and triphosphate metabolites: 1) Inhibition of ribonucleotide reductase enzyme by Gemcitabine diphosphate substrate (reduces the pool of deoxynucleoside triphosphates required for DNA synthesis); 2) Gemcitabine triphosphate is incorporated into DNA, resulting in inhibition of DNA synthesis and function through masked chain termination (one additional nucleotide is added after gemcitabine, locking it in and preventing proofreading enzymes from excising it).",
    therapeuticUses: [
      "Pancreatic Cancer (first-line treatment for patients with locally advanced non-resectable Stage II or Stage III, or metastatic Stage IV).",
      "Breast Cancer (in combination with Paclitaxel).",
      "Ovarian Cancer (in combination with Carboplatin).",
      "Non-Small Cell Lung Cancer (in combination with Cisplatin).",
      "Bladder Cancer (in combination with Cisplatin; off-label).",
      "Cholangiocarcinoma and other Biliary Tract Cancers (off-label)."
    ],
    commonSideEffects: [
      "Nausea and vomiting",
      "Flu-like syndrome (fever, chills, myalgias)",
      "Myelosuppression",
      "Alopecia"
    ],
    severeSideEffects: [
      "Renal microangiopathy syndromes (including Hemolytic-Uremic Syndrome [HUS])",
      "Hepatic toxicity",
      "Pulmonary toxicity (interstitial pneumonitis, ARDS)"
    ],
    administration: ["IV infusion (30-minute standard infusion)"],
    slideRef: "Slide 32"
  },
  {
    id: "azacitidine",
    name: "Azacitidine",
    phonetic: "[ay-za-SYE-ti-deen]",
    brandNames: ["Vidaza®"],
    classId: "class-1",
    subclass: "Cytidine Analogues",
    cellCyclePhase: "S-phase specific",
    chemicalType: "Cytidine pyrimidine analog / DNA hypomethylating agent",
    mechanismOfAction:
      "Incorporates into RNA and DNA; inhibits DNA methyltransferase (DNMT), causing DNA hypomethylation and restoring normal growth control and differentiation of suppressed tumor suppressor genes.",
    therapeuticUses: [
      "Myelodysplastic Syndromes (MDS)",
      "Acute Myeloid Leukemia (AML) in elderly patients"
    ],
    commonSideEffects: ["Nausea", "Anemia", "Neutropenia", "Injection site reactions"],
    severeSideEffects: ["Severe myelosuppression", "Renal tubular dysfunction"],
    administration: ["SC injection", "IV infusion"],
    slideRef: "Slide 20, 43"
  },

  // GROUP II: ALKYLATING AGENTS - NITROGEN MUSTARDS
  {
    id: "mechlorethamine",
    name: "Mechlorethamine (Chlormethine, Mustine, HN2)",
    phonetic: "[mech-klor-EH-tha-meen]",
    brandNames: ["Mustargen®", "Valchlor®"],
    classId: "class-2",
    subclass: "Nitrogen Mustards",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Bis(2-chloroethyl)methylamine - prototype nitrogen mustard",
    mechanismOfAction:
      "Prototype of Alkylating Agents. It can also be used in chemical warfare where it has the code-name HN2. It works by binding to DNA, crosslinking two strands and preventing cell duplication. It binds to the N7 nitrogen on the DNA base Guanine, causing miscoding breakage and subsequently DNA replication failure.",
    historyBackground:
      "Nitrogen mustards are not related to the mustard plant; the name comes from the pungent smell of chemical weapons preparations. German introduction of chemical warfare during World War I involved mustard gas. In 1942 during World War II, two pharmacologists from Yale School of Medicine, Louis S. Goodman and Alfred Gilman, investigated potential therapeutic applications and exchanged a sulfur molecule for nitrogen to create a more stable nitrogen mustard. In 1943 a German air raid in Bari, Italy led to the exposure of >1000 people to mustard gas bombs. Lt. Col. Dr. Stewart Francis Alexander reported mustard gas caused lymphoid and myeloid suppression. Goodman and Gilman reasoned nitrogen mustard could treat lymphoma, since lymphoma is a tumor of lymphoid cells. Nitrogen mustard became the first cancer chemotherapy in clinical medicine.",
    therapeuticUses: [
      "Hodgkin's Disease (cornerstone of the historic MOPP regimen).",
      "Lymphosarcoma, Chronic Myelocytic Leukemia, Polycythemia Vera, Bronchogenic Carcinoma.",
      "Topical gel (Valchlor®) for cutaneous T-cell lymphoma (Mycosis fungoides)."
    ],
    commonSideEffects: [
      "Severe nausea and vomiting (occurring in 90% of patients within 1-2 hours)",
      "Myelosuppression",
      "Alopecia"
    ],
    severeSideEffects: [
      "Severe vesicant blistering / tissue necrosis if extravasated",
      "Secondary acute leukemia (mutagenic and carcinogenic potential)",
      "Sterility and amenorrhea"
    ],
    administration: ["IV injection (rapid)", "Topical"],
    slideRef: "Slides 34-36"
  },
  {
    id: "cyclophosphamide",
    name: "Cyclophosphamide",
    phonetic: "[sye-kloe-FOSS-fah-mide]",
    brandNames: ["Cytoxan®", "Neosar®", "Endoxan®"],
    classId: "class-2",
    subclass: "Nitrogen Mustards",
    cellCyclePhase: "Cell cycle non-specific",
    mechanismOfAction:
      "The most widely used Alkylating Agent with a broad spectrum, being used either singly or as part of a regimen in the treatment of a wide variety of neoplastic diseases. Metabolized in the liver by the CYP450 enzyme system into active and inactive metabolites. Active metabolites are delivered to both tumor and normal tissue, where non-enzymatic cleavage generates the cytotoxic forms: Phosphoramide Mustard and Acrolein. Cytotoxic metabolites cross-link tumor cell DNA, not specific for any phase of the cell cycle. Also has potent immunosuppressive activity.",
    pharmacokinetics: {
      absorption: "Oral or IV administration.",
      metabolism: "Hepatic CYP450 activation. Active metabolites are highly protein-bound and distributed to all tissues. Assumed to cross the placenta (Category D) and known to be present in breast milk.",
      excretion: "Mainly renally."
    },
    therapeuticUses: [
      "Used in combination with other antineoplastic agents to treat a wide variety of lymphatic and solid cancers: Lymphoma, Multiple Myeloma, Leukemia, Ovarian Cancer, Breast Cancer, Small Cell Lung Cancer, Neuroblastoma, and Sarcoma.",
      "Used as an immunosuppressant for severe Autoimmune Diseases (e.g. lupus nephritis, rheumatoid arthritis, granulomatosis with polyangiitis).",
      "Part of standard regimens: CMF, AC, TAC, FAC, BEACOPP, CHOP, CAV, CEPP."
    ],
    commonSideEffects: [
      "Nausea and vomiting",
      "Myelosuppression",
      "Alopecia (complete but reversible)"
    ],
    severeSideEffects: [
      "Hemorrhagic Cystitis (which can lead to Bladder Fibrosis): Bladder toxicity due to Acrolein and other toxic metabolites in the urine.",
      "Secondary acute myeloid leukemia and bladder cancer",
      "Sterility / ovarian failure"
    ],
    monitoringAndPearls: [
      "Bladder toxicity can be reduced by: 1) Slow IV infusion; 2) Adequate vigorous hydration; 3) Concomitant administration of Mesna (sodium 2-mercaptoethanesulfonate), which binds and neutralizes acrolein in the urinary bladder."
    ],
    antidoteOrProtectiveAgent: "Mesna (binds acrolein) + Vigorous Hydration.",
    administration: ["Oral tablets", "IV infusion"],
    slideRef: "Slides 36-37"
  },
  {
    id: "ifosfamide",
    name: "Ifosfamide",
    phonetic: "[eye-FOSS-fah-mide]",
    brandNames: ["Ifex®"],
    classId: "class-2",
    subclass: "Nitrogen Mustards",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Structural isomer/analog of Cyclophosphamide",
    mechanismOfAction:
      "Activated by hepatic CYP450 (CYP3A4/2B6) to ifosforamide mustard (cross-links DNA) and generates acrolein and chloroacetaldehyde as metabolic byproducts.",
    pharmacokinetics: {
      absorption: "IV only. Administered with Mesna to avoid internal bleeding; particularly hemorrhagic cystitis.",
      metabolism: "Hepatic CYP450 system.",
      excretion: "Renal excretion of active metabolites and acrolein."
    },
    therapeuticUses: [
      "Germ Cell Testicular Cancer (in combination with other antineoplastic agents).",
      "Bone Sarcomas (Osteosarcoma, Ewing's Sarcoma) and Soft Tissue Sarcomas."
    ],
    fdaWarnings: [
      "Mesna SHOULD be administered concomitantly to avoid internal bleeding and hemorrhagic cystitis."
    ],
    commonSideEffects: ["Nausea", "Vomiting", "Myelosuppression", "Alopecia"],
    severeSideEffects: [
      "Hemorrhagic cystitis (higher risk than cyclophosphamide)",
      "High dose of Ifosfamide can cause Neurotoxicity and CNS Toxicity (somnolence, confusion, hallucinations, coma) due to Chloroacetaldehyde metabolite.",
      "Renal Fanconi-like tubular nephrotoxicity"
    ],
    monitoringAndPearls: [
      "Methylene blue or thiamine has been used clinically to treat chloroacetaldehyde neurotoxicity. Concomitant Mesna is mandatory."
    ],
    antidoteOrProtectiveAgent: "Mesna (mandatory uroprotection) + Vigorous IV hydration.",
    administration: ["IV infusion ONLY"],
    slideRef: "Slides 36-37"
  },
  {
    id: "chlorambucil",
    name: "Chlorambucil",
    phonetic: "[klor-AM-byoo-sil]",
    brandNames: ["Leukeran®"],
    classId: "class-2",
    subclass: "Nitrogen Mustards",
    cellCyclePhase: "Cell cycle non-specific",
    mechanismOfAction:
      "Aromatic nitrogen mustard alkylating agent that cross-links helical DNA strands, preventing cell replication.",
    pharmacokinetics: {
      absorption: "Given orally 1 hour before or 2 hours after meals (on an empty stomach) for optimal absorption."
    },
    therapeuticUses: [
      "Chronic Lymphocytic Leukemia (CLL)",
      "Hodgkin's Lymphoma and Non-Hodgkin's Lymphoma"
    ],
    monitoringAndPearls: [
      "Chlorambucil has been largely replaced by Fludarabine, especially for Chronic Lymphocytic Leukemia (CLL). Fludarabine is an effective treatment for CLL that does not respond to initial treatment with Chlorambucil."
    ],
    commonSideEffects: ["Bone marrow suppression", "Nausea", "GI discomfort"],
    severeSideEffects: ["Pulmonary fibrosis", "Hepatotoxicity", "Secondary leukemias", "Seizures"],
    administration: ["Oral tablets"],
    slideRef: "Slide 38"
  },
  {
    id: "melphalan",
    name: "Melphalan",
    phonetic: "[MEL-fa-lan]",
    brandNames: ["Alkeran®", "Evomela®"],
    classId: "class-2",
    subclass: "Nitrogen Mustards",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "L-phenylalanine nitrogen mustard (PAM)",
    mechanismOfAction:
      "Nitrogen mustard derivative of L-phenylalanine; alkylates DNA at N7 guanine. Enters cells via amino acid active transporters.",
    therapeuticUses: [
      "Treatment of Multiple Myeloma (MM) [plasma cell cancer].",
      "Other uses: Melphalan (Evomela®) high-dose conditioning treatment prior to Hematopoietic Progenitor (Stem) Cell Transplantation in Multiple Myeloma.",
      "Ovarian Cancer, Retinoblastoma, Ocular (uveal) Melanoma, and Neuroblastoma."
    ],
    commonSideEffects: ["Myelosuppression (dose-limiting)", "Nausea and vomiting", "Mucositis"],
    severeSideEffects: ["Severe bone marrow aplasia", "Pulmonary fibrosis", "Secondary AML"],
    administration: ["Oral", "IV infusion (Evomela)"],
    slideRef: "Slide 38"
  },
  {
    id: "bendamustine",
    name: "Bendamustine",
    phonetic: "[ben-da-MUS-teen]",
    brandNames: ["Treanda®", "Bendeka®"],
    classId: "class-2",
    subclass: "Nitrogen Mustards",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Bifunctional agent containing a nitrogen mustard group and a benzimidazole ring",
    mechanismOfAction:
      "Nitrogen mustard alkylating agent with benzimidazole ring that causes intra-strand and inter-strand DNA cross-links and persistent double-strand breaks, inducing cell cycle arrest and apoptosis.",
    therapeuticUses: [
      "Chronic Lymphocytic Leukemia (CLL)",
      "Multiple Myeloma",
      "Non-Hodgkin's Lymphoma (indolent B-cell NHL)"
    ],
    commonSideEffects: ["Myelosuppression", "Nausea", "Fatigue", "Fever"],
    severeSideEffects: ["Severe infections", "Infusion reactions", "Skin toxicities (Stevens-Johnson syndrome)"],
    administration: ["IV infusion ONLY"],
    slideRef: "Slide 38"
  },

  // GROUP II: ALKYLATING AGENTS - NITROSOUREAS
  {
    id: "carmustine",
    name: "Carmustine (BCNU)",
    phonetic: "[KAR-mus-teen]",
    brandNames: ["BiCNU®", "Gliadel® wafer"],
    classId: "class-2",
    subclass: "Nitrosoureas",
    cellCyclePhase: "Cell cycle non-specific",
    mechanismOfAction:
      "Nitrosourea is both the name of a molecule and a class of compounds that include a nitroso (R-NO) group and a urea. Nitrosoureas are highly lipid-soluble and are able to cross the blood-brain barrier (BBB), making them effective in the treatment of brain tumors. These drugs appear to be non-cross-resistant with other alkylating agents. Alkylates and carbamoylates DNA and proteins.",
    therapeuticUses: [
      "Certain types of Brain Tumors (Glioblastoma, Glioma, Medulloblastoma, Astrocytoma).",
      "Hodgkin's Disease, Non-Hodgkin's Lymphomas, and Multiple Myeloma.",
      "Given IV and also available as an implantable brain wafer (Gliadel®); wafer placed in resection cavity as an adjunct to surgery & radiation.",
      "Also used as part of conditioning regimen in Hematological Stem Cell Transplantation."
    ],
    commonSideEffects: ["Nausea and vomiting", "Local pain/thrombophlebitis at injection site"],
    severeSideEffects: [
      "Delayed, cumulative, prolonged myelosuppression (nadir 4-6 weeks)",
      "Pulmonary fibrosis (dose-dependent and cumulative)",
      "Renal failure and secondary leukemia"
    ],
    administration: ["IV infusion", "Implantable brain wafer (Gliadel)"],
    slideRef: "Slide 39"
  },
  {
    id: "lomustine",
    name: "Lomustine (CCNU)",
    phonetic: "[LOE-mus-teen]",
    brandNames: ["CeeNu®", "Gleostine®"],
    classId: "class-2",
    subclass: "Nitrosoureas",
    cellCyclePhase: "Cell cycle non-specific",
    mechanismOfAction:
      "Closely related nitrosourea; highly lipid-soluble, crosses the BBB, alkylates DNA and carbamoylates lysine residues on nuclear proteins.",
    therapeuticUses: [
      "Brain Tumors (primary and metastatic).",
      "Hodgkin's Disease (second-line/relapsed).",
      "Key component of the PCV regimen (Procarbazine + CCNU + Vincristine) for brain gliomas."
    ],
    fdaWarnings: [
      "CRITICAL ADMINISTRATION SCHEDULE: Given orally ONLY ONCE EVERY 6 WEEKS! Both physician and pharmacist should emphasize to patient that only ONE dose of the drug is taken every 6 weeks. Severe myelosuppression occurs if repeated sooner.",
      "Take on an empty stomach (no food or drink for 2 hours before and after) to decrease incidence of nausea and vomiting."
    ],
    commonSideEffects: ["Severe nausea and vomiting", "Anorexia"],
    severeSideEffects: [
      "Severe delayed myelosuppression (thrombocytopenia and leukopenia occurring 4–6 weeks post-dose)",
      "Pulmonary infiltrates and fibrosis",
      "Hepatotoxicity"
    ],
    administration: ["Oral capsules once every 6 weeks on an empty stomach"],
    slideRef: "Slide 39"
  },
  {
    id: "streptozocin",
    name: "Streptozocin",
    phonetic: "[strep-toe-ZOE-sin]",
    brandNames: ["Zanosar®"],
    classId: "class-2",
    subclass: "Nitrosoureas",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Naturally occurring glucosamine-nitrosourea compound",
    mechanismOfAction:
      "Naturally occurring Nitrosourea isolated from Streptomyces achromogenes that is particularly toxic to the insulin-producing beta cells of the pancreas (taken up by the GLUT2 glucose transporter). Causes DNA methylation and interstrand cross-linking.",
    therapeuticUses: [
      "Islet cell cancer of the pancreas (Pancreatic Neuroendocrine Tumors / Insulinomas / Glucagonomas)."
    ],
    commonSideEffects: ["Nausea and vomiting", "Transient hypoglycemia or hyperglycemia"],
    severeSideEffects: [
      "Dose-limiting nephrotoxicity (proteinuria, azotemia, renal tubular acidosis)",
      "Hepatotoxicity"
    ],
    administration: ["IV infusion"],
    slideRef: "Slide 39"
  },

  // GROUP II: ALKYLATING AGENTS - ALKYL SULFONATES
  {
    id: "busulfan",
    name: "Busulfan",
    phonetic: "[bue-SUL-fan]",
    brandNames: ["Myleran®", "Busulfex®"],
    classId: "class-2",
    subclass: "Alkyl Sulfonates",
    cellCyclePhase: "Cell cycle non-specific",
    mechanismOfAction:
      "Bifunctional alkyl sulfonate ester that cross-links DNA strands at guanine-adenine and guanine-guanine sites, with potent selective toxicity against hematopoietic stem cells.",
    pharmacokinetics: {
      absorption: "Available orally (Myleran®) and IV (Busulfex®).",
      metabolism: "Extensively metabolized by conjugation with glutathione catalyzed by glutathione S-transferase.",
      excretion: "Urine."
    },
    therapeuticUses: [
      "Used in combination with Cyclophosphamide as a conditioning regimen prior to Allogeneic Hematopoietic Progenitor Cell Transplantation, especially in Chronic Myelogenous Leukemia (CML)."
    ],
    commonSideEffects: ["Myelosuppression (profound and prolonged)", "Nausea", "Hyperpigmentation of the skin ('busulfan tan')"],
    severeSideEffects: [
      "Interstitial Pulmonary Fibrosis ('Busulfan Lung' - insidious onset of cough, dyspnea, fever)",
      "Seizures (CNS toxicity due to high CSF penetration; an antiepileptic agent like phenytoin or levetiracetam MUST be used as prophylaxis)",
      "Hepatic Veno-Occlusive Disease (HVOD / Sinusoidal Obstruction Syndrome)",
      "Wasting Syndrome (resembling Addison's disease: fatigue, weakness, hypotension, hyperpigmentation without adrenal insufficiency)"
    ],
    monitoringAndPearls: [
      "Antiepileptic agent is used as prophylaxis against Busulfan-induced seizures prior to and during high-dose conditioning."
    ],
    antidoteOrProtectiveAgent: "Prophylactic antiepileptic medication (Phenytoin / Levetiracetam).",
    administration: ["Oral (Myleran)", "IV (Busulfex)"],
    slideRef: "Slide 40"
  },

  // GROUP II: ALKYLATING AGENTS - NON-CLASSICAL ALKYLATING AGENTS
  {
    id: "procarbazine",
    name: "Procarbazine",
    phonetic: "[proe-KAR-ba-zeen]",
    brandNames: ["Matulane®", "Natulan®"],
    classId: "class-2",
    subclass: "Non-Classical Alkylating Agents",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Orally active methyl-hydrazine derivative",
    mechanismOfAction:
      "Mechanism is not fully understood: Metabolism yields Azo-Procarbazine and hydrogen peroxide, which results in inhibition of protein, DNA, and RNA synthesis; may suppress mitosis and induce direct DNA damage (free-radical strand scission). Rapidly equilibrates between plasma and CSF after oral administration.",
    therapeuticUses: [
      "Hodgkin's Lymphoma; in MOPP (Mustine, Oncovin, Procarbazine, Prednisolone) or BEACOPP regimens.",
      "Brain Tumors; in combination with Lomustine [CCNU] and Vincristine (PCV regimen).",
      "Non-Hodgkin's Lymphoma; in CEPP regimens (Cyclophosphamide, Etoposide, Procarbazine, Prednisone +/- Bleomycin)."
    ],
    drugInteractions: [
      "Procarbazine weakly inhibits Monoamine Oxidase (MAO), so it can cause severe hypertensive crises if associated with the ingestion of tyramine-rich foods such as aged cheeses, red wine, fava beans, and cured meats.",
      "Produces a disulfiram-like reaction (flushing, nausea, vomiting, tachycardia) with alcohol ingestion.",
      "Potentiates CNS depressants (sedatives, hypnotics, opioids)."
    ],
    commonSideEffects: ["Nausea and vomiting", "Myelosuppression", "Alopecia", "Lethargy and depression"],
    severeSideEffects: [
      "Hypertensive crisis with dietary tyramine",
      "Disulfiram-like ethanol intolerance",
      "High incidence of secondary leukemias and azoospermia"
    ],
    administration: ["Oral capsules"],
    slideRef: "Slide 40, 83"
  },
  {
    id: "dacarbazine",
    name: "Dacarbazine (DTIC)",
    phonetic: "[da-KAR-ba-zeen]",
    brandNames: ["Dtic-Dome®"],
    classId: "class-2",
    subclass: "Non-Classical Alkylating Agents",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Imidazole carboxamide derivative",
    mechanismOfAction:
      "An imidazole carboxamide. Following metabolic activation in the liver via CYP1A1/1A2 to the active metabolite Methyl-Triazeno-Imidazole Carboxamide (MTIC), this metabolite is responsible for the drug's activity as an alkylating agent, releasing a methyldiazonium ion that methylates DNA at O6 and N7 guanine.",
    therapeuticUses: [
      "Used as a single agent in Metastatic Malignant Melanoma.",
      "Used in combination in Hodgkin's Disease (the 'D' in standard ABVD regimen).",
      "Soft Tissue Sarcomas."
    ],
    monitoringAndPearls: [
      "Dacarbazine is considered to be highly emetogenic (antiemetic agents such as 5-HT3 antagonists + dexamethasone are routinely used as premedication)."
    ],
    commonSideEffects: [
      "Severe nausea and vomiting (>90% if untreated)",
      "Myelosuppression",
      "Flu-like symptoms"
    ],
    severeSideEffects: ["Severe bone marrow suppression", "Hepatic vein thrombosis / hepatic necrosis"],
    administration: ["IV infusion"],
    slideRef: "Slide 40"
  },
  {
    id: "temozolomide",
    name: "Temozolomide",
    phonetic: "[TEM-oh-ZOE-loe-mide]",
    brandNames: ["Temodal®", "Temodar®"],
    classId: "class-2",
    subclass: "Non-Classical Alkylating Agents",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Second-generation imidazotetrazine / triazene alkylating agent",
    mechanismOfAction:
      "A triazene alkylating agent. Like Dacarbazine, the active metabolite is Methyl-Triazeno-Imidazole Carboxamide (MTIC). However, unlike Dacarbazine, Temozolomide does NOT require liver CYP enzyme metabolism for activation; it spontaneously hydrolyzes at physiologic pH to MTIC. Highly lipid-soluble and readily crosses the blood-brain barrier.",
    therapeuticUses: [
      "First-line treatment for Glioblastoma Multiforme (GBM) administered concomitantly with radiotherapy, followed by maintenance.",
      "Second-line (after nitrosourea and procarbazine) treatment for Anaplastic Astrocytoma (types of brain tumors)."
    ],
    commonSideEffects: ["Nausea and vomiting", "Fatigue", "Headache", "Constipation"],
    severeSideEffects: ["Myelosuppression (thrombocytopenia and neutropenia)", "PCP pneumonia (prophylaxis recommended during radiotherapy)"],
    administration: ["Oral capsules", "IV infusion"],
    slideRef: "Slide 40"
  },

  // GROUP II: ALKYLATING AGENTS - PLATINUM ANALOGS
  {
    id: "cisplatin",
    name: "Cisplatin",
    phonetic: "[SIS-pla-tin]",
    brandNames: ["Platinol®", "Platinol-AQ®"],
    classId: "class-2",
    subclass: "Platinum Analogs",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Inorganic platinum coordination complex (cis-diamminedichloroplatinum(II))",
    mechanismOfAction:
      "First member of the platinum class. Mechanism of action is unclear, but thought to exert cytotoxic effects in the same manner as alkylating agents: enters cells, sheds chloride ligands in low intracellular chloride, becomes a reactive aquated platinum species that binds to DNA forming intrastrand and interstrand cross-links (preferentially between adjacent guanines), bending the DNA helix and inhibiting replication and transcription. Platinum complexes appear to synergize with certain other anticancer drugs, including Alkylating Agents, Fluoropyrimidines, and Taxanes.",
    therapeuticUses: [
      "Used in Solid Tumors: Testicular cancer (curative in BEP regimen), Ovarian cancer, Bladder cancer, Breast cancer, Head and Neck cancer, Cervical cancer, Lung cancer, Mesothelioma, Esophageal cancer, and Brain tumors."
    ],
    commonSideEffects: [
      "Severe, persistent vomiting (starting at least 1 hour after administration and may continue for as long as 5 days!)",
      "Myelosuppression",
      "Hypomagnesemia, hypokalemia, and hypocalcemia"
    ],
    severeSideEffects: [
      "Nephrotoxicity: Dose-related and cumulative renal tubular damage (must be prevented with vigorous pre- and post-hydration with normal saline and mannitol)",
      "Ototoxicity: Tinnitus and high-frequency sensorineural hearing loss (irreversible)",
      "Neurotoxicity: Peripheral sensory neuropathy (glove-and-stocking) and optic neuritis",
      "Hypersensitivity reactions"
    ],
    monitoringAndPearls: [
      "Vigorous IV pre-hydration with 1-2 L normal saline, adequate urine output monitoring, and magnesium supplementation are mandatory.",
      "Premedicate with multi-agent antiemetics (NK1 antagonist + 5-HT3 antagonist + Dexamethasone)."
    ],
    antidoteOrProtectiveAgent: "Aggressive IV Saline Hydration + Mannitol osmotic diuresis; Amifostine (Ethyol®) cytoprotection.",
    administration: ["IV infusion", "Intra-peritoneally (IP)", "Intra-arterially (IA)"],
    slideRef: "Slide 41"
  },
  {
    id: "carboplatin",
    name: "Carboplatin",
    phonetic: "[KAR-boe-pla-tin]",
    brandNames: ["Paraplatin®"],
    classId: "class-2",
    subclass: "Platinum Analogs",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Second-generation platinum analog with cyclobutanedicarboxylate ligand",
    mechanismOfAction:
      "Second-generation platinum analog whose mechanisms of cytotoxic action and resistance, and clinical pharmacology are the same as Cisplatin (forms intrastrand DNA cross-links).",
    therapeuticUses: [
      "Like Cisplatin, Carboplatin has broad-spectrum activity against a wide range of Solid Tumors (Ovarian, Non-Small Cell Lung Cancer, Small Cell Lung Cancer, Head and Neck, Bladder).",
      "In contrast to Cisplatin, it exhibits significantly LESS nephrotoxicity and GI toxicity and is used when patients CANNOT be vigorously hydrated, as is required for Cisplatin therapy."
    ],
    commonSideEffects: [
      "Mild nausea and vomiting (far less severe than cisplatin)",
      "Fatigue"
    ],
    severeSideEffects: [
      "Myelosuppression: Dose-limiting thrombocytopenia and neutropenia (dosed by Calvert formula based on GFR and target AUC)",
      "Neurotoxicity, hepatotoxicity, and hypersensitivity reactions",
      "Rarely nephrotoxicity and ototoxicity compared to Cisplatin"
    ],
    administration: ["IV infusion", "Intra-peritoneally (IP)", "Intra-arterially (IA)"],
    slideRef: "Slide 42"
  },
  {
    id: "oxaliplatin",
    name: "Oxaliplatin",
    phonetic: "[ox-AL-ih-pla-tin]",
    brandNames: ["Eloxatin®"],
    classId: "class-2",
    subclass: "Platinum Analogs",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Third-generation platinum analog with diaminocyclohexane (DACH) carrier ligand",
    mechanismOfAction:
      "Third-generation platinum analog whose mechanisms of cytotoxic action and clinical pharmacology are the same as Cisplatin and Carboplatin. However, the bulky DACH ligand results in DNA cross-links that mismatch repair proteins cannot recognize; hence mechanisms of resistance to Cisplatin or Carboplatin are NOT cross-resistant to Oxaliplatin.",
    therapeuticUses: [
      "Used for treatment of Colorectal Cancer, typically in combination with Fluorouracil and Folinic acid (Leucovorin): the FOLFOX regimen.",
      "Also used in pancreatic, esophageal, and gastric adenocarcinoma."
    ],
    commonSideEffects: ["Nausea", "Vomiting", "Myelosuppression"],
    severeSideEffects: [
      "Neurotoxicity: Peripheral sensory neuropathy, characterized by acute cold-induced paresthesias/dysesthesias (triggered or worsened by cold drinks, touching cold objects, or breathing cold air) and cumulative chronic sensory loss.",
      "Nephrotoxicity and ototoxicity are much less than Cisplatin and Carboplatin."
    ],
    monitoringAndPearls: [
      "Advise patients strictly to avoid drinking cold liquids, eating ice cream, or touching cold surfaces without gloves for several days after each infusion."
    ],
    administration: ["IV infusion"],
    slideRef: "Slide 42"
  },

  // GROUP III: CYTOTOXIC ANTIBIOTICS - ANTHRACYCLINES
  {
    id: "anthracyclines-class",
    name: "Anthracyclines Class Overview",
    phonetic: "[an-thruh-SYE-kleenz]",
    brandNames: ["Cerubidine®", "Adriamycin®", "Idamycin®", "Ellence®", "Valstar®"],
    classId: "class-3",
    subclass: "Anthracyclines",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Red aromatic polyketides isolated from Streptomyces bacterium",
    mechanismOfAction:
      "The Anthracyclines exert their cytotoxic action through 4 major mechanisms: 1) Inhibition of topoisomerase II (an enzyme responsible for cutting both strands of the DNA helix to relieve torsional strain); 2) High-affinity binding to DNA through intercalation between base pairs, with consequent blockade of the synthesis of DNA and RNA; 3) Generation of Semiquinone free radicals and Oxygen free radicals (superoxide and hydrogen peroxide); 4) Binding to cellular membranes to alter membrane fluidity and ion transport. Anthracyclines are cell cycle non-specific.",
    pharmacokinetics: {
      absorption: "All Anthracyclines MUST be administered IV (inactivated in GI tract). Extravasation can lead to severe tissue necrosis.",
      distribution: "Because of the dark red color, the veins may become visible surrounding the site of infusion, and red discoloration of urine may occur. They do NOT penetrate the BBB or testes. Highly protein-bound and widely distributed.",
      metabolism: "Anthracyclines are metabolized extensively in the liver, and up to 50% of drug is eliminated in the feces via biliary excretion. Dose reduction is required in liver dysfunction."
    },
    therapeuticUses: [
      "Used to treat various cancers and are among the most important and widely used anticancer drugs in clinical practice (solid tumors, breast, sarcomas, hematologic malignancies)."
    ],
    commonSideEffects: [
      "Harmless dark red discoloration of urine",
      "Red flare along infused veins",
      "Nausea and vomiting",
      "Myelosuppression and complete alopecia"
    ],
    severeSideEffects: [
      "Irreversible, dose-dependent CARDIOTOXICITY: due to free radical formation and other mechanisms. More common with Daunorubicin and Doxorubicin than with Idarubicin and Epirubicin.",
      "Addition of Trastuzumab to protocols with Doxorubicin or Epirubicin markedly increases congestive heart failure (CHF).",
      "Extravasation tissue ulceration and severe necrosis."
    ],
    monitoringAndPearls: [
      "Cardioprotective antidote: Dexrazoxane (Zinecard®) is a cardio-protective agent (derivative of EDTA that chelates iron and thus reduces the number of metal ions complexed with anthracycline, decreasing formation of superoxide radicals). Used to protect the heart against anthracycline cardiotoxicity.",
      "Extravasation antidote: Dexrazoxane is also available as Totect® / Savene® for the specific treatment of extravasation resulting from IV Anthracyclines.",
      "Liposomal formulations (e.g. Doxil®) are significantly less cardiotoxic than conventional formulations."
    ],
    antidoteOrProtectiveAgent: "Dexrazoxane (Zinecard® for cardioprotection; Totect®/Savene® for extravasation necrosis).",
    administration: ["IV infusion ONLY (central line preferred)"],
    slideRef: "Slides 49-51"
  },
  {
    id: "daunorubicin",
    name: "Daunorubicin (Daunomycin)",
    phonetic: "[daw-noe-ROO-bi-sin]",
    brandNames: ["Cerubidine®"],
    classId: "class-3",
    subclass: "Anthracyclines",
    cellCyclePhase: "Cell cycle non-specific",
    mechanismOfAction:
      "The first Anthracycline discovered (naturally produced by Streptomyces in 1963). Intercalates DNA, inhibits topoisomerase II, and forms free radicals.",
    therapeuticUses: [
      "Used primarily to treat Acute Leukemias (AML and ALL).",
      "In contrast to Doxorubicin, its efficacy in solid tumors is very limited."
    ],
    commonSideEffects: ["Red urine", "Nausea", "Alopecia", "Myelosuppression"],
    severeSideEffects: ["Dose-dependent irreversible cardiomyopathy", "Severe myelosuppression", "Extravasation necrosis"],
    administration: ["IV infusion"],
    slideRef: "Slide 51"
  },
  {
    id: "doxorubicin",
    name: "Doxorubicin (Adriamycin)",
    phonetic: "[dox-oh-ROO-bi-sin]",
    brandNames: ["Adriamycin®", "Adriblastina®", "Doxil®"],
    classId: "class-3",
    subclass: "Anthracyclines",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "14-hydroxydaunorubicin",
    mechanismOfAction:
      "One of the most important anticancer drugs in clinical practice; also nicknamed 'Red Devil Chemo' partly due to its bright red color. Has a broad spectrum of activity and is one of the most effective anticancer drugs for Solid Tumors. 4 mechanisms: Topo II inhibition, DNA intercalation, free radical generation, membrane disruption.",
    therapeuticUses: [
      "Solid Tumors: Cancers of Breast, Bladder, Stomach, Lung, Ovaries, Thyroid, Soft Tissue Sarcoma, Multiple Myeloma, Liver, and others.",
      "Hematologic: Leukemias, Hodgkin's Lymphoma, and Non-Hodgkin's Lymphoma.",
      "Regimens: AC, TAC, FAC (Breast); ABVD, BEACOPP (Hodgkin's); CHOP (NHL); CAV (Lung); MVAC (Bladder).",
      "Doxorubicin Liposomal (Doxil®): Polyethylene glycol (PEG) coated liposome-encapsulated form used to treat AIDS-related Kaposi's Sarcoma, Ovarian Cancer, Multiple Myeloma, and off-label for metastatic breast cancer and solid tumors. Doxorubicin Liposomal is significantly LESS cardiotoxic than the usual formulation."
    ],
    commonSideEffects: [
      "Bright red urine discoloration (harmless, educate patient)",
      "Severe nausea and vomiting",
      "Complete alopecia",
      "Myelosuppression",
      "Palmar-plantar erythrodysesthesia (more pronounced with liposomal Doxil)"
    ],
    severeSideEffects: [
      "Irreversible dose-dependent dilated cardiomyopathy / congestive heart failure (lifetime maximum cumulative dose typically 450-550 mg/m2)",
      "Severe tissue necrosis if extravasated",
      "Arrhythmias and ECG changes"
    ],
    monitoringAndPearls: [
      "Monitor baseline and serial Left Ventricular Ejection Fraction (LVEF) by echocardiogram or MUGA scan.",
      "Cardioprotective agent Dexrazoxane (Zinecard®) indicated when exceeding cumulative dose thresholds."
    ],
    antidoteOrProtectiveAgent: "Dexrazoxane (Zinecard® for cardioprotection; Totect® for extravasation necrosis).",
    administration: ["IV infusion ONLY"],
    slideRef: "Slide 52"
  },
  {
    id: "idarubicin",
    name: "Idarubicin",
    phonetic: "[eye-da-ROO-bi-sin]",
    brandNames: ["Idamycin®"],
    classId: "class-3",
    subclass: "Anthracyclines",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "4-demethoxy semisynthetic analog of Daunorubicin",
    mechanismOfAction:
      "Semisynthetic 4-demethoxy analog of Daunorubicin. The loss of the 4-methoxy group increases its lipophilicity, leading to higher cellular uptake and prolonged intracellular retention of its active metabolite idarubicinol.",
    therapeuticUses: [
      "Used in combination with Cytarabine (the classic '7+3' regimen) as a first-line treatment of Acute Myeloid Leukemia (AML)."
    ],
    commonSideEffects: ["Red urine", "Nausea", "Myelosuppression", "Mucositis"],
    severeSideEffects: ["Cardiotoxicity (though less frequent than doxorubicin)", "Severe bone marrow aplasia"],
    administration: ["IV infusion"],
    slideRef: "Slide 53"
  },
  {
    id: "epirubicin",
    name: "Epirubicin",
    phonetic: "[eh-pee-ROO-bih-sin]",
    brandNames: ["Ellence®"],
    classId: "class-3",
    subclass: "Anthracyclines",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "4'-epimer of Doxorubicin (differs in orientation of C-4 hydroxyl on sugar)",
    mechanismOfAction:
      "An epimer of Doxorubicin that differs only in the orientation of the C-4 hydroxyl group on the daunosamine sugar ring. Because of this slight change in structure, Epirubicin has a distinct metabolic pathway (glucuronidation) leading to faster elimination and lower cardiotoxicity than Doxorubicin at equivalent doses.",
    therapeuticUses: [
      "Approved as adjuvant therapy in patients with axillary node tumor involvement after surgery removal of primary breast cancer (node-positive breast cancer patients).",
      "Also used in Breast and Ovarian Cancer, Gastric Cancer (ECF / ECX regimens), Lung Cancer, and Lymphomas."
    ],
    commonSideEffects: ["Red urine", "Alopecia", "Nausea", "Myelosuppression"],
    severeSideEffects: ["Cardiotoxicity (cumulative dose limit 900 mg/m2, higher than doxorubicin)", "Extravasation necrosis"],
    administration: ["IV infusion"],
    slideRef: "Slide 53"
  },
  {
    id: "valrubicin",
    name: "Valrubicin",
    phonetic: "[val-ROO-bi-sin]",
    brandNames: ["Valstar®"],
    classId: "class-3",
    subclass: "Anthracyclines",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "N-trifluoroacetyl, 1,4-valerate derivative of Doxorubicin",
    mechanismOfAction:
      "Semisynthetic anthracycline derivative that enters cells more rapidly than Doxorubicin due to increased lipophilicity; incorporates into DNA and inhibits topoisomerase II.",
    therapeuticUses: [
      "Used specifically in the treatment of BCG-refractory carcinoma in situ of the Bladder Cancer (administered by intravesical infusion directly into the bladder via catheter)."
    ],
    commonSideEffects: ["Local bladder symptoms: dysuria, urinary frequency, urgency, hematuria"],
    severeSideEffects: ["Bladder spasm", "Severe irritable bladder"],
    administration: ["Intravesical bladder instillation ONLY (retained for 2 hours)"],
    slideRef: "Slide 54"
  },
  {
    id: "mitoxantrone",
    name: "Mitoxantrone",
    phonetic: "[mye-toe-ZAN-trone]",
    brandNames: ["Novantrone®"],
    classId: "class-3",
    subclass: "Anthracyclines",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Dihydroxyanthracenedione (anthracene compound resembling anthracyclines)",
    mechanismOfAction:
      "Dihydroxyanthracenedione synthetic anthracene compound whose structure resembles the Anthracycline ring. Intercalates into DNA causing cross-links and strand breaks; inhibits topoisomerase II. Less potent free radical generator than doxorubicin.",
    therapeuticUses: [
      "Advanced, hormone-refractory Prostate Cancer (in combination with Prednisone).",
      "Low-grade Non-Hodgkin's Lymphoma.",
      "Breast Cancer and Acute Myeloid Leukemias (AML).",
      "Also approved and used to treat secondary progressive Multiple Sclerosis (MS)."
    ],
    commonSideEffects: [
      "Blue-green discoloration of urine and whites of the eyes (sclera) for 24-48 hours",
      "Myelosuppression",
      "Nausea"
    ],
    severeSideEffects: ["Cardiotoxicity and congestive heart failure (lifetime dose limit)", "Secondary acute leukemia"],
    administration: ["IV infusion (never subcutaneous or IM)"],
    slideRef: "Slide 54"
  },

  // GROUP III: CYTOTOXIC ANTIBIOTICS - OTHERS
  {
    id: "bleomycin",
    name: "Bleomycin",
    phonetic: "[blee-oh-MYE-sin]",
    brandNames: ["Blenoxane®"],
    classId: "class-3",
    subclass: "Other Antibiotics",
    cellCyclePhase: "Cell cycle specific (G2 phase)",
    chemicalType: "Glycopeptide antibiotic isolated from Streptomyces verticillus (early 1960s)",
    mechanismOfAction:
      "Small peptide that contains a DNA-binding region and an iron-binding domain at opposite ends of the molecule, forming a DNA–Bleomycin–Fe2+ complex. This complex undergoes oxidation to Bleomycin–Fe3+. The liberated electrons react with oxygen to form superoxide or hydroxyl free radicals, which in turn attack the phosphodiester bonds of DNA, resulting in strand breakage and chromosomal aberrations. Bleomycin is cell cycle specific, arresting cells predominantly in G2 phase.",
    pharmacokinetics: {
      absorption: "Rapidly absorbed after IM, SC, IV, intraperitoneal, or intrapleural administration.",
      distribution: "Widely distributed in tissues.",
      metabolism: "Bleomycin is inactivated by hydrolase enzyme (bleomycin deaminase). This enzyme is widely distributed in normal tissues with the critical exception of the SKIN and LUNGS; both organs are therefore the major targets of Bleomycin toxicity!",
      excretion: "Primary in urine."
    },
    therapeuticUses: [
      "Squamous Cell Carcinoma (head and neck, cervix, skin, penis, vulva).",
      "Hodgkin's Disease (part of ABVD and BEACOPP regimens).",
      "Non-Hodgkin's Lymphoma.",
      "Testicular Carcinoma (part of curative BEP regimen with Cisplatin and Etoposide).",
      "Pleural Sclerosing (instilled into pleural cavity for malignant pleural effusion)."
    ],
    resistanceMechanisms: [
      "Increased levels of Bleomycin hydrolase or deaminase enzymes",
      "Increased glutathione S-transferase enzymes",
      "Increased efflux of the drug",
      "Enhanced cellular DNA repair mechanisms"
    ],
    commonSideEffects: [
      "Mucocutaneous (and skin) Toxicity (>50%): including rash, erythema, hyperpigmentation (flagellate hyperpigmentation), urticaria, and hypertrophic skin changes (hyperkeratosis, peeling of palms and soles)",
      "Alopecia and allergic reactions",
      "Fever and chills shortly after infusion"
    ],
    severeSideEffects: [
      "PULMONARY TOXICITY ('Bleomycin Lung'): Pneumonitis presenting with dry cough, dyspnea, tachypnea, rales, and progressive pulmonary fibrosis (occurring in ~10% of patients; can be fatal; lifetime cumulative dose capped at 400 units)",
      "High inspired oxygen concentrations (e.g. during surgery) trigger acute pulmonary toxicity in bleomycin-exposed patients"
    ],
    monitoringAndPearls: [
      "Baseline and serial Pulmonary Function Tests (DLCO - carbon monoxide diffusing capacity).",
      "Notify anesthesiologists: patients treated with Bleomycin should receive lowest possible FiO2 during general anesthesia to avoid lethal pulmonary syndrome."
    ],
    administration: ["IV", "IM", "SC", "Intrapleural"],
    slideRef: "Slides 54-55"
  },
  {
    id: "mitomycin",
    name: "Mitomycin (Mitomycin C)",
    phonetic: "[mye-toe-MYE-sin]",
    brandNames: ["Mutamycin®", "Jelmyto®"],
    classId: "class-3",
    subclass: "Other Antibiotics",
    cellCyclePhase: "Active in all phases of the cell cycle",
    chemicalType: "Antibiotic isolated from Streptomyces caespitosus",
    mechanismOfAction:
      "After metabolic activation via intracellular enzyme-mediated reduction, it generates an active alkylating agent that cross-links DNA. Hypoxic tumor stem cells of solid tumors are MORE sensitive to the cytotoxic effects of Mitomycin than normal cells and oxygenated tumor cells. Therefore, it is the best available drug for use in combination with radiation therapy to attack hypoxic tumor cells. Active in all phases of the cell cycle.",
    therapeuticUses: [
      "Treatment of Cancer of the Stomach or Pancreas.",
      "Also used in treatment of Cancer of Anal canal (combined with 5-FU and radiation), Bladder (intravesical), Breast, Cervical, Colorectal, Head and Neck, and Non-Small Cell Lung Cancer.",
      "Pyelocalyceal instillation (Jelmyto®) for upper tract urothelial cancer."
    ],
    commonSideEffects: ["Myelosuppression (delayed and cumulative)", "Nausea and vomiting", "Fever"],
    severeSideEffects: [
      "Hemolytic Uremic Syndrome (HUS): Progressive renal failure, microangiopathic hemolytic anemia, low platelet count, and permanent kidney failure.",
      "Interstitial pneumonitis and pulmonary fibrosis",
      "Severe tissue necrosis upon extravasation"
    ],
    administration: ["IV infusion", "Intravesical (bladder instillation)"],
    slideRef: "Slide 56"
  },
  {
    id: "dactinomycin",
    name: "Dactinomycin (Actinomycin D)",
    phonetic: "[DAK-tin-oh-MYE-sin]",
    brandNames: ["Cosmegen®"],
    classId: "class-3",
    subclass: "Other Antibiotics",
    cellCyclePhase: "Cell cycle non-specific",
    chemicalType: "Chromopeptide antibiotic from Streptomyces species",
    mechanismOfAction:
      "Dactinomycin or Actinomycin D was the FIRST antibiotic shown to have anticancer activity. Binds tightly to double-stranded DNA by intercalation between adjacent guanine-cytosine base pairs, blocking RNA polymerase movement and inhibiting RNA synthesis (especially ribosomal RNA). Also causes single-strand DNA breaks via topoisomerase II and free radicals. Also used as a radio-sensitizer (increases the radio-sensitivity of tumor cells).",
    therapeuticUses: [
      "Wilms' Tumor (cancer of the kidneys that typically occurs in children).",
      "Ewing's Sarcoma (a rare type of cancer that occurs in bones).",
      "Gestational Trophoblastic Neoplasm (choriocarcinoma).",
      "Metastatic Testicular Tumors.",
      "Childhood Rhabdomyosarcoma.",
      "Certain types of Ovarian Cancer."
    ],
    commonSideEffects: ["Nausea and vomiting", "Mucositis and stomatitis", "Alopecia", "Myelosuppression"],
    severeSideEffects: [
      "Severe tissue necrosis upon extravasation",
      "Radiation recall phenomenon (erythema, ulceration in previously irradiated tissue fields)",
      "Hepatic veno-occlusive disease"
    ],
    administration: ["IV injection / infusion"],
    slideRef: "Slide 56"
  }
];
