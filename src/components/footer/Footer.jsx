import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo and Copyright */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Brand</h2>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
        </div>

        {/* Get in Touch Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-gray-400">123 Street, City, Country</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Email: contact@brand.com</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;