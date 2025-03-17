import React from "react";

const comboPackages = [
  {
    title: "Essential Care Combo",
    price: "$99.99",
    features: ["Oil Change", "Tire Rotation", "Brake Inspection"],
    bgColor: "bg-blue-100",
  },
  {
    title: "Performance Boost Combo",
    price: "$149.99",
    features: ["Engine Diagnostics", "Battery Check", "Fluid Top-up"],
    bgColor: "bg-green-100",
  },
  {
    title: "Complete Protection Combo",
    price: "$199.99",
    features: ["Essential Care Combo +", "Wheel Alignment", "AC & Heating Service"],
    bgColor: "bg-yellow-100",
  },
];

const ComboPackagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Combo Service Packages</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {comboPackages.map((pkg, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-xl border-2 border-gray-300 ${pkg.bgColor} hover:scale-105 transition-transform text-center`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{pkg.title}</h2>
            <p className="text-2xl font-semibold text-gray-700">{pkg.price}</p>
            <ul className="mt-4 space-y-2 text-gray-600 text-lg">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComboPackagesPage;