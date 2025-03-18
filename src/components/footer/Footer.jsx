import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Logo and Disclaimer */}
        <div className="mb-6">
          <img src="/toyota-logo.png" alt="Toyota Logo" className="mx-auto w-16 h-16" />
          <p className="text-sm mt-2">
            SP Automobiles Pvt. Ltd. reserves the right to change the colors, specifications, prices,
            and models of vehicles without any notice. The shown pictures and features mentioned may not
            be a part of standard equipment and could differ from variants. The actual color of the vehicle
            and accessories might differ from the representations. Images are for illustration purposes only.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-center">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Service</Link></li>
              <li><Link to="/corporate-sales" className="hover:underline">Corporate Sales</Link></li>
              <li><Link to="/disclaimer" className="hover:underline">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Models */}
          <div>
            <h3 className="font-semibold text-lg">Models</h3>
            <ul className="mt-2 space-y-2">
              <li>Toyota Glanza</li>
              <li>Toyota Fortuner</li>
              <li>Toyota Hilux</li>
              <li>Toyota Innova Crysta</li>
              <li>Toyota Camry</li>
              <li>Toyota Vellfire</li>
              <li>Toyota Urban Cruiser Hyryder</li>
              <li>Toyota Innova Hycross</li>
              <li>Toyota Rumion</li>
            </ul>
          </div>

          {/* Dealer Locations */}
          <div>
            <h3 className="font-semibold text-lg">Dealer Location</h3>
            <ul className="mt-2 space-y-2">
              <li>Toyota Mansa</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm text-gray-500">
          © 2025 SP Automobiles Pvt. Ltd. | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;