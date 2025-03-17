import React from "react";

const offers = [
  {
    title: "Basic Service",
    price: "$49.99",
    features: ["Oil Change", "Brake Inspection", "Battery Check"],
    bgColor: "bg-blue-100",
  },
  {
    title: "Standard Service",
    price: "$79.99",
    features: ["Basic Service +", "Tire Rotation", "Fluid Top-up"],
    bgColor: "bg-green-100",
  },
  {
    title: "Comprehensive Service",
    price: "$129.99",
    features: ["Standard Service +", "Engine Diagnostic", "AC Check"],
    bgColor: "bg-yellow-100",
  },
];

const OffersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Car Service Offers</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg ${offer.bgColor} text-center`}
          >
            <h2 className="text-2xl font-semibold mb-3">{offer.title}</h2>
            <p className="text-xl font-bold text-gray-700">{offer.price}</p>
            <ul className="mt-4 text-gray-600">
              {offer.features.map((feature, idx) => (
                <li key={idx} className="border-b py-2">{feature}</li>
              ))}
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;