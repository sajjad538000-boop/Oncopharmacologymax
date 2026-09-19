import { WarningSign, SuperfoodItem } from "../types";

export const CANCER_OVERVIEW = {
  definition: {
    title: "Definition of Cancer",
    description:
      "A group of more than 100 different diseases characterized by the development of abnormal cells that divide uncontrollably and have the ability to infiltrate and destroy normal body tissue.",
    tumorDefinition:
      "Neoplasm or Tumor is a group of cells that have undergone unregulated growth and will often form a mass or lump, but may be distributed diffusely.",
    metastasisVsBenign:
      "Cancer often has the ability to spread throughout the body (Metastases). These contrast with benign tumors which do not spread to other parts of the body.",
    lippincottPrinciple:
      "Cancer chemotherapy strives to cause a lethal cytotoxic event or apoptosis in the cancer cell that can arrest a tumor's progression. The attack is generally directed toward DNA or against metabolic sites essential to cell replication. Ideally, these anticancer drugs should interfere only with cellular processes that are unique to malignant cells. Unfortunately, most currently available anticancer drugs do not specifically recognize neoplastic cells but, rather, affect all kinds of proliferating cells both normal and abnormal. [Lippincott p 457]"
  },
  epidemiology: {
    rank: "Second-leading cause of death in the United States",
    fourCommonCancers: ["Prostate Cancer", "Breast Cancer", "Lung Cancer", "Colorectal Cancer"],
    deadliestCancer: "Lung cancer is the most common cause of cancer-related deaths in the United States, accounting for about 160,000 deaths each year."
  },
  etiology: {
    statement:
      "The mechanism by which cancer occurs is incompletely understood. Cancer or Neoplasm is a condition in which the normal mechanisms for control of growth and proliferation are altered.",
    internalFactors:
      "Inherited mutations, hormones, and immune conditions.",
    environmentalFactors:
      "Tobacco, diet, radiation, and infectious organisms.",
    percentages: {
      environmental: "90–95% of cancers are due to genetic mutations from environmental factors.",
      hereditary: "5–10% of cancers are due to inherited genetics (less than 0.3% of the population are carriers of high-penetrance genetic mutations)."
    }
  },
  riskFactors: [
    {
      name: "Tobacco",
      stats: "Accounts for 25–30% of all cancer deaths, and 87% of deaths from lung cancer.",
      details: "Contains at least 50 carcinogens including Nitrosamines, Polycyclic aromatic hydrocarbons (PAHs), and Benzo-pyrene-diol epoxide (BPDE)."
    },
    {
      name: "Alcohol",
      stats: "About 3.5% of global cancer deaths; 25–68% of upper aerodigestive tract cancers (oral cavity, pharynx, hypopharynx, larynx, esophagus).",
      details: "Chronic alcohol is a risk factor for upper aerodigestive tract, liver, pancreas, mouth, and breast cancers. Ethanol is not a direct carcinogen but a co-carcinogen. When metabolized, acetaldehyde and free radicals are generated that are responsible for alcohol-associated carcinogenesis. Alcohol also stimulates carcinogenesis by induction of cytochrome P-450 2E1 (CYP2E1), bio-activating certain toxins."
    },
    {
      name: "Diet",
      stats: "About 30–35% of cancer deaths in the USA were linked to diet, and 70% of deaths from colorectal cancer.",
      details: "Ingested carcinogens include nitrates, nitrosamines, pesticides, and dioxins from food, additives, or cooking. Heavy consumption of red meat, charcoal cooking, and smoke curing produce harmful carcinogenic carbon compounds. Salt of Nitrite and Nitrate (used to preserve cured meats and prevent botulism; E249 Potassium Nitrite, E250 Sodium Nitrite, E251 Sodium Nitrate, E252 Potassium Nitrate). Sodium nitrite imparts red color/taste; reacts with amines to form carcinogenic nitrosamines. Ingestion of arsenic increases risk of bladder, kidney, liver, lung cancer. Saturated/trans fats, refined sugars, high-salt diet (linked to gastric cancer), Aflatoxin B1 (produced by Aspergillus flavus on peanuts, corn, grains - causes liver cancer), Betel nut chewing (causes oral cancer)."
    },
    {
      name: "Obesity",
      stats: "About 14% in men & 20% in women of cancer deaths in the USA linked to obesity.",
      details: "Common denominators between obesity and cancer include neurochemicals and hormones such as Insulin-like Growth Factor 1 (IGF-1), insulin, and leptin."
    },
    {
      name: "Infectious Agents",
      stats: "About 17.8% of worldwide neoplasms are associated with infections.",
      details: "Viruses are most common: Human Papillomavirus (HPV), Epstein-Barr Virus (EBV), Kaposi's Sarcoma-associated Herpes Virus (KSHV/HHV-8), Human T-lymphotropic Virus 1 (HTLV-1), HIV, Hepatitis B Virus (HBV), and Hepatitis C Virus (HCV). Parasites: Opisthorchis viverrini, Schistosoma haematobium. Bacteria: Helicobacter pylori acting as cofactors/carcinogens."
    },
    {
      name: "Environmental Pollution",
      stats: "Airborne environmental hazards in occupational and residential settings.",
      details: "Outdoor air pollution: carbon particles, polycyclic aromatic hydrocarbons (PAHs). Indoor air pollution: environmental tobacco smoke, formaldehyde, and volatile organic compounds like benzene."
    },
    {
      name: "Radiation",
      stats: "Up to 10% of total cancer cases may be induced by radiation.",
      details: "Induces leukemia, lymphoma, thyroid, skin, sarcomas, lung, and breast cancers. Ionizing radiation: radon, x-rays, gamma rays, high energy. Radon gas: radioactive, colorless, odorless, tasteless noble gas occurring naturally as decay product of radium, uranium, thorium in rocks and soil. Non-ionizing radiation (sunlight UV rays): causes early aging and skin damage leading to skin cancer."
    },
    {
      name: "Hormones & Autoimmune Diseases",
      stats: "Endocrine dependencies and chronic inflammatory conditions.",
      details: "Hormones: sex-related cancers (breast, endometrium, prostate, ovary, testis, thyroid, bone). Higher estrogen/progesterone in breast cancer; higher testosterone in African ancestry correlated with higher prostate cancer. Autoimmune: Celiac disease associated with increased risk of all cancers. Crohn's disease and Ulcerative Colitis increase GI cancers via chronic inflammation. Immunomodulators/biologics may promote extra-intestinal malignancies. Physical carcinogens: Asbestos, asbestos-like fibers, powdered metallic cobalt and nickel, crystalline silica."
    }
  ],
  prevention: {
    summary:
      "Only 5–10% of cancers are due to genetic defects; 90–95% are due to environment and lifestyle, providing major opportunities for prevention.",
    keyRecommendations: [
      "Almost 90% of patients diagnosed with lung cancer are cigarette smokers - smoking cessation is critical.",
      "Dietary emphasis on vegetables, fruit, whole grains, and fish. Avoid excess processed/red meat, animal fats, pickled foods, and refined carbohydrates (2015 IARC report linked processed meat like bacon, ham, hot dogs, sausages to cancer).",
      "Coffee is associated with a reduced risk of liver cancer.",
      "Aspirin reduces cancer death risk by ~7%. NSAIDs reduce colorectal cancer risk (though cardiovascular/GI toxicity must be balanced). Celecoxib (COX-2 inhibitor) is used for prevention of Familial Adenomatous Polyposis (FAP).",
      "Tamoxifen or Raloxifene reduce breast cancer risk in high-risk women (adverse risks: uterine cancer, blood clots, ocular disturbances, hypercalcemia, stroke).",
      "Finasteride (5-alpha-reductase inhibitor) may decrease the incidence of prostate cancer.",
      "Vitamin D supplementation may decrease the risk of death from cancer.",
      "Beta-Carotene supplementation INCREASES the risk of lung cancer in high-risk individuals (especially smokers). Multivitamins like Centrum® lutein MUST be avoided in smokers.",
      "Vaccines: HPV vaccines (Gardasil®, Cervarix®) prevent cervical cancer; Hepatitis B vaccine prevents HBV infection and reduces liver cancer."
    ]
  }
};

