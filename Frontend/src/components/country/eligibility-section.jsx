const RequirementList = ({ items }) => {
  // Check if items is defined and is an array
  if (!items || !Array.isArray(items)) {
    return null; // Return nothing if items is invalid
  }

  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const RequirementSection = ({ title, requirements }) => {
  // Check if requirements is defined
  if (!requirements) {
    return null; // Return nothing if requirements is invalid
  }

  return (
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-900 mb-3">{title}</h3>
      <RequirementList items={requirements} />
    </div>
  );
};

export const EligibilitySection = ({
  country,
  introduction,
  educationalQualifications,
  neetRequirements,
  ageCriteria,
  requiredDocuments,
  note,
}) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility for Studying MBBS in {country}</h2>

        <div className="max-w-4xl">
          {/* Introduction */}
          <p className="text-gray-700 mb-8 text-sm">{introduction}</p>

          {/* Educational Qualifications */}
          {educationalQualifications && (
            <RequirementSection
              title={educationalQualifications.title}
              requirements={educationalQualifications.requirements}
            />
          )}

          {/* NEET Requirements */}
          {neetRequirements && (
            <RequirementSection
              title={neetRequirements.title}
              requirements={neetRequirements.requirements}
            />
          )}

          {/* Age Criteria */}
          {ageCriteria && (
            <RequirementSection
              title={ageCriteria.title}
              requirements={ageCriteria.requirements}
            />
          )}

          {/* Required Documents */}
          {requiredDocuments && (
            <div className="mb-6">
              <h3 className="text-md font-semibold text-gray-900 mb-3">{requiredDocuments.title}</h3>
              {requiredDocuments.documents.map((document, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">{document.category}</h4>
                  <RequirementList items={document.details} />
                </div>
              ))}
            </div>
          )}

          {/* Note */}
          {note && <p className="text-gray-700 mt-6 text-sm">Note: {note}</p>}
        </div>
      </div>
    </div>
  );
};