import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, BookOpen, RefreshCw, Award, AlertCircle, Shuffle, ArrowRight, List, Globe, Star } from 'lucide-react';
import "./globals.css"

const topicsQuestions = [
  // ==========================================
  // TOPIC 2: CITIZENSHIP (1-50)
  // ==========================================
  {
    id: 1,
    question: "Citizenship by birth in Nigeria is based on which principle?",
    options: ["Jus Soli", "Jus Sanguinis", "Jus Domus", "Naturalization"],
    answer: "Jus Sanguinis",
    explanation: "Nigeria uses blood descent (Jus Sanguinis) for citizenship. It follows parental lineage, not just place of birth."
  },
  {
    id: 2,
    question: "Which constitution currently governs citizenship provisions in Nigeria?",
    options: ["1963", "1979", "1989", "1999"],
    answer: "1999",
    explanation: "The 1999 Constitution is the supreme law in force. It contains the current citizenship rules."
  },
  {
    id: 3,
    question: "Section 24 of the 1999 Constitution focuses on:",
    options: ["Duties of citizens", "Executive powers", "Judicial authority", "Local government functions"],
    answer: "Duties of citizens",
    explanation: "Section 24 lists citizens' duties like loyalty, obedience to laws and respect for national symbols. It balances the rights in Chapter IV."
  },
  {
    id: 4,
    question: "Which is NOT a valid method of acquiring Nigerian citizenship?",
    options: ["Birth", "Registration", "Naturalization", "Adoption"],
    answer: "Adoption",
    explanation: "Adoption alone does not automatically grant Nigerian citizenship. Only birth, registration and naturalization are recognized."
  },
  {
    id: 5,
    question: "Citizenship by registration is mainly granted to:",
    options: ["A married foreign woman", "Any African citizen", "Anyone born in Nigeria", "British nationals"],
    answer: "A married foreign woman",
    explanation: "A foreign woman married to a Nigerian man can be registered as a citizen. This is expressly provided in the constitution."
  },
  {
    id: 6,
    question: "For naturalization, an applicant must have lived in Nigeria for at least:",
    options: ["3 months", "6 months", "12 months", "15 years"],
    answer: "12 months",
    explanation: "The person must reside continuously in Nigeria for 12 months immediately before application (part of a larger 15-year requirement)."
  },
  {
    id: 7,
    question: "Which of the following is NOT a duty of Nigerian citizens?",
    options: ["Respecting the Constitution", "Paying taxes", "Defending Nigeria", "Becoming a politician"],
    answer: "Becoming a politician",
    explanation: "Holding political office is a choice, not a duty. The constitution stresses loyalty, defense and tax payment instead."
  },
  {
    id: 8,
    question: "The right to vote is classified as a:",
    options: ["Civil right", "Political right", "Social right", "Cultural right"],
    answer: "Political right",
    explanation: "Voting concerns participation in governance and leadership choice. It is therefore a political right."
  },
  {
    id: 9,
    question: "Which agency conducts elections in Nigeria?",
    options: ["EFCC", "INEC", "ICPC", "FRSC"],
    answer: "INEC",
    explanation: "INEC organizes elections and registers political parties. It is in charge of managing the electoral process."
  },
  {
    id: 10,
    question: "Dual citizenship in Nigeria is allowed only if the person is:",
    options: ["Married", "Naturalized", "Nigerian by birth", "Born abroad"],
    answer: "Nigerian by birth",
    explanation: "Only citizens 'by birth' are allowed to hold dual citizenship under the constitution. Others must renounce one nationality."
  },
  {
    id: 11,
    question: "Which is a civil right under the constitution?",
    options: ["Right to vote", "Right to private life", "Right to hold office", "Right to protest"],
    answer: "Right to private life",
    explanation: "Civil rights protect private freedoms like privacy and dignity. They are different from political participation rights."
  },
  {
    id: 12,
    question: "Paying taxes is a:",
    options: ["Political duty", "Economic right", "Civic responsibility", "Social privilege"],
    answer: "Civic responsibility",
    explanation: "Citizens are obliged to pay taxes to support government services. Refusal weakens public finance and development."
  },
  {
    id: 13,
    question: "Citizenship by naturalization requires:",
    options: ["Military service", "Good character", "High income", "Religious affiliation"],
    answer: "Good character",
    explanation: "Applicants must be of good character and recommended by people in their community. Moral conduct is a key condition."
  },
  {
    id: 14,
    question: "The body that interprets the Constitution is the:",
    options: ["Executive", "Judiciary", "Legislature", "Police"],
    answer: "Judiciary",
    explanation: "Courts interpret the constitution and decide disputes. The judiciary has final authority on constitutional matters."
  },
  {
    id: 15,
    question: "Serving Nigeria when required is part of:",
    options: ["Voting duty", "Environmental duty", "Social right", "National defense"],
    answer: "National defense",
    explanation: "Citizens may be called to defend Nigeria in times of war or emergency. This is a duty to preserve national security."
  },
  {
    id: 16,
    question: "The constitution declares that sovereignty belongs to:",
    options: ["The President", "The Military", "Traditional rulers", "The People"],
    answer: "The People",
    explanation: "All power ultimately belongs to the people of Nigeria. Governments only exercise delegated authority."
  },
  {
    id: 17,
    question: "Refusal to pay taxes affects:",
    options: ["Public services", "Judiciary functions", "Private businesses", "Traditional ceremonies"],
    answer: "Public services",
    explanation: "Taxes fund infrastructure, education and health. Non-payment reduces government's ability to provide these services."
  },
  {
    id: 18,
    question: "Freedom from discrimination protects citizens from unfair treatment based on:",
    options: ["Income", "Skills", "Ethnicity, sex or religion", "Education"],
    answer: "Ethnicity, sex or religion",
    explanation: "The constitution forbids discrimination on grounds like ethnic group, gender and religion. All citizens are equal before the law."
  },
  {
    id: 19,
    question: "Sections 25-32 of the 1999 Constitution relate to:",
    options: ["Defense", "Citizenship", "Judiciary", "Economy"],
    answer: "Citizenship",
    explanation: "These sections explain citizenship by birth, registration and naturalization. They set the rules for who is a Nigerian citizen."
  },
  {
    id: 20,
    question: "Participating in elections is part of:",
    options: ["Civic responsibility", "Social rights", "Customary duties", "Judicial obligations"],
    answer: "Civic responsibility",
    explanation: "Voting helps choose leaders and policies. It is one of the main responsibilities of citizens in a democracy."
  },
  {
    id: 21,
    question: "Which agency fights corruption in public offices?",
    options: ["NOA", "NAFDAC", "ICPC", "FRSC"],
    answer: "ICPC",
    explanation: "ICPC focuses on corruption in public institutions. It complements EFCC's work on economic and financial crimes."
  },
  {
    id: 22,
    question: "National Orientation Agency (NOA) is responsible for:",
    options: ["Border security", "National unity campaigns", "Drug regulation", "Road safety"],
    answer: "National unity campaigns",
    explanation: "NOA promotes patriotism, civic education and national integration. It encourages citizens to adopt positive values."
  },
  {
    id: 23,
    question: "A citizen disobeying traffic laws violates:",
    options: ["A civic duty", "A political right", "A religious law", "A social privilege"],
    answer: "A civic duty",
    explanation: "Obedience to law is a constitutional duty. Traffic laws protect the lives and property of road users."
  },
  {
    id: 24,
    question: "Naturalization applicants must be acceptable to:",
    options: ["INEC", "The community and state governor", "Traditional council", "Local vigilante"],
    answer: "The community and state governor",
    explanation: "Applicants need endorsements showing good character and integration. Community leaders and the governor help verify this."
  },
  {
    id: 25,
    question: "The duty to promote Nigeria's prestige abroad belongs to:",
    options: ["Diplomats only", "Elders only", "Citizens", "Traders"],
    answer: "Citizens",
    explanation: "Every citizen represents Nigeria by their conduct. Good behaviour abroad enhances the country's image."
  },
  {
    id: 26,
    question: "A citizen's right to join political parties is a:",
    options: ["Cultural right", "Political right", "Economic right", "Social privilege"],
    answer: "Political right",
    explanation: "Joining parties allows citizens to participate in politics. It is essential for democratic competition."
  },
  {
    id: 27,
    question: "Environmental protection is a:",
    options: ["Civic responsibility", "Judicial right", "Political right", "Religious obligation"],
    answer: "Civic responsibility",
    explanation: "Citizens are expected to keep their surroundings clean. This reduces pollution and disease."
  },
  {
    id: 28,
    question: "Which of the following is a social right?",
    options: ["Right to vote", "Right to education", "Right to run for office", "Right to protest"],
    answer: "Right to education",
    explanation: "Social rights include education, health and housing. They help secure people's welfare and development."
  },
  {
    id: 29,
    question: "A citizen refusing to vote neglects:",
    options: ["A civil right", "A social right", "A civic responsibility", "A legal privilege"],
    answer: "A civic responsibility",
    explanation: "Voting is not compulsory by force, but it is a duty. Failing to vote weakens representation and democracy."
  },
  {
    id: 30,
    question: "A naturalized citizen must reside in Nigeria for at least:",
    options: ["3 years", "8 years", "15 years", "30 years"],
    answer: "15 years",
    explanation: "The constitution requires a total of 15 years residency. The last 12 months before application must be continuous."
  },
  {
    id: 31,
    question: "Rights such as freedom of speech are classified as:",
    options: ["Political rights", "Economic rights", "Fundamental rights", "Cultural rights"],
    answer: "Fundamental rights",
    explanation: "Fundamental rights guarantee basic freedoms like speech and association. They are entrenched in Chapter IV."
  },
  {
    id: 32,
    question: "A citizen must assist lawful agencies in maintaining:",
    options: ["Trade", "Peace and order", "Customs duties", "Religious practices"],
    answer: "Peace and order",
    explanation: "Citizens should support security and law-enforcement bodies. This helps to maintain peace and stability."
  },
  {
    id: 33,
    question: "Which is NOT a civic responsibility?",
    options: ["Voting", "Paying taxes", "Serving in the military", "Attending church"],
    answer: "Attending church",
    explanation: "Civic responsibilities are linked with the state, not religion. Worship is a personal choice, not a legal duty."
  },
  {
    id: 34,
    question: "The constitution guarantees freedom of movement except during:",
    options: ["Festivals", "Emergencies", "Elections", "Examinations"],
    answer: "Emergencies",
    explanation: "In times of emergency, movement can be restricted for security. This is allowed under special conditions."
  },
  {
    id: 35,
    question: "Which group enforces road safety laws?",
    options: ["EFCC", "FRSC", "NDLEA", "Customary courts"],
    answer: "FRSC",
    explanation: "FRSC is responsible for road safety and traffic regulations. Its aim is to reduce accidents on highways."
  },
  {
    id: 36,
    question: "Which right ensures fair legal treatment?",
    options: ["Right to silence", "Right to fair hearing", "Right to join unions", "Right to protest"],
    answer: "Right to fair hearing",
    explanation: "Right to fair hearing means both sides must be listened to before judgment. It is central to justice and rule of law."
  },
  {
    id: 37,
    question: "A citizen who promotes unity is fulfilling:",
    options: ["A civil right", "A political duty", "A constitutional obligation", "A personal hobby"],
    answer: "A constitutional obligation",
    explanation: "Section 24 states that citizens must promote national unity. It is a duty, not just a personal preference."
  },
  {
    id: 38,
    question: "Which body creates laws in Nigeria?",
    options: ["Judiciary", "Executive", "Legislature", "Police"],
    answer: "Legislature",
    explanation: "The National Assembly (and State Houses) make laws through bills. They exercise legislative powers on behalf of the people."
  },
  {
    id: 39,
    question: "A citizen's right to personal liberty can be restricted for:",
    options: ["Refusing food", "Lawful arrest", "Sleeping late", "Failure to vote"],
    answer: "Lawful arrest",
    explanation: "Liberty may be limited when a person is lawfully arrested or detained. Even then, rules of due process must be followed."
  },
  {
    id: 40,
    question: "Obeying national symbols is part of:",
    options: ["Civil rights", "Military service", "Civic duties", "Economic development"],
    answer: "Civic duties",
    explanation: "Citizens are expected to honour the anthem, flag and pledge. It is a sign of loyalty and respect for Nigeria."
  },
  {
    id: 41,
    question: "Which right supports free expression of religious belief?",
    options: ["Political right", "Cultural right", "Fundamental right", "Environmental right"],
    answer: "Fundamental right",
    explanation: "Freedom of thought, conscience and religion is a fundamental right. Citizens may worship freely, provided they keep the peace."
  },
  {
    id: 42,
    question: "A citizen engaging in community sanitation contributes to:",
    options: ["Judicial reform", "Social development", "Trade expansion", "Foreign policy"],
    answer: "Social development",
    explanation: "Clean surroundings promote public health and wellbeing. Community work improves social life."
  },
  {
    id: 43,
    question: "The duty to help maintain law and order belongs to:",
    options: ["Only the police", "Citizens and agencies", "Only soldiers", "Traditional rulers"],
    answer: "Citizens and agencies",
    explanation: "Law and order require cooperation between citizens and security agencies. Everyone has a role in keeping peace."
  },
  {
    id: 44,
    question: "Freedom of assembly allows citizens to:",
    options: ["Form groups peacefully", "Avoid paying taxes", "Reject court rulings", "Evade public duties"],
    answer: "Form groups peacefully",
    explanation: "Citizens may meet or protest peacefully. Violence and crime are not covered by this freedom."
  },
  {
    id: 45,
    question: "Environmental sanitation laws are enforced to:",
    options: ["Discriminate", "Promote community health", "Increase government fines", "Restrict movement"],
    answer: "Promote community health",
    explanation: "The aim is to prevent disease and keep cities clean. Health is a key reason for sanitation measures."
  },
  {
    id: 46,
    question: "A citizen performing national service contributes to:",
    options: ["Media regulation", "National development", "Religious harmony", "Border closure"],
    answer: "National development",
    explanation: "Service to the nation helps build infrastructure, institutions and human capital. It supports long-term development."
  },
  {
    id: 47,
    question: "The constitution protects citizens from forced:",
    options: ["Participation in politics", "Labor", "Religious fasting", "Schooling"],
    answer: "Labor",
    explanation: "Forced labour is prohibited except as punishment after lawful conviction. This protects human dignity."
  },
  {
    id: 48,
    question: "The right to dignity protects citizens from:",
    options: ["Insults from friends", "Torture or degrading treatment", "Paying fines", "Broken contracts"],
    answer: "Torture or degrading treatment",
    explanation: "Nobody may be subjected to torture or inhuman treatment. This upholds respect for the human person."
  },
  {
    id: 49,
    question: "A citizen's right to own property is a:",
    options: ["Cultural freedom", "Civil right", "Social duty", "Religious privilege"],
    answer: "Civil right",
    explanation: "Property rights ensure economic independence and security. Citizens can acquire and dispose of property lawfully."
  },
  {
    id: 50,
    question: "Citizens are expected to report crimes because:",
    options: ["It is only optional courtesy", "It ensures justice and safety", "It increases court workload", "It replaces police work"],
    answer: "It ensures justice and safety",
    explanation: "Reporting crime helps authorities protect society. It supports justice, safety and rule of law."
  },

  // ==========================================
  // TOPIC 8: DEVELOPMENT POLICIES (51-100)
  // ==========================================
  {
    id: 51,
    question: "The post-Civil War policy of \"Rehabilitation, Reconstruction and Reconciliation\" aimed to:",
    options: ["Punish the losing region", "Rebuild and unify Nigeria", "Reduce foreign influence", "Restore monarchy"],
    answer: "Rebuild and unify Nigeria",
    explanation: "The 3Rs policy was introduced after the Nigerian Civil War to heal national wounds. It sought to rebuild destroyed infrastructure and promote peace."
  },
  {
    id: 52,
    question: "A major challenge of post-war reconstruction was:",
    options: ["Overabundance of skilled workers", "Lack of funding despite the oil boom", "Widespread destruction of infrastructure", "The absence of political leadership"],
    answer: "Widespread destruction of infrastructure",
    explanation: "The war left roads, schools, hospitals, and bridges severely damaged, especially in the East. Rebuilding required extensive resources."
  },
  {
    id: 53,
    question: "The oil boom of the 1970s caused Nigeria to:",
    options: ["Diversify the economy", "Shift from agriculture to oil dependence", "Reduce government spending", "Completely eliminate poverty"],
    answer: "Shift from agriculture to oil dependence",
    explanation: "The discovery and export of oil dramatically increased government revenue but caused neglect of agriculture."
  },
  {
    id: 54,
    question: "A major negative effect of the oil boom was:",
    options: ["Rapid industrialization", "Decline in corruption", "Overreliance on a single export", "Reduction of foreign debt"],
    answer: "Overreliance on a single export",
    explanation: "Nigeria became overly dependent on oil, making the economy vulnerable to global price fluctuations."
  },
  {
    id: 55,
    question: "Operation Feed the Nation (OFN) was launched in:",
    options: ["1966", "1976", "1986", "1993"],
    answer: "1976",
    explanation: "General Obasanjo launched OFN in 1976 to combat food shortages by encouraging all Nigerians to farm."
  },
  {
    id: 56,
    question: "The main goal of Operation Feed the Nation was to:",
    options: ["Export food", "Encourage mass participation in farming", "Create plantations for the military", "Replace agricultural universities"],
    answer: "Encourage mass participation in farming",
    explanation: "OFN encouraged citizens—students, civil servants, and urban dwellers—to cultivate farms and gardens."
  },
  {
    id: 57,
    question: "The Green Revolution (1980) focused on:",
    options: ["Expanding oil exports", "Improving mechanized agriculture", "Reducing food consumption", "Privatizing universities"],
    answer: "Improving mechanized agriculture",
    explanation: "Initiated by President Shagari, the Green Revolution sought to boost food production by introducing improved seedlings, fertilizers, and machines."
  },
  {
    id: 58,
    question: "A major weakness of the Green Revolution program was:",
    options: ["Low political support", "Lack of fertilizers and machinery distribution", "Excess funding", "Rural resistance"],
    answer: "Lack of fertilizers and machinery distribution",
    explanation: "Although the government imported equipment, distribution was slow and often hijacked by elites."
  },
  {
    id: 59,
    question: "The Structural Adjustment Programme (SAP) was introduced in:",
    options: ["1975", "1986", "1999", "1993"],
    answer: "1986",
    explanation: "SAP was introduced by General Ibrahim Babangida to address Nigeria's economic crisis through deregulation."
  },
  {
    id: 60,
    question: "SAP required Nigeria to:",
    options: ["Increase subsidies", "Devalue the naira", "Expand government payrolls", "Ban exports"],
    answer: "Devalue the naira",
    explanation: "Devaluation made Nigerian exports cheaper but also increased the cost of imports, causing inflation."
  },
  {
    id: 61,
    question: "A major criticism of SAP was that it:",
    options: ["Improved living standards", "Reduced unemployment", "Increased poverty and inflation", "Promoted food production"],
    answer: "Increased poverty and inflation",
    explanation: "SAP's austerity measures—such as subsidy removal—caused prices of food and goods to rise sharply."
  },
  {
    id: 62,
    question: "The Directorate for Food, Roads and Rural Infrastructure (DFFRI) was created to:",
    options: ["Develop only urban centers", "Improve rural infrastructure", "Train foreign workers", "Build airports"],
    answer: "Improve rural infrastructure",
    explanation: "DFFRI targeted rural communities by constructing feeder roads, providing water, and improving electricity."
  },
  {
    id: 63,
    question: "A major problem faced by DFFRI was:",
    options: ["Overfunding", "Corruption and poor project supervision", "Excess rural migration", "Lack of political support"],
    answer: "Corruption and poor project supervision",
    explanation: "Funds allocated for rural projects were often diverted, and contractors built low-quality infrastructure."
  },
  {
    id: 64,
    question: "The National Directorate of Employment (NDE) was established to:",
    options: ["Reduce oil dependency", "Provide youth employment and skills", "Train soldiers", "Replace universities"],
    answer: "Provide youth employment and skills",
    explanation: "Established in 1986, the NDE offered vocational training and business development to combat unemployment."
  },
  {
    id: 65,
    question: "The NDE's major achievement was:",
    options: ["Ending unemployment entirely", "Training thousands in vocational skills", "Closing rural industries", "Replacing secondary schools"],
    answer: "Training thousands in vocational skills",
    explanation: "The NDE empowered youths with training in welding, tailoring, carpentry, ICT, and agriculture."
  },
  {
    id: 66,
    question: "MAMSER was established to:",
    options: ["Promote tribalism", "Mobilize citizens for self-reliance", "Train only military personnel", "Reduce farming activities"],
    answer: "Mobilize citizens for self-reliance",
    explanation: "MAMSER educated Nigerians about government policies and encouraged discipline and patriotism."
  },
  {
    id: 67,
    question: "MAMSER was introduced during the regime of:",
    options: ["Gowon", "Shagari", "Babangida", "Obasanjo"],
    answer: "Babangida",
    explanation: "General Ibrahim Babangida launched MAMSER as part of reforms to prepare Nigeria for civilian rule."
  },
  {
    id: 68,
    question: "The Better Life for Rural Women program was initiated by:",
    options: ["Maryam Abacha", "Maryam Babangida", "Flora Azikiwe", "Margaret Ekpo"],
    answer: "Maryam Babangida",
    explanation: "Maryam Babangida established this program to empower women through training, cooperatives, and community projects."
  },
  {
    id: 69,
    question: "The Better Life program focused on:",
    options: ["Youth literacy", "Women's empowerment", "Military training", "Oil exploration"],
    answer: "Women's empowerment",
    explanation: "The initiative provided skills and financial support to rural women to strengthen their economic independence."
  },
  {
    id: 70,
    question: "Family Support Programme (FSP) was established to:",
    options: ["Promote child welfare and family health", "Train only farmers", "Build highways", "Replace local governments"],
    answer: "Promote child welfare and family health",
    explanation: "FSP, launched under Sani Abacha, aimed to support family health, childcare, and women's welfare."
  },
  {
    id: 71,
    question: "Family Economic Advancement Programme (FEAP) focused on:",
    options: ["Funding small businesses", "Developing oil industries", "Expanding federal tax", "Supporting only elites"],
    answer: "Funding small businesses",
    explanation: "FEAP provided loans and training to small-scale entrepreneurs to reduce poverty."
  },
  {
    id: 72,
    question: "A persistent challenge during 1970-1999 was:",
    options: ["Excess transparency", "Mismanagement and corruption", "Lack of natural resources", "Too much industrialization"],
    answer: "Mismanagement and corruption",
    explanation: "Almost every major development policy faced problems of corruption, diversion of funds, and weak accountability."
  },
  {
    id: 73,
    question: "One key reason Nigeria struggled with food production was:",
    options: ["Excess agricultural machinery", "Neglect of agriculture due to oil boom", "Overpopulation in farms", "Wealthy rural communities"],
    answer: "Neglect of agriculture due to oil boom",
    explanation: "When oil became the primary revenue source, agriculture was neglected, leading to food insecurity."
  },
  {
    id: 74,
    question: "A lasting legacy of the SAP era was:",
    options: ["Price stability", "Massive inflation and poverty", "Cheap foreign goods", "Strong rural development"],
    answer: "Massive inflation and poverty",
    explanation: "SAP's currency devaluation caused sharp increases in prices, pushing many Nigerians into poverty."
  },
  {
    id: 75,
    question: "Overall, development policies between 1970 and 1999 were:",
    options: ["Highly successful", "Moderately effective", "Ambitious but undermined by corruption", "Focused only on the military"],
    answer: "Ambitious but undermined by corruption",
    explanation: "Many initiatives had good intentions but failed in execution due to corruption and instability."
  },
  {
    id: 76,
    question: "One of the major weaknesses of OFN (Operation Feed the Nation) was:",
    options: ["Lack of media publicity", "Poor access to land and tools", "Overproduction of food", "Excessive mechanization"],
    answer: "Poor access to land and tools",
    explanation: "Most people lacked access to land, fertilizers, and farming tools, limiting the program's impact."
  },
  {
    id: 77,
    question: "The Green Revolution attempted to solve Nigeria's food problem by:",
    options: ["Privatizing agriculture", "Introducing improved seeds and fertilizers", "Closing local farms", "Importing all food"],
    answer: "Introducing improved seeds and fertilizers",
    explanation: "It aimed to modernize agriculture through improved seedlings, fertilizers, irrigation, and tractors."
  },
  {
    id: 78,
    question: "One major similarity between OFN and the Green Revolution was that both:",
    options: ["Succeeded perfectly", "Failed due to corruption and mismanagement", "Eliminated unemployment", "Reduced rural-urban migration"],
    answer: "Failed due to corruption and mismanagement",
    explanation: "Both programs suffered from weak management, elite capture, and political interference."
  },
  {
    id: 79,
    question: "The Structural Adjustment Programme (SAP) encouraged:",
    options: ["Increased government spending", "Trade liberalization and currency devaluation", "More subsidies", "A return to barter system"],
    answer: "Trade liberalization and currency devaluation",
    explanation: "SAP pushed for reduced government involvement and opening Nigeria's economy to global markets."
  },
  {
    id: 80,
    question: "One major social effect of SAP was:",
    options: ["Cheaper food items", "Higher poverty and unemployment", "Stable exchange rates", "Increased government salaries"],
    answer: "Higher poverty and unemployment",
    explanation: "With subsidy removal and currency devaluation, prices skyrocketed and unemployment increased."
  },
  {
    id: 81,
    question: "DFFRI focused mainly on:",
    options: ["Urban development", "Rural infrastructure such as roads and water", "Exporting food", "Building universities"],
    answer: "Rural infrastructure such as roads and water",
    explanation: "DFFRI aimed to uplift rural communities by improving electricity, access roads, and water supply."
  },
  {
    id: 82,
    question: "A common criticism of DFFRI was that:",
    options: ["It created too many industries", "Many projects were abandoned or poorly executed", "It employed only foreigners", "It only served the North"],
    answer: "Many projects were abandoned or poorly executed",
    explanation: "Many DFFRI roads and boreholes failed quickly due to poor construction standards and corruption."
  },
  {
    id: 83,
    question: "The National Directorate of Employment (NDE) focused on:",
    options: ["Rural electrification only", "Youth employment and vocational training", "Mining development", "Military recruitment"],
    answer: "Youth employment and vocational training",
    explanation: "Its goal was to reduce unemployment by training youths to become self-reliant."
  },
  {
    id: 84,
    question: "The Mass Mobilization for Self-Reliance (MAMSER) program was designed to:",
    options: ["Promote national consciousness and self-reliance", "Replace traditional rulers", "Train soldiers", "Control oil revenue"],
    answer: "Promote national consciousness and self-reliance",
    explanation: "It aimed to reduce civic apathy by teaching citizens about national values and responsibilities."
  },
  {
    id: 85,
    question: "MAMSER was introduced under the leadership of:",
    options: ["Gowon", "Babangida", "Shagari", "Abacha"],
    answer: "Babangida",
    explanation: "General Ibrahim Babangida launched MAMSER during the late 1980s."
  },
  {
    id: 86,
    question: "The Better Life for Rural Women program addressed:",
    options: ["Youth unemployment", "Women's economic empowerment", "Oil production issues", "Road construction"],
    answer: "Women's economic empowerment",
    explanation: "It aimed to reduce gender inequality and improve rural livelihoods by helping women access credit."
  },
  {
    id: 87,
    question: "A key strength of the Better Life program was that:",
    options: ["It ignored rural areas", "It highlighted women's economic value", "It removed all poverty", "It replaced the NDE"],
    answer: "It highlighted women's economic value",
    explanation: "The initiative brought national attention to the importance of women in economic development."
  },
  {
    id: 88,
    question: "Family Support Programme (FSP) promoted:",
    options: ["Political campaigns only", "Family health, childcare, and education", "Oil sector investments", "Rural electrification"],
    answer: "Family health, childcare, and education",
    explanation: "FSP focused on improving maternal health, nutrition, and child welfare."
  },
  {
    id: 89,
    question: "The Family Economic Advancement Programme (FEAP) provided:",
    options: ["Scholarships only", "Loans for small-scale businesses", "Free electricity", "Civil service employment"],
    answer: "Loans for small-scale businesses",
    explanation: "FEAP supported small entrepreneurs by giving loans and resources for micro-enterprises."
  },
  {
    id: 90,
    question: "A major problem affecting most development programs (1970-1999) was:",
    options: ["Excess accountability", "Persistent corruption and mismanagement", "Completely honest officials", "Strong institutions"],
    answer: "Persistent corruption and mismanagement",
    explanation: "Corruption diverted funds meant for development, weakening implementation across programs."
  },
  {
    id: 91,
    question: "One major reason agricultural programs failed was:",
    options: ["Lack of farmers", "Poor distribution of inputs and resources", "Too much irrigation", "Over-production of food"],
    answer: "Poor distribution of inputs and resources",
    explanation: "Fertilizers and tractors often failed to reach real farmers as politicians hijacked distribution."
  },
  {
    id: 92,
    question: "A long-term effect of SAP was:",
    options: ["A stronger currency", "Increased social inequality", "Reduced inflation", "More government jobs"],
    answer: "Increased social inequality",
    explanation: "SAP widened the gap between rich and poor due to subsidy removal and inflation."
  },
  {
    id: 93,
    question: "Which program focused on building feeder roads in rural areas?",
    options: ["OFN", "DFFRI", "FEAP", "SAP"],
    answer: "DFFRI",
    explanation: "DFFRI was created specifically to improve rural infrastructure, especially roads connecting farmers to markets."
  },
  {
    id: 94,
    question: "One goal of FEAP was to:",
    options: ["Increase oil profit", "Support micro-businesses with loans", "Abolish agriculture", "Train only civil servants"],
    answer: "Support micro-businesses with loans",
    explanation: "FEAP focused on empowering small businesses to reduce unemployment."
  },
  {
    id: 95,
    question: "A common challenge across OFN, Green Revolution, and DFFRI was:",
    options: ["Lack of political support", "Poor implementation and corruption", "Too many skilled workers", "Excess agricultural production"],
    answer: "Poor implementation and corruption",
    explanation: "Despite good intentions, these programs were weakened by mismanagement and poor monitoring."
  },
  {
    id: 96,
    question: "The 1980s economic crisis was caused largely by:",
    options: ["Rising oil prices", "Collapse in global oil prices", "Discovery of gold", "Increased export earnings"],
    answer: "Collapse in global oil prices",
    explanation: "When oil prices fell globally, Nigeria lost significant revenue because it relied heavily on oil exports."
  },
  {
    id: 97,
    question: "Poor policy continuity in Nigeria resulted in:",
    options: ["Stable long-term development", "Abandoned projects and wasted resources", "Increased foreign investment", "Strong institutional capacity"],
    answer: "Abandoned projects and wasted resources",
    explanation: "Many programs were discontinued when new governments came into power, wasting resources."
  },
  {
    id: 98,
    question: "A major hindrance to Nigeria's industrialization was:",
    options: ["Low population", "Dependence on imported goods", "Excess electricity supply", "High agricultural mechanization"],
    answer: "Dependence on imported goods",
    explanation: "Cheap imported goods weakened local industries because Nigerian manufacturers couldn't compete."
  },
  {
    id: 99,
    question: "A general feature of policies between 1970-1999 was:",
    options: ["Strong monitoring", "High success rate", "Ambitious goals but weak execution", "Minimal corruption"],
    answer: "Ambitious goals but weak execution",
    explanation: "Ambition exceeded capacity and execution was poor due to corruption and instability."
  },
  {
    id: 100,
    question: "Overall, development efforts (1970-1999) can be described as:",
    options: ["Fully effective", "Completely nonexistent", "Significant but widely undermined", "Focused on one region"],
    answer: "Significant but widely undermined",
    explanation: "Some progress was recorded, but most initiatives failed to achieve lasting results due to systemic issues."
  },

  // ==========================================
  // TOPIC 9: GENDER & CULTURE (101-150)
  // ==========================================
  {
    id: 101,
    question: "Gender roles in Nigerian culture are primarily shaped by:",
    options: ["Biology alone", "Religion, tradition, and social expectations", "Economic class only", "Western influence only"],
    answer: "Religion, tradition, and social expectations",
    explanation: "Gender roles are defined through a blend of traditional customs, religious teachings, and community expectations."
  },
  {
    id: 102,
    question: "In many Nigerian communities, women traditionally played major roles in:",
    options: ["Political leadership", "Agriculture and trade", "Military conquest", "Judicial sentencing"],
    answer: "Agriculture and trade",
    explanation: "Women were historically central to agriculture (food crops) and dominated local markets."
  },
  {
    id: 103,
    question: "A major stereotype about gender in Nigerian culture is that:",
    options: ["Women cannot lead", "Men cannot farm", "Women must rule kingdoms", "Men must trade in markets"],
    answer: "Women cannot lead",
    explanation: "Many societies historically associated leadership with masculinity, limiting women's access to formal authority."
  },
  {
    id: 104,
    question: "The concept of gender refers to:",
    options: ["Biological differences", "Socially constructed roles", "Physical strength", "Birth order"],
    answer: "Socially constructed roles",
    explanation: "Gender describes the roles and expectations society assigns to men and women, not biological traits."
  },
  {
    id: 105,
    question: "In traditional Igbo society, women participated politically through:",
    options: ["Village kingship", "Councils such as the Umuada", "Military councils", "Emirate structures"],
    answer: "Councils such as the Umuada",
    explanation: "The Umuada consisted of respected daughters of the lineage who mediated disputes and upheld morality."
  },
  {
    id: 106,
    question: "In Yoruba society, the Iyalode was known for:",
    options: ["Leading wars", "Representing women in politics", "Enforcing taxes", "Crown-making rituals"],
    answer: "Representing women in politics",
    explanation: "The Iyalode served as the official voice of women within Yoruba political institutions."
  },
  {
    id: 107,
    question: "Queen Amina of Zazzau is remembered for:",
    options: ["Agricultural reforms", "Military expansion and leadership", "Teaching pottery", "Introducing Christianity"],
    answer: "Military expansion and leadership",
    explanation: "Queen Amina was a renowned warrior queen who expanded Zazzau territory in the 16th century."
  },
  {
    id: 108,
    question: "Traditional Nigerian societies generally divided labor by:",
    options: ["Age", "Gender", "Random choice", "Literacy"],
    answer: "Gender",
    explanation: "Men commonly handled heavy labor and war, while women managed domestic duties and market activities."
  },
  {
    id: 109,
    question: "A major barrier to women's political participation in Nigeria is:",
    options: ["Lack of intelligence", "Cultural stereotypes and patriarchy", "Excessive funding", "High literacy rates"],
    answer: "Cultural stereotypes and patriarchy",
    explanation: "Deeply rooted patriarchal structures and social norms portray politics as a male domain."
  },
  {
    id: 110,
    question: "Women were historically influential in markets because:",
    options: ["Men were banned", "They controlled pricing and distribution", "Markets were unregulated", "Chiefs appointed them"],
    answer: "They controlled pricing and distribution",
    explanation: "Women dominated market trade and formed associations that regulated prices and quality."
  },
  {
    id: 111,
    question: "In Hausa culture, the practice of kulle limits:",
    options: ["Men's movement", "Women's public participation", "Marriage rituals", "Agricultural systems"],
    answer: "Women's public participation",
    explanation: "Kulle (female seclusion) restricts married women to domestic spaces, limiting economic and social participation."
  },
  {
    id: 112,
    question: "Gender inequality persists in Nigeria mainly because of:",
    options: ["Equal laws", "Patriarchal structures", "Female dominance", "Limited religion"],
    answer: "Patriarchal structures",
    explanation: "Nigeria's social and political arrangements favor men through customs, religious interpretations, and power networks."
  },
  {
    id: 113,
    question: "Which Nigerian society is known for having female chiefs like the Omu?",
    options: ["Tiv", "Igbo (especially Western Igbo)", "Fulani", "Kanuri"],
    answer: "Igbo (especially Western Igbo)",
    explanation: "Among Western Igbo communities, the Omu served as a parallel female leader to the male Obi."
  },
  {
    id: 114,
    question: "A major cultural challenge to gender equality in Nigeria is:",
    options: ["Overrepresentation of women in politics", "Deep-rooted gender stereotypes", "Low population", "Lack of traditions"],
    answer: "Deep-rooted gender stereotypes",
    explanation: "Most Nigerian cultures assign traditional roles that prioritize male leadership and female domesticity."
  },
  {
    id: 115,
    question: "In many Nigerian ethnic groups, women's inheritance rights are:",
    options: ["Equal to men", "Traditionally limited", "Strictly enforced by women", "Encouraged by all religions"],
    answer: "Traditionally limited",
    explanation: "Customary laws often give male children priority in inheritance, especially in patrilineal societies."
  },
  {
    id: 116,
    question: "The colonial period negatively affected women's political power because:",
    options: ["Women refused leadership", "Colonial structures favored male chiefs", "Women were too educated", "Europeans banned trading"],
    answer: "Colonial structures favored male chiefs",
    explanation: "British indirect rule centralized power in male traditional rulers and ignored female institutions like the Iyalode."
  },
  {
    id: 117,
    question: "Women's empowerment programs were created to:",
    options: ["Maintain traditional gender norms", "Expand women's social and economic opportunities", "Limit women's access to credit", "Support only rural men"],
    answer: "Expand women's social and economic opportunities",
    explanation: "Programs aim to reduce poverty and inequality by improving access to skills, loans, and leadership roles."
  },
  {
    id: 118,
    question: "Which program targeted rural women's welfare specifically?",
    options: ["OFN", "Better Life for Rural Women", "DFFRI", "NDE"],
    answer: "Better Life for Rural Women",
    explanation: "The Better Life program focused on improving the lives of rural women through training and cooperatives."
  },
  {
    id: 119,
    question: "Gender-based violence in Nigeria is fueled mainly by:",
    options: ["Equal power distribution", "Patriarchal norms and silence", "Female dominance in households", "Balanced media representation"],
    answer: "Patriarchal norms and silence",
    explanation: "Patriarchal systems normalize male authority and discourage women from reporting abuse."
  },
  {
    id: 120,
    question: "Women historically held military leadership in:",
    options: ["Igbonla", "Zazzau (e.g., Queen Amina)", "Idoma", "Ibibio"],
    answer: "Zazzau (e.g., Queen Amina)",
    explanation: "Queen Amina challenged assumptions that Nigerian women lacked military power."
  },
  {
    id: 121,
    question: "In many Nigerian cultures, marriage is traditionally viewed as:",
    options: ["A partnership with gendered obligations", "Optional for women", "A competition between spouses", "A political act only"],
    answer: "A partnership with gendered obligations",
    explanation: "Marriage is often understood as a union where men are heads of households and women are caretakers."
  },
  {
    id: 122,
    question: "A key consequence of gender inequality is:",
    options: ["Higher productivity", "Reduced national development", "Full employment", "Balanced leadership"],
    answer: "Reduced national development",
    explanation: "When women are excluded, national development suffers as the country loses half its productive potential."
  },
  {
    id: 123,
    question: "The concept of \"dual-sex governance\" refers to:",
    options: ["Male-only rule", "Female only rule", "Parallel male and female leadership structures", "No leadership system"],
    answer: "Parallel male and female leadership structures",
    explanation: "Societies like the Igbo and Yoruba practiced governance where men and women held parallel institutions."
  },
  {
    id: 124,
    question: "In Hausa society, gender roles are strongly influenced by:",
    options: ["Buddhism", "Confucianism", "Islam", "Christianity"],
    answer: "Islam",
    explanation: "Islamic teachings play a major role in shaping gender norms, modesty rules, and domestic structures."
  },
  {
    id: 125,
    question: "The exclusion of women from colonial-era councils resulted in:",
    options: ["Greater female representation", "Loss of traditional female authority", "Creation of dual leadership", "Increased equality"],
    answer: "Loss of traditional female authority",
    explanation: "Colonial officers ignored existing female institutions, sidelining women from political authority."
  },
  {
    id: 126,
    question: "A major factor limiting women's access to education in some Nigerian regions is:",
    options: ["Overfunding of schools", "Cultural preference for educating boys", "Excess female teachers", "Mandatory female inheritance"],
    answer: "Cultural preference for educating boys",
    explanation: "Many families prioritize educating boys, believing sons will support the family while daughters marry out."
  },
  {
    id: 127,
    question: "Gender-based division of labor assigns women primarily to:",
    options: ["Heavy construction", "Domestic work and childcare", "Oil refining", "Military service"],
    answer: "Domestic work and childcare",
    explanation: "Traditional norms place women in domestic spaces, reinforcing natural feminine duties."
  },
  {
    id: 128,
    question: "Female seclusion (purdah) is practiced most strongly in:",
    options: ["Igbo communities", "Tiv regions", "Northern Muslim societies", "Niger Delta villages"],
    answer: "Northern Muslim societies",
    explanation: "In Northern Nigeria, married women may observe seclusion due to religious and cultural traditions."
  },
  {
    id: 129,
    question: "A major cultural belief that restricts women's inheritance is:",
    options: ["Women are natural leaders", "Women are temporary members of their father's lineage", "Daughters inherit more than sons", "Women own land collectively"],
    answer: "Women are temporary members of their father's lineage",
    explanation: "In patrilineal societies, women are seen as belonging to their husband's lineage after marriage."
  },
  {
    id: 130,
    question: "Dual-sex political systems in Nigeria show that:",
    options: ["Women had no power", "Men and women shared leadership through parallel institutions", "Only queens ruled", "Women ruled all markets"],
    answer: "Men and women shared leadership through parallel institutions",
    explanation: "Women had councils (like Umuada) with significant authority that complemented male leadership."
  },
  {
    id: 131,
    question: "The marginalization of women increased during colonial rule because:",
    options: ["Women rejected education", "Colonial administrators ignored female political institutions", "Women dominated the military", "Europeans abolished agriculture"],
    answer: "Colonial administrators ignored female political institutions",
    explanation: "British officials focused on male chiefs, erasing many traditional female leadership structures."
  },
  {
    id: 132,
    question: "A major consequence of denying women property rights is:",
    options: ["Increased investment", "Less economic independence", "More political power", "Higher literacy"],
    answer: "Less economic independence",
    explanation: "Without property rights, women cannot access credit or invest, reinforcing economic dependence."
  },
  {
    id: 133,
    question: "Women's exclusion from formal politics results from:",
    options: ["Equal opportunities", "Financial barriers, stereotypes, and male dominance", "Too many women candidates", "Lack of political parties"],
    answer: "Financial barriers, stereotypes, and male dominance",
    explanation: "Politics requires funding and networks dominated by men, while stereotypes discourage female ambition."
  },
  {
    id: 134,
    question: "Market women's associations are powerful because they:",
    options: ["Control domestic violence laws", "Regulate trade, prices, and commodity distribution", "Conduct political elections", "Punish criminals"],
    answer: "Regulate trade, prices, and commodity distribution",
    explanation: "Market women enforce quality standards and mobilize quickly, giving them informal political strength."
  },
  {
    id: 135,
    question: "Which Nigerian queen fought to defend her people in Yoruba history?",
    options: ["Moremi Ajasoro", "Queen Amina", "Queen Idia", "Madam Tinubu"],
    answer: "Moremi Ajasoro",
    explanation: "Moremi is celebrated for sacrificing herself to save Ile-Ife from invaders by providing strategic intelligence."
  },
  {
    id: 136,
    question: "Gender inequality hurts national development because:",
    options: ["Women are fewer than men", "Half the population becomes underutilized", "Men become unemployed", "Schools close down"],
    answer: "Half the population becomes underutilized",
    explanation: "When women lack access to opportunities, the country loses half its productive potential."
  },
  {
    id: 137,
    question: "Female empowerment programs emerged mainly because:",
    options: ["Women already dominated power", "Women lacked opportunities due to cultural and legal barriers", "Men demanded more rights", "Traditional rule was perfect"],
    answer: "Women lacked opportunities due to cultural and legal barriers",
    explanation: "Programs were introduced to reduce inequality and support self-reliance for women facing obstacles."
  },
  {
    id: 138,
    question: "The Omu of Western Igbo held authority over:",
    options: ["Military taxation", "Market administration and women's affairs", "Palace rituals", "Land redistribution"],
    answer: "Market administration and women's affairs",
    explanation: "The Omu acted as the head of women in politics and economics, regulating markets and enforcing discipline."
  },
  {
    id: 139,
    question: "A major driver of modern gender change in Nigeria is:",
    options: ["Decline in education", "Increased exposure to global ideas and media", "Banning of social media", "Migration to villages"],
    answer: "Increased exposure to global ideas and media",
    explanation: "Media and education expose Nigerians to gender equality norms, challenging traditional stereotypes."
  },
  {
    id: 140,
    question: "Women's political participation is highest in:",
    options: ["Traditional councils", "Modern democracy", "Precolonial military units", "Colonial governing councils"],
    answer: "Modern democracy",
    explanation: "Modern democracy offers more opportunities (voting, contesting elections) than colonial systems."
  },
  {
    id: 141,
    question: "Gender-based violence persists because:",
    options: ["It is culturally accepted and underreported", "Women enjoy full protection", "Courts punish all offenders", "Men face greater violence"],
    answer: "It is culturally accepted and underreported",
    explanation: "Fear, stigma, and pressure to protect family reputation cause many victims to stay silent."
  },
  {
    id: 142,
    question: "A major step toward gender equality in Nigeria is:",
    options: ["Limiting women's education", "Enforcing discriminatory laws", "Expanding girls' access to schooling", "Restricting women's mobility"],
    answer: "Expanding girls' access to schooling",
    explanation: "Education empowers girls with skills and confidence, breaking cycles of poverty."
  },
  {
    id: 143,
    question: "Patriarchal norms are maintained through:",
    options: ["Laws protecting women", "Equal power dynamics", "Socialization in families and institutions", "High female employment"],
    answer: "Socialization in families and institutions",
    explanation: "Children learn gender roles at home and school, internalizing norms across generations."
  },
  {
    id: 144,
    question: "Women become economically disadvantaged when:",
    options: ["They receive equal credit access", "They are denied land ownership", "They control major industries", "They dominate trade unions"],
    answer: "They are denied land ownership",
    explanation: "Without land, women cannot access loans or start large-scale farming, perpetuating poverty."
  },
  {
    id: 145,
    question: "Gender roles are changing fastest in:",
    options: ["Remote rural areas", "Modern urban centers", "Precolonial communities", "Royal courts"],
    answer: "Modern urban centers",
    explanation: "Urban environments expose people to new ideas and employment, leading to flexible gender roles."
  },
  {
    id: 146,
    question: "Which region of Nigeria generally records the widest gender gap?",
    options: ["South West", "South South", "North East/North West", "South East"],
    answer: "North East/North West",
    explanation: "Northern Nigeria has the highest disparities due to cultural norms, religious practices, and economic challenges."
  },
  {
    id: 147,
    question: "A key reason women dominate petty trading is:",
    options: ["Cultural assignment of market roles", "Exclusion of men from trade", "Women's inability to study", "Government restriction"],
    answer: "Cultural assignment of market roles",
    explanation: "Markets are traditionally viewed as women's domain, where they manage household finances."
  },
  {
    id: 148,
    question: "Women's collective protests historically showed that:",
    options: ["Women lacked unity", "Women had political influence", "Women refused social change", "Men dominated protests"],
    answer: "Women had political influence",
    explanation: "Movements like the Aba Women's Riot demonstrated women's ability to mobilize and challenge policies."
  },
  {
    id: 149,
    question: "Modern gender advocacy in Nigeria focuses on:",
    options: ["Reinforcing stereotypes", "Closing gender gaps in education, health, and leadership", "Eliminating women from politics", "Promoting forced marriage"],
    answer: "Closing gender gaps in education, health, and leadership",
    explanation: "Advocacy groups work to increase enrollment and participation, aiming for equal opportunities."
  },
  {
    id: 150,
    question: "Gender and culture in Nigeria demonstrate that:",
    options: ["Women have always been powerless", "Gender roles are fixed and unchangeable", "Culture shapes gender, but change is possible", "Modernity destroys culture"],
    answer: "Culture shapes gender, but change is possible",
    explanation: "Gender norms evolve through education and social change, proving culture is dynamic."
  },

  // ==========================================
  // GENERAL & MOCK QUESTIONS (151-190)
  // ==========================================
  {
    id: 151,
    question: "The reconstruction of the human past is classified into which two main periods?",
    options: ["Modern and Ancient", "Prehistory and History", "Stone and Iron Ages", "Medieval and Renaissance"],
    answer: "Prehistory and History",
    explanation: "Human past is typically divided into Prehistory (before written records) and History (recorded events)."
  },
  {
    id: 152,
    question: "Which of the following marks the beginning of recorded history?",
    options: ["Use of metals", "Appearance of agriculture", "Invention of writing", "Domestication of animals"],
    answer: "Invention of writing",
    explanation: "The invention of writing systems (like Cuneiform or Hieroglyphs) marks the transition from Prehistory to History."
  },
  {
    id: 153,
    question: "Which of the following tools was first made by early humans?",
    options: ["Iron spear", "Bronze dagger", "Stone implement", "Wooden arrow"],
    answer: "Stone implement",
    explanation: "The earliest tools were crude stone implements (Oldowan tools), marking the beginning of the Stone Age."
  },
  {
    id: 154,
    question: "The stage of human evolution believed to have mastered fire is known as ___?",
    options: ["Homo sapiens", "Homo erectus", "Australopithecus", "Neanderthal"],
    answer: "Homo erectus",
    explanation: "Homo erectus is widely credited with being the first hominid to control and use fire."
  },
  {
    id: 155,
    question: "The earliest humans to live in Africa were known as____:",
    options: ["Cro-Magnons", "Homo habilis", "Australopithecines", "Neanderthals"],
    answer: "Australopithecines",
    explanation: "Australopithecines are considered among the earliest hominids in Africa, preceding the Homo genus."
  },
  {
    id: 156,
    question: "The first agricultural revolution began during __ period?",
    options: ["Bronze Age", "Neolithic Age", "Iron Age", "Paleolithic Age"],
    answer: "Neolithic Age",
    explanation: "The Neolithic Revolution (New Stone Age) marked the transition from hunting/gathering to agriculture."
  },
  {
    id: 157,
    question: "The first metal widely used by humans was___:",
    options: ["Gold", "Bronze", "Iron", "Copper"],
    answer: "Copper",
    explanation: "Copper was the first metal to be smelted and used by humans, preceding the Bronze Age."
  },
  {
    id: 158,
    question: "The transition from stone to metal tools marked the beginning of____:",
    options: ["Agricultural Age", "Civilization", "Religious revolution", "Industrial era"],
    answer: "Civilization",
    explanation: "The shift to metal tools (Bronze Age) often coincides with the rise of complex societies and civilization."
  },
  {
    id: 159,
    question: "The Egyptian writing system is called____:",
    options: ["Cuneiform", "Hieroglyphics", "Pictographs", "Runic script"],
    answer: "Hieroglyphics",
    explanation: "Ancient Egyptians used Hieroglyphics, a system of pictorial writing."
  },
  {
    id: 160,
    question: "The fall of Meroe was largely due to____:",
    options: ["Famine", "Overpopulation", "Roman invasion", "Decline in trade and invasion"],
    answer: "Decline in trade and invasion",
    explanation: "Meroe declined due to a shift in trade routes and eventually an invasion by the Kingdom of Aksum."
  },
  {
    id: 161,
    question: "NOA stands for ___",
    options: ["National Occupation Agency", "Nigerian Orientation Agency", "National Orientation Agency", "National Orientation Administration"],
    answer: "National Orientation Agency",
    explanation: "The National Orientation Agency (NOA) is responsible for communicating government policies and promoting patriotism."
  },
  {
    id: 162,
    question: "Which Decree established the Petroleum Trust Fund?",
    options: ["Decree No. 4", "Decree No. 25 of 1994", "Decree No. 30 of 1995", "Decree No. 4 of 1984"],
    answer: "Decree No. 25 of 1994",
    explanation: "The PTF was established by General Sani Abacha under Decree No. 25 of 1994."
  },
  {
    id: 163,
    question: "Which was not part of the mandates of the Petroleum Trust Fund?",
    options: ["Road and Road Transportation", "Education", "Health", "Foreign Direct Investment"],
    answer: "Foreign Direct Investment",
    explanation: "PTF focused on domestic infrastructure (roads, health, education, water), not foreign investment."
  },
  {
    id: 164,
    question: "The first Chairman of the Petroleum Trust Fund was __",
    options: ["Major Gen. Muhammadu Buhari", "Murtala Mohammed", "Lt. Colonel Yakubu Gowon", "Lt. Col. Ojukwu"],
    answer: "Major Gen. Muhammadu Buhari",
    explanation: "General Muhammadu Buhari served as the chairman of the PTF under the Abacha administration."
  },
  {
    id: 165,
    question: "The June 12th, 1993 General elections in Nigeria was conducted under whose regime?",
    options: ["General Ibrahim Babangida", "Major Gen. Aguiyi Ironsi", "General Sani Abacha", "Gen. Abdusalam Ababakar"],
    answer: "General Ibrahim Babangida",
    explanation: "The annulled June 12 elections took place during the regime of General Ibrahim Babangida."
  },
  {
    id: 166,
    question: "The winner of the June 12th 1993 elections was from which political party?",
    options: ["People’s Democratic Party", "Social Democratic Party", "People’s Redemption Party", "All Nigerian Peoples Party"],
    answer: "Social Democratic Party",
    explanation: "MKO Abiola ran and 'won' the election under the Social Democratic Party (SDP)."
  },
  {
    id: 167,
    question: "NADECO stands for ___",
    options: ["National Democratic Coalition", "National Development Cooperation", "National Defence Corporation", "National Development Coalition"],
    answer: "National Democratic Coalition",
    explanation: "NADECO was a pro-democracy group formed in 1994 to press for the revalidation of the June 12 election."
  },
  {
    id: 168,
    question: "When did General Ibrahim Babangida resign his position as Head of State?",
    options: ["June, 1993", "August, 1993", "October, 1993", "September, 1993"],
    answer: "August, 1993",
    explanation: "IBB 'stepped aside' on August 26/27, 1993, handing over to the Interim National Government."
  },
  {
    id: 169,
    question: "Nigeria’s fourth Republic started from __",
    options: ["1999", "1979", "1966", "1984"],
    answer: "1999",
    explanation: "The Fourth Republic began on May 29, 1999, with the inauguration of Olusegun Obasanjo."
  },
  {
    id: 170,
    question: "What does EFCC stand for ___",
    options: ["Emergency Financial Crimes Commission", "Education and Finance Committee", "Economic and Financial Crime Commission", "Economic and Fraudulent Crimes Commission"],
    answer: "Economic and Financial Crime Commission",
    explanation: "It stands for the Economic and Financial Crimes Commission (Note: often singular/plural variations in tests, 'Crime' or 'Crimes')."
  },
  {
    id: 171,
    question: "EFCC was established in whose administration __",
    options: ["President Olusegun Obasanjo", "President Goodluck Jonathan", "President Yaradua", "President Muhammadu Buhari"],
    answer: "President Olusegun Obasanjo",
    explanation: "The EFCC was established in 2003 during the administration of President Olusegun Obasanjo."
  },
  {
    id: 172,
    question: "The Electoral Reform Committee launched by President Yaradua’s administration was headed by ___",
    options: ["Justice Mohammed Uwais", "Justice Idris Kutigi", "Justice Mohammed Adoke", "Justice Gani Fawehmi"],
    answer: "Justice Mohammed Uwais",
    explanation: "The Uwais Panel on electoral reform was a key initiative of the Yar'Adua administration."
  },
  {
    id: 173,
    question: "Which of the following was not prioritized by President Muhammadu Buhari’s administration",
    options: ["Anti-corruption", "Economic Diversification", "Security Sector Reform", "Wealth creation"],
    answer: "Wealth creation",
    explanation: "Buhari's 3-point agenda was explicitly: Security, Economy (Diversification), and Anti-corruption. 'Wealth creation' is implicit but not the official slogan."
  },
  {
    id: 174,
    question: "Which is not among the challenges to democratic growth in Nigeria",
    options: ["Electoral violence and irregularities", "Ethno-religious Tensions", "High level of morality", "Political corruption and godfatherism"],
    answer: "High level of morality",
    explanation: "A high level of morality would be a benefit, not a challenge. The others are well-known issues."
  },
  {
    id: 175,
    question: "NEEDS stands for ___",
    options: ["National Economic Empowerment and Development Strategy", "National Emergency and Economic Dependency Structure", "Nigerian Education and Employment Development Strategy", "National Employment and Education Development Strategy"],
    answer: "National Economic Empowerment and Development Strategy",
    explanation: "NEEDS was a comprehensive development strategy launched in 2004."
  },
  {
    id: 176,
    question: "When did the Federal Government officially designate June 12th as Democracy Day in Nigeria?",
    options: ["2018", "2017", "2015", "2019"],
    answer: "2018",
    explanation: "President Buhari declared June 12 as the new Democracy Day in June 2018."
  },
  {
    id: 177,
    question: "Which government Agency is tasked with the preservation of Nigeria’s tangible and intangible heritage?",
    options: ["National Commission for Museums and Monuments", "Ministry of Culture and Tourism", "National Orientation Agency", "National Art Theatre"],
    answer: "National Commission for Museums and Monuments",
    explanation: "The NCMM manages Nigeria's museums and historic sites."
  },
  {
    id: 178,
    question: "Which Nigerian festival is recognized as a UNESCO World Heritage Event?",
    options: ["Sango Festival", "Oloojo Festival", "Osun Osogbo Festival", "Egungun Festival"],
    answer: "Osun Osogbo Festival",
    explanation: "The Osun-Osogbo Sacred Grove is a UNESCO World Heritage site, and its festival is globally recognized."
  },
  {
    id: 179,
    question: "CSOs means ___",
    options: ["Civil Strategy Orientation", "Civil Society Organizations", "Criminal and similar offence", "Chief Security Officers"],
    answer: "Civil Society Organizations",
    explanation: "CSOs (NGOs, community groups, unions) play a vital role in democracy."
  },
  {
    id: 180,
    question: "The Jos crisis in Plateau state largely stems from __",
    options: ["Fight for sovereignty", "Ethno-religious and political tensions between Indigenous groups and Fulani Herders", "Fight for National cake", "Secessionist struggle"],
    answer: "Ethno-religious and political tensions between Indigenous groups and Fulani Herders",
    explanation: "The crisis is rooted in indigene-settler dichotomy and resource competition."
  },
  {
    id: 181,
    question: "Famers-Herders clash usually emanate from ___",
    options: ["Conflict over control of land and water resources", "Conflict over constitutional rights", "Conflicts over oil resources", "Conflict over political relationship"],
    answer: "Conflict over control of land and water resources",
    explanation: "Competition for grazing land and water, exacerbated by climate change, is the primary driver."
  },
  {
    id: 182,
    question: "Gender Studies is an offshoot of Women Studies of the __",
    options: ["1960s", "1970s", "1980s", "1990s"],
    answer: "1970s",
    explanation: "Women's Studies emerged prominently in the 1970s; Gender Studies evolved from it later."
  },
  {
    id: 183,
    question: "Gender Studies has not gained attention in which field",
    options: ["Sociology", "Anthropology", "Communication Arts", "Natural Sciences"],
    answer: "Natural Sciences",
    explanation: "While sometimes discussed, it is least prominent in hard natural sciences compared to social sciences and humanities."
  },
  {
    id: 184,
    question: "____ is a function or role which a male or female assumes because of their basic psychological or anatomical differences.",
    options: ["Gender", "Sex", "Sex roles", "Gender Roles"],
    answer: "Sex roles",
    explanation: "Roles derived directly from biological/anatomical differences (e.g., breastfeeding) are Sex Roles. Gender roles are socially constructed."
  },
  {
    id: 185,
    question: "A set of behaviours socially defined as appropriate for one’s sex is ___",
    options: ["Sex roles", "Gender roles", "Gender duties", "Gender Responsibilities"],
    answer: "Gender roles",
    explanation: "When society defines appropriate behavior based on sex, it is a Gender Role."
  },
  {
    id: 186,
    question: "___ is the lens through which an individual perceives reality",
    options: ["Culture", "Memory", "Identity", "Heritage"],
    answer: "Culture",
    explanation: "Culture provides the framework and worldview through which people interpret their lives."
  },
  {
    id: 187,
    question: "____ is a person’s sexual orientation, preferences and benefits accorded to males and females according to their respective needs.",
    options: ["Sexism", "Gender", "Sex", "Sexuality"],
    answer: "Sexuality",
    explanation: "Definitions involving 'sexual orientation' and 'preferences' typically refer to Sexuality."
  },
  {
    id: 188,
    question: "__ is the fairness in representation, participation and benefits afforded to males and females according to their respective needs.",
    options: ["Gender Equality", "Feminism", "Gender Equity", "Sexual freedom"],
    answer: "Gender Equity",
    explanation: "Equity is about fairness and meeting respective needs, whereas equality is about sameness."
  },
  {
    id: 189,
    question: "____ is a social system that privileges men over women.",
    options: ["Patriarchy", "Matriarchy", "Male chauvinism", "Alpha Male syndrome"],
    answer: "Patriarchy",
    explanation: "Patriarchy is a system where power is primarily held by men."
  },
  {
    id: 190,
    question: "__ is a systematic way in which social structures harm or disadvantage individuals.",
    options: ["Gender-Based Violence", "Structural Violence", "Communal Violence", "Inter-communal conflict"],
    answer: "Structural Violence",
    explanation: "Structural violence refers to systemic ways (poverty, racism, sexism) that social structures harm people."
  },

  // ==========================================
  // FINAL REVISION (EZE COMPILATION) (191-250)
  // ==========================================
  {
    id: 191,
    question: "The Alaafin was a ruler in which historical polity?",
    options: ["Benin Kingdom", "Oyo Empire", "Nupe Kingdom", "Jukun State"],
    answer: "Oyo Empire",
    explanation: "The Alaafin is the traditional ruler of the Oyo Empire, a powerful Yoruba state."
  },
  {
    id: 192,
    question: "Which cult acted as a counterbalance in Yoruba traditional government?",
    options: ["Uzama", "Ogboni", "Ogiamen", "Oyemesi"],
    answer: "Ogboni",
    explanation: "The Ogboni society acted as a check on the power of the King (Oba) and other chiefs."
  },
  {
    id: 193,
    question: "Succession in the Bini (Benin) monarchy is described as:",
    options: ["Election by council", "Primogeniture", "Rotational", "By military seizure"],
    answer: "Primogeniture",
    explanation: "Benin monarchy follows the principle of primogeniture, where the eldest son succeeds the father."
  },
  {
    id: 194,
    question: "Which area is primarily associated with the Itsekiri, Urhobo, and Ijaw?",
    options: ["North-East", "Niger Delta / Riverine area", "Guinea Savanna", "Rain Forest (highlands)"],
    answer: "Niger Delta / Riverine area",
    explanation: "These groups are indigenous to the Niger Delta region of Nigeria."
  },
  {
    id: 195,
    question: "The Itsekiri traditional ruler is known as the:",
    options: ["Oba", "Olu", "Etsu", "Sarki"],
    answer: "Olu",
    explanation: "The traditional ruler of the Itsekiri people is titled the Olu of Warri."
  },
  {
    id: 196,
    question: "The Sokoto Caliphate fell to the British in which year?",
    options: ["1890", "1903", "1861", "1914"],
    answer: "1903",
    explanation: "The British conquest of the Sokoto Caliphate was completed in 1903 with the fall of Sokoto."
  },
  {
    id: 197,
    question: "Eweka I is credited with establishing the dynasty of which kingdom?",
    options: ["Oyo", "Benin", "Igbo city-states", "Kanem-Bornu"],
    answer: "Benin",
    explanation: "Eweka I was the first Oba of the current Benin dynasty, succeeding the Ogiso era."
  },
  {
    id: 198,
    question: "Which region in Nigeria is noted for great religious balance and tolerance?",
    options: ["Rain Forest", "Guinea Savanna", "Sudan Savanna", "Niger Delta"],
    answer: "Guinea Savanna",
    explanation: "The Middle Belt (Guinea Savanna) is known for having a mix of Christians, Muslims, and traditionalists, often within the same families."
  },
  {
    id: 199,
    question: "The 'Nokena' council is associated with which polity?",
    options: ["Oyo", "Kanem-Bornu", "Benin", "Igala"],
    answer: "Kanem-Bornu",
    explanation: "The Nokena was a council of 12 that advised the Mai (King) of Kanem-Bornu."
  },
  {
    id: 200,
    question: "Which cultural area includes the Yoruba, Western Igbo, Eastern Igbo, and Edoid groups?",
    options: ["Rain Forest Region", "Niger Delta", "Sudan Savanna", "Guinea Savanna"],
    answer: "Rain Forest Region",
    explanation: "These groups inhabit the tropical rainforest belt of southern Nigeria."
  },
  {
    id: 201,
    question: "The 'Bere' annual festival in the Oyo Empire was used primarily to:",
    options: ["Celebrate harvest only", "Renew allegiances of provincial governors to the Alaafin", "Train new soldiers", "Choose the Oba"],
    answer: "Renew allegiances of provincial governors to the Alaafin",
    explanation: "The Bere festival was a major political event where provincial rulers reaffirmed their loyalty."
  },
  {
    id: 202,
    question: "The title 'Etsu' belongs to which people?",
    options: ["Yoruba", "Nupe", "Bini", "Igala"],
    answer: "Nupe",
    explanation: "The traditional ruler of the Nupe people is known as the Etsu Nupe."
  },
  {
    id: 203,
    question: "The 'Uzama' are part of which kingdom's elite groups?",
    options: ["Oyo", "Benin (Bini)", "Igbo", "Nupe"],
    answer: "Benin (Bini)",
    explanation: "The Uzama are the kingmakers and highest-ranking chiefs in the Benin Kingdom."
  },
  {
    id: 204,
    question: "The 'Maini Kanendi' served as:",
    options: ["A warrior chieftain", "Chief judge in Kanem-Bornu", "A Yoruba priest", "An Igbo village elder"],
    answer: "Chief judge in Kanem-Bornu",
    explanation: "The Maini Kanendi was a high-ranking official, effectively the Chief Judge, in the Kanem-Bornu administration."
  },
  {
    id: 205,
    question: "The Tiv socio-political unit 'mbavessen' corresponds to:",
    options: ["Age grade", "Elder (head of unit)", "King's title", "Military rank"],
    answer: "Elder (head of unit)",
    explanation: "Mbavessen refers to the leader or elder of a kindred group in Tiv society."
  },
  {
    id: 206,
    question: "Which of the following countries is given as a possible origin in various myths for some Nigerian peoples?",
    options: ["Egypt", "Japan", "Brazil", "Australia"],
    answer: "Egypt",
    explanation: "Many Nigerian groups (like the Yoruba and Jukun) have origin myths claiming migration from the East or Egypt."
  },
  {
    id: 207,
    question: "Aminu Kano founded which party?",
    options: ["NEPU", "SDP", "NRC", "PDP"],
    answer: "NEPU",
    explanation: "Mallam Aminu Kano founded the Northern Elements Progressive Union (NEPU) to champion the cause of the commoners (Talakawa)."
  },
  {
    id: 208,
    question: "The 'Ovie' title is used among which group?",
    options: ["Urhobo", "Yoruba", "Hausa", "Nupe"],
    answer: "Urhobo",
    explanation: "Ovie is the title for a king or clan head among the Urhobo people."
  },
  {
    id: 209,
    question: "Which group's political system is described as theocratic with AKU UKA as head?",
    options: ["Tiv", "Jukun (Kwararafa)", "Yoruba", "Igala"],
    answer: "Jukun (Kwararafa)",
    explanation: "The Jukun Kingdom (Kwararafa) was a theocracy ruled by the Aku Uka, who was a divine king."
  },
  {
    id: 210,
    question: "The 'Ogiamen' in Benin history is the son of which figure who tried to usurp throne?",
    options: ["Eweka I", "Evian", "Oranmiyan", "Oduduwa"],
    answer: "Evian",
    explanation: "Evian was an administrator who tried to make his son, Ogiamen, the ruler, leading to a conflict with the restored monarchy."
  },
  {
    id: 211,
    question: "The diffusion of cloth weaving to Aboh indicates what about pre-colonial cultures?",
    options: ["Total isolation", "Inter-regional technological exchange", "Benin conquest", "European invention"],
    answer: "Inter-regional technological exchange",
    explanation: "It shows that Nigerian groups interacted and shared technologies like weaving long before colonialism."
  },
  {
    id: 212,
    question: "The 'Galadima' and 'Madawaki' titles became more common after which process in Hausaland?",
    options: ["Colonization by Portuguese", "Islamization and institutional change", "Amalgamation 1914", "Introduction of DFFRI"],
    answer: "Islamization and institutional change",
    explanation: "These administrative titles were adopted as Hausa states became more centralized and influenced by Islamic governance structures."
  },
  {
    id: 213,
    question: "Which Nigerian political institution is described as having been created under Babangida to run a two-party system?",
    options: ["INEC", "SDP & NRC", "PDP & AD", "DFFRI"],
    answer: "SDP & NRC",
    explanation: "Babangida created the Social Democratic Party (SDP) and National Republican Convention (NRC) as the only two legal parties."
  },
  {
    id: 214,
    question: "The 'Egharevba' account is a tradition about the origins of which group?",
    options: ["Igbo", "Bini (Benin)", "Yoruba", "Nupe"],
    answer: "Bini (Benin)",
    explanation: "Jacob Egharevba was a prominent Benin historian whose works recorded the kingdom's oral traditions."
  },
  {
    id: 215,
    question: "The 'Gbara' city served as a trading entrepôt for which people?",
    options: ["Yoruba", "Nupe", "Hausa", "Bini"],
    answer: "Nupe",
    explanation: "Gbara was an ancient capital and trading center of the Nupe Kingdom."
  },
  {
    id: 216,
    question: "The 'Titled Nobility' in Kanem-Bornu included which offices?",
    options: ["Galadima, Kaigama, Yerima, Meshema", "Oyomesi only", "Uzama only", "Are-Ona-Kankanfo only"],
    answer: "Galadima, Kaigama, Yerima, Meshema",
    explanation: "These were key administrative and military titles in the Kanem-Bornu Empire."
  },
  {
    id: 217,
    question: "Which export/industry is repeatedly credited to Niger Delta peoples?",
    options: ["Iron smelting only", "Oil palm production, canoe making, ceramics", "Highland wheat cultivation", "Copper mining"],
    answer: "Oil palm production, canoe making, ceramics",
    explanation: "The Niger Delta's economy was built on fishing, salt making, canoe building, and palm oil."
  },
  {
    id: 218,
    question: "The 'Ogboni' and 'Ekpe' are examples of:",
    options: ["Age-sets", "Secret societies that regulated moral conduct", "Colonial administrative units", "Political parties"],
    answer: "Secret societies that regulated moral conduct",
    explanation: "Secret societies played a crucial role in enforcing laws, morality, and political checks in pre-colonial societies."
  },
  {
    id: 219,
    question: "Which development policy era focused heavily on infrastructure and export promotion backed by oil revenues?",
    options: ["Second National Development Plan", "Fourth National Development Plan", "DFFRI only", "MAMSER only"],
    answer: "Fourth National Development Plan",
    explanation: "The Fourth Plan (1981-1985) was ambitious and relied on oil wealth, but collapsed when prices fell."
  },
  {
    id: 220,
    question: "Which institution is noted as having created 'lasting symbolic importance in national unity'?",
    options: ["DFFRI", "NYSC", "OFN", "NDE"],
    answer: "NYSC",
    explanation: "The NYSC is widely regarded as a successful tool for fostering national integration among youth."
  },
  {
    id: 221,
    question: "The 'Akpu-uka' / Aku Uka is the title connected with which people?",
    options: ["Tiv", "Jukun (AKU UKA)", "Yoruba", "Bini"],
    answer: "Jukun (AKU UKA)",
    explanation: "The Aku Uka is the spiritual and political head of the Jukun people."
  },
  {
    id: 222,
    question: "In the slides, Benin's first Europeans arrived in the second half of which century?",
    options: ["14th century", "15th century", "18th century", "20th century"],
    answer: "15th century",
    explanation: "Portuguese explorer Ruy de Sequeira arrived in Benin around 1472, in the late 15th century."
  },
  {
    id: 223,
    question: "The term 'Eghaevbo'n ore' refers to:",
    options: ["Age set leaders", "Town chiefs in Benin", "Hausa judges", "Igbo priests"],
    answer: "Town chiefs in Benin",
    explanation: "These were the town chiefs who represented the interests of the people, distinct from the palace chiefs."
  },
  {
    id: 224,
    question: "The 'Etsu Nupe' was helped by provincial heads called:",
    options: ["Zitzu", "Ofe", "Ogboni", "Oyomesi"],
    answer: "Zitzu",
    explanation: "The Zitzu were local or provincial heads who assisted the Etsu in administration."
  },
  {
    id: 225,
    question: "The Kano Chronicle is a source used to discuss the origins/activities of which people?",
    options: ["Jukun (Kwararafa raids)", "Benin only", "Yoruba only", "Nupe only"],
    answer: "Jukun (Kwararafa raids)",
    explanation: "The Kano Chronicle records the history of Hausaland, including raids by the powerful Kwararafa (Jukun) kingdom."
  },
  {
    id: 226,
    question: "Which of the following regions is the original home of the Hausa according to tradition?",
    options: ["Daura", "Ile-Ife", "Benin City", "Aguleri"],
    answer: "Daura",
    explanation: "Daura is considered the spiritual home of the Hausa people, where Bayajida killed the snake."
  },
  {
    id: 227,
    question: "The term 'Tsombor' is used in Tiv society to mean:",
    options: ["A warrior", "Family group (largest recognized entity)", "A secret society", "A market"],
    answer: "Family group (largest recognized entity)",
    explanation: "The Tiv social structure is based on genealogy, with Tsombor representing a major lineage group."
  },
  {
    id: 228,
    question: "Which title is connected to Benin's administrative classification of commoners vs nobility?",
    options: ["Uzama", "Oyomesi", "Etsu", "Are-Ona-Kankanfo"],
    answer: "Uzama",
    explanation: "The Uzama were the hereditary nobles, distinct from the commoners and appointed chiefs."
  },
  {
    id: 229,
    question: "Which group had titles such as 'Galadima' and 'Kaigama' in their nobility?",
    options: ["Nupe", "Kanem-Bornu", "Yoruba", "Igbo"],
    answer: "Kanem-Bornu",
    explanation: "These titles originated in the Kanem-Bornu empire and were later adopted by Hausa states."
  },
  {
    id: 230,
    question: "Which of the following is cited as a result of British conquest timing across regions?",
    options: ["All regions were conquered simultaneously", "Regions fell at different times", "Sokoto was never conquered", "Lagos was annexed in 1914"],
    answer: "Regions fell at different times",
    explanation: "The conquest was gradual: Lagos (1861), Benin (1897), Sokoto (1903). This affected their colonial experience."
  },
  {
    id: 231,
    question: "The 'Enogie' is used in which context in the slides?",
    options: ["Benin/Bini (title given to children or vassal governors)", "Hausa judge", "Igbo age set leader", "Kanem-Bornu soldier"],
    answer: "Benin/Bini (title given to children or vassal governors)",
    explanation: "Enogie (plural Enigie) refers to the duke or ruler of a village/district in the Benin Kingdom."
  },
  {
    id: 232,
    question: "One academic criticism of Yoruba origin myths (as implied in slides) is that:",
    options: ["They rely too heavily on archaeological evidence", "Their multiple versions challenge attempts at establishing a single linear migration narrative", "They were written by British colonialists", "They are contradicted by Benin myths"],
    answer: "Their multiple versions challenge attempts at establishing a single linear migration narrative",
    explanation: "Different Yoruba towns have conflicting myths (e.g., Oduduwa from Mecca vs. Oduduwa from Heaven), complicating a single history."
  },
  {
    id: 233,
    question: "According to the slides, what is the main structural weakness in Igbo acephalous systems?",
    options: ["Lack of military organization", "Difficulty coordinating large-scale decisions across autonomous communities", "Excessive dependence on kings", "Weak age-grades"],
    answer: "Difficulty coordinating large-scale decisions across autonomous communities",
    explanation: "Without a central authority, mobilizing the entire Igbo nation for a single cause was structurally difficult."
  },
  {
    id: 234,
    question: "Benin's transition from the Ogiso dynasty to the Eweka dynasty illustrates what political phenomenon?",
    options: ["Decentralization", "Dynastic discontinuity resolved by foreign mediation (Oranmiyan)", "Collapse of monarchy", "Rise of republican rule"],
    answer: "Dynastic discontinuity resolved by foreign mediation (Oranmiyan)",
    explanation: "The breakdown of the Ogiso rule led to the invitation of Oranmiyan from Ife, establishing a new dynasty."
  },
  {
    id: 235,
    question: "Which factor most strongly explains the durability of the Sokoto Caliphate before 1903?",
    options: ["Its iron industry", "Its tax centralization and emirate system", "Its weather conditions", "Its military reliance on European weapons"],
    answer: "Its tax centralization and emirate system",
    explanation: "The Caliphate had a highly organized administrative structure with Emirs loyal to the Sultan."
  },
  {
    id: 236,
    question: "The rise of Jukun/Kwararafa power is significant because:",
    options: ["It was the only Nigerian empire to conquer Egypt", "It raided parts of Hausaland and influenced political developments", "It was a coastal naval power", "It produced most Benin bronzes"],
    answer: "It raided parts of Hausaland and influenced political developments",
    explanation: "The Kwararafa Confederacy was a major military power that threatened the Hausa states and Bornu."
  },
  {
    id: 237,
    question: "Which factor most contributed to the complexity of Igbo origins in the slides?",
    options: ["Extensive written records", "Conflicting oral traditions from multiple sub-groups", "British treaties", "Migration from Arabia"],
    answer: "Conflicting oral traditions from multiple sub-groups",
    explanation: "Different Igbo communities (Nri, Aro, etc.) have distinct and sometimes contradictory origin stories."
  },
  {
    id: 238,
    question: "Why did Benin's guilds (carvers, brass workers) become politically important?",
    options: ["They controlled trade with Sahara", "They reinforced the Oba's authority through ritual objects and palace artworks", "They elected the Oba", "They wrote Benin's constitution"],
    answer: "They reinforced the Oba's authority through ritual objects and palace artworks",
    explanation: "Art in Benin was a royal prerogative used to record history and glorify the King."
  },
  {
    id: 239,
    question: "Which statement best explains the professionalization of the Hausa nobility?",
    options: ["Islam introduced formal administrative titles and bureaucratic structure", "Benin conquered Hausaland", "Igbo traders influenced them", "Europeans appointed them"],
    answer: "Islam introduced formal administrative titles and bureaucratic structure",
    explanation: "Islamic governance models introduced literacy and structured administration to the Hausa states."
  },
  {
    id: 240,
    question: "The diffusion of cloth weaving to Aboh indicates what about pre-colonial cultures?",
    options: ["Total isolation", "Inter-regional technological exchange", "Benin conquest", "European invention"],
    answer: "Inter-regional technological exchange",
    explanation: "It demonstrates that trade and cultural exchange (e.g., between Igala and Igbo) existed before the British."
  },
  {
    id: 241,
    question: "Which river system contributed most to Niger Delta specialization in canoe making?",
    options: ["Benue", "Kaduna", "Nun and Forcados rivers", "Rima"],
    answer: "Nun and Forcados rivers",
    explanation: "These major distributaries of the Niger River defined the geography and economy of the Delta."
  },
  {
    id: 242,
    question: "Which pre-colonial state combined military, judicial and administrative roles within a single elite structure?",
    options: ["Oyo", "Benin", "Kanem-Bornu", "Igbo"],
    answer: "Kanem-Bornu",
    explanation: "The Kanem-Bornu administration was highly centralized with officials holding multiple portfolios."
  },
  {
    id: 243,
    question: "Benin's fall in 1897 demonstrates which colonial tactic?",
    options: ["Treaty diplomacy", "Punitive expedition backed by overwhelming force", "Peaceful negotiation", "Rail-based warfare"],
    answer: "Punitive expedition backed by overwhelming force",
    explanation: "The British used the 'Benin Massacre' as a pretext for a massive military invasion to destroy the kingdom."
  },
  {
    id: 244,
    question: "The political significance of the 1922 Clifford Constitution is that it:",
    options: ["Abolished monarchy", "Introduced elective principle into Nigerian politics", "Ended colonialism", "Created the NCNC"],
    answer: "Introduced elective principle into Nigerian politics",
    explanation: "It allowed for the first elected representatives (for Lagos and Calabar) in the Legislative Council."
  },
  {
    id: 245,
    question: "Which nationalist party had the strongest Northern support base?",
    options: ["NPC", "NCNC", "AG", "SDP"],
    answer: "NPC",
    explanation: "The Northern People's Congress (NPC) was formed to represent the interests of the North."
  },
  {
    id: 246,
    question: "The 1954 Lyttleton Constitution is considered critical because it:",
    options: ["Made Nigeria a monarchy", "Formally established federalism", "Abolished federalism", "Ended elections"],
    answer: "Formally established federalism",
    explanation: "It divided powers between the central government and the regions, creating a true federal structure."
  },
  {
    id: 247,
    question: "Why did the First Republic collapse in 1966?",
    options: ["Civilian presidents resigned voluntarily", "Military coup amid political crisis and violence", "All parties merged peacefully", "Oil prices dropped"],
    answer: "Military coup amid political crisis and violence",
    explanation: "Political corruption, census crises, and regional violence led to the January 15 military coup."
  },
  {
    id: 248,
    question: "The 1993 election was historically significant because it:",
    options: ["Had the lowest turnout", "Was widely considered the freest and fairest but annulled", "Had no candidates", "Was conducted by colonial officers"],
    answer: "Was widely considered the freest and fairest but annulled",
    explanation: "June 12 is celebrated as a symbol of democracy because it was a credible election that was unjustly cancelled."
  },
  {
    id: 249,
    question: "The NCNC's major political strength lay in:",
    options: ["Control of northern emirates", "Cross-regional membership including Igbo and minorities", "Being militarily dominant", "British endorsement"],
    answer: "Cross-regional membership including Igbo and minorities",
    explanation: "The NCNC aspired to be a national party and had support in the East, Midwest, and parts of the West."
  },
  {
    id: 250,
    question: "The NDE's training programs emphasized:",
    options: ["Engineering PhDs", "Vocational and entrepreneurial skills", "Political campaigns", "Road construction"],
    answer: "Vocational and entrepreneurial skills",
    explanation: "The NDE focused on practical skills (carpentry, farming, soap making) to help youth become self-employed."
  }
];

