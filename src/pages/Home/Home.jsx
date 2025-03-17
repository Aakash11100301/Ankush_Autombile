import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { toyota, car32, camry, fortuner, glanza, hilux, innovahycross, innovacrysta, landcruiser, urbanch, urbanct, vellfire } from "../../assets/index.assets.js";
import { Listbox } from "@headlessui/react";

const carModels = [
  { name: "Toyota Glanza", image: glanza },
  { name: "Toyota Fortuner", image: fortuner },
  { name: "Toyota Camry", image: camry },
  { name: "Toyota Hilux", image: hilux },
  { name: "Toyota Innova Hycross", image: innovahycross },
  { name: "Toyota Innova Crysta", image: innovacrysta },
  { name: "Toyota Land Cruiser", image: landcruiser },
  { name: "Toyota Urban Cruiser Hyryder", image: urbanch },
  { name: "Toyota Urban Cruiser Taisor", image: urbanct },
  { name: "Toyota Vellfire", image: vellfire },
];

export default function HomePage() {
  const [selectedModel, setSelectedModel] = useState(carModels[0]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-5 bg-red-600 text-white text-center text-2xl font-bold">
        Toyota Car Models
      </header>
      <div className="container mx-auto p-5">
        <Listbox value={selectedModel} onChange={setSelectedModel}>
          <div className="relative">
            <Listbox.Button className="w-full p-3 bg-white border rounded-lg shadow-md">
              {selectedModel.name}
            </Listbox.Button>
            <Listbox.Options className="absolute mt-2 w-full bg-white border rounded-lg shadow-md">
              {carModels.map((model, index) => (
                <Listbox.Option key={index} value={model} className="p-2 cursor-pointer hover:bg-gray-200">
                  {model.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <div className="mt-5">
          <img
            src={selectedModel.image}
            alt={selectedModel.name}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      {/* Scrolling screenshots */}
      <div className="overflow-x-auto flex space-x-4 p-5">
        {[car32, toyota, selectedModel.image].map((src, index) => (
          <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="w-60 h-auto rounded-lg shadow-md" />
        ))}
      </div>
      
      {/* Enquiry Form */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-3">Enquire Now</h2>
        <form className="bg-white p-5 rounded-lg shadow-md">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-2" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded mb-2"></textarea>
          <button type="submit" className="w-full bg-red-600 text-white p-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}




