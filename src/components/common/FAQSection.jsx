import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payments with net-30 terms."
    },
    {
      question: "How long does shipping usually take?",
      answer: "Domestic shipping typically takes 2-4 business days. International shipping can take 7-14 business days depending on the destination. Express shipping options are available at checkout for faster delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team for a return authorization number. Return shipping costs are covered for defective items."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 100 countries worldwide. International shipping rates are calculated at checkout based on destination, weight, and chosen shipping method. Import duties and taxes may apply."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's website to track your package in real-time. Our system also sends automated updates about significant shipping events."
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to common questions about our services
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
          We're here to help. Contact our support team.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQSection;