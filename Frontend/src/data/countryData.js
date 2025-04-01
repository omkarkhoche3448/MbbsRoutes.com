import { countryImages } from "./countryImages";

export const countryData = {
  georgia: {
    country: "Georgia",
    heroImage: countryImages.georgia.hero,
    featureImage: countryImages.georgia.feature,
    countryData: {
      capital: "Tbilisi",
      languages: ["Georgian", "Russian", "English"],
      population: "3.7 million",
      weather: "Mild winters (0°C) to warm summers (28°C)",
      currency: "Georgian Lari (₾)",
      universities: 28,
    },

    aboutCountry: {
      title: "About the Country",
      description:
        "At the intersection of Europe and Asia, Georgia presents an ideal mix of cultural heritage and progressive education. The capital Tbilisi showcases a harmonious blend of historic architecture and modern urban development, while the Caucasus Mountains offer breathtaking natural scenery for student life.",
    },

    highlights: [
      {
        title: "Globally Recognized Programs",
        description:
          "Medical degrees from Georgian universities hold recognition from WHO, NMC, and other international medical councils, with English-medium instruction available.",
      },
      {
        title: "Cultural Richness",
        description:
          "Experience a unique fusion of European and Asian influences through diverse traditions, architectural wonders, and renowned hospitality.",
      },
      {
        title: "Affordable Excellence",
        description:
          "Georgia offers high-quality medical education at costs significantly lower than Western counterparts, with reasonable living expenses.",
      },
      {
        title: "Early Clinical Exposure",
        description:
          "Students gain hands-on hospital experience from early academic years in well-equipped medical facilities across the country.",
      },
    ],

    eligibility: {
      title: "Admission Requirements",
      introduction:
        "To pursue medical studies in Georgia, applicants must meet these essential criteria:",

      educationalQualifications: {
        title: "Academic Background",
        requirements: [
          "Completion of 12th grade with Science stream (Physics, Chemistry, Biology)",
          "Minimum 50% aggregate marks in PCB subjects",
          "English language proficiency recommended",
        ],
      },

      neetRequirements: {
        title: "NEET Qualification",
        requirements: [
          "Valid NEET score required for Indian applicants",
          "NEET scorecard must be presented during admission",
        ],
      },

      ageCriteria: {
        title: "Age Requirements",
        requirements: [
          "Minimum 17 years of age by December 31 of admission year",
          "No upper age limit specified",
        ],
      },

      requiredDocuments: {
        title: "Application Materials",
        documents: [
          {
            category: "Academic Records",
            details: [
              "High school transcripts (12th grade marksheet)",
              "Secondary school certificate (10th grade)",
            ],
          },
          {
            category: "Identification",
            details: [
              "Passport copy (valid for minimum 2 years)",
              "Birth certificate",
            ],
          },
          {
            category: "Additional Materials",
            details: [
              "6 passport-sized photographs",
              "Medical fitness certificate",
              "HIV test results",
            ],
          },
        ],
      },
      note: "Georgian universities provide comprehensive support for international applicants throughout the admission process.",
    },

    visaProcessingSteps: [
      {
        title: "Initial Application",
        content:
          "Submit complete application package to chosen university within specified deadlines (typically 4-6 weeks processing).",
      },
      {
        title: "Acceptance Documentation",
        content:
          "Receive official admission letter and invitation documents from the university (2-3 weeks after application approval).",
      },
      {
        title: "Visa Application",
        content:
          "Apply for student visa at Georgian embassy/consulate with required documents (processing takes 15-30 working days).",
      },
      {
        title: "Final Registration",
        content:
          "Complete university registration upon arrival in Georgia, including medical check-up and residence permit application.",
      },
    ],
  },
  russia: {
    country: "Russia",
    heroImage: countryImages.russia.hero,
    featureImage: countryImages.russia.feature,
    countryData: {
      capital: "Moscow",
      languages: ["Russian", "English"],
      population: "146 million",
      weather: "Seasonal extremes (-30°C winter to 25°C summer)",
      currency: "Russian Ruble (₽)",
      universities: 370,
      callingCode: "+7",
      exchangeRate: "1 INR ≈ 1.10 RUB",
    },

    aboutCountry: {
      title: "Russian Medical Education",
      description:
        "With centuries of academic tradition and cutting-edge research facilities, Russia offers international students robust medical training at affordable costs through globally recognized institutions.",
    },

    highlights: [
      {
        title: "Prestigious Institutions",
        description:
          "Home to world-renowned medical schools like Sechenov University and RUDN University, offering centuries of accumulated medical expertise.",
      },
      {
        title: "Comprehensive Clinical Training",
        description:
          "Extensive hospital rotations provide exposure to diverse medical cases across Russia's vast healthcare network.",
      },
      {
        title: "Cost-Effective Education",
        description:
          "High-quality medical degrees available at a fraction of Western tuition costs, with government scholarships for eligible students.",
      },
      {
        title: "Global Degree Recognition",
        description:
          "Russian medical qualifications are recognized by WHO, NMC, ECFMG, and medical councils worldwide.",
      },
    ],

    eligibility: {
      title: "Admission Criteria",
      introduction:
        "Prospective medical students must fulfill these requirements for Russian medical programs:",

      educationalQualifications: {
        title: "Academic Prerequisites",
        requirements: [
          "12th grade completion with Physics, Chemistry, Biology (minimum 50% aggregate)",
          "English language proficiency for English-medium programs",
        ],
      },

      neetRequirements: {
        title: "NEET Qualification",
        requirements: [
          "Valid NEET score mandatory for Indian applicants",
          "NEET scorecard must be presented during application",
        ],
      },

      requiredDocuments: {
        title: "Application Package",
        documents: [
          {
            category: "Academic Documentation",
            details: [
              "High school transcripts (attested copies)",
              "Secondary school certificate",
            ],
          },
          {
            category: "Identification",
            details: [
              "Passport valid for minimum 18 months",
              "Birth certificate (translated if needed)",
            ],
          },
        ],
      },
    },

    visaProcessingSteps: [],

    courseDuration: {
      title: "Program Structure",
      details: [
        "6-year MBBS program including 1 year clinical internship",
        "Bilingual options available (English/Russian medium)",
      ],
    },

    mediumOfInstruction: {
      title: "Medium of Instruction",
      details: [
        "Many Russian universities offer MBBS programs in English, making it accessible to international students.",
        "Some universities also offer Russian language courses to help students communicate with patients during clinical practice.",
      ],
    },

    recognition: {
      title: "Recognition of MBBS Degree",
      details: [
        "The MBBS degree from Russia is recognized by the World Health Organization (WHO), Educational Commission for Foreign Medical Graduates (ECFMG), Medical Council of Canada (MCC), Australian Medical Council (AMC).",
        "Follows the National Medical Commission's (NMC India) guidelines, allowing graduates to practice medicine in many countries.",
      ],
    },

    universityTypes: {
      title: "Types of Universities",
      types: [
        "Federal University",
        "State Medical University",
        "State University",
      ],
    },

    universitiesByType: {
      federalUniversities: {
        title: "Federal Universities RUSSIA Tuition Fee",
        universities: [
          { name: "Kazan Federal University", fee: "₽530000" },
          { name: "V.I Vernadsky Crimean Federal University", fee: "₽390000" },
          { name: "Far Eastern Federal University", fee: "₽440000" },
          { name: "Immanuel Kant Baltic Federal University", fee: "₽303700" },
          { name: "North Eastern Federal University", fee: "₽385000" },
        ],
      },

      stateMedicalUniversities: {
        title: "State Medical Universities RUSSIA Tuition Fee",
        universities: [
          { name: "First Moscow State Medical University", fee: "$10500" },
          { name: "Kazan State Medical University", fee: "₽475000" },
          { name: "Tver State Medical University", fee: "₽350000" },
          { name: "Orel State Medical University", fee: "₽315320" },
          { name: "Kemerovo State Medical University", fee: "₽250000" },
          { name: "North Western State Medical University", fee: "₽440000" },
          { name: "Yaroslavl State Medical University", fee: "₽298000" },
          {
            name: "Yaroslav The Wise - Veliky Novgorod State Medical University",
            fee: "₽320000",
          },
          { name: "Ural State Medical University", fee: "₽260000" },
          { name: "Siberian State Medical University", fee: "₽340130" },
          { name: "Kuban State Medical University", fee: "₽200000" },
          { name: "Pacific State Medical University", fee: "₽440000" },
          { name: "Murmansk State Medical University", fee: "₽320000" },
          { name: "Rostov State Medical University", fee: "₽326000" },
          { name: "Omsk State Medical University", fee: "₽260000" },
          { name: "Bashkir State Medical University", fee: "₽350000" },
          { name: "Krasnoyarsk State Medical University", fee: "₽305000" },
          { name: "Perm State Medical University", fee: "$5500" },
          { name: "Orenburg State Medical University", fee: "$6000" },
          { name: "Chuvash State Medical University", fee: "$4000" },
          { name: "Bashkir State Medical University", fee: "$3900" },
          { name: "Tula State Medical University", fee: "$4500" },
        ],
      },

      stateUniversities: {
        title: "State Universities RUSSIA Tuition Fee",
        universities: [
          { name: "Mari State University", fee: "$5000" },
          { name: "Saint Petersburg State University", fee: "$5500" },
          { name: "Ulyanovsk State University", fee: "₽300000" },
          { name: "Kemerovo State University", fee: "₽225000" },
          { name: "Pskov State University", fee: "$3500" },
        ],
      },
    },

    annualExpenses: {
      title: "Annual Expenses in Addition to Tuition Fee",
      expenses: [
        {
          category: "Government Hostel Fee",
          details:
            "Varies from 12000 Ruble to 25000 Ruble per annum *Subject to availability",
        },
        {
          category: "Private Hostel Fee",
          details: "Varies from 30000 Ruble to 90000 Ruble per annum",
        },
        {
          category: "Food Expenses",
          details: "Expenses varies from $1000 to $1500 per annum",
        },
        {
          category: "Medical Insurance",
          details: "Expenses varies from 3500 Ruble to 10000 Ruble annually",
        },
        {
          category: "Visa Extension",
          details:
            "Visa Extension Fee varies from 1600 Ruble to 9000 Ruble annually",
        },
      ],
    },
  },
  kazakhstan: {
    country: "Kazakhstan",
    heroImage: countryImages.kazakhstan.hero,
    featureImage: countryImages.kazakhstan.feature,
    countryData: {
      capital: "Nur-Sultan",
      languages: ["Kazakh", "Russian", "English"],
      population: "19 million",
      weather: "Continental climate (-20°C to 30°C)",
      currency: "Tenge (₸)",
      universities: 110,
    },

    aboutCountry: {
      title: "Medical Education in Kazakhstan",
      description:
        "Kazakhstan combines modern educational infrastructure with affordable costs, offering quality medical education in English with growing international recognition across Central Asia."
    },


    highlights: [
      {
        title: "Academic Excellence",
        description:
          "Kazakhstan is increasingly recognized for its commitment to academic excellence. Universities like Al-Farabi Kazakh National University and Nazarbayev University offer diverse programs in English, ensuring international students receive a world-class education with a focus on research and innovation.",
      },
      {
        title: "Cultural Diversity",
        description:
          "Kazakhstan is a melting pot of cultures, bridging the East and the West. International students experience a multicultural environment that fosters global perspectives and intercultural exchange.",
      },
      {
        title: "Affordable Education",
        description:
          "Kazakhstan offers lower tuition fees compared to many Western countries, making it an attractive option for international students. The cost of living is also reasonable, ensuring a comfortable lifestyle during studies.",
      },
      {
        title: "Bilingual Environment",
        description:
          "With both Kazakh and Russian as official languages, Kazakhstan offers programs in Russian and English, providing international students with a unique linguistic advantage.",
      },
      {
        title: "Rich Cultural Heritage",
        description:
          "Kazakhstan's nomadic history is reflected in traditions, music, and art, offering students an immersive cultural experience with vibrant traditions and historical significance.",
      },
      {
        title: "Gateway to Central Asia",
        description:
          "Studying in Kazakhstan allows students to explore Central Asia, with easy access to neighboring countries like Kyrgyzstan, Uzbekistan, and Turkmenistan.",
      },
      {
        title: "Innovative Research Opportunities",
        description:
          "Kazakhstan is investing in research and development, providing international students with opportunities to engage in innovative projects and scientific advancements.",
      },
      {
        title: "Modern Infrastructure",
        description:
          "Kazakhstan's cities feature modern infrastructure, state-of-the-art academic facilities, and well-connected transportation networks for a comfortable student experience.",
      },
      {
        title: "Natural Wonders",
        description:
          "Kazakhstan's landscapes, including the vast steppes, Tian Shan mountains, and scenic lakes like Big Almaty, offer students opportunities for exploration and adventure.",
      },
    ],

    eligibility: {
      title: "Eligibility for Studying MBBS in Kazakhstan",
      introduction:
        "To study MBBS in Kazakhstan, students must meet specific eligibility criteria, including educational qualifications, NEET exam qualification, age criteria, and required documents.",

      educationalQualifications: {
        title: "Educational Qualifications",
        requirements: [
          "Minimum 50% marks in Physics, Chemistry & Biology in 12th standard.",
          "Completed intermediate education (12th Pass).",
        ],
      },

      neetRequirements: {
        title: "NEET Exam Qualification",
        requirements: [
          "Qualified in the National Eligibility cum Entrance Test (NEET).",
        ],
      },

      ageCriteria: {
        title: "Age Criteria",
        requirements: [
          "Minimum age of 17 years before the admission session.",
          "No upper age limit for MBBS in Kazakhstan.",
        ],
      },

      requiredDocuments: {
        title: "Required Documents for MBBS in Kazakhstan",
        documents: [
          {
            category: "Identification and Legal Documents",
            details: [
              "Photocopy of Passport.",
              "5 Passport Size Photos.",
              "Birth Certificate.",
              "10th Standard Mark Sheet.",
              "12th Standard Mark Sheets.",
            ],
          },
          {
            category: "Legal Clearance and Authorization",
            details: [
              "Clearance Certificate from Police (PCC, obtained after receiving Passport).",
              "Travel and Health Insurance.",
            ],
          },
          {
            category: "Authorization and No Objection",
            details: [
              "Letter of Authorization from the Student.",
              "No Objection Certificate (NOC).",
            ],
          },
          {
            category: "Financial and Sponsorship Documents",
            details: [
              "Sponsor Letter for Admission.",
              "University-specific document requirements.",
            ],
          },
        ],
      },

      note: "Ensure all documents are accurately prepared, translated (if needed), and meet the specific guidelines of the chosen university in Kazakhstan. Adherence to university requirements is crucial for a successful application and admission process.",
    },

    visaProcessingSteps: [],

    // Additional fields from Kazakhstan's original structure
    courseDuration: {
      title: "Duration of MBBS Course",
      details: [
        "Total course duration of 5 years, including academic and clinical studies.",
        "Additional 1-year internship period for practical experience.",
      ],
    },

    mediumOfInstruction: {
      title: "Medium of Instruction",
      details: [
        "MBBS courses in Kazakhstan are taught in English, making it accessible to international students.",
        "Local language instruction is also provided to enhance communication with patients during internships.",
      ],
    },
  },
  china: {
    country: "China",
    heroImage: countryImages.china.hero,
    featureImage: countryImages.china.feature,
      countryData: {
      capital: "Beijing",
      languages: ["Mandarin", "English"],
      population: "1.4 billion",
      weather: "Diverse climatic zones",
      currency: "Yuan (¥)",
      universities: 50,
    },

    aboutCountry: {
      title: "Chinese Medical Training",
      description:
        "China's medical universities combine traditional healing knowledge with modern technology, offering English-medium programs with extensive clinical exposure in high-volume hospitals."
    },

    highlights: [
      {
        title: "Affordable and High-Quality Education",
        description:
          "China is home to top-ranking universities like Tianjin Medical University, Jilin University, and Soochow Medical University. It offers affordable tuition fees compared to Western universities, with numerous government scholarships making education more accessible.",
      },
      {
        title: "Diverse Academic Programs",
        description:
          "Chinese universities provide a wide range of programs in medicine, engineering, business, technology, and arts. Many courses are available in English, ensuring international students face no language barriers.",
      },
      {
        title: "Multilingual and Culturally Diverse Environment",
        description:
          "Although Mandarin is the primary language, China is home to multiple regional languages and dialects. Studying in China provides international students with the opportunity to learn Mandarin, giving them an edge in the global job market.",
      },
      {
        title: "Rich Cultural Heritage",
        description:
          "China's history spans thousands of years, offering students the chance to explore traditional festivals, martial arts, calligraphy, and ancient philosophies like Confucianism and Taoism.",
      },
      {
        title: "Warm Hospitality and a Safe Environment",
        description:
          "China is known for its hospitality, with locals welcoming international students warmly. With strict safety regulations and well-developed infrastructure, China ensures a secure environment for students.",
      },
      {
        title: "Global Career Opportunities",
        description:
          "As the second-largest economy, China offers vast career prospects. Many multinational corporations operate in China, providing students with job and internship opportunities.",
      },
      {
        title: "Strategic Location and Travel Opportunities",
        description:
          "China's vast landscape offers diverse travel experiences, from the skyscrapers of Shanghai to the serene countryside of Guilin. Students can easily explore iconic sites like the Great Wall and the Forbidden City.",
      },
      {
        title: "Integrated Curriculum",
        description:
          "Unique combination of Western medicine and traditional Chinese medical approaches in curriculum."
      }
    ],

    eligibility: {
      title: "Eligibility for Studying MBBS in China",
      introduction:
        "To study MBBS in China, students must meet specific eligibility criteria, including educational qualifications, NEET exam qualification, age criteria, and required documents.",

      educationalQualifications: {
        title: "Educational Qualifications",
        requirements: [
          "Passed Class 12th with a Science background.",
          "Subjects: Physics, Chemistry, Biology (PCB), and English.",
          "Minimum 50% aggregate in 12th standard, but some universities require 70% marks in PCB each.",
        ],
      },

      neetRequirements: {
        title: "NEET Exam Qualification",
        requirements: [
          "Qualified in the National Eligibility cum Entrance Test (NEET), but some universities require an average of 300 marks.",
          "NEET exam Result/Admit Card is mandatory for MBBS admission.",
        ],
      },

      ageCriteria: {
        title: "Age Criteria",
        requirements: [
          "The student must have completed 17 years of age by 31st December of the admission year.",
        ],
      },

      requiredDocuments: {
        title: "Required Documents for MBBS in China",
        documents: [
          {
            category: "Admission Form",
            details: ["Duly filled-in Admission form."],
          },
          {
            category: "Academic Certificates",
            details: [
              "Scanned copy of Class 12th Pass Certificate.",
              "Scanned copy of Class 10th Pass Certificate.",
            ],
          },
          {
            category: "NEET Documents",
            details: ["NEET exam Result/Admit Card."],
          },
          {
            category: "Photographs",
            details: [
              "6 Passport-size colored photographs of the student in a white background (4.5 cm / 3.5 cm).",
            ],
          },
          {
            category: "Identification Documents",
            details: [
              "Scanned copy of Passport (first and last page).",
              "ID Proof (Aadhar card, PAN card, Driving License, etc.) if Passport is not ready at the time of application.",
            ],
          },
        ],
      },

      note: "Ensure compliance with specific university requirements for a successful application. Chinese universities offer excellent services to international students, streamlining the enrollment process.",
    },

    visaProcessingSteps: [],
  },
  kyrgyzstan: {
    country: "Kyrgyzstan",
    heroImage: countryImages.kyrgyzstan.hero,
    featureImage: countryImages.kyrgyzstan.feature,
    countryData: {
      capital: "Bishkek",
      languages: ["Kyrgyz", "Russian", "English"],
      population: "6.6 million",
      weather: "Mountain climate variations",
      currency: "Som (с)",
      universities: 55,
    },

    aboutCountry: {
      title: "Medical Studies in Kyrgyzstan",
      description:
        "With budget-friendly education costs and simplified admission processes, Kyrgyzstan has become an emerging destination for quality medical studies in Central Asia."
    },

    highlights: [
      {
        title: "Affordable Education",
        description:
          "Tuition fees in Kyrgyzstan are significantly lower than in many Western countries, making it an attractive destination for international students. Additionally, the lower cost of living ensures a comfortable lifestyle.",
      },
      {
        title: "Diverse Academic Programs",
        description:
          "Universities in Kyrgyzstan offer a range of programs in medicine, engineering, business, and humanities, with courses available in English and Russian for international students.",
      },
      {
        title: "Multilingual Environment",
        description:
          "With Kyrgyz and Russian as official languages, Kyrgyzstan provides international students with a chance to immerse themselves in a multilingual culture while studying in English.",
      },
      {
        title: "Rich Cultural Heritage",
        description:
          "From traditional nomadic lifestyles to a vibrant arts scene, Kyrgyzstan offers international students an immersive cultural experience full of history and traditions.",
      },
      {
        title: "Warm Hospitality",
        description:
          "Kyrgyzstan is renowned for its welcoming and friendly people, offering international students a warm and inclusive atmosphere.",
      },
      {
        title: "Strategic Location and Travel Opportunities",
        description:
          "Kyrgyzstan's location allows students to explore neighboring Central Asian countries like Kazakhstan, Uzbekistan, and Tajikistan, offering unique cultural and travel experiences.",
      },
      {
        title: "Natural Beauty and Adventure",
        description:
          "With the Tian Shan mountains, Lake Issyk-Kul, and stunning landscapes, Kyrgyzstan is perfect for adventure seekers looking for hiking, trekking, and outdoor exploration.",
      },
      {
        title: "Innovative Research Opportunities",
        description:
          "The country is investing in research and development, providing international students opportunities to engage in cutting-edge projects.",
      },
      {
        title: "Modern Infrastructure",
        description:
          "Kyrgyzstan offers modern academic facilities, well-equipped campuses, and efficient public transportation, ensuring a comfortable student life.",
      },
    ],

    eligibility: {
      title: "Eligibility for Studying MBBS in Kyrgyzstan",
      introduction:
        "To study MBBS in Kyrgyzstan, students must meet specific eligibility criteria, including educational qualifications, NEET exam qualification, age criteria, and required documents.",

      educationalQualifications: {
        title: "Educational Qualifications",
        requirements: [
          "Completion of 10+2 with a regular board.",
          "Minimum 50% marks in Physics, Chemistry, and Biology.",
        ],
      },

      neetRequirements: {
        title: "NEET Exam Qualification",
        requirements: [
          "Qualified in the National Eligibility cum Entrance Test (NEET).",
        ],
      },

      ageCriteria: {
        title: "Age Criteria",
        requirements: [],
      },

      requiredDocuments: {
        title: "Required Documents for MBBS in Kyrgyzstan",
        documents: [
          {
            category: "Identification and Legal Documents",
            details: [
              "Copy of Passport.",
              "Copy of Birth Certificate.",
              "10 Passport size photographs.",
            ],
          },
          {
            category: "Academic Documents",
            details: [
              "Copy of Mark Sheets (10th & 12th).",
              "Copy of Invitation Letter from the university.",
            ],
          },
          {
            category: "Health and Medical Documents",
            details: [
              "Medical Certificate confirming fitness.",
              "General health examination records.",
            ],
          },
        ],
      },

      note: "Ensure that all documents are accurately prepared, translated if required, and meet the specific university requirements for a smooth admission process.",
    },

    visaProcessingSteps: [],

    // Additional fields from Kyrgyzstan's original structure
    languageProficiency: {
      title: "Language Proficiency",
      requirements: ["Proficiency in English (IELTS not required)."],
    },
  },
  uzbekistan: {
    country: "Uzbekistan",
    heroImage: countryImages.uzbekistan.hero,
    featureImage: countryImages.uzbekistan.feature,
      countryData: {
      capital: "Tashkent",
      languages: ["Uzbek", "Russian", "English"],
      population: "34 million",
      weather: "Arid continental climate",
      currency: "Som (UZS)",
      universities: 60,
    },

    aboutCountry: {
      title: "Uzbek Medical Education",
      description:
        "Uzbekistan's medical schools offer internationally structured programs with clinical training in modern hospitals, blending affordability with quality education in the heart of Central Asia."
    },

    highlights: [
      {
        title: "Historical and Cultural Richness",
        description:
          "Uzbekistan's ancient cities of Samarkand, Bukhara, and Khiva provide an immersive historical experience. Students can explore UNESCO World Heritage sites, intricate mosques, and vibrant bazaars, making education here a journey through time.",
      },
      {
        title: "Affordable Education",
        description:
          "Uzbekistan is an affordable study destination with reasonable tuition fees and cost of living, allowing students to focus on learning without financial strain.",
      },
      {
        title: "Diverse Academic Programs",
        description:
          "Universities in Uzbekistan offer a wide range of courses in medicine, engineering, business, and humanities. Many programs meet international standards and are taught in English, making them accessible to global students.",
      },
      {
        title: "Multilingual Environment",
        description:
          "Uzbekistan provides a diverse linguistic experience. While Uzbek and Russian are widely spoken, many academic programs are available in English, creating an inclusive learning atmosphere.",
      },
      {
        title: "Warm Hospitality",
        description:
          "Uzbekistan is known for its deep-rooted hospitality. International students are welcomed warmly, fostering a sense of belonging in a foreign country.",
      },
      {
        title: "Central Location and Travel Opportunities",
        description:
          "Uzbekistan's strategic location allows students to explore neighboring Central Asian countries, enriching their cultural experience and travel opportunities.",
      },
      {
        title: "Modern Infrastructure",
        description:
          "With ongoing investments in education, Uzbekistan boasts modern universities, research facilities, and state-of-the-art campuses, ensuring students receive a high-quality education.",
      },
      {
        title: "Cultural Extracurricular Activities",
        description:
          "Students can participate in Uzbek cultural activities, including traditional dance, music, and art. Festivals and events create a dynamic learning environment beyond academics.",
      },
    ],

    eligibility: {
      title: "Eligibility for Studying MBBS in Uzbekistan",
      introduction:
        "To study MBBS in Uzbekistan, students must meet specific eligibility criteria, including educational qualifications, NEET exam qualification, age criteria, and required documents.",

      educationalQualifications: {
        title: "Educational Qualifications",
        requirements: [
          "Completed intermediate education (12th Pass).",
          "Minimum 50% marks in Physics, Chemistry & Biology.",
        ],
      },

      neetRequirements: {
        title: "NEET Exam Qualification",
        requirements: [
          "Qualified in the National Eligibility cum Entrance Test (NEET).",
        ],
      },

      ageCriteria: {
        title: "Age Criteria",
        requirements: ["Minimum age of 17 years before the admission session."],
      },

      requiredDocuments: {
        title: "Required Documents for MBBS in Uzbekistan",
        documents: [
          {
            category: "Identification and Legal Documents",
            details: [
              "Photocopy of Passport.",
              "5 Passport Size Photos.",
              "Birth Certificate.",
              "10th Standard Mark Sheet.",
              "12th Standard Mark Sheets.",
            ],
          },
          {
            category: "Legal Clearance and Authorization",
            details: [
              "Travel and Health Insurance.",
              "Letter of Authorization from the Student.",
              "No Objection Certificate (NOC).",
            ],
          },
          {
            category: "Financial and Sponsorship Documents",
            details: [
              "Sponsor Letter for Admission.",
              "University-specific document requirements.",
            ],
          },
        ],
      },

      note: "Ensure all documents are accurately prepared, translated (if needed), and meet the specific guidelines of the chosen university in Uzbekistan. Adhering to university requirements is crucial for a successful application and admission process.",
    },

    visaProcessingSteps: [],

    // Additional fields from Uzbekistan's original structure
    courseDuration: {
      title: "Duration of MBBS Course",
      details: [
        "Total course duration of 5 years, including academic and clinical studies.",
        "Additional 1-year internship period for practical experience.",
      ],
    },

    mediumOfInstruction: {
      title: "Medium of Instruction",
      details: [
        "MBBS courses in Uzbekistan are taught in English, making it accessible to international students.",
        "Local language instruction is also provided to enhance communication with patients during internships.",
      ],
    },
  },
  nepal: {
    country: "Nepal",
    heroImage: countryImages.nepal.hero,
    featureImage: countryImages.nepal.feature,
    countryData: {
      capital: "Kathmandu",
      languages: ["Nepali", "English"],
      population: "29 Million",
      weather: "5°C to 35°C",
      currency: "Nepalese Rupee (NPR)",
      universities: 20,
      callingCode: "+977",
      exchangeRate: "1 INR = 1.60 NPR",
    },

    aboutCountry: {
      title: "About the Country",
      description:
        "MBBS in Nepal for Indian students is gaining momentum due to its affordability, quality education, and cultural similarities. A perfect destination for aspiring medical professionals, proximity, and seamless travel between India and Nepal make studying in Nepal an easy affair. It offers a perfect blend of advanced medical education with a warm atmosphere for students from India.",
    },

    highlights: [
      {
        title: "NMC-Approved Programs",
        description:
          "One of the biggest advantages is that the MBBS programs in Nepal are NMC-approved, which allows Indian students to return to India and practice medicine after passing the FMGE/NExT exam. The curriculum of Nepalese medical colleges closely aligns with Indian medical standards, making it easier for students to adapt and excel.",
      },
      {
        title: "Straightforward Admission Process",
        description:
          "The admission process for MBBS in Nepal for Indian students is pretty straightforward. Though qualification in NEET is a must, there are no other entrance examinations or language proficiency tests required for admission. The admission process is transparent and less complicated compared to many other countries.",
      },
      {
        title: "Affordable Education",
        description:
          "MBBS in Nepal is quite affordable, and the fees structure has flexible payment modes, thus making it accessible for students from middle-income groups. The cost of education is significantly lower than private institutions in India and many other countries abroad.",
      },
      {
        title: "Quality Medical Education",
        description:
          "Medical colleges in Nepal, for example, include the Tribhuvan University Institute of Medicine and B.P. Koirala Institute of Health Sciences, which have infrastructure, faculties, and clinical exposure that is considered amongst the best. The degrees earned are internationally recognized by the WHO and other similar organizations.",
      },
      {
        title: "Cultural Familiarity",
        description:
          "Since Nepal's cultural and food habits are quite similar to those of India, it is easy for Indian students to cope with life in Nepal. Major festivals and traditions would be similar to their own, not to mention cuisines. The language of instruction would generally be English, so it's very easy for them to understand and perform well in their studies.",
      },
      {
        title: "Low Cost of Living",
        description:
          "Nepal's living expense is low since all the amenities include moderately affordable housing, good and affordable food, and other transportation methods. Students study safely and securely and live under quiet conditions for higher education with further opportunities to grow better personally.",
      },
      {
        title: "Proximity to India",
        description:
          "The geographical proximity of Nepal allows students to travel easily and frequently, reducing the emotional stress of studying abroad. This makes it an ideal choice for those who want to stay close to home while pursuing their medical education.",
      },
    ],

    eligibility: {
      title: "Eligibility for Studying MBBS in Nepal",
      introduction:
        "The eligibility criteria for pursuing MBBS in Nepal is designed to ensure that students have the necessary academic background and meet the regulatory requirements for medical education.",

      educationalQualifications: {
        title: "Educational Qualifications",
        requirements: [
          "10+2 or equivalent with Physics, Chemistry, and Biology",
          "Minimum aggregate of 50% in PCB",
          "Passed 10th and 12th standard with good marks",
        ],
      },

      neetRequirements: {
        title: "NEET Exam Qualification",
        requirements: [
          "The NEET exam is compulsory for Indian students seeking admission",
          "Valid NEET scorecard required for application",
        ],
      },

      ageCriteria: {
        title: "Age Criteria",
        requirements: [
          "The candidate should have attained the age of 17 years as on December 31 of the admission year",
        ],
      },

      requiredDocuments: {
        title: "Required Documents for MBBS in Nepal",
        documents: [
          {
            category: "Academic Documents",
            details: [
              "10th and 12th Mark Sheets (original and photocopies)",
              "Transfer Certificate (TC) from the institute last studied",
              "Migration Certificate (for students from Boards other than the local National Board)",
            ],
          },
          {
            category: "NEET Documents",
            details: ["NEET Scorecard (mandatory for Indian students)"],
          },
          {
            category: "Identification Documents",
            details: [
              "Passport and Visa (Students from India are exempt from visa requirements)",
              "Passport-size Photographs (4-6 recent copies)",
              "Birth Certificate",
            ],
          },
          {
            category: "Additional Documents",
            details: [
              "Character Certificate from the school or college last attended",
              "Medical Fitness Certificate from a recognized medical authority",
              "Offer Letter from the University",
              "Proof of Financial Support (if applicable)",
            ],
          },
        ],
      },

      note: "The admission process for MBBS in Nepal is straightforward and designed to accommodate both national and international students. The focus is on ensuring that students have the necessary academic qualifications and meet the regulatory requirements for medical education.",
    },

    visaProcessingSteps: [
      {
        title: "Application Form",
        content:
          "Fill out the application form/admission form from the university website.",
      },
      {
        title: "Choose University",
        content:
          "Select your NMC-approved desired university for studying MBBS in Nepal.",
      },
      {
        title: "Submit Documents",
        content:
          "Submit scanned documents: 10th and 12th mark sheets, NEET score card, copy of medical certificate, and passport.",
      },
      {
        title: "Receive Invitation Letter",
        content:
          "After 10-15 days of applying, you'll receive an invitation letter from the university.",
      },
      {
        title: "Apply for Visa",
        content:
          "Apply for a visa at the respective embassy (10 days processing time). Note: Indian students are exempt from visa requirements.",
      },
    ],

    courseDuration: {
      title: "Duration of MBBS Course",
      details: [
        "The MBBS program in Nepal typically lasts 5.5 years, which includes 1 year of internship",
        "The curriculum is designed to provide a strong foundation in medical science, with extensive practical experience in hospitals and clinics",
      ],
    },

    mediumOfInstruction: {
      title: "Medium of Instruction",
      details: [
        "English is the chief medium of instruction in all medical colleges in Nepal",
        "This removes the language barrier for international students, particularly those from India",
      ],
    },

    recognition: {
      title: "Recognition of MBBS Degree",
      details: [
        "Medical colleges in Nepal are accredited by the Nepal Medical Council (NMC), World Health Organization (WHO), and other global organizations",
        "Degrees from Nepalese medical colleges are recognized worldwide, allowing graduates to practice after completing necessary licensing exams",
        "Indian students can return to India and practice medicine after passing the FMGE/NExT exam",
      ],
    },

    universityTypes: {
      title: "Types of Universities",
      types: [
        "Government Medical Colleges",
        "Private Medical Colleges (Affiliated to Kathmandu University)",
        "Private Medical Colleges (Affiliated to Tribhuvan University)",
      ],
    },

    universitiesByType: {
      federalUniversities: {
        title: "Government Medical Colleges NEPAL Tuition Fee",
        universities: [
          {
            name: "Institute of Medicine (IOM)",
            fee: "$75,021",
            seats: "100 (8 for International)",
          },
          {
            name: "B.P Koirala Institute of Health Sciences (BPKHIS)",
            fee: "$74,555",
            seats: "100 (8 for International)",
          },
          {
            name: "Karnali Academy of Health Science (KAHS)",
            fee: "$75,000",
            seats: "20 (2 for International)",
          },
          {
            name: "Patan Academy of Health Sciences (PAHS)",
            fee: "$75,000",
            seats: "65 (5 for International)",
          },
          {
            name: "Nepalese Army Institute of Health Sciences (NAIHS)",
            fee: "$75,000",
            seats: "100 (4 for International)",
          },
        ],
      },

      stateMedicalUniversities: {
        title:
          "Private Medical Colleges (Kathmandu University) NEPAL Tuition Fee",
        universities: [
          {
            name: "Manipal Medical College of Medical Science (MCOMS), Pokhara",
            fee: "$75,000",
            seats: "100 (50 for International)",
          },
          {
            name: "College of Medical College, Bharatpur",
            fee: "$75,000",
            seats: "100 (50 for International)",
          },
          {
            name: "Kathmandu School of Medical Science",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Nepal Medical College, Jorpati, Kathmandu",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Kathmandu Medical College, Kathmandu",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Birat Medical College, Biratnagar",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Nepalgunj Medical College, Nepalgunj",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Lumbini Medical College (LMC), Tansen",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Nobel Medical College, Biratnagar",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Devdaha Medical College & Teaching Hospital, Devdaha",
            fee: "$75,000",
            seats: "60 (20 for International)",
          },
        ],
      },

      stateUniversities: {
        title:
          "Private Medical Colleges (Tribhuvan University) NEPAL Tuition Fee",
        universities: [
          {
            name: "KIST Medical College (KISTMCTH), Imadol, Lalitpur",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Chitwan Medical College (CMC), Bharatpur, Chitwan",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Gandaki Medical College (GMCTHRC), Lekhnath, Pokhara",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "National Medical College (NMC), Birgunj",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Universal Medicine College (UCMS), Bhairawaha",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Janaki Medical College (JMC), Janakpur",
            fee: "$75,000",
            seats: "50 (17 for International)",
          },
        ],
      },

      governmentMedicalColleges: {
        title: "Government Medical Colleges NEPAL Tuition Fee",
        universities: [
          {
            name: "Institute of Medicine (IOM)",
            fee: "$75,021",
            seats: "100 (8 for International)",
          },
          {
            name: "B.P Koirala Institute of Health Sciences (BPKHIS)",
            fee: "$74,555",
            seats: "100 (8 for International)",
          },
          {
            name: "Karnali Academy of Health Science (KAHS)",
            fee: "$75,000",
            seats: "20 (2 for International)",
          },
          {
            name: "Patan Academy of Health Sciences (PAHS)",
            fee: "$75,000",
            seats: "65 (5 for International)",
          },
          {
            name: "Nepalese Army Institute of Health Sciences (NAIHS)",
            fee: "$75,000",
            seats: "100 (4 for International)",
          },
        ],
      },

      privateMedicalCollegesKU: {
        title:
          "Private Medical Colleges (Kathmandu University) NEPAL Tuition Fee",
        universities: [
          {
            name: "Manipal Medical College of Medical Science (MCOMS), Pokhara",
            fee: "$75,000",
            seats: "100 (50 for International)",
          },
          {
            name: "College of Medical College, Bharatpur",
            fee: "$75,000",
            seats: "100 (50 for International)",
          },
          {
            name: "Kathmandu School of Medical Science",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Nepal Medical College, Jorpati, Kathmandu",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Kathmandu Medical College, Kathmandu",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Birat Medical College, Biratnagar",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Nepalgunj Medical College, Nepalgunj",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Lumbini Medical College (LMC), Tansen",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Nobel Medical College, Biratnagar",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Devdaha Medical College & Teaching Hospital, Devdaha",
            fee: "$75,000",
            seats: "60 (20 for International)",
          },
        ],
      },

      privateMedicalCollegesTU: {
        title:
          "Private Medical Colleges (Tribhuvan University) NEPAL Tuition Fee",
        universities: [
          {
            name: "KIST Medical College (KISTMCTH), Imadol, Lalitpur",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Chitwan Medical College (CMC), Bharatpur, Chitwan",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Gandaki Medical College (GMCTHRC), Lekhnath, Pokhara",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "National Medical College (NMC), Birgunj",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Universal Medicine College (UCMS), Bhairawaha",
            fee: "$75,000",
            seats: "100 (33 for International)",
          },
          {
            name: "Janaki Medical College (JMC), Janakpur",
            fee: "$75,000",
            seats: "50 (17 for International)",
          },
        ],
      },
    },

    annualExpenses: {
      title: "Annual Expenses in Addition to Tuition Fee",
      expenses: [
        {
          category: "Hostel Fee",
          details: "Approximately $1,000 to $1,500 per year",
        },
        {
          category: "Food Expenses",
          details: "Approximately $1,000 to $1,500 per year",
        },
        {
          category: "Medical Insurance",
          details: "Approximately $200 to $300 per year",
        },
        {
          category: "Books and Supplies",
          details: "Approximately $300 to $500 per year",
        },
        {
          category: "Miscellaneous Expenses",
          details: "Approximately $500 to $1,000 per year",
        },
      ],
    },

    admissionProcess: {
      title: "Admission Process for MBBS in Nepal",
      steps: [
        "Fill out the application form/admission form from the university website",
        "Select your NMC-approved desired university for studying MBBS in Nepal",
        "Submit scanned documents: 10th and 12th mark sheets, NEET score card, copy of medical certificate, and passport",
        "After 10-15 days of applying, you'll receive an invitation letter from the university",
        "Apply for a visa at the respective embassy (Note: Indian students are exempt from visa requirements)",
      ],
    },

    scholarships: {
      title: "Scholarships for MBBS in Nepal",
      details: [
        "Many private colleges affiliated with Kathmandu University and Tribhuvan University offer scholarships for international students",
        "Scholarships are typically merit-based and can significantly reduce the cost of education",
        "Specific scholarship availability varies by institution and should be confirmed directly with the university",
      ],
    },
  },
  india: {
    country: "India",
    heroImage: countryImages.india.hero,
    featureImage: countryImages.india.feature,
    countryData: {
      capital: "New Delhi",
      languages: ["Hindi", "English", "Regional Languages"],
      population: "1.4 Billion",
      weather: "-10°C to +45°C",
      currency: "Indian Rupee (INR)",
      universities: 612,
      callingCode: "+91",
      exchangeRate: "1 USD = 83 INR",
    },

    aboutCountry: {
      title: "Indian Medical Excellence",
      description:
        "Home to premier institutions like AIIMS, India's medical education combines rigorous academics with unparalleled clinical exposure across diverse healthcare settings in the world's second-most populous nation."
    },

    highlights: [
      {
        title: "Prestigious Medical Education",
        description:
          "India is home to some of the most prestigious medical colleges such as AIIMS, JIPMER, and AFMC. With a rigorous curriculum and state-of-the-art facilities, medical education in India is globally recognized and respected.",
      },
      {
        title: "Affordable and Quality Education",
        description:
          "Medical education in India is highly affordable compared to many Western countries. Government medical colleges offer subsidized tuition fees, making it a cost-effective option for students. Private colleges also offer world-class education with modern infrastructure.",
      },
      {
        title: "English Medium Instruction",
        description:
          "Most medical universities in India offer MBBS programs in English, ensuring ease of learning for international students. Additionally, students have the opportunity to learn regional languages to enhance their communication skills during clinical practice.",
      },
      {
        title: "Diverse Clinical Exposure",
        description:
          "India provides extensive hands-on clinical experience with its vast and diverse patient population. Medical students gain exposure to a wide range of diseases and treatments, preparing them for real-world medical challenges.",
      },
      {
        title: "Global Recognition of Degrees",
        description:
          "MBBS degrees from Indian medical colleges are recognized by major medical councils such as the WHO, NMC (India), ECFMG (USA), and GMC (UK), allowing graduates to pursue careers globally.",
      },
      {
        title: "Rich Cultural Experience",
        description:
          "India is known for its cultural diversity and historical significance. Students studying in India get to experience its vibrant traditions, festivals, and cuisine, making their educational journey more enriching.",
      },
    ],

    eligibility: {
      title: "Eligibility for Studying MBBS in India",
      introduction:
        "To study MBBS in India, students must meet specific eligibility criteria, including educational qualifications, NEET exam qualification, age criteria, and required documents.",

      educationalQualifications: {
        title: "Educational Qualifications",
        requirements: [
          "Passed Class 12th with a Science background.",
          "Subjects: Physics, Chemistry, Biology (PCB), and English.",
          "Minimum 50% aggregate in 12th standard (40% for reserved categories).",
        ],
      },

      neetRequirements: {
        title: "NEET Exam Qualification",
        requirements: [
          "Qualified in the National Eligibility cum Entrance Test (NEET).",
          "NEET score is mandatory for MBBS admission in India.",
        ],
      },

      ageCriteria: {
        title: "Age Criteria",
        requirements: [
          "The student must have completed 17 years of age by 31st December of the admission year.",
        ],
      },

      requiredDocuments: {
        title: "Required Documents for MBBS in India",
        documents: [
          {
            category: "Academic Certificates",
            details: [
              "Scanned copy of Class 12th Pass Certificate.",
              "Scanned copy of Class 10th Pass Certificate.",
            ],
          },
          {
            category: "NEET Documents",
            details: [
              "NEET Scorecard.",
              "Admit Card of NEET.",
              "Counseling Letter.",
            ],
          },
          {
            category: "Identification Documents",
            details: [
              "Scanned copy of Aadhaar Card or Passport.",
              "Recent passport-sized photographs.",
            ],
          },
        ],
      },
    },

    courseDuration: {
      title: "Duration of MBBS Course",
      details: [
        "The MBBS program in India typically lasts 5.5 years, which includes 1 year of mandatory internship.",
      ],
    },

    mediumOfInstruction: {
      title: "Medium of Instruction",
      details: [
        "The majority of medical universities in India offer MBBS programs in English, ensuring accessibility for international students.",
      ],
    },

    recognition: {
      title: "Recognition of MBBS Degree",
      details: [
        "The MBBS degree from India is recognized by WHO, NMC (India), ECFMG (USA), GMC (UK), and other global medical bodies.",
      ],
    },

    universityTypes: {
      title: "Types of Universities",
      types: ["Government Medical Colleges", "Private Medical Colleges"],
    },

    universitiesByType: {
      governmentColleges: {
        title: "Government Medical Colleges in India (Tuition Fee Range)",
        universities: [
          { name: "AIIMS Delhi", fee: "INR 5856 per year" },
          { name: "JIPMER Puducherry", fee: "INR 1,20,000 per year" },
          { name: "KGMU Lucknow", fee: "INR 54,900 per year" },
          { name: "Grant Medical College Mumbai", fee: "INR 78,000 per year" },
          { name: "Madras Medical College", fee: "INR 10,000 per year" },
        ],
      },

      privateColleges: {
        title: "Private Medical Colleges in India (Tuition Fee Range)",
        universities: [
          {
            name: "Kasturba Medical College Manipal",
            fee: "INR 17,00,000 per year",
          },
          {
            name: "SRM Medical College Chennai",
            fee: "INR 22,50,000 per year",
          },
          {
            name: "DY Patil Medical College Pune",
            fee: "INR 20,00,000 per year",
          },
          {
            name: "Bharati Vidyapeeth Medical College",
            fee: "INR 18,00,000 per year",
          },
          { name: "JSS Medical College Mysore", fee: "INR 15,00,000 per year" },
        ],
      },
    },

    annualExpenses: {
      title: "Annual Expenses in Addition to Tuition Fee",
      expenses: [
        {
          category: "Hostel Fee",
          details: "Varies from INR 20,000 to INR 2,00,000 per annum",
        },
        {
          category: "Food Expenses",
          details: "INR 50,000 to INR 1,20,000 per annum",
        },
        {
          category: "Medical Insurance",
          details: "INR 3,000 to INR 15,000 annually",
        },
        {
          category: "Miscellaneous",
          details: "INR 10,000 to INR 50,000 per annum",
        },
      ],
    },
  },
};
