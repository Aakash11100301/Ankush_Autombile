import React, { useState } from "react";
import ConsultationForm from "./ConsultationForm";
import {
  toyotaallcars, glanza, camry, fortuner, hilux,
  innovacrysta, innovahycross, vellfire, urbanch, urbanct, rumion, landcruiser, yaris, etios, corollaaltis
} from '../../assets/index.assets.js';
 
const cars = [
    {
        name: "Toyota Camry",
        tagline: "Luxury Meets Performance.",
        description:
          "The Toyota Camry offers a perfect blend of luxury, efficiency, and high performance. Its hybrid technology, plush interiors, and advanced safety features make every drive smooth and refined.",
        fullImage: toyotaallcars,
        smallImage: camry,
    },
    {
      name: "Toyota Corolla Altis",
      tagline: "Elevate Your Drive with Power and Prestige.",
      description:
        "The Toyota Corolla Altis is a symbol of sophistication, blending premium comfort with dynamic performance. With its sleek design, spacious interiors, and advanced safety features, it offers a smooth and luxurious driving experience. Whether in the city or on the highway, the Corolla Altis delivers reliability, efficiency, and elegance in every ride.",
      fullImage: toyotaallcars,
      smallImage: corollaaltis,
    },
    {
      name: "Toyota Etios",
      tagline: "Built to Last, Designed for Comfort.",
      description:
          "The Toyota Etios is a reliable and fuel-efficient sedan, offering a perfect blend of comfort, performance, and durability. With its spacious interiors, powerful yet economical engine, and Toyota’s legendary reliability, the Etios is an ideal choice for both city commutes and long highway drives. Whether for personal use or commercial purposes, the Etios delivers a smooth and hassle-free driving experience.",
      fullImage: toyotaallcars,
      smallImage: etios,
    },
    {
        name: "Toyota Fortuner",
        tagline: "Conquer Every Terrain.",
        description:
          "The Toyota Fortuner is a rugged SUV built for adventure. With a powerful diesel engine, off-road capabilities, and premium features, it dominates both highways and rough trails.",
        fullImage: toyotaallcars,
        smallImage: fortuner,
    },
    {
        name: "Toyota Glanza",
        tagline: "Smart, Stylish, and Efficient.",
        description:
            "The Toyota Glanza is a feature-packed hatchback with a sporty design and excellent fuel efficiency. It's ideal for city drives with a spacious cabin and advanced tech.",
        fullImage: toyotaallcars,
        smallImage: glanza,
    },
    {
        name: "Toyota Hilux",
        tagline: "The Toughest Pickup Ever.",
        description:
            "The Toyota Hilux is built for extreme conditions, offering unmatched durability, a robust diesel engine, and exceptional off-road performance.",
        fullImage: toyotaallcars,
        smallImage: hilux,
    },
    {
        name: "Toyota Innova Crysta",
        tagline: "A Legacy of Comfort and Reliability.",
        description:
        "The Toyota Innova Crysta is India's favorite MPV, offering premium interiors, powerful engine options, and best-in-class reliability for families and business owners alike.",
        fullImage: toyotaallcars,
        smallImage: innovacrysta,
    },
    {
        name: "Toyota Innova Hycross",
        tagline: "The Future of Mobility.",
        description:
            "The Toyota Innova Hycross is a next-generation hybrid MPV that combines fuel efficiency with high performance, spacious interiors, and cutting-edge technology.",
        fullImage: toyotaallcars,
        smallImage: innovahycross,
    },
    {
        name: "Toyota Innova Rumion",
        tagline: "The Ultimate Family Car.",
        description:
            "The Toyota Innova Rumion offers best-in-class comfort, a powerful yet fuel-efficient engine, and premium features, making it the perfect family MPV.",
        fullImage: toyotaallcars,
        smallImage: rumion,
    },
    {
      name: "Toyota Land Cruiser 300",
      tagline: "Unmatched Power, Ultimate Prestige.",
      description:
          "The Toyota Land Cruiser 300 is a legendary SUV known for its rugged capability, luxurious comfort, and advanced technology. With a powerful twin-turbo V6 engine, superior off-road performance, and a refined interior, it sets the benchmark for full-size SUVs.",
      fullImage: toyotaallcars,
      smallImage: landcruiser,
    },
    {
        name: "Toyota Vellfire",
        tagline: "Luxury, Redefined.",
        description:
            "The Toyota Vellfire is a high-end luxury MPV that provides first-class comfort, a powerful hybrid engine, and ultra-premium interiors for an unmatched driving experience.",
        fullImage: toyotaallcars,
        smallImage: vellfire,
    },
    {
      name: "Toyota Yaris",
      tagline: "Drive in Style, Arrive with Confidence.",
      description:
          "The Toyota Yaris is a premium sedan that combines elegance, efficiency, and advanced safety features. Designed for urban and highway driving, it offers a refined driving experience with its smooth performance, spacious interiors, and cutting-edge technology. With Toyota’s legendary reliability and fuel efficiency, the Yaris ensures every journey is comfortable, safe, and stylish.",
      fullImage: toyotaallcars,
      smallImage: yaris,
    },
    {
        name: "Urban Cruiser Hyryder",
        tagline: "Go Farther with Hybrid Power.",
        description:
            "The Toyota Urban Cruiser Hyryder is a stylish hybrid SUV with excellent fuel economy, advanced safety features, and a futuristic design.",
        fullImage: toyotaallcars,
        smallImage: urbanch,
    },
    {
        name: "Urban Cruiser Taisor",
        tagline: "Bold, Smart, and Dynamic.",
        description:
            "The Toyota Urban Cruiser Taisor is a compact SUV with a bold design, modern technology, and an efficient powertrain—perfect for urban explorers.",
        fullImage: toyotaallcars,
        smallImage: urbanct,
    },
];
 
function ConsultationPage() {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
 
  return (
    <div className="w-full">
      {/* Full-Screen Background Image */}
      <div
        className="w-full h-screen bg-cover bg-no-repeat bg-top relative"
        style={{ backgroundImage: `url(${selectedCar.fullImage})` }}
      />
 
      {/* Below Image: Form on Left, Car Image + Details on Right */}
      <div className="flex flex-col md:flex-row justify-center items-start px-12 py-8">
        {/* Left Side: Consultation Form */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md w-full md:w-5/12 transform -translate-x-6">
          <h2 className="text-red-600 text-xl font-bold text-center mb-4">Enquire Now!</h2>
 
          {/* Dropdown to select a Toyota Car */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Select Your Toyota Car:</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedCar.name}
              onChange={(e) =>
                setSelectedCar(cars.find((car) => car.name === e.target.value))
              }
            >
              {cars.map((car, index) => (
                <option key={index} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>
 
          <ConsultationForm selectedCar={selectedCar} />
        </div>
 
        {/* Right Side: Car Image + Details */}
        <div className="md:w-5/12 flex flex-col items-center text-center px-6 py-4 transform translate-x-6">
          <img
            src={selectedCar.smallImage}
            alt={selectedCar.name}
            className="w-96 h-auto rounded-lg shadow-md"
          />
          <h3 className="text-gray-800 text-2xl font-bold mt-4">{selectedCar.name}</h3>
          <p className="italic text-gray-600">{selectedCar.tagline}</p>
          <p className="text-gray-700 mt-2">{selectedCar.description}</p>
        </div>
      </div>
    </div>
  );
}
 
export default ConsultationPage;