import React from "react";
import {car1,car2,car3,car4} from  '../../assets/index.assets.js'
const services = [
  {
    title: "Engine Diagnostics",
    description: "Comprehensive engine performance checks and fault detection.",
    icon: "🔧",
    bgColor: "bg-blue-100",
    image: car1,
  },
  {
    title: "Oil Change",
    description: "Complete oil and filter change to ensure smooth engine performance.",
    icon: "🛢️",
    bgColor: "bg-green-100",
    image: car2,
  },
  {
    title: "Brake Repair",
    description: "Inspection and replacement of brake pads, rotors, and fluids.",
    icon: "🚗",
    bgColor: "bg-yellow-100",
    image: car3,
  },
  {
    title: "Tire Services",
    description: "Tire rotation, balancing, and alignment for safety and longevity.",
    icon: "🚀",
    bgColor: "bg-red-100",
    image: car4,
  },
  {
    title: "Battery Check",
    description: "Testing and replacement of car batteries for reliable performance.",
    icon: "🔋",
    bgColor: "bg-purple-100",
    image: car1,
  },
  {
    title: "AC & Heating",
    description: "Inspection and repair of car air conditioning and heating systems.",
    icon: "❄️",
    bgColor: "bg-teal-100",
    image: car3,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Our Car Services</h1>
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
