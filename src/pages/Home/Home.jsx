import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
// import brandLogos from "../assets/brandLogos"; // Assume this imports an array of car brand logo URLs
import {car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15,car16,car17,car18,car19,car20,car21,car22,car23,car24,car25,car26,car27,car28,car29,car30,car31,car32,car33,car34,car35} from "../../assets/index.assets.js"
 
const Home = () => {
  const marqueeRef = useRef(null);
  const brandLogos = [car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15,car16,car17,car18,car19,car20,car21,car22,car23,car24,car25,car26,car27,car28,car29,car30,car31,car32,car33,car34,car35]
  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft = 0;
      const scrollSpeed = 50;
      const interval = setInterval(() => {
        marqueeRef.current.scrollLeft += 1;
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        }
      }, scrollSpeed);
      return () => clearInterval(interval);
    }
  }, []);
 
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: car1 }}>
        <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl font-bold text-white bg-blue-500 p-4">World Class Car Services</h1>
          <p className="mt-4 text-lg">Your trusted partner in car maintenance</p>
        </div>
      </section>
 
      {/* Latest Offers */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Latest Offers</h2>
        <p className="mt-2 text-gray-600">Check out the best deals on car services</p>
      </section>
 
      {/* About Us */}
      <section className="bg-gray-200 py-12 text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We provide the best car service with experienced professionals and top-quality parts.</p>
      </section>
 
      {/* Services */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Oil Change</h3>
            <p className="text-gray-600 mt-2">Ensure smooth engine performance with timely oil changes.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Brake Service</h3>
            <p className="text-gray-600 mt-2">Keep your brakes in top condition for safety.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Engine Diagnostics</h3>
            <p className="text-gray-600 mt-2">Accurate and fast diagnostics for optimal performance.</p>
          </div>
        </div>
      </section>
 
      {/* Choose Your Service */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Choose Your Service</h2>
        <p className="mt-4">Pick from our wide range of services tailored for your needs.</p>
        <Link to="/services" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Explore Services
        </Link>
      </section>
 
      {/* Customer Ratings */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold">Customer Ratings</h2>
        <div className="flex justify-center mt-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 text-2xl" />
          ))}
        </div>
        <p className="mt-2 text-gray-600">4.9/5 based on customer reviews</p>
      </section>
 
      {/* Multi-Brand Car Service Network */}
      <section className="bg-gray-800 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Multi-Brand Car Service Network</h2>
        <div className="overflow-hidden mt-6" ref={marqueeRef} style={{ whiteSpace: "nowrap" }}>
          <div className="flex space-x-8 animate-marquee">
            {brandLogos.concat(brandLogos).map((logo, index) => (
              <img key={index} src={logo} alt="Brand Logo" className="h-12 inline-block" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
 
export default Home;
 
 