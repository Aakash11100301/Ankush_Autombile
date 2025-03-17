import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { toyota} from "../../assets/index.assets.js";
import { car32} from "../../assets/index.assets.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("All models");
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const models = [
    "All models",
    "Toyota Glanza",
    "Toyota Fortuner",
    "Toyota Camry",
    "Urban Cruiser Hyryder",
    "Innova Hycross"
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers" },
    { name: "Packages", path: "/packages" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-yellow-900 border-b border-gray-700 w-full fixed top-0 left-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo & Company Name */}
        <Link to="/" className="flex items-center">
        <img src={toyota} alt="Toyota Logo" className="w-16 h-16" />  {/* Increased size */}
        <span className="ml-3 text-2xl font-bold text-yellow-400">Toyota Service Center</span> {/* Changed text color */}
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
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

        {/* Toyota Model Selector */}
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          {models.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))}
        </select>
      </nav>
    </header>
  );
};

export default Header;
