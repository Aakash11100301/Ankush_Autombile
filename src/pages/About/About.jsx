import React from "react";
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8 flex flex-col items-center">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6">About Us</h1>
      
      {/* Description Section */}
      <p className="max-w-5xl text-lg text-gray-700 text-center mb-8 leading-relaxed">
        At <span className="font-semibold text-red-600">SP Automobiles</span>, we are committed to keeping your vehicle in top shape with **instant, reliable, and professional car repair services**. 
        Our expert mechanics are just a call away, ensuring **on-the-spot assistance within 10-15 minutes** to get you back on the road quickly and safely.
      </p>
      
      <p className="max-w-5xl text-lg text-gray-700 text-center mb-8 leading-relaxed">
        As **India’s leading multi-brand car service provider**, we offer a comprehensive range of **world-class vehicle maintenance and repair services** for all makes and models. 
        Driven by **technology and customer satisfaction**, we prioritize **quality, integrity, and affordability** in everything we do.
      </p>
      
      <p className="max-w-5xl text-lg text-gray-700 text-center mb-8 leading-relaxed italic font-semibold text-gray-900">
        “To provide car care services that keep vehicles fit and customers happy.”
      </p>
      
      <p className="max-w-5xl text-lg text-gray-700 text-center mb-12 leading-relaxed">
        With **state-of-the-art service stations** and a team of **highly trained professionals**, we deliver **top-notch repairs, routine maintenance, and cost-effective service packages**—helping you save while ensuring a smooth driving experience.
      </p>
      
      {/* Contact Details Section */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl w-full mb-16">
        {/* Address */}
        <div className="p-8 bg-white shadow-xl rounded-lg flex flex-col items-center text-center border-t-4 border-red-500">
          <MapPinIcon className="w-14 h-14 text-red-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600">
            NM College Road, near Kidzee School,  
            Arvind Nagar, Mansa, Punjab 151505
          </p>
        </div>

        {/* Working Hours */}
        <div className="p-8 bg-white shadow-xl rounded-lg flex flex-col items-center text-center border-t-4 border-blue-500">
          <ClockIcon className="w-14 h-14 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
          <p className="text-gray-600">Mon-Sat: 9 AM - 7 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>

        {/* Contact Number */}
        <div className="p-8 bg-white shadow-xl rounded-lg flex flex-col items-center text-center border-t-4 border-green-500">
          <PhoneIcon className="w-14 h-14 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Contact Number</h3>
          <p className="text-gray-600">+91 91159 91167</p>
        </div>

        {/* Email ID */}
        <div className="p-8 bg-white shadow-xl rounded-lg flex flex-col items-center text-center border-t-4 border-yellow-500">
          <EnvelopeIcon className="w-14 h-14 text-yellow-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Email ID</h3>
          <p className="text-gray-600">sa@spautomobiles.co.in</p>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="max-w-7xl w-full bg-white shadow-xl rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on Google Maps</h2>
        <p className="text-gray-700 mb-6">
          Navigate easily to our location using Google Maps below.
        </p>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1762.063390229406!2d75.3985383!3d29.9993775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d8f89745398e1%3A0x3180d0ddf7c0c0b5!2sSP%20Automobiles!5e0!3m2!1sen!2sin!4v1700000000000&marker=color:red%7Clabel:S%7C29.9993775,75.3985383"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;