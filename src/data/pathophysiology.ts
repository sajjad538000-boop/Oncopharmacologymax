import { CellCyclePhase, ChemoRegimen } from "../types";

export const PATHOPHYSIOLOGY_INFO = {
  geneClasses: {
    title: "Two Major Classes of Genes Involved in Carcinogenesis",
    oncogenes: {
      acronym: "OCGs",
      definition: "Potential to cause cancer.",
      details:
        "Oncogenes develop from normal genes called proto-oncogenes, and may have important roles in all phases of carcinogenesis. Proto-oncogenes are present in all cells and are essential regulators of normal cellular functions, including the cell cycle.",
      activationMechanisms:
        "Genetic alteration of the proto-oncogene through point mutation, chromosomal rearrangement, or gene amplification activates the oncogene. These genetic alterations may be caused by carcinogenic agents such as radiation, chemicals, or viruses (somatic mutations), or they may be inherited (germ-line mutations).",
      consequences:
        "Once activated, the oncogene produces either excessive amounts of the normal gene product or an abnormal gene product. The result is dysregulation of normal cell growth and proliferation, which increases the probability of neoplastic transformation.",
      exampleFamily: {
        name: "Human Epidermal Growth Factor Receptor (HER) Family of Oncogenes",
        members: "Contains 4 members: ErbB-1 (also known as Epidermal Growth Factor Receptor [EGFR]), HER-2, HER-3, and HER-4.",
        mechanism:
          "When activated, these receptors mediate cell proliferation and differentiation of cells through activation of intracellular tyrosine kinase receptors and downstream signaling pathways (GRB2, SOS, RAS, RAF, MEK, MAPK, PI3K/AKT/mTOR, and JAK/STAT). As an oncogene, the gene product is overexpressed or amplified, resulting in excessive cellular proliferation, metastasis, angiogenesis, and cell survival in several cancers."
      }
    },
    tumorSuppressors: {
      acronym: "TSGs / Anti-Oncogenes",
      definition: "Protects cell from path to cancer.",
      details:
        "Tumor suppressor-genes regulate and inhibit inappropriate cellular growth and proliferation. Gene loss or mutation results in loss of control over normal cell growth.",
      twoCommonExamples: "Retinoblastoma (Rb) & p53 genes.",
      p53Significance:
        "Mutation of p53 is one of the most common genetic changes associated with cancer, and is estimated to occur in half of all malignancies. p53 halts the cell cycle via p21 for DNA repair or triggers apoptosis via Bax if damage is beyond repair."
    }
  }
};

