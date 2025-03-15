import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { whatsappData } from '../../data/whatsappData';
import { faqData } from '../../data/faqData';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { phoneNumber, message } = whatsappData;

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {faqData.title}
        </h2>
        <p className="text-gray-600">
          {faqData.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {faqData.faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 outline-none"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left p-6 rounded-xl"
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
          {faqData.helpSection.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {faqData.helpSection.description}
        </p>
        <button 
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium">
          {faqData.helpSection.buttonText}
        </button>
      </div>
    </div>
  );
};

export default FAQSection;