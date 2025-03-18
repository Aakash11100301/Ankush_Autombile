import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { toyota, car32, camry, fortuner, glanza, hilux, innovahycross, innovacrysta, landcruiser, urbanch, urbanct, vellfire } from "../../assets/index.assets.js";
import { Listbox } from "@headlessui/react";

const carModels = [
  { name: "Toyota Glanza", image: glanza, description: "A stylish and fuel-efficient hatchback designed for comfort and performance." },
  { name: "Toyota Fortuner", image: fortuner, description: "A rugged and powerful SUV built for adventure with unmatched off-road capability." },
  { name: "Toyota Camry", image: camry, description: "A premium sedan that combines luxury with cutting-edge hybrid technology." },
  { name: "Toyota Hilux", image: hilux, description: "A legendary pickup truck known for durability and all-terrain performance." },
  { name: "Toyota Innova Hycross", image: innovahycross, description: "A versatile MPV with hybrid efficiency and a spacious interior." },
  { name: "Toyota Innova Crysta", image: innovacrysta, description: "A perfect blend of power, luxury, and comfort for long journeys." },
  { name: "Toyota Land Cruiser", image: landcruiser, description: "An iconic SUV offering supreme off-road performance and luxury." },
  { name: "Toyota Urban Cruiser Hyryder", image: urbanch, description: "A compact SUV with a hybrid engine for a sustainable drive." },
  { name: "Toyota Urban Cruiser Taisor", image: urbanct, description: "A dynamic and stylish urban SUV designed for the modern lifestyle." },
  { name: "Toyota Vellfire", image: vellfire, description: "A Masterpiece of Luxury and Craftmanship. Indulge yourself within the plushly appointed, commodious captain seats, spellbind yourself with the dual sunroof and command your manner forward with the lounge command centre. Being offered with a powerful combination of a petroleum engine and Hybrid Electric system; offers you a quieter driving experience and an absolute tranquil cabin ambience. Experience the ultimate luxury and sustainability with the Toyota Vellfire." }
];

export default function HomePage() {
  const [selectedModel, setSelectedModel] = useState(carModels[0]);
  const enquiryRef = useRef(null);

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    enquiryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-5 bg-red-600 text-white text-center text-3xl font-bold">
        Toyota Car Models
      </header>
      <div className="container mx-auto p-5 flex flex-col md:flex-row gap-10">
        
        {/* Enquiry Form (Left Side) */}
        <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-xl" ref={enquiryRef}>
          <h2 className="text-2xl font-semibold mb-4">Enquire Now</h2>
          <form>
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg mb-3" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg mb-3" required />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg mb-3" required />
            <input type="text" placeholder="Address" className="w-full p-3 border rounded-lg mb-3" required />
            
            <select className="w-full p-3 border rounded-lg mb-3">
              <option>Dealer 1</option>
              <option>Dealer 2</option>
              <option>Dealer 3</option>
            </select>
            
            <div className="mb-3">
              <input type="checkbox" id="agree" className="mr-2" required />
              <label htmlFor="agree">I hereby agree to receive notifications</label>
            </div>
            
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg mb-3"></textarea>
            <button type="submit" className="w-full bg-red-600 text-white p-3 rounded-lg text-lg font-semibold">Submit</button>
          </form>
        </div>

        {/* Car Selection (Right Side) */}
        <div className="md:w-2/3 flex flex-col">
          <Listbox value={selectedModel} onChange={handleModelSelect}>
            <div className="relative mb-5">
              <Listbox.Button className="w-full p-4 bg-white border rounded-xl shadow-lg text-lg font-medium">
                {selectedModel.name}
              </Listbox.Button>
              <Listbox.Options className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg text-lg">
                {carModels.map((model, index) => (
                  <Listbox.Option key={index} value={model} className="p-3 cursor-pointer hover:bg-gray-200">
                    {model.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>

          <div className="mt-5 flex flex-col items-center">
            <img
              src={selectedModel.image}
              alt={selectedModel.name}
              className="w-full max-w-2xl mx-auto rounded-xl shadow-xl"
            />
            <p className="mt-4 text-lg font-semibold text-center max-w-2xl">{selectedModel.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
