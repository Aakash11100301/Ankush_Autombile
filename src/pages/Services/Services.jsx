import React from "react";
import { car32, breakrepair, diagnosis, oilchange, tyre, battery, acrepair, dentpaint } from '../../assets/index.assets.js';
import { motion } from "framer-motion";

const services = [
  {
    title: "Toyota Engine Diagnostics",
    description: "Comprehensive engine performance checks and fault detection for Toyota vehicles.",
    icon: "🔧",
    bgColor: "bg-blue-100",
    image: diagnosis,
  },
  {
    title: "Toyota Oil Change",
    description: "Complete oil and filter change to ensure smooth engine performance in Toyota cars.",
    icon: "🛢️",
    bgColor: "bg-green-100",
    image: oilchange,
  },
  {
    title: "Toyota Brake Repair",
    description: "Inspection and replacement of brake pads, rotors, and fluids for Toyota models.",
    icon: "🚗",
    bgColor: "bg-yellow-100",
    image: breakrepair,
  },
  {
    title: "Toyota Tire Services",
    description: "Tire rotation, balancing, and alignment for safety and longevity of Toyota vehicles.",
    icon: "🚀",
    bgColor: "bg-red-100",
    image: tyre,
  },
  {
    title: "Toyota Battery Check",
    description: "Testing and replacement of Toyota car batteries for reliable performance.",
    icon: "🔋",
    bgColor: "bg-purple-100",
    image: battery,
  },
  {
    title: "Toyota AC & Heating",
    description: "Inspection and repair of Toyota air conditioning and heating systems.",
    icon: "❄️",
    bgColor: "bg-teal-100",
    image: acrepair,
  },
  {
    title: "Toyota Denting & Painting",
    description: "Professional dent removal and high-quality paint jobs for a showroom finish.",
    icon: "🎨",
    bgColor: "bg-red-100",
    image: dentpaint,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">Our Toyota Services</h1>
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-2xl shadow-lg border ${service.bgColor} text-center hover:shadow-2xl transition-all`}
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-xl mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center">
              <span className="mr-2 text-3xl">{service.icon}</span>
              {service.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