export const WARNING_SIGNS: WarningSign[] = [
  {
    id: "ws-c",
    mnemonicLetter: "C",
    title: "Change in bowel or bladder habits",
    description: "Persistent changes in frequency, consistency, or caliber of stool, or dysuria/hematuria.",
    category: "adult_7_signs",
    highRiskSymptoms: "Colorectal, bladder, or prostate cancer signs."
  },
  {
    id: "ws-a",
    mnemonicLetter: "A",
    title: "A sore that does not heal",
    description: "Chronic skin, oral, or genital ulcers that resist conventional healing remedies.",
    category: "adult_7_signs",
    highRiskSymptoms: "Skin cancers (melanoma, squamous cell), oral carcinoma."
  },
  {
    id: "ws-u",
    mnemonicLetter: "U",
    title: "Unusual bleeding or discharge",
    description: "Hemoptysis, hematuria, rectal bleeding, postmenopausal vaginal bleeding, nipple discharge.",
    category: "adult_7_signs",
    highRiskSymptoms: "Uterine, bladder, colorectal, or breast cancer."
  },
  {
    id: "ws-t",
    mnemonicLetter: "T",
    title: "Thickening or lump in breast or elsewhere",
    description: "Painless or firm palpable nodules in breast, testicle, lymph nodes, or soft tissue.",
    category: "adult_7_signs",
    highRiskSymptoms: "Breast, testicular, or soft-tissue sarcomas."
  },
  {
    id: "ws-i",
    mnemonicLetter: "I",
    title: "Indigestion or difficulty in swallowing",
    description: "Progressive dysphagia, persistent retrosternal fullness, early satiety, or dyspepsia.",
    category: "adult_7_signs",
    highRiskSymptoms: "Esophageal, gastric, or pharyngeal cancer."
  },
  {
    id: "ws-o",
    mnemonicLetter: "O",
    title: "Obvious change in wart or mole",
    description: "Asymmetry, border irregularity, color variegation, diameter >6mm, or evolution (ABCDE).",
    category: "adult_7_signs",
    highRiskSymptoms: "Malignant Melanoma."
  },
  {
    id: "ws-n",
    mnemonicLetter: "N",
    title: "Nagging cough or hoarseness",
    description: "Cough lasting >3-4 weeks without infection, changing chronic smoker cough, or voice changes.",
    category: "adult_7_signs",
    highRiskSymptoms: "Bronchogenic or laryngeal carcinoma."
  },
  // Pediatric Warning Signs (Slide 19)
  {
    id: "ped-1",
    title: "Continued, unexplained weight loss",
    description: "Failure to thrive or persistent weight reduction without identifiable dietary cause.",
    category: "child_8_signs",
    highRiskSymptoms: "Pediatric solid tumors or systemic hematologic neoplasms."
  },
  {
    id: "ped-2",
    title: "Headaches with vomiting in the morning",
    description: "Morning nausea and projectile vomiting triggered by intracranial hypertension upon waking.",
    category: "child_8_signs",
    highRiskSymptoms: "Pediatric brain tumors (medulloblastoma, astrocytoma)."
  },
  {
    id: "ped-3",
    title: "Increased swelling or persistent pain in bones or joints",
    description: "Nighttime bone ache, joint pain, or limp unexplained by traumatic injury.",
    category: "child_8_signs",
    highRiskSymptoms: "Osteosarcoma, Ewing's sarcoma, or acute leukemia."
  },
  {
    id: "ped-4",
    title: "Lump or mass in abdomen, neck, or elsewhere",
    description: "Palpable abdominal fullness, painless cervical adenopathy, or pelvic masses.",
    category: "child_8_signs",
    highRiskSymptoms: "Wilms' tumor (nephroblastoma), Neuroblastoma, Lymphoma."
  },
  {
    id: "ped-5",
    title: "Development of a whitish appearance in pupil of eye",
    description: "Leukocoria ('cat's eye reflex') visible on flash photographs or penlight examination.",
    category: "child_8_signs",
    highRiskSymptoms: "Retinoblastoma (Rb gene loss)."
  },
  {
    id: "ped-6",
    title: "Recurrent fevers not caused by infections",
    description: "Persistent pyrexia of unknown origin unresponsive to standard antibiotics.",
    category: "child_8_signs",
    highRiskSymptoms: "Acute Lymphocytic Leukemia (ALL), Hodgkin's disease."
  },
  {
    id: "ped-7",
    title: "Excessive bruising or bleeding",
    description: "Petechiae, purpura, frequent epistaxis, or bleeding gums due to severe thrombocytopenia.",
    category: "child_8_signs",
    highRiskSymptoms: "Bone marrow failure / acute leukemias."
  },
  {
    id: "ped-8",
    title: "Noticeable paleness or prolonged tiredness",
    description: "Profound pallor, listlessness, and fatigue secondary to severe progressive anemia.",
    category: "child_8_signs",
    highRiskSymptoms: "Marrow infiltration in leukemia or advanced lymphomas."
  }
];

