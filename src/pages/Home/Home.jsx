import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import { toyota } from "../../assets/index.assets.js";
import { car32 } from "../../assets/index.assets.js";



const Home = () => {
  const marqueeRef = useRef(null);
  const brandLogos = [toyota];

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
      <section className="relative bg-red-600 py-20 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold bg-red-600 p-4">Toyota Authorized Service Center</h1>
          <p className="mt-4 text-lg">Your trusted Toyota maintenance partner</p>
        </div>
      </section>

      {/* About Toyota Service */}
      <section className="bg-gray-200 py-12 text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We specialize in Toyota vehicle servicing with certified professionals and genuine parts.
        </p>
      </section>

      {/* Toyota Services */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold">Our Toyota Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Genuine Parts Replacement</h3>
            <p className="text-gray-600 mt-2">We use only authentic Toyota parts for all repairs.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Toyota Express Maintenance</h3>
            <p className="text-gray-600 mt-2">Fast and efficient service for your Toyota vehicle.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Hybrid Battery Check</h3>
            <p className="text-gray-600 mt-2">Specialized maintenance for Toyota hybrid models.</p>
          </div>
        </div>
      </section>

      {/* Choose Your Toyota Service */}
      <section className="bg-red-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Book Your Toyota Service</h2>
        <p className="mt-4">Schedule your service with Toyota-certified professionals.</p>
        <Link to="/services" className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Schedule Service
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
        <p className="mt-2 text-gray-600">4.9/5 based on Toyota owner reviews</p>
      </section>

      {/* Toyota Logo Marquee */}
      <section className="bg-gray-800 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Toyota Authorized Service</h2>
        <div className="overflow-hidden mt-6" ref={marqueeRef} style={{ whiteSpace: "nowrap" }}>
          <div className="flex space-x-8 animate-marquee">
            {[...Array(10)].map((_, index) => (
              <img key={index} src={car32} alt="Toyota Logo" className="h-12 inline-block" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;