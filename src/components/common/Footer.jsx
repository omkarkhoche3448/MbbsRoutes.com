import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import Youtube from "../../assets/youtube.svg";
import Instagram from "../../assets/instagram.svg";
import {footerData} from "../../data/footerData"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {
    aboutUs,
    quickLinks,
    contactInfo,
    socialLinks,
    copyrightText,
  } = footerData;

  const iconComponents = {
    Mail,
    Phone,
    MapPin,
    Youtube,
    Instagram,
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{aboutUs.title}</h3>
            <p className="text-gray-400 text-sm">{aboutUs.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition duration-150"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `text-gray-400 hover:text-white text-sm transition duration-150 ${
                          isActive ? "text-white font-medium" : ""
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const IconComponent = iconComponents[info.icon];
                return (
                  <li key={index} className="flex items-center text-gray-400 text-sm">
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span>{info.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconComponents[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition duration-150"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon === "Youtube" || social.icon === "Instagram" ? (
                      <img
                        src={IconComponent}
                        alt={social.label}
                        className="w-6 h-6"
                      />
                    ) : (
                      <IconComponent className="w-6 h-6" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-center text-gray-400 text-sm">
              {copyrightText.replace("{year}", currentYear)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;