// All 94 Dietary Foods (Slides 12-13 verbatim)
export const PREVENTIVE_SUPERFOODS: SuperfoodItem[] = [
  // 16 Fruits
  { id: "f-1", number: 1, name: "Apple", category: "Fruits", description: "Rich in quercetin and polyphenols.", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&auto=format&fit=crop&q=80" },
  { id: "f-2", number: 2, name: "Apricot", category: "Fruits", description: "Packed with carotenoids and vitamin A.", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=300&auto=format&fit=crop&q=80" },
  { id: "f-3", number: 3, name: "Banana", category: "Fruits", description: "Supplies dietary potassium, fiber, and resistant starch.", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&auto=format&fit=crop&q=80" },
  { id: "f-4", number: 4, name: "Blackberry", category: "Fruits", description: "Dense anthocyanins and ellagic acid antioxidants.", image: "https://images.unsplash.com/photo-1517424279767-e9a65f9a76d8?w=300&auto=format&fit=crop&q=80" },
  { id: "f-5", number: 5, name: "Cherry", category: "Fruits", description: "High anthocyanin and perillyl alcohol content.", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300&auto=format&fit=crop&q=80" },
  { id: "f-6", number: 6, name: "Citrus fruits", category: "Fruits", description: "Limonoids, bioflavonoids, and vitamin C.", image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=300&auto=format&fit=crop&q=80" },
  { id: "f-7", number: 7, name: "Dessert date", category: "Fruits", description: "High phenolic antioxidant profiles and dietary fiber.", image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=300&auto=format&fit=crop&q=80" },
  { id: "f-8", number: 8, name: "Durian", category: "Fruits", description: "Rich organosulfur compounds and vitamin B complex.", image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=300&auto=format&fit=crop&q=80" },
  { id: "f-9", number: 9, name: "Grapes", category: "Fruits", description: "Skin contains resveratrol, a potent chemopreventive stilbene.", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300&auto=format&fit=crop&q=80" },
  { id: "f-10", number: 10, name: "Guava", category: "Fruits", description: "Exceptionally high lycopene and vitamin C levels.", image: "https://images.unsplash.com/photo-1536511135898-10b27b9c9f4d?w=300&auto=format&fit=crop&q=80" },
  { id: "f-11", number: 11, name: "Indian gooseberry (Amla)", category: "Fruits", description: "Supercharged with emblicanin tannins and vitamin C.", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&auto=format&fit=crop&q=80" },
  { id: "f-12", number: 12, name: "Mango", category: "Fruits", description: "Mangiferin, beta-cryptoxanthin, and carotenoids.", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&auto=format&fit=crop&q=80" },
  { id: "f-13", number: 13, name: "Malay apple", category: "Fruits", description: "Antioxidant flavonoids and hydration.", image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=300&auto=format&fit=crop&q=80" },
  { id: "f-14", number: 14, name: "Mangosteen", category: "Fruits", description: "Concentrated xanthones with anti-inflammatory activity.", image: "https://images.unsplash.com/photo-1589217157232-464b505b197f?w=300&auto=format&fit=crop&q=80" },
  { id: "f-15", number: 15, name: "Pineapple", category: "Fruits", description: "Contains bromelain, a proteolytic enzyme with anti-inflammatory effects.", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=300&auto=format&fit=crop&q=80" },
  { id: "f-16", number: 16, name: "Pomegranate", category: "Fruits", description: "Punicalagins and punicic acid that suppress prostate cell proliferation.", image: "https://images.unsplash.com/photo-1541344999736-83eca872f241?w=300&auto=format&fit=crop&q=80" },

  // 24 Vegetables
  { id: "v-1", number: 1, name: "Artichoke", category: "Vegetables", description: "Silymarin and cynarin supporting hepatic detox pathways.", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&auto=format&fit=crop&q=80" },
  { id: "v-2", number: 2, name: "Avocado", category: "Vegetables", description: "Monounsaturated fats, glutathione, and lutein.", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&auto=format&fit=crop&q=80" },
  { id: "v-3", number: 3, name: "Brussels sprout", category: "Vegetables", description: "Cruciferous glucosinolates and indole-3-carbinol.", image: "https://images.unsplash.com/photo-1438118991617-99383923c932?w=300&auto=format&fit=crop&q=80" },
  { id: "v-4", number: 4, name: "Broccoli", category: "Vegetables", description: "Sulforaphane activates Nrf2 phase-II detoxifying enzymes.", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&auto=format&fit=crop&q=80" },
  { id: "v-5", number: 5, name: "Cabbage", category: "Vegetables", description: "Rich in diindolylmethane (DIM) and vitamin C.", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&auto=format&fit=crop&q=80" },
  { id: "v-6", number: 6, name: "Cauliflower", category: "Vegetables", description: "Isothiocyanates supporting estrogen hormone metabolism.", image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=300&auto=format&fit=crop&q=80" },
  { id: "v-7", number: 7, name: "Carrot", category: "Vegetables", description: "High beta-carotene (dietary) and falcarinol.", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&auto=format&fit=crop&q=80" },
  { id: "v-8", number: 8, name: "Daikon", category: "Vegetables", description: "Digestive enzymes and glucoraphanin.", image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=300&auto=format&fit=crop&q=80" },
  { id: "v-9", number: 9, name: "Kohlrabi", category: "Vegetables", description: "Brassica family antioxidant glucosinolates.", image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23ebb?w=300&auto=format&fit=crop&q=80" },
  { id: "v-10", number: 10, name: "Onion", category: "Vegetables", description: "High allicin and quercetin flavonoids.", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300&auto=format&fit=crop&q=80" },
  { id: "v-11", number: 11, name: "Tomato", category: "Vegetables", description: "Abundant lycopene proven to reduce prostate cancer risk.", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&auto=format&fit=crop&q=80" },
  { id: "v-12", number: 12, name: "Turnip", category: "Vegetables", description: "Glucosinolates and antioxidant dietary fiber.", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&auto=format&fit=crop&q=80" },
  { id: "v-13", number: 13, name: "Ulluco", category: "Vegetables", description: "Andean tuber with protective mucilage and betalains.", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&auto=format&fit=crop&q=80" },
  { id: "v-14", number: 14, name: "Water cress", category: "Vegetables", description: "Phenethyl isothiocyanate (PEITC) inhibits carcinogen activation.", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&auto=format&fit=crop&q=80" },
  { id: "v-15", number: 15, name: "Okra", category: "Vegetables", description: "Soluble mucilage fiber and anti-tumor lectins.", image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=300&auto=format&fit=crop&q=80" },
  { id: "v-16", number: 16, name: "Potato", category: "Vegetables", description: "Resistant starch feeding healthy anti-cancer gut microbiota.", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&auto=format&fit=crop&q=80" },
  { id: "v-17", number: 17, name: "Fiddle head", category: "Vegetables", description: "Omega-3 fatty acids and wild antioxidant polyphenols.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80" },
  { id: "v-18", number: 18, name: "Radicchio", category: "Vegetables", description: "Inulin and lactucopicrin with antioxidant benefits.", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&auto=format&fit=crop&q=80" },
  { id: "v-19", number: 19, name: "Komatsuna", category: "Vegetables", description: "Japanese mustard spinach rich in sulforaphane precursors.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80" },
  { id: "v-20", number: 20, name: "Salt bush", category: "Vegetables", description: "Native halophyte packed with antioxidant minerals.", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&auto=format&fit=crop&q=80" },
  { id: "v-21", number: 21, name: "Winter squash", category: "Vegetables", description: "Abundant lutein, zeaxanthin, and cucurbitacins.", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300&auto=format&fit=crop&q=80" },
  { id: "v-22", number: 22, name: "Zucchini", category: "Vegetables", description: "Mild antioxidant carotenoids and cell hydration.", image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=300&auto=format&fit=crop&q=80" },
  { id: "v-23", number: 23, name: "Lettuce", category: "Vegetables", description: "Caffeic acid, chlorogenic acid, and dietary fiber.", image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=300&auto=format&fit=crop&q=80" },
  { id: "v-24", number: 24, name: "Spinach", category: "Vegetables", description: "Rich folate, chlorophyll, lutein, and iron.", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&auto=format&fit=crop&q=80" },

  // 26 Spices & Condiments
  { id: "s-1", number: 1, name: "Turmeric", category: "Spices & Condiments", description: "Curcumin, one of the most studied natural NF-kB inhibitors.", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&auto=format&fit=crop&q=80" },
  { id: "s-2", number: 2, name: "Cardamom", category: "Spices & Condiments", description: "Cineole and limonene promoting antioxidant enzyme activity.", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=300&auto=format&fit=crop&q=80" },
  { id: "s-3", number: 3, name: "Coriander", category: "Spices & Condiments", description: "Linalool and terpinene combating lipid peroxidation.", image: "https://images.unsplash.com/photo-1589135233689-d49942a691e8?w=300&auto=format&fit=crop&q=80" },
  { id: "s-4", number: 4, name: "Black pepper", category: "Spices & Condiments", description: "Piperine dramatically enhances curcumin bioavailability by 2000%.", image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=300&auto=format&fit=crop&q=80" },
  { id: "s-5", number: 5, name: "Clove", category: "Spices & Condiments", description: "Highest ORAC antioxidant value via active eugenol.", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=300&auto=format&fit=crop&q=80" },
  { id: "s-6", number: 6, name: "Fennel", category: "Spices & Condiments", description: "Anethole with anti-inflammatory and chemopreventive effects.", image: "https://images.unsplash.com/photo-1589135233689-d49942a691e8?w=300&auto=format&fit=crop&q=80" },
  { id: "s-7", number: 7, name: "Rosemary", category: "Spices & Condiments", description: "Carnosic acid and rosmarinic acid protecting cellular DNA.", image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=300&auto=format&fit=crop&q=80" },
  { id: "s-8", number: 8, name: "Sesame seed", category: "Spices & Condiments", description: "Sesamol and sesamin lignans.", image: "https://images.unsplash.com/photo-1536511135898-10b27b9c9f4d?w=300&auto=format&fit=crop&q=80" },
  { id: "s-9", number: 9, name: "Mustard", category: "Spices & Condiments", description: "Sinigrin and allyl isothiocyanate.", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=300&auto=format&fit=crop&q=80" },
  { id: "s-10", number: 10, name: "Licorice", category: "Spices & Condiments", description: "Glycyrrhizin and glabridin.", image: "https://images.unsplash.com/photo-1589135233689-d49942a691e8?w=300&auto=format&fit=crop&q=80" },
  { id: "s-11", number: 11, name: "Garlic", category: "Spices & Condiments", description: "Diallyl disulfide and allicin suppressing carcinogen activation.", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=300&auto=format&fit=crop&q=80" },
  { id: "s-12", number: 12, name: "Ginger", category: "Spices & Condiments", description: "Gingerols and 6-shogaol inhibiting inflammatory prostaglandins.", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&auto=format&fit=crop&q=80" },
  { id: "s-13", number: 13, name: "Parsley", category: "Spices & Condiments", description: "Apigenin and myristicin.", image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=300&auto=format&fit=crop&q=80" },
  { id: "s-14", number: 14, name: "Cinnamon", category: "Spices & Condiments", description: "Cinnamaldehyde suppressing tumor cell angiogenesis.", image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=300&auto=format&fit=crop&q=80" },
  { id: "s-15", number: 15, name: "Curry leaves", category: "Spices & Condiments", description: "Mahanimbine carbazole alkaloids.", image: "https://images.unsplash.com/photo-1589135233689-d49942a691e8?w=300&auto=format&fit=crop&q=80" },
  { id: "s-16", number: 16, name: "Kalonji (Black Seed)", category: "Spices & Condiments", description: "Thymoquinone with strong apoptotic properties.", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=300&auto=format&fit=crop&q=80" },
  { id: "s-17", number: 17, name: "Fenugreek", category: "Spices & Condiments", description: "Diosgenin steroid sapogenin.", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=300&auto=format&fit=crop&q=80" },
  { id: "s-18", number: 18, name: "Camphor", category: "Spices & Condiments", description: "Terpenoid bicyclic monoterpene.", image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=300&auto=format&fit=crop&q=80" },
  { id: "s-19", number: 19, name: "Pecan", category: "Spices & Condiments", description: "Rich gamma-tocopherol vitamin E.", image: "https://images.unsplash.com/photo-1536511135898-10b27b9c9f4d?w=300&auto=format&fit=crop&q=80" },
  { id: "s-20", number: 20, name: "Star anise", category: "Spices & Condiments", description: "Shikimic acid precursor and anethole.", image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=300&auto=format&fit=crop&q=80" },
  { id: "s-21", number: 21, name: "Flax seed", category: "Spices & Condiments", description: "Highest dietary secoisolariciresinol diglucoside (SDG) lignans and ALA omega-3.", image: "https://images.unsplash.com/photo-1536511135898-10b27b9c9f4d?w=300&auto=format&fit=crop&q=80" },
  { id: "s-22", number: 22, name: "Black mustard", category: "Spices & Condiments", description: "Sinigrin and glucoraphanin.", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=300&auto=format&fit=crop&q=80" },
  { id: "s-23", number: 23, name: "Pistachio", category: "Spices & Condiments", description: "Phytosterols, gamma-tocopherol, resveratrol.", image: "https://images.unsplash.com/photo-1536511135898-10b27b9c9f4d?w=300&auto=format&fit=crop&q=80" },
  { id: "s-24", number: 24, name: "Walnut", category: "Spices & Condiments", description: "Ellagitannins and juglone with strong antioxidant impact.", image: "https://images.unsplash.com/photo-1536511135898-10b27b9c9f4d?w=300&auto=format&fit=crop&q=80" },
  { id: "s-25", number: 25, name: "Peanut", category: "Spices & Condiments", description: "Resveratrol and p-coumaric acid (when untainted by aflatoxin).", image: "https://images.unsplash.com/photo-1536511135898-10b27b9c9f4d?w=300&auto=format&fit=crop&q=80" },
  { id: "s-26", number: 26, name: "Cashew nut", category: "Spices & Condiments", description: "Anacardic acids with anti-tumor properties.", image: "https://images.unsplash.com/photo-1536511135898-10b27b9c9f4d?w=300&auto=format&fit=crop&q=80" },

  // 28 Cereals & Legumes
  { id: "c-1", number: 1, name: "Rice", category: "Cereals & Legumes", description: "Whole brown rice bran containing ferulic acid and gamma-oryzanol.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
  { id: "c-2", number: 2, name: "Wheat", category: "Cereals & Legumes", description: "Whole wheat germ agglutinin and alkylresorcinols.", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&auto=format&fit=crop&q=80" },
  { id: "c-3", number: 3, name: "Oats", category: "Cereals & Legumes", description: "Beta-glucan soluble fiber and avenanthramides.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
  { id: "c-4", number: 4, name: "Rye", category: "Cereals & Legumes", description: "High concentration of mammalian lignan precursors.", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&auto=format&fit=crop&q=80" },
  { id: "c-5", number: 5, name: "Barley", category: "Cereals & Legumes", description: "Selenium and insoluble fiber promoting colonic short-chain fatty acids.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
  { id: "c-6", number: 6, name: "Maize (Corn)", category: "Cereals & Legumes", description: "Ferulic acid (heat cooking increases bound ferulic release).", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&auto=format&fit=crop&q=80" },
  { id: "c-7", number: 7, name: "Jowar (Sorghum)", category: "Cereals & Legumes", description: "Condensed 3-deoxyanthocyanidins suppressing tumor angiogenesis.", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&auto=format&fit=crop&q=80" },
  { id: "c-8", number: 8, name: "Pearl millet", category: "Cereals & Legumes", description: "Gluten-free resistant grain rich in phytic acid.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
  { id: "c-9", number: 9, name: "Proso millet", category: "Cereals & Legumes", description: "Antioxidant protein fractions and phenolic acids.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
  { id: "c-10", number: 10, name: "Foxtail millet", category: "Cereals & Legumes", description: "Digestive fiber and low-glycemic index starch.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
  { id: "c-11", number: 11, name: "Little millet", category: "Cereals & Legumes", description: "Mineral-rich prebiotic fiber for colonic integrity.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
  { id: "c-12", number: 12, name: "Barnyard millet", category: "Cereals & Legumes", description: "High antioxidant polyphenols and retrograded starch.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&auto=format&fit=crop&q=80" },
  { id: "c-13", number: 13, name: "Kidney bean", category: "Cereals & Legumes", description: "Fermentable dietary fiber, resistant starch, and anthocyanins.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-14", number: 14, name: "Soybean", category: "Cereals & Legumes", description: "Genistein and daidzein isoflavones with SERM-like protective mechanisms.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-15", number: 15, name: "Mung bean", category: "Cereals & Legumes", description: "Vitexin and isovitexin flavonoids.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-16", number: 16, name: "Black bean", category: "Cereals & Legumes", description: "Highest antioxidant score among common beans.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-17", number: 17, name: "Pigeon pea", category: "Cereals & Legumes", description: "Cajanin isoflavonoid and folate.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-18", number: 18, name: "Green pea", category: "Cereals & Legumes", description: "Coumestrol polyphenol linked to lowered gastric cancer risk.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-19", number: 19, name: "Scarlet runner bean", category: "Cereals & Legumes", description: "Condensed tannins and saponins.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-20", number: 20, name: "Black beluga lentil", category: "Cereals & Legumes", description: "Anthocyanins mimicking wild berry antioxidant profiles.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-21", number: 21, name: "Brown spanish pardina lentil", category: "Cereals & Legumes", description: "Soluble fiber reducing circulating bile acids.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-22", number: 22, name: "Green lentil", category: "Cereals & Legumes", description: "High zinc, selenium, and prebiotic carbohydrates.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-23", number: 23, name: "Green eston lentil", category: "Cereals & Legumes", description: "Polyphenols suppressing inflammatory cytokines.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-24", number: 24, name: "Ivory white lentil", category: "Cereals & Legumes", description: "Clean vegetable proteins and gut-lining prebiotics.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-25", number: 25, name: "Multicolored blend lentil", category: "Cereals & Legumes", description: "Synergistic variety of plant carotenoids and polyphenols.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-26", number: 26, name: "Petite crimson lentil", category: "Cereals & Legumes", description: "Decorticated red lentil high in bioavailable iron and folate.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-27", number: 27, name: "Petite golden lentil", category: "Cereals & Legumes", description: "Carotenoid-infused legume providing fast digestion.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" },
  { id: "c-28", number: 28, name: "Red chief lentil", category: "Cereals & Legumes", description: "Potent antioxidant flavan-3-ols and colon-cleansing fiber.", image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&auto=format&fit=crop&q=80" }
];
