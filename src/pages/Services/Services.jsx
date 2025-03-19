import React from "react";
import { breakrepair, diagnosis, coating, insurance, dentpaint } from '../../assets/index.assets.js';
import { motion } from "framer-motion";

const services = [
  {
    title: "Periodic Maintenance - Free and Paid Services",
    description: "Routine inspections, oil changes, brake servicing, and diagnostics to keep your car in top condition.",
    icon: "🔧",
    bgColor: "bg-blue-100",
    image: diagnosis,
  },
  {
    title: "Mechanical Jobs",
    description: "Brake, suspension, steering, clutch, engine, transmission, A.C., electrical problem diagnosis, and computer scanning.",
    icon: "🛠️",
    bgColor: "bg-green-100",
    image: breakrepair,
  },
  {
    title: "Body Repair Jobs",
    description: "Professional denting and painting services in a state-of-the-art paint booth for a flawless finish.",
    icon: "🎨",
    bgColor: "bg-red-100",
    image: dentpaint,
  },
  {
    title: "Insurance Services",
    description: "Seamless insurance renewal and cashless claim settlements for your convenience.",
    icon: "📜",
    bgColor: "bg-yellow-100",
    image: insurance,
  },
  {
    title: "Value Added Services",
    description: "Ceramic coating, interior dry cleaning, A.C. disinfectant, bacteria removal, anti-rust coating, and more.",
    icon: "✨",
    bgColor: "bg-purple-100",
    image: coating,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 md:px-16 lg:px-24">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-gray-800">Our Toyota Services</h1>
      <div className="max-w-7xl mx-auto grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`p-6 sm:p-8 rounded-2xl shadow-lg border ${service.bgColor} text-center hover:shadow-2xl transition-all`}
          >
            <img src={service.image} alt={service.title} className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4 sm:mb-5" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center justify-center">
              <span className="mr-2 text-2xl sm:text-3xl">{service.icon}</span>
              {service.title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
