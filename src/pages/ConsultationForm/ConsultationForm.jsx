import React from 'react';

function ConsultationForm({ selectedCar }) {
  if (!selectedCar) {
    return <p className="text-red-500">Error: Car details not found.</p>;  // ✅ Fallback if undefined
  }

  return (
    <form className="space-y-4">
      <p className="text-lg font-bold text-gray-700">{`Enquiring about: ${selectedCar.name}`}</p>
      
      <label className="block">
        Your Name
        <input type="text" className="w-full p-2 border rounded" placeholder="Enter your name" />
      </label>

      <label className="block">
        Phone Number
        <input type="text" className="w-full p-2 border rounded" placeholder="Enter your phone number" />
      </label>

      <label className="block">
        Your Email
        <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
      </label>

      <label className="block">
        Your Address
        <input type="text" className="w-full p-2 border rounded" placeholder="Enter your address" />
      </label>

      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        I hereby agree to receive notifications.
      </label>

      <label className="block">
        Your Message
        <textarea className="w-full p-2 border rounded" placeholder="Enter your message..."></textarea>
      </label>

      <button type="submit" className="w-full bg-red-600 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default ConsultationForm;
