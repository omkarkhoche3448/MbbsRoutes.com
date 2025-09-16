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

  // Helper to render content (string, or {subtitle, list}, or {list})
  const renderContent = (item, idx) => {
    if (typeof item === "string") {
      return <li key={idx}>{item}</li>;
    }
    if (item.subtitle && Array.isArray(item.list)) {
      return (
        <li key={idx}>
          <span className="font-semibold">{item.subtitle}</span>
          <ul className="list-disc ml-6 mt-1">
            {item.list.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </li>
      );
    }
    if (Array.isArray(item.list)) {
      return (
        <ul key={idx} className="list-disc ml-6 mt-1">
          {item.list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800 mt-14">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      {/* <p className="mb-6 text-sm text-gray-500">Effective Date: {termsAndConditions.effectiveDate}</p> */}
      {termsAndConditions.sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <ul className="list-disc ml-6 space-y-1">
            {section.content.map((item, i) => renderContent(item, i))}
          </ul>
        </div>
      ))}
      {/* <div className="mt-8 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p>
          Email:{" "}
          <a
            href={`mailto:${termsAndConditions.contact.email}`}
            className="text-blue-600 underline"
          >
            {termsAndConditions.contact.email}
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            href={`tel:${termsAndConditions.contact.phone}`}
            className="text-blue-600 underline"
          >
            {termsAndConditions.contact.phone}
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default TermsAndConditionsPage;
