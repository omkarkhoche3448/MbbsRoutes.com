import React from 'react';

const CollegeInfo = ({countryName}) => {
  // Dummy data from the provided text
  const overview = {
    popularChoice: 'The UnitedStates Medical Universities have been a popular choice among the Indian students seeking to study MBBS abroad. Over the last few decades, as many as 50,000 Indian medical students have achieved their dream of becoming a doctor with the top government medical universities of Russia. Even as of today, 5000+ Indian students are studying MBBS in Russia and are on their way of achieving their dream.',
    russiaAsAHub: 'Russia is known to be a land of supremes and as a global \'superpower\' it is often a hub of research and innovations. Thus, the students pursuing the highest education in Russia get to experience the benefits of abundant exposure in the terms of career and opportunities.',
    indianRussiaRelations: 'The healthy diplomatic relations between India and Russia often make the entire admission procedure and experience noteworthy and hence bring it to the list of the best countries for the Indian students looking for MBBS admissions abroad.'
  };

  const courseOverview = {
    courseDuration: '6 years (Including one year of compulsory internship)',
    mediumOfStudy: 'English',
    averageCost: {
      tuition: '₹ 15 Lakhs to 35 Lakhs',
      living: '₹ 20,000 per month'
    },
    totalMedicalUniversities: '25+',
    recognitions: 'ECFMG, FAIMER, WDOMS, MCI (NMC), MCC, etc',
    requirements: {
      ielts_toefl: 'Not required',
      neet: 'Mandatory'
    }
  };

  const benefits = [
    'Affordable MBBS fee structure',
    'No donations or capitation fees',
    'No need to sit for any entrance exams like TOEFL/IELTS',
    'Easy to meet eligibility requirements',
    'Advanced infrastructure with well-equipped laboratories',
    'Admission in top medical universities of Russia with passing NEET score',
    'High-quality medical education meeting international standards',
    'Highly-qualified medical faculty members',
    'Globally recognized medical degrees',
    'FMGE/NExT coaching available',
    'Option to practice medicine in India',
    'Indian food',
    'Fully furnished hostels with 24/7 CCTV security',
    'Clinical training at top hospitals of the world',
    'English is the medium of teaching',
    'Special focus on holistic development of students'
  ];

  const topUniversities = [
    {
      name: 'Perm State Medical University',
      established: 1916,
      location: 'Perm city',
      mediumOfTeaching: 'English',
      fees: '₹ 28,29,000'
    },
    {
      name: 'Mari State University',
      established: 1972,
      location: 'Yoshkar-Ola',
      mediumOfTeaching: 'English',
      fees: '₹ 26,65,000'
    },
    {
      name: 'Orenburg State Medical University',
      established: 1944,
      location: 'Orenburg city',
      mediumOfTeaching: 'English',
      fees: '₹ 30,62,000'
    },
    {
      name: 'Tver State Medical University',
      established: 1936,
      location: 'Tver',
      mediumOfTeaching: 'English',
      fees: '₹ 18,93,000'
    },
    {
      name: 'I.M. Sechenov First Moscow State Medical University',
      established: 1758,
      location: 'Moscow',
      mediumOfTeaching: 'English',
      fees: '₹ 59,70,000'
    }
  ];

  const eligibilityRequirements = {
    education: 'Passed 10+2 or equivalent in Physics, Chemistry, Biology, and English',
    marks: {
      general: '50%',
      reserved: '40%'
    },
    ageRange: {
      min: 17,
      max: 25
    },
    neet: {
      general: '50th percentile',
      reserved: '40th percentile'
    }
  };

  const admissionProcedure = [
    'Choose the best university for your MBBS in Russia',
    'Fill in the application form',
    'Get your admission letter from the university',
    'Get your student Visa',
    'Pay your tuition fees',
    'Pack your suitcase',
    'Welcome to study in Russia!'
  ];

  const facilities = [
    'Personal counseling from experts for the selection of the best universities for your MBBS in Russia',
    '100% admission support including arranging student visas, air travel, or even getting education loans',
    'Special Indian mess facilities serving Indian food during their stay in Russia',
    'Comfortable hostels for Indian students in Russia with access to all the basic necessities',
    'Coaching for FMGE/NExT by Indian doctors and professors during their MBBS in Russia'
  ];

  return (
    <div className="bg-white rounded-lg p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">MBBS in {countryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">{overview.popularChoice}</p>
          <p className="text-gray-600 mb-4">{overview.russiaAsAHub}</p>
          <p className="text-gray-600 mb-4">{overview.indianRussiaRelations}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-500 font-medium">Course Duration</p>
              <p className="text-gray-800">{courseOverview.courseDuration}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Medium of Study</p>
              <p className="text-gray-800">{courseOverview.mediumOfStudy}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-500 font-medium">Average Cost</p>
              <p className="text-gray-800">Tuition: {courseOverview.averageCost.tuition}</p>
              <p className="text-gray-800">Living: {courseOverview.averageCost.living}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Total Medical Universities</p>
              <p className="text-gray-800">{courseOverview.totalMedicalUniversities}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-500 font-medium">Recognitions</p>
              <p className="text-gray-800">{courseOverview.recognitions}</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Requirements</p>
              <p className="text-gray-800">IELTS/TOEFL: {courseOverview.requirements.ielts_toefl}</p>
              <p className="text-gray-800">NEET: {courseOverview.requirements.neet}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className=" flex flex-col">
            <p className="text-gray-800">{benefit}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Top Universities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topUniversities.map((university, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{university.name}</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-500 font-medium">Established</p>
                <p className="text-gray-800">{university.established}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Location</p>
                <p className="text-gray-800">{university.location}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Medium of Teaching</p>
                <p className="text-gray-800">{university.mediumOfTeaching}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Fees</p>
                <p className="text-gray-800">{university.fees}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Eligibility</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg p-6">
          <p className="text-gray-500 font-medium">Education</p>
          <p className="text-gray-800">{eligibilityRequirements.education}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <p className="text-gray-500 font-medium">Marks Requirement</p>
          <p className="text-gray-800">General: {eligibilityRequirements.marks.general}%</p>
          <p className="text-gray-800">Reserved: {eligibilityRequirements.marks.reserved}%</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <p className="text-gray-500 font-medium">Age Range</p>
          <p className="text-gray-800">Minimum: {eligibilityRequirements.ageRange.min} years</p>
          <p className="text-gray-800">Maximum: {eligibilityRequirements.ageRange.max} years</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <p className="text-gray-500 font-medium">NEET Requirement</p>
          <p className="text-gray-800">General: {eligibilityRequirements.neet.general} percentile</p>
          <p className="text-gray-800">Reserved: {eligibilityRequirements.neet.reserved} percentile</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Admission Procedure</h2>
      <ol className="list-decimal pl-6 text-gray-800 mb-8">
        {admissionProcedure.map((step, index) => (
          <li key={index} className="mb-2">{step}</li>
        ))}
      </ol>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <div key={index} className="">
       
            <p className="text-gray-800">{facility}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeInfo;