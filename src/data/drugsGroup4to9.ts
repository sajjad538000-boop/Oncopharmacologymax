import { Drug, DrugClass } from "../types";

export const DRUG_CLASSES_4_TO_9: DrugClass[] = [
  {
    id: "class-4",
    romanNumeral: "IV",
    title: "Microtubule Inhibitors",
    arabicTitle: "مثبطات الأنيبيبات الدقيقة",
    shortDesc: "Cell cycle specific (M-phase) antimitotic agents that disrupt the mitotic spindle apparatus by binding to tubulin subunits.",
    colorScheme: {
      badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300",
      border: "border-cyan-500",
      bg: "bg-cyan-50 dark:bg-cyan-950/40",
      accent: "text-cyan-600 dark:text-cyan-400",
      gradient: "from-cyan-500 to-blue-700"
    },
    subgroups: ["Vinca Alkaloids", "Taxanes", "Epothilones", "Estramustine"],
    keyHighlights: [
      "Vincas inhibit tubulin polymerization; Taxanes prevent microtubule depolymerization (freeze spindle)",
      "Vincristine is FATAL if administered intrathecally (IV ONLY!) - peripheral neuropathy & constipation",
      "Taxane premedication: Paclitaxel requires H1+H2 blocker + Dexamethasone (Cremophor EL hypersensitivity)"
    ]
  },
  {
    id: "class-5",
    romanNumeral: "V",
    title: "Endocrine / Hormonal Therapy",
    arabicTitle: "العلاج الهرموني للسرطان",
    shortDesc: "Modulates hormone-responsive cancers (breast, prostate, endometrium) by receptor antagonism, estrogen synthesis blockade, or androgen ablation.",
    colorScheme: {
      badge: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
      border: "border-purple-500",
      bg: "bg-purple-50 dark:bg-purple-950/40",
      accent: "text-purple-600 dark:text-purple-400",
      gradient: "from-purple-500 to-violet-700"
    },
    subgroups: ["SERMs", "Pure Antiestrogens", "Aromatase Inhibitors", "GnRH / LHRH Agonists", "Antiandrogens", "CYP17 Inhibitors", "Progestins & Glucocorticoids"],
    keyHighlights: [
      "Tamoxifen (SERM): Antagonist in breast, partial agonist in endometrium and bone (increases endometrial cancer & DVT risk)",
      "Aromatase Inhibitors (Anastrozole, Letrozole, Exemestane): First-line for postmenopausal ER+ breast cancer",
      "GnRH agonists cause initial flare; prevent with antiandrogen (bicalutamide/flutamide)"
    ]
  },
  {
    id: "class-6",
    romanNumeral: "VI",
    title: "Monoclonal Antibodies",
    arabicTitle: "الأجسام المضادة أحادية النسيلة",
    shortDesc: "Targeted biologics directed against specific cell surface receptors, oncogenic antigens, or vascular endothelial growth factors.",
    colorScheme: {
      badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300",
      border: "border-indigo-500",
      bg: "bg-indigo-50 dark:bg-indigo-950/40",
      accent: "text-indigo-600 dark:text-indigo-400",
      gradient: "from-indigo-500 to-sky-700"
    },
    subgroups: ["Anti-HER2 (Trastuzumab, Pertuzumab)", "Anti-EGFR (Cetuximab, Panitumumab)", "Anti-VEGF (Bevacizumab)", "Anti-CD20 (Rituximab)", "Anti-CD52 (Alemtuzumab)", "Antibody-Drug Conjugates (Brentuximab vedotin)"],
    keyHighlights: [
      "Trastuzumab: Targets HER2/neu; causes reversible cardiomyopathy (monitor LVEF, avoid anthracycline combination)",
      "Bevacizumab: Binds circulating VEGF-A; causes hypertension, bleeding, arterial thrombosis, and impaired wound healing",
      "Rituximab: CD20 target; causes severe infusion reactions and Hepatitis B reactivation (pre-screen mandatory)"
    ]
  },
  {
    id: "class-7",
    romanNumeral: "VII",
    title: "Tyrosine Kinase Inhibitors (TKIs)",
    arabicTitle: "مثبطات التيروسين كيناز",
    shortDesc: "Small molecule intracellular inhibitors blocking ATP-binding sites on driver oncogenic kinase domains.",
    colorScheme: {
      badge: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
      border: "border-teal-500",
      bg: "bg-teal-50 dark:bg-teal-950/40",
      accent: "text-teal-600 dark:text-teal-400",
      gradient: "from-teal-500 to-emerald-700"
    },
    subgroups: ["BCR-ABL Inhibitors", "EGFR TKIs", "Multi-Targeted VEGFR/PDGFR TKIs", "ALK Inhibitors", "BRAF/MEK Inhibitors"],
    keyHighlights: [
      "Imatinib (Gleevec®): Revolutionized CML (Philadelphia chromosome BCR-ABL) and GIST (KIT mutation)",
      "EGFR TKIs (Erlotinib, Gefitinib, Osimertinib): First-line in EGFR-mutant NSCLC; papulopustular acneiform skin rash indicates response",
      "Osimertinib: Overcomes the T790M resistance mutation in EGFR"
    ]
  },
  {
    id: "class-8",
    romanNumeral: "VIII",
    title: "Topoisomerase Inhibitors",
    arabicTitle: "مثبطات التوبويزوميراز",
    shortDesc: "Plant-derived alkaloids that bind topoisomerase-DNA cleavage complexes, preventing relegation and producing lethal double-strand breaks.",
    colorScheme: {
      badge: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
      border: "border-orange-500",
      bg: "bg-orange-50 dark:bg-orange-950/40",
      accent: "text-orange-600 dark:text-orange-400",
      gradient: "from-orange-500 to-amber-700"
    },
    subgroups: ["Topoisomerase I Inhibitors (Camptothecins: Irinotecan, Topotecan)", "Topoisomerase II Inhibitors (Podophyllotoxins: Etoposide, Teniposide)"],
    keyHighlights: [
      "Irinotecan: Acute cholinergic diarrhea treated with Atropine; delayed life-threatening diarrhea treated with high-dose Loperamide",
      "Topotecan: S-phase specific topoisomerase I inhibitor for ovarian and small cell lung cancer",
      "Etoposide: S-to-G2 phase specific; hypotension if infused rapidly; secondary leukemia risk"
    ]
  },
  {
    id: "class-9",
    romanNumeral: "IX",
    title: "Other Chemotherapeutic Agents",
    arabicTitle: "عوامل علاجية كيميائية أخرى",
    shortDesc: "Diverse antineoplastics with unique mechanisms including enzymatic amino acid depletion, ribonucleotide reductase blockade, proteasome inhibition, differentiation induction, and immunomodulation.",
    colorScheme: {
      badge: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950 dark:text-fuchsia-300",
      border: "border-fuchsia-500",
      bg: "bg-fuchsia-50 dark:bg-fuchsia-950/40",
      accent: "text-fuchsia-600 dark:text-fuchsia-400",
      gradient: "from-fuchsia-500 to-pink-700"
    },
    subgroups: ["Enzymes (L-Asparaginase)", "Ribonucleotide Reductase Inhibitor (Hydroxyurea)", "Heavy Metals (Arsenic Trioxide)", "Immunomodulatory Drugs (Thalidomide, Lenalidomide)", "Proteasome Inhibitors (Bortezomib)", "Retinoids (Tretinoin / ATRA)"],
    keyHighlights: [
      "L-Asparaginase: Hydrolyzes serum L-asparagine; leukemic cells lack asparagine synthetase; causes pancreatitis, thrombosis & hypersensitivity",
      "Bortezomib: 26S proteasome inhibitor for Multiple Myeloma; painful peripheral neuropathy and herpes zoster reactivation (acyclovir prophylaxis)",
      "ATRA (Tretinoin): Induces differentiation of APL promyelocytes; Differentiation Syndrome treated urgently with Dexamethasone"
    ]
  }
];

