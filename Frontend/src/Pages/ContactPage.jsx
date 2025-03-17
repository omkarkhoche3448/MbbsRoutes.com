import React from "react";
import {contactData} from "../data/contactData";

const ContactUs = () => {
  const {
    title,  
    introduction,
    contactOptions,
    officeAddress,
    closingMessage,
  } = contactData;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 mt-5 md:mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          {title}
        </h2>

        {/* Introduction */}
        <div className="text-center text-gray-700 mb-12">
          <p className="text-lg mb-4">{introduction.welcomeText}</p>
          <p className="text-lg">
            For immediate assistance, don't hesitate to give us a call at{" "}
            <strong>{introduction.contactInfo.phone}</strong>. Our team is ready
            to address and resolve any queries you may have promptly.
            Alternatively, you can reach out to us via email at{" "}
            <strong>{introduction.contactInfo.email}</strong>.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {option.title}
              </h3>
              <p className="text-gray-700 mb-4">{option.description}</p>
              <a
                href={option.link}
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                {option.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Office Address */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {officeAddress.title}
          </h3>
          <p className="text-gray-700">{officeAddress.address}</p>
        </div>

        {/* Closing Message */}
        <div className="mt-12 text-center text-gray-700">
          <p className="text-lg">{closingMessage.text1}</p>
          <p className="text-lg mt-4">{closingMessage.text2}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;