export const CELL_CYCLE_PHASES: CellCyclePhase[] = [
  {
    id: "phase-g0",
    phaseName: "Quiescence (G0 Phase)",
    shortName: "G0",
    timing: "Resting State",
    description: "Cells can exit the active cycle into G0 dormancy and re-enter the cell cycle from G0 phase upon mitogenic stimulation.",
    molecularRegulators: "Absence of active cyclins; stable unphosphorylated Rb.",
    checkpointDetails: "Re-entry control governed by growth factors and extracellular signals.",
    drugsActingHere: ["Alkylating Agents (cell-cycle non-specific)", "Nitrosoureas"],
    color: "from-slate-500 to-slate-700"
  },
  {
    id: "phase-g1",
    phaseName: "G1 Phase (First Gap Phase)",
    shortName: "G1",
    timing: "Early to Late G1",
    description: "Cell growth, protein synthesis, and preparation for DNA replication. The early phase of G1 is mitogen-dependent (requires growth factors). Once past the Restriction (R) point, mitogens are no longer required.",
    molecularRegulators: "Cyclin D + CDK4/6; Cyclin E + CDK2. CDK inhibitors (p16, p15, p18, p19, p21, p27, p57, TGF-beta) inhibit progression.",
    checkpointDetails: "Restriction point: Cyclin D and CDK4/6 phosphorylate Rb, liberating E2F transcription factors to drive S-phase gene expression.",
    drugsActingHere: ["Steroid hormones", "Aromatase Inhibitors", "L-Asparaginase"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "phase-g1s",
    phaseName: "G1/S Checkpoint",
    shortName: "G1/S Check",
    timing: "Transition from G1 to S",
    description: "Allows checking of DNA integrity before cell DNA is replicated. If DNA damage, hypoxia, or cell injury is detected, ATM/BRCA/p53 halt the cycle or induce apoptosis.",
    molecularRegulators: "p53 increases via Mdm2 inhibition; activates p21 (CDK inhibitor) or Bax (apoptotic pathway).",
    checkpointDetails: "p53 is an important regulator of both G1/S and G2/M checkpoints.",
    drugsActingHere: ["Methotrexate", "Antimetabolites"],
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "phase-s",
    phaseName: "S Phase (Synthesis Phase)",
    shortName: "S",
    timing: "Active DNA Synthesis",
    description: "DNA replication occurs. Chromosomes are duplicated with high fidelity.",
    molecularRegulators: "Cyclin E + CDK2 (mitogen-independent) and Cyclin A + CDK1,2.",
    checkpointDetails: "Replication stress sensors (ATR/Chk1) ensure complete and accurate synthesis.",
    drugsActingHere: [
      "Methotrexate (MTX)",
      "5-Fluorouracil (5-FU)",
      "Capecitabine",
      "Cytarabine (Ara-C)",
      "Gemcitabine",
      "6-Mercaptopurine (6-MP)",
      "Fludarabine",
      "Topotecan & Irinotecan (Camptothecins)"
    ],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "phase-g2",
    phaseName: "G2 Phase (Second Gap Phase)",
    shortName: "G2",
    timing: "Post-Synthetic Gap",
    description: "Cell continues to grow, synthesizes proteins required for mitosis, and prepares for spindle assembly.",
    molecularRegulators: "Cyclin A + CDK1; Cyclin B accumulation.",
    checkpointDetails: "Preparation for chromatin condensation.",
    drugsActingHere: ["Bleomycin (G2 phase specific)", "Etoposide & Teniposide (late S to G2)"],
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "phase-g2m",
    phaseName: "G2/M Checkpoint",
    shortName: "G2/M Check",
    timing: "Pre-Mitotic Pause",
    description: "Once the cell passes G1, it is obligated to continue and undergo mitosis. The G2/M checkpoint allows the cell cycle to pause for a period of time before mitosis occurs to repair damaged DNA.",
    molecularRegulators: "Cyclin B + CDK1 complex activation; regulated by p53, Wee1, and Cdc25.",
    checkpointDetails: "Prevents initiation of mitosis in cells with un-replicated or broken DNA strands.",
    drugsActingHere: ["Bleomycin", "Etoposide", "Anthracyclines"],
    color: "from-rose-500 to-pink-600"
  },
  {
    id: "phase-m",
    phaseName: "M Phase (Mitosis)",
    shortName: "M",
    timing: "Cell Division",
    description: "Nuclear and cytoplasmic division (prophase, metaphase, anaphase, telophase, cytokinesis). Dependent on the mitotic spindle skeleton composed of tubulin polymers.",
    molecularRegulators: "Cyclin B + CDK1 degradation; Anaphase Promoting Complex (APC/C).",
    checkpointDetails: "Spindle Assembly Checkpoint (SAC) ensures bipolar chromosome attachment.",
    drugsActingHere: [
      "Vincristine, Vinblastine, Vinorelbine (inhibit tubulin polymerization)",
      "Paclitaxel, Docetaxel, Cabazitaxel (prevent depolymerization / stabilize)",
      "Ixabepilone (microtubule stabilizer)"
    ],
    color: "from-cyan-500 to-blue-600"
  }
];

export const CHEMO_REGIMENS: ChemoRegimen[] = [
  {
    id: "reg-cmf",
    acronym: "CMF",
    fullName: "Cyclophosphamide + Methotrexate + 5-Fluorouracil",
    targetCancer: "Breast Cancer",
    agents: [
      { symbol: "C", name: "Cyclophosphamide", brand: "Cytoxan®", drugClass: "Alkylating Agent" },
      { symbol: "M", name: "Methotrexate", brand: "Trexall®", drugClass: "Antimetabolite (Antifolate)" },
      { symbol: "F", name: "5-Fluorouracil", brand: "Adrucil®", drugClass: "Antimetabolite (Pyrimidine)" }
    ],
    indicationDetails: "Classic adjuvant chemotherapy regimen for early-stage and node-positive breast cancer.",
    clinicalNotes: "Requires antiemetic support; monitor renal clearance for MTX and bladder protection for Cyclophosphamide."
  },
  {
    id: "reg-ac",
    acronym: "AC",
    fullName: "Adriamycin (Doxorubicin) + Cyclophosphamide",
    targetCancer: "Breast Cancer",
    agents: [
      { symbol: "A", name: "Adriamycin (Doxorubicin)", brand: "Adriamycin®", drugClass: "Anthracycline Antibiotic" },
      { symbol: "C", name: "Cyclophosphamide", brand: "Cytoxan®", drugClass: "Alkylating Agent" }
    ],
    indicationDetails: "High-efficacy standard regimen for primary breast cancer.",
    clinicalNotes: "Monitor cumulative anthracycline cardiotoxicity; patients must be educated on harmless red urine discoloration and hair loss."
  },
  {
    id: "reg-tac",
    acronym: "TAC",
    fullName: "Taxotere (Docetaxel) + Adriamycin (Doxorubicin) + Cyclophosphamide",
    targetCancer: "Breast Cancer",
    agents: [
      { symbol: "T", name: "Docetaxel", brand: "Taxotere®", drugClass: "Microtubule Inhibitor (Taxane)" },
      { symbol: "A", name: "Adriamycin (Doxorubicin)", brand: "Adriamycin®", drugClass: "Anthracycline Antibiotic" },
      { symbol: "C", name: "Cyclophosphamide", brand: "Cytoxan®", drugClass: "Alkylating Agent" }
    ],
    indicationDetails: "Intensive adjuvant therapy in high-risk node-positive breast cancer.",
    clinicalNotes: "High risk of febrile neutropenia; neutrophil counts must be >= 1,500 cells/mm3 prior to Docetaxel administration."
  },
  {
    id: "reg-fac",
    acronym: "FAC",
    fullName: "5-Fluorouracil + Adriamycin (Doxorubicin) + Cyclophosphamide",
    targetCancer: "Breast Cancer",
    agents: [
      { symbol: "F", name: "5-Fluorouracil", brand: "Adrucil®", drugClass: "Antimetabolite (Pyrimidine)" },
      { symbol: "A", name: "Adriamycin (Doxorubicin)", brand: "Adriamycin®", drugClass: "Anthracycline Antibiotic" },
      { symbol: "C", name: "Cyclophosphamide", brand: "Cytoxan®", drugClass: "Alkylating Agent" }
    ],
    indicationDetails: "Established multi-agent regimen for invasive breast carcinoma.",
    clinicalNotes: "Cardiotoxicity and stomatitis monitoring required."
  },
  {
    id: "reg-mopp",
    acronym: "MOPP",
    fullName: "Mustine + Oncovin + Procarbazine + Prednisolone",
    targetCancer: "Hodgkin's Disease",
    agents: [
      { symbol: "M", name: "Mechlorethamine (Mustine)", brand: "Mustargen®", drugClass: "Nitrogen Mustard Alkylating Agent" },
      { symbol: "O", name: "Vincristine", brand: "Oncovin®", drugClass: "Microtubule Inhibitor (Vinca)" },
      { symbol: "P", name: "Procarbazine", brand: "Matulane®", drugClass: "Methyl-Hydrazine Alkylating Agent" },
      { symbol: "P", name: "Prednisolone / Prednisone", brand: "Hostacortin®", drugClass: "Corticosteroid" }
    ],
    indicationDetails: "Historically the first curative combination therapy for advanced Hodgkin's lymphoma.",
    clinicalNotes: "Procarbazine weakly inhibits MAO (avoid aged cheeses/tyramine) and causes disulfiram reactions with alcohol. High emetogenicity (90% severe nausea/vomiting)."
  },
  {
    id: "reg-abvd",
    acronym: "ABVD",
    fullName: "Adriamycin + Bleomycin + Vinblastine + Dacarbazine",
    targetCancer: "Hodgkin's Disease",
    agents: [
      { symbol: "A", name: "Adriamycin (Doxorubicin)", brand: "Adriamycin®", drugClass: "Anthracycline Antibiotic" },
      { symbol: "B", name: "Bleomycin", brand: "Blenoxane®", drugClass: "Cytotoxic Antibiotic" },
      { symbol: "V", name: "Vinblastine", brand: "Velban®", drugClass: "Microtubule Inhibitor (Vinca)" },
      { symbol: "D", name: "Dacarbazine", brand: "Dtic-Dome®", drugClass: "Alkylating Agent (Triazene)" }
    ],
    indicationDetails: "Current gold standard frontline regimen for Hodgkin's lymphoma, replacing MOPP due to less leukemogenic risk.",
    clinicalNotes: "Monitor pulmonary function tests (Bleomycin lung fibrosis) and cardiac ejection fraction (Doxorubicin)."
  },
  {
    id: "reg-beacopp",
    acronym: "BEACOPP",
    fullName: "Bleomycin + Etoposide + Adriamycin + Cyclophosphamide + Oncovin + Procarbazine + Prednisone",
    targetCancer: "Hodgkin's Disease",
    agents: [
      { symbol: "B", name: "Bleomycin", brand: "Blenoxane®", drugClass: "Cytotoxic Antibiotic" },
      { symbol: "E", name: "Etoposide", brand: "Toposar®", drugClass: "Topoisomerase II Inhibitor" },
      { symbol: "A", name: "Adriamycin", brand: "Adriamycin®", drugClass: "Anthracycline Antibiotic" },
      { symbol: "C", name: "Cyclophosphamide", brand: "Cytoxan®", drugClass: "Alkylating Agent" },
      { symbol: "O", name: "Oncovin (Vincristine)", brand: "Oncovin®", drugClass: "Vinca Alkaloid" },
      { symbol: "P", name: "Procarbazine", brand: "Matulane®", drugClass: "Methyl-Hydrazine" },
      { symbol: "P", name: "Prednisone", brand: "Hostacortin®", drugClass: "Corticosteroid" }
    ],
    indicationDetails: "Escalated dose-dense regimen for advanced unfavorable Hodgkin's lymphoma.",
    clinicalNotes: "Significant myelosuppressive and pulmonary toxicities; requires rigorous supportive care."
  },
  {
    id: "reg-chop",
    acronym: "CHOP",
    fullName: "Cyclophosphamide + Hydroxydaunorubicin (Doxorubicin) + Oncovin (Vincristine) + Prednisone",
    targetCancer: "Non-Hodgkin's Lymphoma (NHL)",
    agents: [
      { symbol: "C", name: "Cyclophosphamide", brand: "Cytoxan®", drugClass: "Alkylating Agent" },
      { symbol: "H", name: "Doxorubicin (Hydroxydaunorubicin)", brand: "Adriamycin®", drugClass: "Anthracycline Antibiotic" },
      { symbol: "O", name: "Vincristine", brand: "Oncovin®", drugClass: "Vinca Alkaloid" },
      { symbol: "P", name: "Prednisone / Prednisolone", brand: "Hostacortin®", drugClass: "Corticosteroid" }
    ],
    indicationDetails: "Cornerstone regimen for Diffuse Large B-cell Lymphoma and aggressive NHL (often paired with Rituximab as R-CHOP).",
    clinicalNotes: "Peripheral neuropathy risk from Vincristine; cardiac limits on Doxorubicin; appetite stimulation by Prednisone."
  },
  {
    id: "reg-bep",
    acronym: "BEP",
    fullName: "Bleomycin + Etoposide + Platinol (Cisplatin)",
    targetCancer: "Germ Cell Tumor / Testicular Cancer",
    agents: [
      { symbol: "B", name: "Bleomycin", brand: "Blenoxane®", drugClass: "Cytotoxic Antibiotic" },
      { symbol: "E", name: "Etoposide", brand: "Toposar®", drugClass: "Topoisomerase II Inhibitor" },
      { symbol: "P", name: "Cisplatin", brand: "Platinol®", drugClass: "Platinum Complex" }
    ],
    indicationDetails: "Highly curative first-line regimen for testicular germ cell carcinomas.",
    clinicalNotes: "Requires vigorous pre- and post-hydration with mannitol to protect kidneys from Cisplatin; monitor for Bleomycin lung toxicity."
  },
  {
    id: "reg-ecf-ecx",
    acronym: "ECF / ECX",
    fullName: "Epirubicin + Cisplatin + 5-Fluorouracil (ECF) or Capecitabine (ECX)",
    targetCancer: "Stomach (Gastric) Cancer",
    agents: [
      { symbol: "E", name: "Epirubicin", brand: "Ellence®", drugClass: "Anthracycline Antibiotic" },
      { symbol: "C", name: "Cisplatin", brand: "Platinol®", drugClass: "Platinum Complex" },
      { symbol: "F/X", name: "5-FU or Capecitabine (Xeloda®)", brand: "Adrucil® / Xeloda®", drugClass: "Fluoropyrimidine" }
    ],
    indicationDetails: "Preoperative and palliative chemotherapy for locally advanced or metastatic gastric adenocarcinoma.",
    clinicalNotes: "Epirubicin has lower cardiotoxicity than Doxorubicin due to rapid elimination. Capecitabine replaces 5-FU for oral convenience."
  },
  {
    id: "reg-mvac",
    acronym: "MVAC",
    fullName: "Methotrexate + Vinblastine + Adriamycin + Cisplatin",
    targetCancer: "Bladder Cancer (Urothelial)",
    agents: [
      { symbol: "M", name: "Methotrexate", brand: "Trexall®", drugClass: "Antifolate" },
      { symbol: "V", name: "Vinblastine", brand: "Velban®", drugClass: "Vinca Alkaloid" },
      { symbol: "A", name: "Adriamycin (Doxorubicin)", brand: "Adriamycin®", drugClass: "Anthracycline" },
      { symbol: "C", name: "Cisplatin", brand: "Platinol®", drugClass: "Platinum Complex" }
    ],
    indicationDetails: "Neoadjuvant and metastatic standard for muscle-invasive transitional cell carcinoma of the bladder.",
    clinicalNotes: "Substantial toxicities: severe vomiting (Cisplatin), mucositis (MTX), myelosuppression (Vinblastine), cardiotoxicity (Adriamycin)."
  },
  {
    id: "reg-cav",
    acronym: "CAV",
    fullName: "Cyclophosphamide + Adriamycin + Vincristine",
    targetCancer: "Lung Cancer (Small Cell Lung Cancer - SCLC)",
    agents: [
      { symbol: "C", name: "Cyclophosphamide", brand: "Cytoxan®", drugClass: "Alkylating Agent" },
      { symbol: "A", name: "Adriamycin (Doxorubicin)", brand: "Adriamycin®", drugClass: "Anthracycline" },
      { symbol: "V", name: "Vincristine", brand: "Oncovin®", drugClass: "Vinca Alkaloid" }
    ],
    indicationDetails: "Second-line or alternative induction regimen for Extensive Stage Small Cell Lung Cancer.",
    clinicalNotes: "High response rate in small cell lung cancer, but rapid emergence of chemoresistance."
  },
  {
    id: "reg-folfox",
    acronym: "FOLFOX",
    fullName: "Folinic acid (Leucovorin) + 5-Fluorouracil + Oxaliplatin",
    targetCancer: "Colorectal Cancer",
    agents: [
      { symbol: "FOL", name: "Folinic acid (Leucovorin)", brand: "Wellcovorin®", drugClass: "Biochemical Modulator" },
      { symbol: "F", name: "5-Fluorouracil", brand: "Adrucil®", drugClass: "Fluoropyrimidine Antimetabolite" },
      { symbol: "OX", name: "Oxaliplatin", brand: "Eloxatin®", drugClass: "Third-Generation Platinum Analog" }
    ],
    indicationDetails: "Primary standard-of-care for Stage III adjuvant and metastatic Stage IV Colorectal Cancer.",
    clinicalNotes: "Leucovorin enhances 5-FU binding to thymidylate synthase ('thymineless death'). Oxaliplatin causes distinctive cold-induced peripheral neuropathy."
  },
  {
    id: "reg-pcv",
    acronym: "PCV",
    fullName: "Procarbazine + CCNU (Lomustine) + Vincristine",
    targetCancer: "Brain Tumors (Oligodendroglioma / Gliomas)",
    agents: [
      { symbol: "P", name: "Procarbazine", brand: "Matulane®", drugClass: "Methyl-Hydrazine Alkylating Agent" },
      { symbol: "C", name: "Lomustine (CCNU)", brand: "CeeNu®", drugClass: "Nitrosourea (Crosses BBB)" },
      { symbol: "V", name: "Vincristine", brand: "Oncovin®", drugClass: "Vinca Alkaloid" }
    ],
    indicationDetails: "Used for anaplastic oligodendrogliomas and low-grade gliomas with 1p/19q co-deletion.",
    clinicalNotes: "Lomustine must be taken orally only ONCE EVERY 6 WEEKS on an empty stomach. Procarbazine requires dietary tyramine restriction."
  },
  {
    id: "reg-cepp",
    acronym: "CEPP",
    fullName: "Cyclophosphamide + Etoposide + Procarbazine + Prednisone (+/- Bleomycin)",
    targetCancer: "Non-Hodgkin's Lymphoma",
    agents: [
      { symbol: "C", name: "Cyclophosphamide", brand: "Cytoxan®", drugClass: "Alkylating Agent" },
      { symbol: "E", name: "Etoposide", brand: "Toposar®", drugClass: "Topoisomerase II Inhibitor" },
      { symbol: "P", name: "Procarbazine", brand: "Matulane®", drugClass: "Methyl-Hydrazine" },
      { symbol: "P", name: "Prednisone", brand: "Hostacortin®", drugClass: "Corticosteroid" }
    ],
    indicationDetails: "Salvage regimen for relapsed or refractory Non-Hodgkin's Lymphoma.",
    clinicalNotes: "Can be administered to patients who have reached their lifetime cardiotoxic limit of Anthracyclines."
  }
];

export const CHEMOTHERAPY_MODALITIES = [
  {
    id: "mod-neoadjuvant",
    name: "Neoadjuvant Chemotherapy (Preoperative)",
    description: "Chemotherapy given prior to the surgical procedure in an attempt to shrink the primary tumor, facilitating surgical resection and assessing in vivo drug sensitivity.",
    clinicalExample: "Shrinking a locally advanced breast cancer prior to lumpectomy."
  },
  {
    id: "mod-adjuvant",
    name: "Adjuvant Chemotherapy (Postoperative)",
    description: "Chemotherapy given after local treatment (surgery or radiotherapy). Used to decrease the risk of disease recurrence and kill any cancerous cells that have spread to other parts of the body (micrometastases).",
    clinicalExample: "Adjuvant FOLFOX in Stage III colon cancer after surgical bowel resection."
  },
  {
    id: "mod-maintenance",
    name: "Maintenance Chemotherapy",
    description: "Repeated low-dose treatment given over an extended duration to prolong remission and prevent relapse in hematologic or responsive solid tumors.",
    clinicalExample: "Maintenance therapy in Acute Lymphoblastic Leukemia (ALL)."
  },
  {
    id: "mod-salvage",
    name: "Salvage Chemotherapy or Palliative Chemotherapy",
    description: "Given without curative intent, but simply to decrease tumor load, relieve cancer-related symptoms, and increase life expectancy after the cancer has failed to respond to primary chemotherapy regimens.",
    clinicalExample: "Second-line or third-line palliative regimens in metastatic pancreatic or refractory lung cancers."
  },
  {
    id: "mod-efficacy",
    name: "Determinants of Chemotherapy Efficacy",
    description: "The clinical efficacy of chemotherapy depends critically on: 1) Type of cancer (histopathology and molecular driver mutations); 2) Stage of cancer (extent of primary spread and presence of distant metastases).",
    clinicalExample: "Early localized testicular germ cell tumors achieve >95% cure rates, whereas late-stage metastatic pancreatic cancer has limited response."
  }
];
