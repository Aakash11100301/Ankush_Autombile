import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">About Us</h1>
      <p className="max-w-4xl text-lg text-gray-700 text-center mb-6">
        Welcome to our car service center! We are dedicated to providing top-notch automotive services
        with a team of experienced professionals who ensure quality and reliability. Our mission is to
        keep your vehicle running smoothly with exceptional service and customer care.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="p-6 bg-white shadow-lg rounded-lg border text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To be the most trusted car service provider, offering reliable and affordable solutions for
            all vehicle needs.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg border text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Values</h2>
          <p className="text-gray-700">
            Quality, integrity, and customer satisfaction drive everything we do to keep you safe on the road.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
