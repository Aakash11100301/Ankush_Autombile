import React from "react";
import { Link } from "react-router-dom";
import { toyota } from "../../assets/index.assets.js";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers" },
    { name: "Packages", path: "/packages" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-white border-b border-gray-300 w-full fixed top-0 left-0 z-50 shadow-lg h-20 flex items-center">
      <nav className="w-full px-4 lg:px-8 flex items-center justify-between h-full">
        
        {/* Logo - Fully Left Aligned */}
        <div className="flex items-center h-full pl-2">
          <img src={toyota} alt="Toyota Logo" className="h-full object-cover" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-black hover:text-gray-700 transition-colors duration-200 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
