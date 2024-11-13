import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the process for applying to an MBBS program abroad?",
      answer: "Our MBBS consultation team will guide you through the entire application process, including choosing the right university, completing the application forms, and gathering the necessary documentation."
    },
    {
      question: "What are the eligibility criteria for MBBS admissions?",
      answer: "Eligibility typically requires completion of high school with a focus on science subjects and a minimum aggregate score. Some universities also require entrance exams or language proficiency tests, which our team can help you prepare for."
    },
    {
      question: "Do you assist with visa and travel arrangements?",
      answer: "Yes, we offer comprehensive support for visa applications, travel arrangements, and accommodation. Our team ensures all documents are in order to avoid any last-minute issues."
    },
    {
      question: "Can I get financial assistance or education loans?",
      answer: "We provide guidance on securing financial assistance and loans. We work with trusted financial partners to help students manage the costs associated with studying abroad."
    },
    {
      question: "How long does the MBBS program typically take?",
      answer: "The duration of an MBBS program abroad varies, typically ranging from 5 to 6 years, including the internship period. Our consultants can help you understand the curriculum structure of each university."
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to common questions about our MBBS consultation services
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 text-lg pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    isOpen ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Help Section */}
      <div className="mt-12 text-center p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-4">
          We're here to help. Contact our MBBS consultation team for more information.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
