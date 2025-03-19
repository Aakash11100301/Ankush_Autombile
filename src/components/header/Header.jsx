import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toyota } from "../../assets/index.assets.js";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers" },
    { name: "Packages", path: "/packages" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-4 md:px-8 h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={toyota} alt="Toyota Logo" className="h-12 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-800 hover:text-red-500 transition-colors duration-200 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XMarkIcon className="w-8 h-8 text-gray-800" /> : <Bars3Icon className="w-8 h-8 text-gray-800" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-2/3 sm:w-1/2 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <XMarkIcon className="w-8 h-8 text-gray-800" />
        </button>

        {/* Mobile Navigation */}
        <ul className="mt-16 space-y-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-gray-800 text-lg font-semibold hover:text-red-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