export const DRUGS_GROUP_4_TO_9: Drug[] = [
  // GROUP IV: MICROTUBULE INHIBITORS - VINCA ALKALOIDS
  {
    id: "vincristine",
    name: "Vincristine (Oncovin)",
    phonetic: "[vin-KRIS-teen]",
    brandNames: ["Oncovin®", "Vincasar PFS®", "Marqibo® (liposomal)"],
    classId: "class-4",
    subclass: "Vinca Alkaloids",
    cellCyclePhase: "M-phase specific",
    chemicalType: "Alkaloid isolated from Madagascar periwinkle (Catharanthus roseus / Vinca rosea)",
    mechanismOfAction:
      "Vinca alkaloid that binds specifically to beta-tubulin at the vinca domain, inhibiting the polymerization of tubulin dimers into microtubules. This disrupts the mitotic spindle apparatus, arresting dividing cells in metaphase of mitosis (M phase), triggering cell death.",
    therapeuticUses: [
      "Acute Lymphocytic Leukemia (ALL) in children.",
      "Hodgkin's Disease (MOPP, BEACOPP regimens).",
      "Non-Hodgkin's Lymphoma (CHOP regimen).",
      "Wilms' Tumor, Neuroblastoma, Ewing's Sarcoma, Rhabdomyosarcoma, and Small Cell Lung Cancer (CAV regimen)."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: FOR INTRAVENOUS USE ONLY. FATAL IF GIVEN BY OTHER ROUTES, ESPECIALLY INTRATHECAL. Intrathecal administration results in ascending encephalopathy and 100% agonizing fatality. Syringes must be labeled 'FOR INTRAVENOUS USE ONLY - FATAL IF GIVEN BY OTHER ROUTES'."
    ],
    commonSideEffects: [
      "Severe Constipation and abdominal cramps (due to autonomic neuropathy; stool softeners and laxatives must be prescribed)",
      "Alopecia (reversible)",
      "Mild myelosuppression (spares bone marrow compared to vinblastine)"
    ],
    severeSideEffects: [
      "Dose-limiting Peripheral Neuropathy (paresthesias, numbness in fingers and toes, loss of deep tendon reflexes, foot drop, wrist drop, cranial nerve palsies)",
      "Paralytic ileus",
      "Extravasation necrosis (vesicant; treat with warm compresses and local hyaluronidase injection)",
      "SIADH (Syndrome of Inappropriate Antidiuretic Hormone secretion - severe hyponatremia)"
    ],
    antidoteOrProtectiveAgent: "Hyaluronidase + warm compresses for extravasation; prophylactic bowel regimen (docusate + senna).",
    administration: ["IV infusion in piggyback mini-bag ONLY (NEVER in a syringe)"],
    slideRef: "Slides 58-59"
  },
  {
    id: "vinblastine",
    name: "Vinblastine",
    phonetic: "[vin-BLAS-teen]",
    brandNames: ["Velban®"],
    classId: "class-4",
    subclass: "Vinca Alkaloids",
    cellCyclePhase: "M-phase specific",
    mechanismOfAction:
      "Binds to tubulin and inhibits microtubule formation, arresting the mitotic spindle in metaphase (M phase). Chemically similar to vincristine but differs markedly in toxicity profile (vinblastine is a potent bone marrow suppressant, while vincristine primarily causes neurotoxicity).",
    therapeuticUses: [
      "Hodgkin's Disease (cornerstone of the ABVD regimen).",
      "Testicular Germ Cell Tumors.",
      "Kaposi's Sarcoma, Breast Cancer, Choriocarcinoma, and Bladder Cancer (MVAC regimen)."
    ],
    fdaWarnings: [
      "FATAL IF GIVEN INTRATHECALLY. For IV use only."
    ],
    commonSideEffects: ["Nausea and vomiting", "Alopecia", "Stomatitis"],
    severeSideEffects: [
      "Dose-limiting Bone Marrow Suppression (severe leukopenia and neutropenia)",
      "Extravasation tissue sloughing and necrosis",
      "Peripheral neuropathy (significantly less frequent than with vincristine)"
    ],
    antidoteOrProtectiveAgent: "Hyaluronidase + warm compresses for extravasation.",
    administration: ["IV injection / infusion ONLY"],
    slideRef: "Slide 60"
  },
  {
    id: "vinorelbine",
    name: "Vinorelbine",
    phonetic: "[vi-NOR-el-been]",
    brandNames: ["Navelbine®"],
    classId: "class-4",
    subclass: "Vinca Alkaloids",
    cellCyclePhase: "M-phase specific",
    chemicalType: "Semisynthetic vinca alkaloid derivative",
    mechanismOfAction:
      "Semisynthetic vinca alkaloid that interferes with microtubule assembly, arresting cells in mitosis.",
    therapeuticUses: [
      "Non-Small Cell Lung Cancer (NSCLC) - single agent or in combination with Cisplatin.",
      "Advanced or Metastatic Breast Cancer."
    ],
    fdaWarnings: ["FOR IV USE ONLY. Fatal if administered intrathecally."],
    commonSideEffects: ["Mild nausea", "Constipation", "Fatigue", "Injection site phlebitis"],
    severeSideEffects: [
      "Dose-limiting Granulocytopenia (neutropenia)",
      "Peripheral sensory and motor neuropathy",
      "Severe vesicant extravasation injury"
    ],
    administration: ["IV infusion over 6-10 minutes"],
    slideRef: "Slide 60"
  },

  // GROUP IV: MICROTUBULE INHIBITORS - TAXANES
  {
    id: "paclitaxel",
    name: "Paclitaxel",
    phonetic: "[pak-li-TAX-el]",
    brandNames: ["Taxol®", "Abraxane® (albumin-bound nanoparticle)"],
    classId: "class-4",
    subclass: "Taxanes",
    cellCyclePhase: "M-phase specific",
    chemicalType: "Diterpenoid alkaloid originally extracted from Pacific yew bark (Taxus brevifolia)",
    mechanismOfAction:
      "Taxanes act through an entirely OPPOSITE mechanism to vinca alkaloids: Rather than inhibiting tubulin assembly, Paclitaxel promotes the assembly of microtubules from tubulin dimers and stabilizes them by preventing depolymerization. This produces non-functional, excessively stable microtubule bundles that freeze the mitotic spindle, arresting cells in mitosis and leading to apoptotic cell death.",
    pharmacokinetics: {
      absorption: "IV infusion.",
      formulations: "Taxol® is formulated in a vehicle of polyoxyethylated castor oil (Cremophor EL) and dehydrated ethanol, which leaches di-(2-ethylhexyl)phthalate (DEHP) from PVC infusion bags and tubing (must use non-PVC containers and in-line polyethersulfone filters). Abraxane® is an albumin-bound nanoparticle form that does not require Cremophor EL and eliminates hypersensitivity risks and DEHP leaching."
    },
    therapeuticUses: [
      "Advanced Ovarian Cancer (first-line with Cisplatin/Carboplatin).",
      "Metastatic Breast Cancer (adjuvant and metastatic).",
      "Non-Small Cell Lung Cancer (NSCLC).",
      "AIDS-related Kaposi's Sarcoma (second-line)."
    ],
    fdaWarnings: [
      "Severe Hypersensitivity Reactions: Cremophor EL causes life-threatening anaphylactoid reactions (dyspnea, hypotension, bronchospasm, urticaria) in up to 30% of patients without premedication. Premedication with oral Dexamethasone, IV Diphenhydramine (H1 antagonist), and IV Ranitidine/Famotidine (H2 antagonist) is mandatory 30-60 minutes prior to infusion."
    ],
    commonSideEffects: [
      "Complete alopecia (hair loss including eyelashes/eyebrows)",
      "Myalgias and arthralgias (typically 2-3 days after infusion)",
      "Mild nausea and diarrhea"
    ],
    severeSideEffects: [
      "Severe dose-limiting Neutropenia",
      "Peripheral sensory neuropathy (distal glove-and-stocking paresthesias, numbness)",
      "Severe anaphylactoid shock",
      "Bradycardia and heart block"
    ],
    antidoteOrProtectiveAgent: "Premedication with Dexamethasone + H1-blocker + H2-blocker; use non-PVC tubing with 0.22 micron in-line filter.",
    administration: ["IV infusion (3-hour or 24-hour)"],
    slideRef: "Slides 61-62"
  },
  {
    id: "docetaxel",
    name: "Docetaxel",
    phonetic: "[doe-se-TAX-el]",
    brandNames: ["Taxotere®"],
    classId: "class-4",
    subclass: "Taxanes",
    cellCyclePhase: "M-phase specific",
    chemicalType: "Semisynthetic taxane synthesized from precursor extracted from European yew needles (Taxus baccata)",
    mechanismOfAction:
      "Promotes microtubule assembly and inhibits microtubule disassembly with approximately 2-fold higher affinity for the beta-tubulin subunit than paclitaxel.",
    therapeuticUses: [
      "Breast Cancer (adjuvant in TAC regimen and for locally advanced/metastatic disease).",
      "Non-Small Cell Lung Cancer (NSCLC).",
      "Castration-Resistant Metastatic Prostate Cancer (in combination with Prednisone).",
      "Gastric Adenocarcinoma and Head and Neck Cancer."
    ],
    fdaWarnings: [
      "Docetaxel formulation contains polysorbate 80 (Tween 80). Premedication with oral Dexamethasone (8 mg twice daily for 3 days, starting 1 day before Docetaxel) is mandatory to reduce the incidence and severity of Fluid Retention Syndrome and hypersensitivity reactions."
    ],
    commonSideEffects: ["Alopecia", "Nail changes (onycholysis, pigmentation)", "Fatigue", "Myalgias"],
    severeSideEffects: [
      "Fluid Retention Syndrome: Generalized peripheral edema, pleural effusion, and ascites refractory to diuretics if not premedicated with dexamethasone.",
      "Severe dose-limiting Neutropenia (febrile neutropenia risk; contraindication if neutrophils < 1,500/mm3)",
      "Peripheral sensory neuropathy"
    ],
    antidoteOrProtectiveAgent: "Oral Dexamethasone 8 mg BID x 3 days starting the day before chemotherapy.",
    administration: ["IV infusion over 1 hour"],
    slideRef: "Slide 63"
  },
  {
    id: "cabazitaxel",
    name: "Cabazitaxel",
    phonetic: "[ka-BAZ-i-tax-el]",
    brandNames: ["Jevtana®"],
    classId: "class-4",
    subclass: "Taxanes",
    cellCyclePhase: "M-phase specific",
    chemicalType: "Dimethoxy semisynthetic taxane derivative",
    mechanismOfAction:
      "Microtubule stabilizer designed to overcome P-glycoprotein-mediated multi-drug resistance; poor substrate for the ATP-dependent multidrug resistance efflux pump.",
    therapeuticUses: [
      "Second-line treatment of Metastatic Castration-Resistant Prostate Cancer (mCRPC) previously treated with a docetaxel-containing regimen (combined with prednisone)."
    ],
    commonSideEffects: ["Diarrhea", "Fatigue", "Nausea", "Anemia"],
    severeSideEffects: [
      "Severe Neutropenia and febrile neutropenia (G-CSF primary prophylaxis recommended)",
      "Severe hypersensitivity reactions",
      "Renal failure and severe diarrhea"
    ],
    antidoteOrProtectiveAgent: "Premedication with antihistamines + corticosteroids + H2-antagonist; G-CSF prophylaxis.",
    administration: ["IV infusion over 1 hour"],
    slideRef: "Slide 64"
  },
  {
    id: "ixabepilone",
    name: "Ixabepilone",
    phonetic: "[ix-a-BEP-i-lone]",
    brandNames: ["Ixempra®"],
    classId: "class-4",
    subclass: "Epothilones",
    cellCyclePhase: "M-phase specific",
    chemicalType: "Semisynthetic analog of epothilone B (polyketide macrolide)",
    mechanismOfAction:
      "Binds directly to beta-tubulin subunits at a site distinct from taxanes, stabilizing microtubules and causing mitotic arrest at the G2-M transition. Retains cytotoxic activity in taxane-resistant tumors expressing P-glycoprotein or beta-III-tubulin isotypes.",
    therapeuticUses: [
      "Metastatic or locally advanced Breast Cancer resistant or refractory to Anthracyclines and Taxanes (as monotherapy or in combination with Capecitabine)."
    ],
    commonSideEffects: ["Fatigue", "Myalgias", "Stomatitis", "Alopecia"],
    severeSideEffects: [
      "Severe Peripheral Sensory Neuropathy (dose-limiting; usually reversible upon discontinuation)",
      "Severe Myelosuppression (neutropenia)",
      "Hypersensitivity reactions (formulated with Cremophor EL-like vehicle)"
    ],
    antidoteOrProtectiveAgent: "Premedication with H1 and H2 blockers.",
    administration: ["IV infusion over 3 hours"],
    slideRef: "Slide 64"
  },

  // GROUP V: ENDOCRINE / HORMONAL THERAPY
  {
    id: "tamoxifen",
    name: "Tamoxifen",
    phonetic: "[ta-MOX-i-fen]",
    brandNames: ["Nolvadex®", "Soltamox®"],
    classId: "class-5",
    subclass: "SERMs",
    cellCyclePhase: "Cell cycle non-specific / G1 arrest",
    chemicalType: "Triphenylethylene selective estrogen receptor modulator (SERM)",
    mechanismOfAction:
      "Selective Estrogen Receptor Modulator (SERM). Tamoxifen binds competitively to estrogen receptors (ER) in target tissues. In the BREAST, it exhibits pure ANTAGONIST activity, preventing estrogen from stimulating breast cancer cells. However, in BONE and the ENDOMETRIUM (uterus), it exhibits partial AGONIST (estrogenic) activity, preserving bone mineral density and improving lipid profiles, but stimulating endometrial hyperplasia.",
    pharmacokinetics: {
      absorption: "Well absorbed orally.",
      metabolism: "Extensively metabolized by hepatic CYP2D6 and CYP3A4 to active metabolites: 4-hydroxytamoxifen and N-desmethyltamoxifen, which are further metabolized to Endoxifen (which has 100-fold higher ER affinity). Strong CYP2D6 inhibitors (e.g. Fluoxetine, Paroxetine, Bupropion) block conversion to endoxifen and significantly reduce tamoxifen clinical efficacy.",
      excretion: "Primarily fecal via bile."
    },
    therapeuticUses: [
      "Adjuvant treatment of Estrogen Receptor-positive (ER+) Breast Cancer in both pre-menopausal and post-menopausal women (standard duration: 5 to 10 years).",
      "Treatment of Metastatic ER+ Breast Cancer.",
      "Primary chemoprevention of breast cancer in high-risk women (reduces risk by ~50%).",
      "Ductal Carcinoma In Situ (DCIS) after surgery and radiation."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: UTERINE MALIGNANCIES AND THROMBOEMBOLIC EVENTS. Increased risk of endometrial adenocarcinoma and uterine sarcoma (2-3 fold elevation) and serious thromboembolic events (deep vein thrombosis [DVT], pulmonary embolism [PE], stroke)."
    ],
    commonSideEffects: [
      "Hot flashes and night sweats (vasomotor symptoms, ~80%)",
      "Vaginal discharge or dryness",
      "Irregular menses in premenopausal women",
      "Mild nausea and fluid retention"
    ],
    severeSideEffects: [
      "Endometrial hyperplasia, polyps, and Endometrial Cancer (must investigate any abnormal postmenopausal vaginal bleeding immediately)",
      "Venous Thromboembolism (DVT and PE)",
      "Ocular toxicity (corneal deposits, cataracts, retinal changes)",
      "Hypercalcemia (especially during initial therapy in patients with bone metastases)"
    ],
    drugInteractions: [
      "Avoid strong CYP2D6 inhibitors (Paroxetine, Fluoxetine); prefer Venlafaxine or Gabapentin for treating tamoxifen-induced hot flashes."
    ],
    administration: ["Oral tablets daily"],
    slideRef: "Slides 66-67"
  },
  {
    id: "raloxifene",
    name: "Raloxifene",
    phonetic: "[ra-LOX-i-feen]",
    brandNames: ["Evista®"],
    classId: "class-5",
    subclass: "SERMs",
    cellCyclePhase: "G1 arrest",
    chemicalType: "Benzothiophene non-steroidal SERM",
    mechanismOfAction:
      "Second-generation SERM that acts as an estrogen antagonist in breast and uterine endometrium, but acts as an estrogen agonist on bone and lipid metabolism. Unlike tamoxifen, it does NOT stimulate endometrial proliferation.",
    therapeuticUses: [
      "Prevention and treatment of Postmenopausal Osteoporosis.",
      "Reduction in the risk of invasive Breast Cancer in postmenopausal women with osteoporosis or at high risk of breast cancer (STAR trial)."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: Increased risk of venous thromboembolism (DVT, PE) and death from stroke in postmenopausal women."
    ],
    commonSideEffects: ["Hot flashes", "Leg cramps", "Peripheral edema"],
    severeSideEffects: ["Deep vein thrombosis (DVT)", "Pulmonary embolism (PE)"],
    administration: ["Oral tablet once daily"],
    slideRef: "Slide 67"
  },
  {
    id: "fulvestrant",
    name: "Fulvestrant",
    phonetic: "[fool-VES-trant]",
    brandNames: ["Faslodex®"],
    classId: "class-5",
    subclass: "Pure Antiestrogens",
    cellCyclePhase: "G1 arrest",
    chemicalType: "Steroidal pure antiestrogen / selective estrogen receptor down-regulator (SERD)",
    mechanismOfAction:
      "Pure antiestrogen / Selective Estrogen Receptor Down-regulator (SERD). Completely lacks estrogen agonist activity. Binds to estrogen receptors with high affinity, competitively inhibiting estrogen binding; impairs receptor dimerization, accelerates estrogen receptor degradation, and halts cellular transcription.",
    therapeuticUses: [
      "Treatment of ER+ locally advanced or metastatic Breast Cancer in postmenopausal women with disease progression following prior antiestrogen therapy."
    ],
    commonSideEffects: ["Injection site pain", "Hot flashes", "Headache", "Nausea", "Fatigue"],
    severeSideEffects: ["Hepatic impairment", "Deep injection site bleeding"],
    administration: ["Intramuscular (IM) injection monthly into buttock (two 250 mg injections = 500 mg dose)"],
    slideRef: "Slide 68"
  },
  {
    id: "anastrozole",
    name: "Anastrozole",
    phonetic: "[an-AS-troe-zole]",
    brandNames: ["Arimidex®"],
    classId: "class-5",
    subclass: "Aromatase Inhibitors",
    cellCyclePhase: "Non-specific",
    chemicalType: "Third-generation non-steroidal triazole aromatase inhibitor",
    mechanismOfAction:
      "Potent and highly selective non-steroidal Aromatase Inhibitor. In postmenopausal women, estrogen is produced primarily in peripheral tissues (adipose tissue, skin, muscle) by the aromatase (CYP19A1) enzyme converting adrenal androgens (androstenedione and testosterone) into estrone and estradiol. Anastrozole reversibly binds to the heme prosthetic group of aromatase, inhibiting >96% of peripheral estrogen production.",
    therapeuticUses: [
      "First-line adjuvant endocrine treatment of postmenopausal women with hormone-receptor-positive (HR+) early Breast Cancer.",
      "Treatment of advanced Breast Cancer in postmenopausal women."
    ],
    commonSideEffects: [
      "Musculoskeletal symptoms: Joint stiffness, arthralgias, and myalgias (the most frequent cause of non-compliance)",
      "Hot flashes",
      "Vaginal dryness",
      "Fatigue"
    ],
    severeSideEffects: [
      "Accelerated Bone Mineral Density loss, Osteopenia, and Osteoporotic Bone Fractures (due to complete estrogen deprivation; baseline DEXA scan and calcium/vitamin D + bisphosphonates recommended)",
      "Mild hypercholesterolemia"
    ],
    monitoringAndPearls: [
      "Ineffective in premenopausal women whose ovaries are actively producing estrogens (unless accompanied by ovarian suppression via GnRH agonists or oophorectomy).",
      "Baseline and biennial DEXA bone mineral density scans."
    ],
    administration: ["Oral tablet once daily"],
    slideRef: "Slide 68"
  },
  {
    id: "letrozole",
    name: "Letrozole",
    phonetic: "[LET-roe-zole]",
    brandNames: ["Femara®"],
    classId: "class-5",
    subclass: "Aromatase Inhibitors",
    cellCyclePhase: "Non-specific",
    chemicalType: "Third-generation non-steroidal triazole aromatase inhibitor",
    mechanismOfAction:
      "Non-steroidal competitive inhibitor of aromatase enzyme, suppressing plasma estradiol and estrone concentrations by >98%.",
    therapeuticUses: [
      "Adjuvant treatment of postmenopausal women with HR+ early Breast Cancer.",
      "Extended adjuvant treatment after 5 years of tamoxifen.",
      "First-line treatment of postmenopausal HR+ advanced breast cancer.",
      "Off-label: Ovulation induction in polycystic ovary syndrome (PCOS)."
    ],
    commonSideEffects: ["Arthralgia / bone pain", "Hot flashes", "Fatigue", "Night sweats"],
    severeSideEffects: ["Osteoporosis and fracture risk", "Hypercholesterolemia"],
    administration: ["Oral tablet once daily"],
    slideRef: "Slide 68"
  },
  {
    id: "exemestane",
    name: "Exemestane",
    phonetic: "[ex-e-MES-tane]",
    brandNames: ["Aromasin®"],
    classId: "class-5",
    subclass: "Aromatase Inhibitors",
    cellCyclePhase: "Non-specific",
    chemicalType: "Steroidal type I irreversible aromatase inactivator ('suicide inhibitor')",
    mechanismOfAction:
      "Irreversible, steroidal aromatase inactivator structurally related to androstenedione. Binds permanently to the aromatase active site ('suicide substrate'), causing irreversible enzyme inactivation.",
    therapeuticUses: [
      "Adjuvant treatment of postmenopausal HR+ early Breast Cancer (often switched after 2-3 years of tamoxifen to complete 5 years).",
      "Advanced breast cancer progressing on tamoxifen."
    ],
    commonSideEffects: ["Hot flashes", "Joint and muscle aches", "Insomnia", "Increased sweating"],
    severeSideEffects: ["Bone loss / osteoporotic fractures", "Cardiovascular events"],
    administration: ["Oral tablet once daily after a meal"],
    slideRef: "Slide 68"
  },
  {
    id: "leuprolide",
    name: "Leuprolide",
    phonetic: "[loo-PROE-lide]",
    brandNames: ["Lupron®", "Eligard®"],
    classId: "class-5",
    subclass: "GnRH / LHRH Agonists",
    cellCyclePhase: "Non-specific",
    chemicalType: "Synthetic nonapeptide analog of Gonadotropin-Releasing Hormone (GnRH)",
    mechanismOfAction:
      "Continuous administration of synthetic GnRH agonist causes initial transient stimulation of pituitary GnRH receptors (producing a 1-2 week 'hormonal flare' with surge in LH, FSH, and testosterone), followed by profound desensitization and down-regulation of GnRH receptors. This halts LH and FSH secretion, achieving medical castration (suppressing serum testosterone to castrate levels <50 ng/dL in men, and suppressing ovarian estrogen production in women).",
    therapeuticUses: [
      "Palliative treatment of Advanced / Metastatic Prostate Cancer (Androgen Deprivation Therapy [ADT]).",
      "Endometriosis and uterine fibroids.",
      "Ovarian suppression in premenopausal high-risk HR+ Breast Cancer.",
      "Precocious puberty."
    ],
    fdaWarnings: [
      "Tumor Flare Phenomenon: During the first 1-2 weeks of therapy, the surge in testosterone can stimulate tumor growth, causing increased bone pain, spinal cord compression, or acute bladder outlet obstruction. An antiandrogen (e.g. Bicalutamide or Flutamide) MUST be co-administered for at least 2 weeks prior to or concurrently with the first dose to block flare effects."
    ],
    commonSideEffects: [
      "Hot flashes and sweats",
      "Erectile dysfunction and loss of libido",
      "Gynecomastia and testicular atrophy",
      "Fatigue and mood swings"
    ],
    severeSideEffects: [
      "Loss of bone mineral density (osteoporosis and fractures)",
      "Metabolic syndrome: Insulin resistance, weight gain, increased cardiovascular risk",
      "Spinal cord compression during unblocked initial tumor flare"
    ],
    antidoteOrProtectiveAgent: "Concurrent oral Antiandrogen (e.g. Bicalutamide) to prevent disease flare.",
    administration: ["SC injection", "IM depot (1-, 3-, 4-, or 6-month formulations)"],
    slideRef: "Slide 69"
  },
  {
    id: "goserelin",
    name: "Goserelin",
    phonetic: "[GOE-se-rel-in]",
    brandNames: ["Zoladex®"],
    classId: "class-5",
    subclass: "GnRH / LHRH Agonists",
    cellCyclePhase: "Non-specific",
    chemicalType: "Synthetic decapeptide GnRH agonist implant",
    mechanismOfAction:
      "Continuous GnRH receptor stimulation down-regulates pituitary gonadotropin receptors, suppressing LH and reducing serum sex steroids to castrate levels.",
    therapeuticUses: [
      "Carcinoma of the Prostate.",
      "Advanced Breast Cancer in pre- and perimenopausal women.",
      "Endometriosis and endometrial thinning prior to ablation."
    ],
    commonSideEffects: ["Hot flashes", "Sexual dysfunction", "Sweating", "Headache"],
    severeSideEffects: ["Transient tumor flare", "Bone loss", "Cardiovascular morbidity"],
    administration: ["Subcutaneous biodegradable implant into anterior abdominal wall every 28 days or 12 weeks"],
    slideRef: "Slide 69"
  },
  {
    id: "bicalutamide",
    name: "Bicalutamide",
    phonetic: "[bye-ka-LOO-ta-mide]",
    brandNames: ["Casodex®"],
    classId: "class-5",
    subclass: "Antiandrogens",
    cellCyclePhase: "Non-specific",
    chemicalType: "Non-steroidal pure antiandrogen",
    mechanismOfAction:
      "Competitively blocks androgen receptors (AR) in target tissues, preventing DHT and testosterone binding and inhibiting androgen-dependent prostate cancer gene transcription.",
    therapeuticUses: [
      "Used in combination with a GnRH agonist (e.g. Leuprolide) for the treatment of Metastatic Carcinoma of the Prostate (Combined Androgen Blockade [CAB]), and to prevent the initial tumor flare."
    ],
    commonSideEffects: ["Hot flashes", "Gynecomastia and breast tenderness", "Asthenia", "Nausea"],
    severeSideEffects: ["Hepatotoxicity (elevated transaminases; rare hepatic failure - monitor LFTs)", "Interstitial pneumonitis"],
    administration: ["Oral tablet once daily"],
    slideRef: "Slide 69"
  },
  {
    id: "enzalutamide",
    name: "Enzalutamide",
    phonetic: "[en-za-LOO-ta-mide]",
    brandNames: ["Xtandi®"],
    classId: "class-5",
    subclass: "Antiandrogens",
    cellCyclePhase: "Non-specific",
    chemicalType: "Second-generation androgen receptor signaling inhibitor",
    mechanismOfAction:
      "Competitively inhibits androgen binding to receptors, inhibits nuclear translocation of the androgen receptor, and inhibits AR binding to chromosomal DNA.",
    therapeuticUses: [
      "Metastatic Castration-Resistant Prostate Cancer (mCRPC).",
      "Non-metastatic Castration-Resistant Prostate Cancer (nmCRPC)."
    ],
    fdaWarnings: ["Increased risk of seizures (lowers seizure threshold); use with caution in patients with CNS disorders."],
    commonSideEffects: ["Fatigue (significant)", "Back pain", "Hot flashes", "Hypertension"],
    severeSideEffects: ["Seizures (~0.9%)", "Posterior Reversible Encephalopathy Syndrome (PRES)"],
    administration: ["Oral capsules daily"],
    slideRef: "Slide 69"
  },
  {
    id: "abiraterone",
    name: "Abiraterone Acetate",
    phonetic: "[a-beer-a-TE-rone]",
    brandNames: ["Zytiga®"],
    classId: "class-5",
    subclass: "CYP17 Inhibitors",
    cellCyclePhase: "Non-specific",
    chemicalType: "Steroidal 17alpha-hydroxylase/C17,20-lyase (CYP17A1) inhibitor",
    mechanismOfAction:
      "Potent, irreversible inhibitor of CYP17A1 (17alpha-hydroxylase and C17,20-lyase), an essential enzyme in androgen biosynthesis across the testes, adrenal glands, and within prostate tumor tissue itself. Halts de novo androgen production.",
    therapeuticUses: [
      "Metastatic Castration-Resistant Prostate Cancer (mCRPC) and metastatic high-risk castration-sensitive prostate cancer.",
      "MUST be administered in combination with Prednisone (to suppress ACTH-driven mineralocorticoid excess: hypertension, hypokalemia, fluid retention)."
    ],
    commonSideEffects: ["Fluid retention", "Hypokalemia", "Hypertension", "Fatigue"],
    severeSideEffects: ["Hepatotoxicity (elevated ALT/AST)", "Severe mineralocorticoid excess without prednisone", "Adrenocortical insufficiency"],
    antidoteOrProtectiveAgent: "Mandatory concomitant Prednisone to prevent mineralocorticoid crisis.",
    administration: ["Oral tablets once daily on an empty stomach (1 hr before or 2 hr after food)"],
    slideRef: "Slide 69"
  },

  // GROUP VI: MONOCLONAL ANTIBODIES
  {
    id: "trastuzumab",
    name: "Trastuzumab",
    phonetic: "[tras-TOO-zoo-mab]",
    brandNames: ["Herceptin®"],
    classId: "class-6",
    subclass: "Anti-HER2",
    cellCyclePhase: "Non-specific (targets membrane RTK)",
    chemicalType: "Humanized IgG1 monoclonal antibody directed against HER2/neu (ErbB-2)",
    mechanismOfAction:
      "Humanized monoclonal antibody that binds with high affinity to the extracellular domain IV of the Human Epidermal Growth Factor Receptor 2 (HER2/neu / ErbB-2). Blocks downstream signaling pathways (MAPK, PI3K/AKT), promotes antibody-dependent cellular cytotoxicity (ADCC), inhibits receptor shedding, and arrests cells in G1 phase.",
    therapeuticUses: [
      "Adjuvant treatment of HER2-overexpressing Breast Cancer (node-positive or high-risk node-negative).",
      "Metastatic HER2-overexpressing Breast Cancer (monotherapy or combined with paclitaxel/docetaxel).",
      "HER2-overexpressing Metastatic Gastric or Gastroesophageal Junction Adenocarcinoma."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: CARDIOMYOPATHY (CARDIOTOXICITY). Trastuzumab can cause left ventricular dysfunction, arrhythmias, hypertension, disabling cardiac failure, and cardiac death. Cardiac toxicity is manifested as an asymptomatic decrease in LVEF. Unlike anthracyclines, trastuzumab cardiotoxicity is NOT dose-dependent and is largely REVERSIBLE upon drug cessation. However, concurrent administration with Anthracyclines (Doxorubicin, Epirubicin) markedly increases cardiac failure rates and is CONTRAINDICATED.",
      "BLACK BOX WARNING: EMBRYO-FETAL TOXICITY (oligohydramnios) and INFUSION REACTIONS."
    ],
    commonSideEffects: [
      "Infusion-related reactions: Fever, chills, nausea, headache (~40% on first infusion)",
      "Diarrhea",
      "Cough and dyspnea",
      "Fatigue"
    ],
    severeSideEffects: [
      "Congestive heart failure (decreased left ventricular ejection fraction)",
      "Severe anaphylaxis and pulmonary toxicity"
    ],
    monitoringAndPearls: [
      "Assess baseline LVEF prior to initiation and monitor every 3 months during therapy. Withhold treatment if absolute drop of >=16% from baseline or LVEF below normal range with drop >=10%."
    ],
    administration: ["IV infusion (90-minute initial loading, 30-minute maintenance)"],
    slideRef: "Slides 71-72"
  },
  {
    id: "pertuzumab",
    name: "Pertuzumab",
    phonetic: "[per-TOO-zoo-mab]",
    brandNames: ["Perjeta®"],
    classId: "class-6",
    subclass: "Anti-HER2",
    cellCyclePhase: "Non-specific",
    chemicalType: "Humanized monoclonal antibody binding extracellular domain II of HER2",
    mechanismOfAction:
      "Monoclonal antibody that specifically targets domain II of HER2, preventing HER2 from heterodimerizing with other HER family receptors (HER3, HER1, HER4). Acts synergistically with Trastuzumab (which binds domain IV) to provide dual blockade of HER2 signaling.",
    therapeuticUses: [
      "In combination with Trastuzumab and Docetaxel for neoadjuvant or metastatic treatment of HER2-positive Breast Cancer."
    ],
    commonSideEffects: ["Diarrhea", "Alopecia", "Neutropenia", "Nausea"],
    severeSideEffects: ["Cardiotoxicity (left ventricular systolic dysfunction)", "Embryo-fetal death"],
    administration: ["IV infusion"],
    slideRef: "Slide 72"
  },
  {
    id: "cetuximab",
    name: "Cetuximab",
    phonetic: "[se-TUX-i-mab]",
    brandNames: ["Erbitux®"],
    classId: "class-6",
    subclass: "Anti-EGFR",
    cellCyclePhase: "Non-specific",
    chemicalType: "Chimeric mouse/human IgG1 monoclonal antibody directed against EGFR (ErbB-1)",
    mechanismOfAction:
      "Binds specifically to the extracellular domain of EGFR (HER1/ErbB-1), competitively blocking ligand binding (EGF, TGF-alpha), preventing receptor dimerization, phosphorylation, and activation. Induces EGFR internalization and degradation.",
    therapeuticUses: [
      "KRAS Wild-Type Metastatic Colorectal Cancer (ineffective if tumor harbors downstream KRAS, NRAS, or BRAF mutations).",
      "Locally or Regionally Advanced and Recurrent/Metastatic Squamous Cell Carcinoma of the Head and Neck (SCCHN)."
    ],
    fdaWarnings: [
      "Acneiform Skin Rash: Over 80% of patients develop a papulopustular acne-like skin eruption on face, neck, and upper trunk (EGFR is expressed in basal keratinocytes). Development and severity of rash correlates positively with clinical anti-tumor response and improved survival.",
      "Severe Infusion Reactions and Cardiac Arrest / Hypomagnesemia."
    ],
    commonSideEffects: [
      "Acneiform folliculitis rash",
      "Pruritus, paronychia, dry skin",
      "Hypomagnesemia (EGFR regulates renal magnesium transport; causes muscle cramps)",
      "Fatigue and diarrhea"
    ],
    severeSideEffects: ["Severe bronchospasm and anaphylaxis", "Profound hypomagnesemia and cardiac arrest", "Interstitial lung disease"],
    monitoringAndPearls: [
      "Patients must be tested for KRAS and NRAS mutations prior to therapy (only wild-type responds).",
      "Premedicate with H1-antihistamine; monitor serum magnesium and potassium regularly."
    ],
    administration: ["IV infusion"],
    slideRef: "Slide 73"
  },
  {
    id: "panitumumab",
    name: "Panitumumab",
    phonetic: "[pan-i-TOO-moo-mab]",
    brandNames: ["Vectibix®"],
    classId: "class-6",
    subclass: "Anti-EGFR",
    cellCyclePhase: "Non-specific",
    chemicalType: "Fully human IgG2 monoclonal antibody against EGFR",
    mechanismOfAction:
      "High-affinity fully human monoclonal antibody that binds EGFR, preventing ligand-induced receptor phosphorylation and activation in KRAS wild-type tumors.",
    therapeuticUses: [
      "Wild-type KRAS/NRAS Metastatic Colorectal Cancer."
    ],
    commonSideEffects: ["Acneiform dermatitis", "Pruritus", "Hypomagnesemia", "Paronychia"],
    severeSideEffects: ["Severe dermatologic toxicity with sepsis", "Severe hypomagnesemia", "Pulmonary fibrosis"],
    administration: ["IV infusion"],
    slideRef: "Slide 73"
  },
  {
    id: "bevacizumab",
    name: "Bevacizumab",
    phonetic: "[bev-a-SIZ-oo-mab]",
    brandNames: ["Avastin®"],
    classId: "class-6",
    subclass: "Anti-VEGF",
    cellCyclePhase: "Non-specific (angiogenesis inhibitor)",
    chemicalType: "Humanized IgG1 monoclonal antibody targeting circulating VEGF-A",
    mechanismOfAction:
      "Recombinant humanized monoclonal antibody that binds to all biologically active isoforms of circulating Vascular Endothelial Growth Factor A (VEGF-A), preventing VEGF from binding to its cell-surface receptors (VEGFR-1 and VEGFR-2) on vascular endothelial cells. This inhibits tumor angiogenesis (new blood vessel formation), starves the tumor of oxygen and nutrients, and normalizes tumor vasculature to improve chemotherapy delivery.",
    therapeuticUses: [
      "Metastatic Colorectal Cancer (first-line and second-line with 5-FU based regimens).",
      "Non-Squamous Non-Small Cell Lung Cancer (NSCLC).",
      "Glioblastoma (recurrent).",
      "Metastatic Renal Cell Carcinoma.",
      "Persistent, recurrent, or metastatic Cervical Cancer.",
      "Ovarian, Fallopian Tube, and Primary Peritoneal Cancers."
    ],
    fdaWarnings: [
      "BLACK BOX WARNINGS: 1) GASTROINTESTINAL PERFORATION (often fatal; presents as acute abdominal pain); 2) SURGERY AND WOUND HEALING COMPLICATIONS (wound dehiscence; must be withheld at least 28 days before and after elective surgery); 3) SEVERE HEMORRHAGE (fatal hemoptysis, CNS bleeding, GI bleeding)."
    ],
    commonSideEffects: [
      "Hypertension (frequently requiring antihypertensive medication)",
      "Proteinuria (requires regular dipstick urine checks)",
      "Epistaxis (mild nosebleeds)",
      "Headache and diarrhea"
    ],
    severeSideEffects: [
      "GI perforation and intra-abdominal fistula formation",
      "Arterial Thromboembolic Events (stroke, myocardial infarction, transient ischemic attack)",
      "Fatal pulmonary hemorrhage in squamous cell lung cancer",
      "Reversible Posterior Leukoencephalopathy Syndrome (RPLS / PRES)"
    ],
    monitoringAndPearls: [
      "Monitor blood pressure every 2-3 weeks; routine urine protein testing prior to each dose.",
      "Never administer to patients with squamous cell lung cancer due to massive hemoptysis risk."
    ],
    administration: ["IV infusion"],
    slideRef: "Slide 74"
  },
  {
    id: "rituximab",
    name: "Rituximab",
    phonetic: "[ri-TUX-i-mab]",
    brandNames: ["Rituxan®", "MabThera®"],
    classId: "class-6",
    subclass: "Anti-CD20",
    cellCyclePhase: "Non-specific",
    chemicalType: "Genetically engineered chimeric murine/human IgG1-kappa monoclonal antibody against CD20",
    mechanismOfAction:
      "Binds specifically to the transmembrane antigen CD20, expressed on pre-B and mature B lymphocytes and >90% of B-cell non-Hodgkin's lymphomas (absent on stem cells and plasma cells). Upon binding, it triggers B-cell lysis through: 1) Complement-Dependent Cytotoxicity (CDC); 2) Antibody-Dependent Cellular Cytotoxicity (ADCC); 3) Direct induction of Apoptosis.",
    therapeuticUses: [
      "Non-Hodgkin's Lymphoma (NHL) - core component of R-CHOP, R-CVP regimens.",
      "Chronic Lymphocytic Leukemia (CLL) - FCR regimen.",
      "Rheumatoid Arthritis (in patients refractory to TNF inhibitors).",
      "Granulomatosis with Polyangiitis (Wegener's) and Microscopic Polyangiitis.",
      "Pemphigus vulgaris and immune thrombocytopenia (ITP)."
    ],
    fdaWarnings: [
      "BLACK BOX WARNINGS: 1) FATAL INFUSION REACTIONS (80% of fatalities occur with first infusion; fever, rigors, bronchospasm, angioedema); 2) SEVERE MUCOCUTANEOUS REACTIONS (Stevens-Johnson syndrome, toxic epidermal necrolysis); 3) HEPATITIS B VIRUS REACTIVATION (can cause fulminant hepatitis, hepatic failure, and death; all patients must be screened for HBsAg and anti-HBc prior to therapy); 4) PROGRESSIVE MULTIFOCAL LEUKOENCEPHALOPATHY (PML; JC virus opportunistic brain demyelination)."
    ],
    commonSideEffects: ["Fever and chills during infusion", "Asthenia", "Nausea", "Headache"],
    severeSideEffects: ["Severe anaphylactoid infusion shock", "Fatal Hepatitis B reactivation", "PML", "Tumor Lysis Syndrome"],
    antidoteOrProtectiveAgent: "Mandatory pre-screening for Hepatitis B; premedication with Acetaminophen and Diphenhydramine.",
    administration: ["IV infusion (titrated slowly)"],
    slideRef: "Slide 75"
  },
  {
    id: "alemtuzumab",
    name: "Alemtuzumab",
    phonetic: "[a-lem-TOO-zoo-mab]",
    brandNames: ["Campath®", "Lemtrada®"],
    classId: "class-6",
    subclass: "Anti-CD52",
    cellCyclePhase: "Non-specific",
    chemicalType: "Recombinant humanized IgG1-kappa antibody directed against CD52",
    mechanismOfAction:
      "Targets the CD52 glycoprotein present on surface of normal and malignant B and T lymphocytes, NK cells, monocytes, and macrophages, inducing profound cell lysis via ADCC and CDC.",
    therapeuticUses: [
      "B-cell Chronic Lymphocytic Leukemia (CLL) refractory to fludarabine.",
      "Relapsing-remitting Multiple Sclerosis (Lemtrada®)."
    ],
    fdaWarnings: ["Profound prolonged lymphopenia: Requires prophylaxis against Pneumocystis jirovecii (PCP) and Herpes virus for at least 6 months post-therapy."],
    commonSideEffects: ["Infusion reactions", "Rash", "Nausea", "Fever"],
    severeSideEffects: ["Opportunistic fungal/viral infections", "Autoimmune cytopenias / thyroid disorders", "Severe prolonged immunosuppression"],
    antidoteOrProtectiveAgent: "Prophylactic Co-trimoxazole and Acyclovir/Valacyclovir.",
    administration: ["IV infusion"],
    slideRef: "Slide 75"
  },
  {
    id: "brentuximab",
    name: "Brentuximab Vedotin",
    phonetic: "[bren-TUX-i-mab ve-DOE-tin]",
    brandNames: ["Adcetris®"],
    classId: "class-6",
    subclass: "Antibody-Drug Conjugates",
    cellCyclePhase: "M-phase specific payload",
    chemicalType: "Antibody-drug conjugate (ADC) targeting CD30 conjugated to monomethyl auristatin E (MMAE)",
    mechanismOfAction:
      "Chimeric anti-CD30 antibody linked via protease-cleavable dipeptide to monomethyl auristatin E (MMAE), a potent microtubule-disrupting agent. Binds CD30 on Reed-Sternberg cells, internalizes into lysosomes where cathepsin B cleaves MMAE, causing tubulin depolymerization and mitotic catastrophe.",
    therapeuticUses: [
      "Hodgkin's Lymphoma (relapsed or frontline combined with AVD).",
      "Systemic Anaplastic Large Cell Lymphoma (sALCL) and other CD30-expressing peripheral T-cell lymphomas."
    ],
    commonSideEffects: ["Peripheral neuropathy", "Neutropenia", "Fatigue", "Nausea"],
    severeSideEffects: ["Severe sensory and motor peripheral neuropathy", "Progressive multifocal leukoencephalopathy (PML)", "Pancreatitis"],
    administration: ["IV infusion over 30 minutes every 3 weeks"],
    slideRef: "Slide 75"
  },

  // GROUP VII: TYROSINE KINASE INHIBITORS (TKIs)
  {
    id: "imatinib",
    name: "Imatinib",
    phonetic: "[eye-MAT-i-nib]",
    brandNames: ["Gleevec®", "Glivec®"],
    classId: "class-7",
    subclass: "BCR-ABL Inhibitors",
    cellCyclePhase: "Non-specific",
    chemicalType: "Phenylaminopyrimidine small molecule 2-phenylaminopyrimidine derivative",
    mechanismOfAction:
      "Revolutionary first-generation targeted tyrosine kinase inhibitor. Competitively occupies the ATP-binding pocket of the constitutively active BCR-ABL fusion protein tyrosine kinase (created by the reciprocal translocation t(9;22)(q34;q11) forming the Philadelphia chromosome). This inhibits substrate phosphorylation and downstream proliferative signaling. Also potently inhibits receptor tyrosine kinases for platelet-derived growth factor (PDGFR) and stem cell factor (c-KIT / CD117).",
    therapeuticUses: [
      "Chronic Myelogenous Leukemia (CML) in chronic, accelerated, or blast crisis phases (transformed CML into a manageable chronic condition).",
      "Philadelphia chromosome-positive Acute Lymphoblastic Leukemia (Ph+ ALL).",
      "Gastrointestinal Stromal Tumors (GIST) harboring activating c-KIT (CD117) or PDGFR-alpha mutations.",
      "Dermatofibrosarcoma protuberans and hypereosinophilic syndrome."
    ],
    pharmacokinetics: {
      absorption: "Rapid and nearly complete oral absorption (bioavailability 98%). Dosed with food and a large glass of water to minimize GI irritation.",
      metabolism: "Hepatic CYP3A4 primary metabolism into N-demethylated active metabolite.",
      excretion: "Primarily fecal (via bile)."
    },
    commonSideEffects: [
      "Superficial Edema and Fluid Retention (periorbital edema and lower extremity swelling, ~60%)",
      "Nausea, vomiting, and diarrhea",
      "Muscle cramps, arthralgias, and myalgias",
      "Skin rash and fatigue"
    ],
    severeSideEffects: [
      "Severe fluid retention (pleural effusion, pericardial effusion, pulmonary edema, ascites)",
      "Hepatotoxicity (elevated transaminases and bilirubin)",
      "Myelosuppression (neutropenia and thrombocytopenia, especially during initial weeks of CML therapy)",
      "Rare congestive heart failure"
    ],
    monitoringAndPearls: [
      "Monitor complete blood counts weekly during the first month; monitor liver function tests monthly.",
      "Resistance can emerge via point mutations in BCR-ABL kinase domain (e.g. T315I mutation), requiring second-line agents (Dasatinib, Nilotinib, Ponatinib)."
    ],
    administration: ["Oral tablets once or twice daily with a meal and water"],
    slideRef: "Slides 77-78"
  },
  {
    id: "dasatinib",
    name: "Dasatinib",
    phonetic: "[da-SA-ti-nib]",
    brandNames: ["Sprycel®"],
    classId: "class-7",
    subclass: "BCR-ABL Inhibitors",
    cellCyclePhase: "Non-specific",
    chemicalType: "Second-generation oral dual BCR-ABL and SRC family kinase inhibitor",
    mechanismOfAction:
      "Inhibits BCR-ABL kinase with 325-fold higher potency than Imatinib in vitro and binds both active and inactive conformations of BCR-ABL. Overcomes most imatinib-resistant mutations (except T315I).",
    therapeuticUses: [
      "Newly diagnosed CML in chronic phase.",
      "Chronic, accelerated, or blast crisis CML and Ph+ ALL resistant or intolerant to Imatinib."
    ],
    commonSideEffects: ["Fluid retention (pleural effusions)", "Diarrhea", "Headache", "Fatigue"],
    severeSideEffects: [
      "Pleural Effusion (frequently requires thoracentesis and dose reduction)",
      "Pulmonary Arterial Hypertension (PAH)",
      "Myelosuppression and severe bleeding"
    ],
    monitoringAndPearls: ["Monitor chest X-rays for pleural effusion and signs of dyspnea."],
    administration: ["Oral tablets daily with or without food"],
    slideRef: "Slide 78"
  },
  {
    id: "nilotinib",
    name: "Nilotinib",
    phonetic: "[nye-LOE-ti-nib]",
    brandNames: ["Tasigna®"],
    classId: "class-7",
    subclass: "BCR-ABL Inhibitors",
    cellCyclePhase: "Non-specific",
    chemicalType: "Second-generation aminopyrimidine BCR-ABL inhibitor",
    mechanismOfAction:
      "Rational design analog of Imatinib with 20-50 fold greater potency against BCR-ABL kinase; active against many imatinib-resistant BCR-ABL mutants (except T315I).",
    therapeuticUses: [
      "Newly diagnosed adult CML in chronic phase.",
      "Imatinib-resistant or intolerant CML."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: QT PROLONGATION AND SUDDEN DEATH. Causes concentration-dependent prolongation of the QTcF interval. Take on an EMPTY STOMACH (food increases bioavailability and risk of lethal ventricular arrhythmias). Baseline ECG, potassium, and magnesium checks are required."
    ],
    commonSideEffects: ["Rash", "Pruritus", "Nausea", "Headache", "Myalgias"],
    severeSideEffects: ["QT prolongation and sudden cardiac death", "Peripheral arterial occlusive disease", "Pancreatitis / elevated lipase"],
    administration: ["Oral capsules twice daily on an empty stomach (no food 2 hours before and 1 hour after)"],
    slideRef: "Slide 78"
  },
  {
    id: "erlotinib",
    name: "Erlotinib",
    phonetic: "[er-LOE-ti-nib]",
    brandNames: ["Tarceva®"],
    classId: "class-7",
    subclass: "EGFR TKIs",
    cellCyclePhase: "Non-specific",
    chemicalType: "Quinazoline small molecule reversible EGFR tyrosine kinase inhibitor",
    mechanismOfAction:
      "Reversibly competes with ATP for the intracellular kinase domain of Epidermal Growth Factor Receptor (EGFR / HER1), inhibiting receptor autophosphorylation and blocking downstream cell survival and proliferation cascades.",
    therapeuticUses: [
      "First-line treatment of patients with Metastatic Non-Small Cell Lung Cancer (NSCLC) whose tumors have EGFR exon 19 deletions or exon 21 (L858R) substitution mutations.",
      "Advanced, unresectable or metastatic Pancreatic Cancer (in combination with Gemcitabine)."
    ],
    commonSideEffects: [
      "Acneiform papulopustular skin rash (~85%; presence and severity correlates with clinical anti-tumor efficacy)",
      "Diarrhea",
      "Anorexia and fatigue",
      "Paronychia and eyelash elongation / trichomegaly"
    ],
    severeSideEffects: [
      "Interstitial Lung Disease (ILD) / pneumonitis (rare but potentially fatal)",
      "GI perforation",
      "Corneal ulceration / keratitis",
      "Hepatotoxicity"
    ],
    monitoringAndPearls: [
      "Take on an EMPTY STOMACH at least 1 hour before or 2 hours after meals (food increases bioavailability by nearly 100%).",
      "Cigarette smoking induces CYP1A2 and significantly decreases erlotinib plasma concentrations (smokers require higher doses)."
    ],
    administration: ["Oral tablet once daily on an empty stomach"],
    slideRef: "Slide 79"
  },
  {
    id: "gefitinib",
    name: "Gefitinib",
    phonetic: "[ge-FIT-i-nib]",
    brandNames: ["Iressa®"],
    classId: "class-7",
    subclass: "EGFR TKIs",
    cellCyclePhase: "Non-specific",
    chemicalType: "Anilinoquinazoline EGFR inhibitor",
    mechanismOfAction:
      "First selective inhibitor of EGFR tyrosine kinase domain; inhibits autophosphorylation and downstream pro-survival signaling in tumor cells harboring activating EGFR mutations.",
    therapeuticUses: [
      "First-line treatment of metastatic NSCLC with sensitizing EGFR mutations (exon 19 deletions or L858R)."
    ],
    commonSideEffects: ["Acneiform rash", "Diarrhea", "Dry skin", "Elevated AST/ALT"],
    severeSideEffects: ["Interstitial lung disease (ILD)", "Hepatotoxicity", "Keratitis"],
    administration: ["Oral tablet once daily with or without food"],
    slideRef: "Slide 79"
  },
  {
    id: "osimertinib",
    name: "Osimertinib",
    phonetic: "[oh-si-MER-ti-nib]",
    brandNames: ["Tagrisso®"],
    classId: "class-7",
    subclass: "EGFR TKIs",
    cellCyclePhase: "Non-specific",
    chemicalType: "Third-generation, irreversible, mutant-selective EGFR kinase inhibitor",
    mechanismOfAction:
      "Third-generation EGFR TKI that binds covalently to the C797 residue in the ATP-binding pocket. Potently inhibits both EGFR-sensitizing mutations (Ex19del, L858R) AND the gatekeeper T790M resistance mutation, while sparing wild-type EGFR (reducing skin/GI toxicities). Also crosses the blood-brain barrier effectively to control CNS metastases.",
    therapeuticUses: [
      "First-line treatment of metastatic NSCLC with EGFR exon 19 del or L858R.",
      "Treatment of metastatic EGFR T790M mutation-positive NSCLC progressing on or after first-generation EGFR TKIs."
    ],
    commonSideEffects: ["Diarrhea", "Rash", "Dry skin", "Stomatitis", "Paronychia"],
    severeSideEffects: ["Interstitial lung disease (ILD)", "QTc interval prolongation", "Cardiomyopathy (decreased LVEF)"],
    administration: ["Oral tablet once daily with or without food"],
    slideRef: "Slide 79"
  },
  {
    id: "lapatinib",
    name: "Lapatinib",
    phonetic: "[la-PAT-i-nib]",
    brandNames: ["Tykerb®"],
    classId: "class-7",
    subclass: "EGFR TKIs",
    cellCyclePhase: "Non-specific",
    chemicalType: "Dual 4-anilinoquinazoline kinase inhibitor",
    mechanismOfAction:
      "Small molecule dual inhibitor that binds intracellular kinase domains of BOTH EGFR (ErbB-1) and HER2/neu (ErbB-2), blocking downstream survival signaling cascades.",
    therapeuticUses: [
      "Advanced or metastatic HER2-overexpressing Breast Cancer progressing on prior Trastuzumab (in combination with Capecitabine).",
      "Postmenopausal hormone receptor-positive, HER2+ metastatic breast cancer (combined with an aromatase inhibitor)."
    ],
    commonSideEffects: ["Diarrhea", "Nausea", "Rash / palmar-plantar erythema", "Fatigue"],
    severeSideEffects: ["Hepatotoxicity (severe)", "Reversible decrease in left ventricular ejection fraction", "Interstitial lung disease"],
    administration: ["Oral tablets once daily on an empty stomach"],
    slideRef: "Slide 80"
  },
  {
    id: "sorafenib",
    name: "Sorafenib",
    phonetic: "[soe-RAF-e-nib]",
    brandNames: ["Nexavar®"],
    classId: "class-7",
    subclass: "Multi-Targeted VEGFR/PDGFR TKIs",
    cellCyclePhase: "Non-specific",
    chemicalType: "Bis-aryl urea multikinase inhibitor",
    mechanismOfAction:
      "Multikinase inhibitor that targets tumor cell proliferation by blocking serine/threonine kinases (C-RAF, B-RAF) and inhibits tumor angiogenesis by blocking receptor tyrosine kinases VEGFR-1, VEGFR-2, VEGFR-3, and PDGFR-beta.",
    therapeuticUses: [
      "Unresectable Hepatocellular Carcinoma (HCC / Primary Liver Cancer).",
      "Advanced Renal Cell Carcinoma (RCC).",
      "Locally recurrent or metastatic progressive Differentiated Thyroid Carcinoma refractory to radioactive iodine."
    ],
    commonSideEffects: [
      "Hand-foot skin reaction (palmar-plantar erythrodysesthesia)",
      "Diarrhea",
      "Fatigue",
      "Hypertension"
    ],
    severeSideEffects: ["Cardiac ischemia / myocardial infarction", "Severe hypertension", "GI perforation and hemorrhage", "QT prolongation"],
    administration: ["Oral tablets twice daily on an empty stomach"],
    slideRef: "Slide 80"
  },
  {
    id: "sunitinib",
    name: "Sunitinib",
    phonetic: "[soo-NIT-i-nib]",
    brandNames: ["Sutent®"],
    classId: "class-7",
    subclass: "Multi-Targeted VEGFR/PDGFR TKIs",
    cellCyclePhase: "Non-specific",
    chemicalType: "Indolinone multi-targeted receptor tyrosine kinase inhibitor",
    mechanismOfAction:
      "Inhibits multiple receptor tyrosine kinases: VEGFR-1, VEGFR-2, VEGFR-3, PDGFR-alpha, PDGFR-beta, c-KIT, FLT3, and RET. Inhibits both tumor angiogenesis and tumor cell proliferation.",
    therapeuticUses: [
      "Advanced Renal Cell Carcinoma (RCC).",
      "Gastrointestinal Stromal Tumor (GIST) after disease progression on or intolerance to Imatinib.",
      "Progressive neuroendocrine tumors of the pancreas (pNET)."
    ],
    commonSideEffects: [
      "Yellow skin and hair discoloration",
      "Fatigue and asthenia",
      "Hand-foot syndrome",
      "Diarrhea and stomatitis"
    ],
    severeSideEffects: [
      "Hepatotoxicity (liver failure)",
      "Left ventricular dysfunction / CHF",
      "Hypertension and thyroid dysfunction (hypothyroidism is very common)",
      "Bleeding and jaw osteonecrosis"
    ],
    administration: ["Oral capsules daily (often 4 weeks on, 2 weeks off)"],
    slideRef: "Slide 80"
  },

  // GROUP VIII: TOPOISOMERASE INHIBITORS
  {
    id: "irinotecan",
    name: "Irinotecan (CPT-11)",
    phonetic: "[eye-rin-oh-TEE-kan]",
    brandNames: ["Camptosar®"],
    classId: "class-8",
    subclass: "Topoisomerase I Inhibitors",
    cellCyclePhase: "S-phase specific",
    chemicalType: "Semisynthetic water-soluble derivative of camptothecin (from Camptotheca acuminata tree)",
    mechanismOfAction:
      "A prodrug rapidly converted by tissue carboxylesterases in the liver and plasma into active metabolite SN-38 (which is approximately 1000-fold more active than irinotecan). SN-38 binds to topoisomerase I–DNA cleavage complexes, preventing relegation of single-strand DNA breaks. When the advancing DNA replication fork collides with this cleavage complex during S-phase, irreversible double-strand DNA breaks are generated, causing fork arrest and apoptosis.",
    pharmacokinetics: {
      absorption: "IV infusion.",
      metabolism: "SN-38 is inactivated and detoxified in the liver by Uridine diphosphate glucuronosyltransferase 1A1 (UGT1A1) to SN-38 glucuronide. Genetic polymorphisms in UGT1A1 (e.g. UGT1A1*28 allele homozygous in Gilbert's syndrome) impair glucuronidation, causing SN-38 accumulation and dramatic elevation in severe neutropenia and life-threatening diarrhea. Pre-treatment UGT1A1 testing is recommended.",
      excretion: "Biliary and urinary."
    },
    therapeuticUses: [
      "Metastatic Colorectal Cancer (cornerstone of FOLFIRI and IFL regimens; often paired with 5-FU, Leucovorin, and Bevacizumab or Cetuximab).",
      "Small Cell Lung Cancer and Pancreatic Cancer (liposomal Onivyde®)."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: SEVERE DIARRHEA (Early and Late Forms). 1) ACUTE / EARLY DIARRHEA: Occurs during or within 24 hours of infusion, accompanied by cholinergic symptoms (sweating, abdominal cramping, salivation, lacrimation, bradycardia). Caused by acute inhibition of acetylcholinesterase by irinotecan. Treated and prevented with ATROPINE (0.25 to 1 mg IV/SC). 2) DELAYED / LATE DIARRHEA: Occurs >24 hours after infusion (median onset day 5). Can be severe, prolonged, and life-threatening due to direct mucosal toxicity of SN-38. Must be treated promptly and aggressively with HIGH-DOSE LOPERAMIDE (4 mg at first onset, then 2 mg every 2 hours until diarrhea-free for 12 hours).",
      "BLACK BOX WARNING: SEVERE MYELOSUPPRESSION (neutropenic sepsis)."
    ],
    commonSideEffects: ["Nausea and vomiting", "Alopecia", "Fatigue", "Abdominal cramps"],
    severeSideEffects: ["Severe delayed life-threatening diarrhea", "Severe neutropenia (especially in UGT1A1*28 patients)", "Acute cholinergic syndrome"],
    antidoteOrProtectiveAgent: "Atropine for acute cholinergic diarrhea; High-dose Loperamide for delayed diarrhea; UGT1A1 testing.",
    administration: ["IV infusion over 90 minutes"],
    slideRef: "Slides 81-82"
  },
  {
    id: "topotecan",
    name: "Topotecan",
    phonetic: "[toe-poe-TEE-kan]",
    brandNames: ["Hycamtin®"],
    classId: "class-8",
    subclass: "Topoisomerase I Inhibitors",
    cellCyclePhase: "S-phase specific",
    chemicalType: "Semisynthetic water-soluble camptothecin analog",
    mechanismOfAction:
      "Binds directly to the topoisomerase I–DNA complex, stabilizing it and preventing DNA religation, leading to lethal double-strand DNA damage during replication.",
    therapeuticUses: [
      "Metastatic Ovarian Cancer refractory to primary platinum-based chemotherapy.",
      "Small Cell Lung Cancer (sensitive disease relapsed after first-line therapy).",
      "Cervical Cancer (Stage IV-B, recurrent, or persistent in combination with Cisplatin)."
    ],
    fdaWarnings: ["Dose-limiting Bone Marrow Suppression: Severe neutropenia, thrombocytopenia, and anemia; baseline neutrophils must be >= 1,500/mm3 and platelets >= 100,000/mm3."],
    commonSideEffects: ["Nausea and vomiting", "Alopecia", "Diarrhea (less severe than irinotecan)", "Stomatitis"],
    severeSideEffects: ["Severe bone marrow suppression and neutropenic sepsis", "Interstitial lung disease"],
    administration: ["IV infusion daily for 5 consecutive days every 21 days", "Oral capsules (SCLC)"],
    slideRef: "Slide 82"
  },
  {
    id: "etoposide",
    name: "Etoposide (VP-16)",
    phonetic: "[e-TOE-poe-side]",
    brandNames: ["Toposar®", "VePesid®"],
    classId: "class-8",
    subclass: "Topoisomerase II Inhibitors",
    cellCyclePhase: "Cell cycle specific (late S and G2 phases)",
    chemicalType: "Semisynthetic derivative of podophyllotoxin (from mandrake plant Podophyllum peltatum)",
    mechanismOfAction:
      "Forms a stable ternary complex with topoisomerase II and DNA, preventing the religation of cleaved double-strand DNA. This locks topoisomerase II in its cleavable complex state, leading to the accumulation of DNA double-strand breaks, inhibition of DNA replication, and cell cycle arrest in late S and G2 phases, precipitating apoptotic cell death.",
    therapeuticUses: [
      "Testicular Germ Cell Tumors (curative in the BEP regimen with Bleomycin and Cisplatin).",
      "Small Cell Lung Cancer (first-line combined with Cisplatin or Carboplatin).",
      "Hodgkin's Disease (BEACOPP regimen) and Non-Hodgkin's Lymphoma.",
      "Acute Myeloid Leukemia (AML) and conditioning for bone marrow transplantation."
    ],
    fdaWarnings: [
      "Rapid IV infusion causes severe HYPOTENSION and bronchospasm (must be infused slowly over at least 30 to 60 minutes).",
      "Leukemogenic potential: Associated with secondary Acute Myeloid Leukemia (t-AML) with 11q23 chromosomal translocations (typically appearing 1 to 3 years after therapy)."
    ],
    commonSideEffects: [
      "Dose-limiting Myelosuppression (leukopenia nadir at 10-14 days)",
      "Alopecia (near universal, complete)",
      "Nausea and vomiting (mild to moderate)"
    ],
    severeSideEffects: [
      "Severe hypotension during rapid infusion",
      "Secondary Acute Myeloid Leukemia (t-AML with MLL gene rearrangement at 11q23)",
      "Anaphylactoid hypersensitivity reactions"
    ],
    monitoringAndPearls: ["Never give by rapid IV push; monitor blood pressure every 15 minutes during infusion."],
    administration: ["Slow IV infusion over >= 60 minutes", "Oral capsules (bioavailability ~50%)"],
    slideRef: "Slide 83"
  },
  {
    id: "teniposide",
    name: "Teniposide (VM-26)",
    phonetic: "[ten-i-POE-side]",
    brandNames: ["Vumon®"],
    classId: "class-8",
    subclass: "Topoisomerase II Inhibitors",
    cellCyclePhase: "Late S and G2 phases",
    chemicalType: "Thiophene analog of etoposide",
    mechanismOfAction:
      "Podophyllotoxin derivative that inhibits topoisomerase II, causing persistent double-strand DNA breaks and G2 arrest. More lipophilic than etoposide.",
    therapeuticUses: [
      "Refractory childhood Acute Lymphoblastic Leukemia (ALL)."
    ],
    commonSideEffects: ["Myelosuppression", "Alopecia", "Mucositis", "Nausea"],
    severeSideEffects: ["Severe neutropenia and infection", "Hypotension with rapid infusion", "Secondary leukemia"],
    administration: ["IV infusion over at least 30-60 minutes"],
    slideRef: "Slide 83"
  },

  // GROUP IX: OTHER CHEMOTHERAPEUTIC AGENTS
  {
    id: "asparaginase",
    name: "L-Asparaginase",
    phonetic: "[a-SPAR-a-ji-nase]",
    brandNames: ["Elspar®", "Erwinaze®", "Oncaspar® (pegaspargase)"],
    classId: "class-9",
    subclass: "Enzymes",
    cellCyclePhase: "G1 phase specific",
    chemicalType: "Bacterial enzyme isolated from Escherichia coli or Erwinia chrysanthemi",
    mechanismOfAction:
      "Normal body cells can synthesize the non-essential amino acid L-asparagine from L-aspartic acid using the enzyme asparagine synthetase. However, neoplastic leukemic lymphoblasts lack asparagine synthetase and depend entirely on circulating serum L-asparagine for protein synthesis. L-Asparaginase hydrolyzes serum L-asparagine into L-aspartic acid and ammonia, depriving leukemic cells of asparagine, shutting down protein synthesis, and inducing rapid apoptosis. It is uniquely cell-cycle specific for G1 phase.",
    therapeuticUses: [
      "Acute Lymphocytic Leukemia (ALL) in children and adults (essential component of induction protocols).",
      "Pegaspargase (Oncaspar®) is a PEGylated formulation that provides prolonged circulation half-life and reduced immunogenicity."
    ],
    commonSideEffects: [
      "Fever and chills",
      "Nausea and vomiting",
      "Anorexia and weight loss",
      "Mild elevations in serum transaminases and hyperammonemia"
    ],
    severeSideEffects: [
      "ACUTE PANCREATITIS: Can be severe or hemorrhagic; serum amylase and lipase must be monitored; permanently discontinued if clinical pancreatitis develops.",
      "THROMBOSIS OR HEMORRHAGE: Due to inhibition of hepatic synthesis of clotting factors (fibrinogen) and natural anticoagulants (Antithrombin III, Protein C, Protein S). Patients can develop deep vein thrombosis, pulmonary embolism, or cerebral venous sinus thrombosis.",
      "SEVERE HYPERSENSITIVITY AND ANAPHYLAXIS: High risk of anti-drug antibodies against bacterial proteins (if allergic to E. coli form, switch to Erwinia asparaginase).",
      "HEPATOTOXICITY and encephalopathy due to hyperammonemia."
    ],
    monitoringAndPearls: [
      "Monitor serum amylase, lipase, fibrinogen, Antithrombin III, and coagulation profiles regularly.",
      "Prepare resuscitation equipment prior to each dose to manage acute anaphylaxis."
    ],
    administration: ["IM injection (preferred over IV due to lower anaphylaxis risk)", "IV infusion"],
    slideRef: "Slides 84-85"
  },
  {
    id: "hydroxyurea",
    name: "Hydroxyurea (Hydroxycarbamide)",
    phonetic: "[hye-drox-ee-yoor-EE-ah]",
    brandNames: ["Hydrea®", "Droxia®", "Siklos®"],
    classId: "class-9",
    subclass: "Ribonucleotide Reductase Inhibitor",
    cellCyclePhase: "S-phase specific",
    chemicalType: "Simple synthetic urea analogue (hydroxy-substituted urea)",
    mechanismOfAction:
      "Inhibits the enzyme ribonucleotide reductase (RNR) by scavenging the tyrosyl free radical at the catalytic site of the M2 subunit. This blocks the conversion of ribonucleotides to deoxyribonucleotides, depleting intracellular deoxynucleoside triphosphate (dNTP) pools, specifically halting DNA synthesis without interfering with RNA or protein synthesis. Cells are arrested at the G1-S boundary.",
    therapeuticUses: [
      "Chronic Myelogenous Leukemia (CML) - used for rapid cytoreduction of high white blood cell counts.",
      "Myeloproliferative Neoplasms: Polycythemia Vera (first-line for high-risk patients) and Essential Thrombocythemia.",
      "Head and Neck Cancer (as a radio-sensitizer).",
      "Sickle Cell Anemia: Stimulates the synthesis of Fetal Hemoglobin (HbF), which retards HbS polymerization and significantly reduces painful vaso-occlusive crises."
    ],
    commonSideEffects: [
      "Dose-limiting Myelosuppression (rapidly reversible upon dose cessation)",
      "Nausea, vomiting, diarrhea",
      "Hyperpigmentation of skin and nail changes"
    ],
    severeSideEffects: [
      "Severe leukopenia, thrombocytopenia, and anemia",
      "Painful cutaneous leg ulcers (chronic use, particularly over malleoli; heal upon discontinuation)",
      "Secondary cutaneous squamous cell carcinoma with long-term therapy"
    ],
    monitoringAndPearls: [
      "Frequent CBC monitoring; dose titration based on neutrophil and platelet counts.",
      "Advise patients handling capsules to wear gloves or wash hands thoroughly to avoid skin exposure."
    ],
    administration: ["Oral capsules daily"],
    slideRef: "Slide 85"
  },
  {
    id: "arsenic-trioxide",
    name: "Arsenic Trioxide (ATO)",
    phonetic: "[AR-se-nik try-OX-ide]",
    brandNames: ["Trisenox®"],
    classId: "class-9",
    subclass: "Heavy Metals",
    cellCyclePhase: "Non-specific",
    chemicalType: "Inorganic arsenic compound (As2O3)",
    mechanismOfAction:
      "Binds directly to cysteine residues in the PML moiety of the pathogenic PML-RARalpha oncoprotein found in Acute Promyelocytic Leukemia (APL). Induces oncoprotein oligomerization, SUMOylation, and proteasome-dependent degradation, triggering differentiation of promyelocytes and programmed cell death.",
    therapeuticUses: [
      "Acute Promyelocytic Leukemia (APL) with t(15;17) translocation (curative in combination with Tretinoin/ATRA)."
    ],
    fdaWarnings: [
      "APL Differentiation Syndrome (fever, dyspnea, weight gain, pulmonary infiltrates, pleural effusions) treated aggressively with Dexamethasone.",
      "QTc interval prolongation and risk of Torsades de Pointes; maintain serum potassium >= 4.0 mEq/L and magnesium >= 1.8 mg/dL."
    ],
    commonSideEffects: ["Nausea", "Fatigue", "Tachycardia", "Hypokalemia"],
    severeSideEffects: ["APL Differentiation Syndrome", "Lethal ventricular arrhythmias (Torsades de Pointes)", "Peripheral neuropathy"],
    antidoteOrProtectiveAgent: "Dexamethasone 10 mg IV BID at earliest sign of Differentiation Syndrome; maintain electrolytes.",
    administration: ["IV infusion over 1-2 hours"],
    slideRef: "Slide 85"
  },
  {
    id: "thalidomide",
    name: "Thalidomide",
    phonetic: "[tha-LID-oh-mide]",
    brandNames: ["Thalomid®"],
    classId: "class-9",
    subclass: "Immunomodulatory Drugs",
    cellCyclePhase: "Non-specific",
    chemicalType: "Glutamic acid derivative / immunomodulatory drug (IMiD)",
    mechanismOfAction:
      "Binds to the cereblon (CRBN) E3 ubiquitin ligase complex, leading to recruitment and selective ubiquitination and degradation of Ikaros (IKZF1) and Aiolos (IKZF3) transcription factors. This inhibits myeloma cell proliferation, stimulates cytotoxic T-cell and NK-cell activity, and suppresses angiogenesis by inhibiting basic FGF and VEGF.",
    therapeuticUses: [
      "Multiple Myeloma (in combination with Dexamethasone).",
      "Erythema Nodosum Leprosum (ENL / leprosy complications)."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: SEVERE TERATOGENICITY. Causes devastating, life-threatening human birth defects (phocomelia - severe limb reduction defects, facial malformations, organ anomalies). Available ONLY under a restricted distribution program (THALOMID REMS).",
      "BLACK BOX WARNING: VENOUS THROMBOEMBOLISM. Markedly increased risk of DVT and PE when combined with dexamethasone (prophylactic anticoagulation with aspirin or LMWH is mandatory)."
    ],
    commonSideEffects: ["Sedation and somnolence", "Constipation", "Dizziness and orthostasis", "Rash"],
    severeSideEffects: [
      "Phocomelia / fatal teratogenicity (contraindicated in pregnancy; Pregnancy Category X)",
      "Deep Vein Thrombosis and Pulmonary Embolism",
      "Peripheral sensory neuropathy (often irreversible; tingling, numbness in extremities)"
    ],
    antidoteOrProtectiveAgent: "Thalomid REMS program; mandatory prophylactic anticoagulation (LMWH or Aspirin).",
    administration: ["Oral capsules daily at bedtime (due to sedating effects)"],
    slideRef: "Slide 86"
  },
  {
    id: "lenalidomide",
    name: "Lenalidomide",
    phonetic: "[len-a-LID-oh-mide]",
    brandNames: ["Revlimid®"],
    classId: "class-9",
    subclass: "Immunomodulatory Drugs",
    cellCyclePhase: "Non-specific",
    chemicalType: "Second-generation amino-substituted thalidomide analogue",
    mechanismOfAction:
      "Second-generation IMiD with greater potency than thalidomide against cereblon, leading to degradation of Ikaros/Aiolos, direct anti-myeloma toxicity, and immunomodulation with significantly LESS neurotoxicity and sedation.",
    therapeuticUses: [
      "Multiple Myeloma (maintenance, frontline with bortezomib/dexamethasone [VRd], and relapsed).",
      "Myelodysplastic Syndromes (MDS) associated with a deletion 5q cytogenetic abnormality.",
      "Mantle Cell Lymphoma."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: Teratogenicity (REMS program), Venous Thromboembolism (DVT/PE), and Hematologic toxicity (severe neutropenia and thrombocytopenia)."
    ],
    commonSideEffects: ["Fatigue", "Neutropenia", "Constipation or diarrhea", "Muscle cramps"],
    severeSideEffects: ["Severe teratogenicity (Revlimid REMS)", "Thromboembolism (requires prophylactic aspirin or anticoagulation)", "Severe myelosuppression"],
    antidoteOrProtectiveAgent: "Revlimid REMS program; prophylactic antithrombotic therapy.",
    administration: ["Oral capsules daily on days 1-21 of a 28-day cycle"],
    slideRef: "Slide 86"
  },
  {
    id: "bortezomib",
    name: "Bortezomib",
    phonetic: "[bor-TEZ-oh-mib]",
    brandNames: ["Velcade®"],
    classId: "class-9",
    subclass: "Proteasome Inhibitors",
    cellCyclePhase: "Non-specific",
    chemicalType: "Dipeptidyl boronic acid derivative",
    mechanismOfAction:
      "First-in-class reversible inhibitor of the 26S proteasome (specifically binds the catalytic chymotrypsin-like active site). Proteasome inhibition prevents degradation of misfolded proteins and ubiquitinated regulatory proteins like IkappaB (the endogenous inhibitor of NF-kappaB). By preventing IkappaB degradation, NF-kappaB activation is blocked, downregulating anti-apoptotic genes and inducing endoplasmic reticulum stress-mediated apoptosis in myeloma cells.",
    therapeuticUses: [
      "Multiple Myeloma (frontline, maintenance, and relapsed).",
      "Mantle Cell Lymphoma."
    ],
    commonSideEffects: [
      "Peripheral Sensory Neuropathy (painful burning dysesthesias in feet/hands; significantly reduced when administered SUBCUTANEOUSLY compared to IV)",
      "Thrombocytopenia and neutropenia (cyclical nadir on day 11)",
      "Fatigue, nausea, diarrhea, and constipation"
    ],
    severeSideEffects: [
      "Painful peripheral neuropathy",
      "Herpes Zoster (Shingles) Reactivation (in up to 30% of patients without prophylaxis; mandatory antiviral prophylaxis with Acyclovir or Valacyclovir is required during treatment)",
      "Hypotension and cardiac failure"
    ],
    antidoteOrProtectiveAgent: "Subcutaneous (SC) route preferred over IV to minimize neuropathy; mandatory prophylactic Acyclovir/Valacyclovir.",
    administration: ["Subcutaneous (SC) injection preferred", "IV bolus"],
    slideRef: "Slide 86"
  },
  {
    id: "tretinoin",
    name: "Tretinoin (All-Trans Retinoic Acid / ATRA)",
    phonetic: "[TRET-i-noyn]",
    brandNames: ["Vesanoid®"],
    classId: "class-9",
    subclass: "Retinoids",
    cellCyclePhase: "Differentiation inducer",
    chemicalType: "Active metabolite of Vitamin A (retinol)",
    mechanismOfAction:
      "Binds to the retinoic acid receptor-alpha (RAR-alpha) portion of the PML-RAR-alpha fusion oncoprotein in Acute Promyelocytic Leukemia (APL). High doses overcome corepressor repression, causing the fusion protein to dissociate from histone deacetylases (HDACs), restoring normal transcription and forcing the malignant, arrested promyelocytes to mature and differentiate into normal terminal neutrophils.",
    therapeuticUses: [
      "Induction of remission in Acute Promyelocytic Leukemia (APL / AML-M3) harboring the t(15;17) chromosomal translocation (curative in combination with Arsenic Trioxide or Anthracyclines)."
    ],
    fdaWarnings: [
      "BLACK BOX WARNING: RETINOIC ACID SYNDROME / APL DIFFERENTIATION SYNDROME. Manifests with fever, dyspnea, acute respiratory distress, pulmonary infiltrates, pleural and pericardial effusions, peripheral edema, episodic hypotension, and renal failure. Can be rapidly fatal if unrecognized. Immediate treatment with high-dose intravenous DEXAMETHASONE (10 mg IV twice daily) must be initiated at the very first sign of respiratory compromise."
    ],
    commonSideEffects: [
      "Headache (can be severe due to pseudotumor cerebri / intracranial hypertension)",
      "Dry skin, cheilitis (chapped lips), pruritus, and dry mucous membranes",
      "Bone pain and arthralgias",
      "Elevated serum triglycerides and cholesterol"
    ],
    severeSideEffects: [
      "APL Differentiation Syndrome",
      "Pseudotumor cerebri (benign intracranial hypertension with papilledema)",
      "Hyperleukocytosis (requires cytoreduction with hydroxyurea or chemotherapy)",
      "Severe teratogenicity (Pregnancy Category X)"
    ],
    antidoteOrProtectiveAgent: "Immediate high-dose IV Dexamethasone (10 mg BID) at first sign of Differentiation Syndrome.",
    administration: ["Oral capsules twice daily with food until complete remission"],
    slideRef: "Slide 87"
  }
];

export const ALL_DRUGS: Drug[] = [];
