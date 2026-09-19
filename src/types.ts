export interface Drug {
  id: string;
  name: string;
  phonetic?: string;
  brandNames: string[];
  classId: string;
  classNumber?: number;
  subclass?: string;
  chemicalType?: string;
  cellCyclePhase?: string;
  mechanismOfAction: string;
  mechanismPoints?: string[];
  historyBackground?: string;
  pharmacokinetics?: {
    absorption?: string;
    bioavailability?: string;
    distribution?: string;
    metabolism?: string;
    excretion?: string;
    pharmacogenomics?: string;
    formulations?: string;
  };
  therapeuticUses: string[];
  contraindications?: string[];
  fdaWarnings?: string[];
  commonSideEffects: string[];
  severeSideEffects: string[];
  monitoringAndPearls?: string[];
  antidoteOrProtectiveAgent?: string;
  administration: string[];
  drugInteractions?: string[];
  resistanceMechanisms?: string[];
  image?: string;
  slideRef?: string;
}

export interface DrugClass {
  id: string;
  romanNumeral: string;
  classNumber?: number;
  title: string;
  arabicTitle?: string;
  shortDesc: string;
  overview?: string;
  colorScheme: {
    badge: string;
    border: string;
    bg: string;
    accent: string;
    gradient: string;
  };
  subgroups: string[];
  keyHighlights: string[];
}

export interface ChemoRegimen {
  id: string;
  acronym: string;
  fullName?: string;
  targetCancer: string;
  agents: {
    symbol: string;
    name: string;
    brand: string;
    drugClass: string;
  }[];
  indicationDetails: string;
  clinicalNotes: string;
}

export interface SuperfoodItem {
  id: string;
  number: number;
  name: string;
  category: "Fruits" | "Vegetables" | "Spices & Condiments" | "Cereals & Legumes";
  description: string;
  image: string;
}

export interface WarningSign {
  id: string;
  mnemonicLetter?: string;
  title: string;
  description: string;
  category: "adult_7_signs" | "child_8_signs";
  highRiskSymptoms: string;
}

export interface CellCyclePhase {
  id: string;
  phaseName: string;
  shortName: string;
  timing: string;
  description: string;
  molecularRegulators: string;
  checkpointDetails?: string;
  drugsActingHere: string[];
  color: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  topic: string;
  slideReference: string;
}

export interface EtiologyFactor {
  id: string;
  category: string;
  percentageStats: string;
  mechanisms: string[];
  clinicalExamples: string[];
  carcinogens: string[];
  image: string;
}
