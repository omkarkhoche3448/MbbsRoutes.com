import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Code,
} from "lucide-react";
import {NavLink} from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "MBBS Programs", href: "#" },
    { name: "Consultation Services", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
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
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition duration-150"
                  >
                    {link.name}
                  </a>
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
                <span>consult@mbbsadvisory.com</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 678-9101</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>456 Education Lane, Cityville, ST 56789</span>
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
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* Copyright and Developer Credit */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-gray-400 text-sm">
              © {currentYear} MBBS Advisory Services. All rights reserved.
            </p>

            <NavLink
              to="https://omkarkhoche.vercel.app"
              className="flex justify-evenly w-1/3 flex-row items-center cursor-pointer  bg-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center space-x-2 mb-1">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-base">
                  Designed & Developed by
                </span>
              </div>
              <a
                href="https://omkarkhoche.vercel.app"
                className="text-blue-400 hover:text-blue-300 transition duration-150 font-semibold text-lg mb-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Omkar Khoche
              </a>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
