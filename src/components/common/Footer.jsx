import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">About Us</h3>
            <p className="text-sm leading-relaxed">
              We are dedicated to delivering innovative solutions that empower businesses 
              and individuals. Our commitment to excellence drives everything we do.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">contact@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">123 Business Ave, City, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Copyright */}
          <div className="text-center text-sm">
            <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;