import React from 'react';

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-500 pb-2">{children}</h2>
);

const InfoCard = ({ title, children }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    {children}
  </div>
);

const List = ({ items }) => (
  <ul className="space-y-3 text-lg text-gray-700">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <span className="text-blue-500 mr-2">•</span>
        {item}
      </li>
    ))}
  </ul>
);

const MBBSEducationAbroad = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 text-center">
          Study MBBS Abroad
        </h1>
        
        <div className="space-y-12">
          <div className="text-lg md:text-xl text-gray-700 space-y-4">
            <p>
              MBBS in abroad is gradually becoming a popular choice for Indian students aspiring to become world-class doctors. The tough competition and the scarcity of MBBS seats in India force many aspiring doctors to look for other opportunities to move ahead in their careers. The top medical universities and colleges abroad boast of ultramodern facilities for their international students with quality medical education at affordable MBBS fees.
            </p>
            <p>
              Russia, Bangladesh, Caribbean Islands, Armenia, Kyrgyzstan, Georgia, etc., have been the top destinations to study MBBS abroad for Indian students for decades. Every year more than 5,000 Indian students join medical universities in these countries with hopes of becoming excellent doctors. Apart from providing unbeatable international practical exposure to Indian students, these medical institutions promise comfortable and safe living conditions.
            </p>
            <p>
              Speaking of the MBBS in abroad fee structure in foreign medical universities associated with Education Abroad, any Indian student aspiring to become a good doctor can complete an MBBS within INR 15-40 lakhs from an NMC-recognized university overseas.
            </p>
          </div>

          <InfoCard title="Quick Overview of MBBS in Abroad 2024">
            <List items={[
              <><span className="font-semibold">Duration:</span> 5 or 6 years</>,
              <><span className="font-semibold">Medium of teaching:</span> English</>,
              <><span className="font-semibold">Eligibility criteria:</span> At least 50% score in PCB subjects and 17-25 years of age in the admission year</>,
              <><span className="font-semibold">NEET requirement:</span> Mandatory</>,
              <><span className="font-semibold">Average tuition fees:</span> INR 15-40 lakhs (Depending on the choice of university)</>
            ]} />
          </InfoCard>

          <InfoCard title="Why Study MBBS in Abroad?">
            <List items={[
              "Affordable MBBS fee structure",
              "Recognition and accreditations by WDOMS, FAIMER, ECFMG, MCC, etc.",
              "Hassle-free admission procedure",
              "Easy to meet eligibility requirements",
              "MBBS admission with just passing NEET score",
              "Low cost of living",
              "Incredible international practical exposure",
              "No entrance exams like IELTS/TOEFL for admissions",
              "No payment of donations or capitation fees",
              "World-class infrastructural facilities",
              "Comfortable living arrangements in hostels",
              "English MBBS curriculum",
              "Merit-based scholarships for bright students",
              "Indian food in mess facilities",
              "MBBS course based on the guidelines of NMC",
              "Good student-teacher ratio",
              "Internships in top hospitals and clinics",
              "Experienced, qualified, and skilled faculty members"
            ]} />
          </InfoCard>

          <div>
            <SectionTitle>Most Popular Countries To Study MBBS Abroad For Indian Students</SectionTitle>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Quality medical education, affordability, world-class infrastructure, and recognition by the global statutory bodies of various foreign medical universities have garnered immense attention to the countries of their establishments from medical aspirants worldwide. But what has attracted the attention of Indian students wanting to become good doctors is the recognition by the National Medical Commission (MCI) as their major aim is to practice medicine in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <InfoCard title="MBBS in Russia">
              <List items={[
                "Affordable MBBS fee structure",
                "6-year MBBS course",
                "Modern infrastructure",
                "Quality medical education",
                "Highly-qualified medical faculty members",
                "Comfortable hostels",
                "Indian food",
                "Smooth admission process",
                "English MBBS course",
                "No entrance exams",
                "No donations"
              ]} />
            </InfoCard>

            <InfoCard title="Top Medical Universities in Russia">
              <List items={[
                <><span className="font-semibold">Orenburg State Medical University:</span> Average fees INR 27,00,000, 6 years, English medium</>,
                <><span className="font-semibold">Perm State Medical University:</span> Average fees INR 25,00,000, 6 years, English medium</>,
                <><span className="font-semibold">Mari State University:</span> Average fees INR 24,00,000, 6 years, English medium</>
              ]} />
            </InfoCard>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <InfoCard title="MBBS in Bangladesh">
              <List items={[
                "Similar MBBS curriculum to India",
                "English is the medium of teaching",
                "Affordable MBBS fees",
                "Globally recognized medical degrees",
                "Recognized and accredited by global statutory bodies",
                "Hostel facilities for Indian students",
                "Indian food",
                "FMGE coaching",
                "No entrance exams",
                "No donations"
              ]} />
            </InfoCard>

            <InfoCard title="Top Medical Universities in Bangladesh">
              <List items={[
                <><span className="font-semibold">Khulna City Medical College:</span> Average fees INR 30,00,000</>,
                <><span className="font-semibold">Shahabuddin Medical College:</span> Average fees INR 33,75,000</>,
                <><span className="font-semibold">Rangpur Community Medical College:</span> Average fees INR 32,96,250</>
              ]} />
            </InfoCard>
          </div>

          <InfoCard title="MBBS in Armenia">
            <p className="text-lg text-gray-700">
              The duration of the MBBS program is 6 years, including an internship. No IELTS/TOEFL is required for admission to Armenian Medical Universities. Recognition from NMC/MCI and listed with WDOMS.
            </p>
          </InfoCard>

          <InfoCard title="MD/MBBS in Americas">
            <p className="text-lg text-gray-700 mb-4">
              America has always topped the list of countries where Indian students dream to study MD/MBBS abroad. The presence of renowned medical schools in North and Central America provides a high standard of US-based medical education to their students at affordable prices.
            </p>
            <List items={[
              <><span className="font-semibold">Lincoln American University:</span> Average Fees INR 37 lakhs, 5 years, English medium</>,
              <><span className="font-semibold">Victoria University of Barbados:</span> Average Fees INR 25-28 Lakhs, 5 years, English medium</>
            ]} />
          </InfoCard>

          <div className="grid md:grid-cols-2 gap-8">
            <InfoCard title="MBBS in Kyrgyzstan">
              <List items={[
                "Lowest MBBS fee structure",
                "English medium medical universities",
                "Modern infrastructure",
                "Hostel facilities available",
                "Indian food",
                "Round-the-clock security on the university campuses",
                "No entrance exams",
                "No donations"
              ]} />
            </InfoCard>

            <InfoCard title="Top Medical Universities in Kyrgyzstan">
              <List items={[
                <><span className="font-semibold">Osh State University:</span> Average fees INR 19,87,500</>,
                <><span className="font-semibold">Kyrgyz State Medical Academy:</span> Average fees INR 16,87,500</>,
                <><span className="font-semibold">International School of Medicine:</span> Average fees INR 16,87,500</>
              ]} />
            </InfoCard>
          </div>

          <InfoCard title="Things To Keep in Mind When Choosing a Country for MBBS Abroad">
            <List items={[
              "MBBS fees of the university or college",
              "Duration of the MBBS course",
              "Living costs in the country",
              "Recognition by the National Medical Commission (NMC) and WHO",
              "Accreditation of the university/college",
              "Availability of hostels and other student facilities"
            ]} />
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default MBBSEducationAbroad;