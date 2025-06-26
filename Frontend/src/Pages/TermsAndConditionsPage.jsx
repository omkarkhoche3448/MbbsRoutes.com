import React from "react";
import { termsAndConditions } from "../data/termsandCondtions";

const TermsAndConditionsPage = () => {
  React.useEffect(() => {
    // Prevent MBBSConsultancyFormModal auto-popup only while on this page
    const prev = localStorage.getItem("mbbsModalBlockTemp");
    localStorage.setItem("mbbsModalBlockTemp", "true");
    return () => {
      if (!prev) {
        localStorage.removeItem("mbbsModalBlockTemp");
      }
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800 mt-14">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-6 text-sm text-gray-500">Effective Date: {termsAndConditions.effectiveDate}</p>
      {termsAndConditions.sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <ul className="list-disc ml-6 space-y-1">
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-8 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p>Email: <a href={`mailto:${termsAndConditions.contact.email}`} className="text-blue-600 underline">{termsAndConditions.contact.email}</a></p>
        <p>Phone: <a href={`tel:${termsAndConditions.contact.phone}`} className="text-blue-600 underline">{termsAndConditions.contact.phone}</a></p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
