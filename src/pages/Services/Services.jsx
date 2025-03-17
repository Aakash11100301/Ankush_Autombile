import React from "react";
import { car32 } from '../../assets/index.assets.js';

const services = [
  {
    title: "Toyota Engine Diagnostics",
    description: "Comprehensive engine performance checks and fault detection for Toyota vehicles.",
    icon: "🔧",
    bgColor: "bg-blue-100",
    image: car32,
  },
  {
    title: "Toyota Oil Change",
    description: "Complete oil and filter change to ensure smooth engine performance in Toyota cars.",
    icon: "🛢️",
    bgColor: "bg-green-100",
    image: car32,
  },
  {
    title: "Toyota Brake Repair",
    description: "Inspection and replacement of brake pads, rotors, and fluids for Toyota models.",
    icon: "🚗",
    bgColor: "bg-yellow-100",
    image: car32,
  },
  {
    title: "Toyota Tire Services",
    description: "Tire rotation, balancing, and alignment for safety and longevity of Toyota vehicles.",
    icon: "🚀",
    bgColor: "bg-red-100",
    image: car32,
  },
  {
    title: "Toyota Battery Check",
    description: "Testing and replacement of Toyota car batteries for reliable performance.",
    icon: "🔋",
    bgColor: "bg-purple-100",
    image: car32,
  },
  {
    title: "Toyota AC & Heating",
    description: "Inspection and repair of Toyota air conditioning and heating systems.",
    icon: "❄️",
    bgColor: "bg-teal-100",
    image: car32,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Our Toyota Services</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg border ${service.bgColor} text-center hover:shadow-xl transition`}
          >
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
            <p className="text-gray-700 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
