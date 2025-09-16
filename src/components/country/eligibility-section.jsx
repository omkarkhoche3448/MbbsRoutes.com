// const RequirementList = ({ items }) => {
//   // Check if items is defined and is an array
//   if (!items || !Array.isArray(items)) {
//     return null; // Return nothing if items is invalid
//   }

//   return (
//     <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// const RequirementSection = ({ title, requirements }) => {
//   // Check if requirements is defined
//   if (!requirements) {
//     return null; // Return nothing if requirements is invalid
//   }

//   return (
//     <div className="mb-6">
//       <h3 className="text-md font-semibold text-gray-900 mb-3">{title}</h3>
//       <RequirementList items={requirements} />
//     </div>
//   );
// };

export const EligibilitySection = ({
  country,
  introduction,
  educationalQualifications,
  neetRequirements,
  ageCriteria,
  requiredDocuments,
  note,
}) => {
  const RequirementList = ({ items }) => {
    if (!items || !Array.isArray(items)) return null;
    
    return (
      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  const RequirementCard = ({ title, requirements }) => {
    if (!requirements) return null;
    
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          {title}
        </h3>
        <RequirementList items={requirements} />
      </div>
    );
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
              Requirements
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Eligibility for Studying MBBS in {country}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{introduction}</p>
          </div>

          {/* Educational Qualifications */}
          {educationalQualifications && (
            <RequirementCard
              title={educationalQualifications.title}
              requirements={educationalQualifications.requirements}
            />
          )}

          {/* NEET Requirements */}
          {neetRequirements && (
            <RequirementCard
              title={neetRequirements.title}
              requirements={neetRequirements.requirements}
            />
          )}

          {/* Age Criteria */}
          {ageCriteria && (
            <RequirementCard
              title={ageCriteria.title}
              requirements={ageCriteria.requirements}
            />
          )}

          {/* Required Documents */}
          {requiredDocuments && (
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                {requiredDocuments.title}
              </h3>
              
              {requiredDocuments.documents.map((document, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    {document.category}
                  </h4>
                  <RequirementList items={document.details} />
                </div>
              ))}
            </div>
          )}

          {/* Note */}
          {note && (
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong>Note:</strong> {note}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};