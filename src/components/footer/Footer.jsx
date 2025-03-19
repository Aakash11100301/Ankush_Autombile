import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/index.assets.js";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* Logo & About */}
        <div className="text-center mb-8">
          <img src={logo} alt="Toyota Logo" className="mx-auto w-28 md:w-32" />
          <p className="text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            SP Automobiles Pvt. Ltd. reserves the right to change specifications, prices, and models without notice.
            Images are for illustration purposes only. Actual vehicle colors and features may vary.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition">Service</Link></li>
              <li><Link to="/corporate-sales" className="hover:text-red-400 transition">Corporate Sales</Link></li>
              <li><Link to="/disclaimer" className="hover:text-red-400 transition">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Models */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Toyota Models</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li>Toyota Glanza</li>
              <li>Toyota Fortuner</li>
              <li>Toyota Hilux</li>
              <li>Toyota Innova</li>
              <li>Toyota Camry</li>
              <li>Toyota Vellfire</li>
              <li>Toyota Urban Cruiser Hyryder</li>
              <li>Toyota Rumion</li>
              <li>Toyota Corolla Altis</li>
              <li>Toyota Etios</li>
              <li>Toyota Land Cruiser</li>
              <li>Toyota Urban Cruiser Taisor</li>
              <li>Toyota Yaris</li>
            </ul>
          </div>

          {/* Dealer Locations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Dealer Locations</h3>
            <ul className="space-y-2">
              <li>Toyota Mansa</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 SP Automobiles Pvt. Ltd. | All Rights Reserved | Designed By AAP Technologies Pvt. Ltd.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
