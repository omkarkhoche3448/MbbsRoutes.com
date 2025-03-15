import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { whatsappData } from "../../data/whatsappData";
import Youtube from "../../assets/youtube.svg";
import Instagram from "../../assets/instagram.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactLink = whatsappData.link;

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "MBBS Programs", href: "/mbbs-in-abroad" },
    { name: "Contact Us", href: contactLink },
  ];

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@MbbsRoutes", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/mbbs_routes", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Our MBBS consultation service is dedicated to helping aspiring
              medical students find the best-fit programs abroad. We guide you
              from application to admission with tailored support for a seamless
              experience.
            </p>
          </div>

          {/* Quick Links Section */}
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

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>consult@mbbsroutes.com</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 8434124950</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>AIIMS Delhi Hostel no. 1, East New, Delhi - 110029</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition duration-150"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-center text-gray-400 text-sm">
              © {currentYear} MBBS Consultation Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;