export default function GSTTopicsQuiz() {
  const [currentStep, setCurrentStep] = useState('intro'); // intro, quiz, results
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [filterTopic, setFilterTopic] = useState('all');

  // Initialize scrolling to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleStart = (mode) => {
    let questionsToUse = [...topicsQuestions];
    
    if (filterTopic === 'topic2') questionsToUse = topicsQuestions.slice(0, 50);
    if (filterTopic === 'topic8') questionsToUse = topicsQuestions.slice(50, 100);
    if (filterTopic === 'topic9') questionsToUse = topicsQuestions.slice(100, 150);
    if (filterTopic === 'mock') questionsToUse = topicsQuestions.slice(150, 190);
    if (filterTopic === 'eze') questionsToUse = topicsQuestions.slice(190, 250);

    if (mode === 'shuffle') {
      for (let i = questionsToUse.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsToUse[i], questionsToUse[j]] = [questionsToUse[j], questionsToUse[i]];
      }
    }
    
    setActiveQuestions(questionsToUse);
    setCurrentStep('quiz');
  };

  const handleOptionSelect = (questionId, selectedOption) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    activeQuestions.forEach(q => {
      if (userAnswers[q.id] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setCurrentStep('results');
  };

  const handleRetake = () => {
    setUserAnswers({});
    setScore(0);
    setCurrentStep('intro');
  };

  const answeredCount = Object.keys(userAnswers).length;
  const totalQuestions = activeQuestions.length;
  const progressPercentage = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h1 className="font-bold text-xl tracking-tight text-slate-900">GST 112 Topics</h1>
          </div>
          {currentStep === 'quiz' && (
            <div className="text-sm font-medium text-slate-500">
              {answeredCount} / {totalQuestions}
            </div>
          )}
        </div>
        {currentStep === 'quiz' && (
          <div className="w-full bg-slate-100 h-1">
            <div 
              className="bg-blue-600 h-1 transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {currentStep === 'intro' && (
          <div className="text-center py-12">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <List className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">GST 112 Topic Reviews</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
              Select a topic to practice or take the full 250-question exam.
            </p>

            <div className="grid gap-4 max-w-md mx-auto mb-8">
              <button 
                onClick={() => setFilterTopic('all')}
                className={`p-4 rounded-lg border-2 text-left transition-all flex items-center ${filterTopic === 'all' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <div className="bg-blue-100 p-2 rounded-md mr-4">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">All Topics</div>
                  <div className="text-sm text-slate-500">250 Questions (Full Exam)</div>
                </div>
                {filterTopic === 'all' && <CheckCircle className="ml-auto w-6 h-6 text-blue-600" />}
              </button>

              <button 
                onClick={() => setFilterTopic('topic2')}
                className={`p-4 rounded-lg border-2 text-left transition-all flex items-center ${filterTopic === 'topic2' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <div className="bg-green-100 p-2 rounded-md mr-4">
                  <Award className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Topic 2: Citizenship</div>
                  <div className="text-sm text-slate-500">50 Questions</div>
                </div>
                {filterTopic === 'topic2' && <CheckCircle className="ml-auto w-6 h-6 text-blue-600" />}
              </button>

              <button 
                onClick={() => setFilterTopic('topic8')}
                className={`p-4 rounded-lg border-2 text-left transition-all flex items-center ${filterTopic === 'topic8' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <div className="bg-purple-100 p-2 rounded-md mr-4">
                  <RefreshCw className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Topic 8: Dev Policies</div>
                  <div className="text-sm text-slate-500">50 Questions</div>
                </div>
                {filterTopic === 'topic8' && <CheckCircle className="ml-auto w-6 h-6 text-blue-600" />}
              </button>

              <button 
                onClick={() => setFilterTopic('topic9')}
                className={`p-4 rounded-lg border-2 text-left transition-all flex items-center ${filterTopic === 'topic9' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <div className="bg-orange-100 p-2 rounded-md mr-4">
                  <ArrowRight className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Topic 9: Gender</div>
                  <div className="text-sm text-slate-500">50 Questions</div>
                </div>
                {filterTopic === 'topic9' && <CheckCircle className="ml-auto w-6 h-6 text-blue-600" />}
              </button>

               <button 
                onClick={() => setFilterTopic('mock')}
                className={`p-4 rounded-lg border-2 text-left transition-all flex items-center ${filterTopic === 'mock' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <div className="bg-rose-100 p-2 rounded-md mr-4">
                  <Globe className="w-6 h-6 text-rose-700" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">General & Mock</div>
                  <div className="text-sm text-slate-500">40 Questions</div>
                </div>
                {filterTopic === 'mock' && <CheckCircle className="ml-auto w-6 h-6 text-blue-600" />}
              </button>

              <button 
                onClick={() => setFilterTopic('eze')}
                className={`p-4 rounded-lg border-2 text-left transition-all flex items-center ${filterTopic === 'eze' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <div className="bg-teal-100 p-2 rounded-md mr-4">
                  <Star className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Final Revision (Eze)</div>
                  <div className="text-sm text-slate-500">60 Questions (New)</div>
                </div>
                {filterTopic === 'eze' && <CheckCircle className="ml-auto w-6 h-6 text-blue-600" />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => handleStart('order')}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
              >
                Start Quiz
              </button>
              <button 
                onClick={() => handleStart('shuffle')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 text-lg font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 shadow-sm flex items-center justify-center transition-all"
              >
                <Shuffle className="w-5 h-5 mr-2" />
                Shuffle
              </button>
            </div>
          </div>
        )}

        {currentStep === 'quiz' && (
          <div className="space-y-8">
            {activeQuestions.map((q, index) => (
              <div key={q.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-medium text-slate-900 mb-4">
                  <span className="text-blue-600 font-bold mr-2">{index + 1}.</span>
                  {q.question}
                </h3>
                <div className="space-y-3">
                  {q.options.map((option) => (
                    <label 
                      key={option}
                      className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                        userAnswers[q.id] === option 
                          ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' 
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name={`question-${q.id}`} 
                        value={option}
                        checked={userAnswers[q.id] === option}
                        onChange={() => handleOptionSelect(q.id, option)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-8 pb-12 text-center">
              <button 
                onClick={handleSubmit}
                className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-blue-200 transition-all"
              >
                Submit Answers
              </button>
              {answeredCount < totalQuestions && (
                <p className="mt-3 text-sm text-red-500 font-medium">
                  {totalQuestions - answeredCount} unanswered questions remain.
                </p>
              )}
            </div>
          </div>
        )}

        {currentStep === 'results' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center mb-10 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm mb-2">Your Score</p>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Award className={`w-12 h-12 ${score >= (totalQuestions * 0.7) ? 'text-green-500' : 'text-orange-500'}`} />
                <h2 className="text-5xl font-black text-slate-900">{score}<span className="text-2xl text-slate-400 font-medium">/{totalQuestions}</span></h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                {score === totalQuestions ? "Perfect! You mastered these topics." : 
                 score >= (totalQuestions * 0.7) ? "Great job! You are well prepared." :
                 "Review the explanations below to improve."}
              </p>
              <button 
                onClick={handleRetake}
                className="inline-flex items-center px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Retake Quiz
              </button>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Review & Explanations</h3>
              {activeQuestions.map((q, index) => {
                const isCorrect = userAnswers[q.id] === q.answer;
                const userAnswer = userAnswers[q.id];
                
                return (
                  <div key={q.id} className={`bg-white rounded-xl shadow-sm border p-6 ${isCorrect ? 'border-green-200' : 'border-red-200'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-medium text-slate-900 pr-4">
                        <span className="text-slate-400 font-bold mr-2">{index + 1}.</span>
                        {q.question}
                      </h4>
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                      )}
                    </div>

                    <div className="space-y-2 mb-6">
                      {q.options.map((option) => {
                        let optionClass = "border-slate-200 text-slate-600";
                        let icon = null;

                        if (option === q.answer) {
                          optionClass = "bg-green-50 border-green-500 text-green-900 font-medium";
                          icon = <CheckCircle className="w-4 h-4 ml-auto text-green-600" />;
                        } else if (option === userAnswer) {
                          optionClass = "bg-red-50 border-red-500 text-red-900";
                          icon = <XCircle className="w-4 h-4 ml-auto text-red-600" />;
                        }

                        return (
                          <div 
                            key={option} 
                            className={`flex items-center p-3 rounded-lg border text-sm ${optionClass}`}
                          >
                            <span>{option}</span>
                            {icon}
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">Explanation</p>
                          <p className="text-sm text-blue-900 leading-relaxed">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center py-12">
               <button 
                onClick={handleRetake}
                className="inline-flex items-center px-8 py-4 bg-slate-900 text-white text-lg font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}