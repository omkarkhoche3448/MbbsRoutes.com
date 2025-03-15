import React from 'react';
import { mbbsData } from '../data/mbbsData';

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
    {children}
  </h2>
);

const InfoCard = ({ title, children }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    {children}
  </div>
);

const List = ({ items }) => (
  <ul className="space-y-2 text-gray-700">
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
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto mt-8 md:mt-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
          {mbbsData.title}
        </h1>

        <div className="space-y-8">
          <div className="text-gray-700 space-y-4">
            {mbbsData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <InfoCard title="Quick Overview of MBBS in Abroad 2024">
            <List items={[
              <><span className="font-semibold">Duration:</span> {mbbsData.quickOverview.duration}</>,
              <><span className="font-semibold">Medium of teaching:</span> {mbbsData.quickOverview.mediumOfTeaching}</>,
              <><span className="font-semibold">Eligibility criteria:</span> {mbbsData.quickOverview.eligibilityCriteria}</>,
              <><span className="font-semibold">NEET requirement:</span> {mbbsData.quickOverview.neetRequirement}</>,
              <><span className="font-semibold">Average tuition fees:</span> {mbbsData.quickOverview.averageTuitionFees}</>
            ]} />
          </InfoCard>

          <InfoCard title="Why Study MBBS in Abroad?">
            <List items={mbbsData.whyStudyMBBSAbroad} />
          </InfoCard>

          <div>
            <SectionTitle>Most Popular Countries To Study MBBS Abroad For Indian Students</SectionTitle>
            <p className="text-gray-700 mb-6">
              Quality medical education, affordability, world-class infrastructure, and recognition by the global statutory bodies of various foreign medical universities have garnered immense attention to the countries of their establishments from medical aspirants worldwide. But what has attracted the attention of Indian students wanting to become good doctors is the recognition by the National Medical Commission (MCI) as their major aim is to practice medicine in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mbbsData.popularCountries.map((country, index) => (
              <InfoCard key={index} title={`MBBS in ${country.country}`}>
                <List items={country.shortPoints} />
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBBSEducationAbroad;