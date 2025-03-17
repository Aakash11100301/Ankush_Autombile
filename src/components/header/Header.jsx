import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
 
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers" },
    { name: "Packages", path: "/packages" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];
 
  return (
    <header className="bg-yellow-900 border-b border-gray-700 w-full fixed top-0 left-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="ml-2 text-xl font-bold text-white">Brand</span>
          </Link>
 
          {/* Navigation Links */}
          <div className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
 
          {/* Login Button */}
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Login
          </Link>
        </div>
 
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </Link>
 
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
 
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 py-4 px-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className="block px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-md text-base font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={toggleMenu}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md text-base font-medium transition-colors duration-200"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
 
export default Header;
 