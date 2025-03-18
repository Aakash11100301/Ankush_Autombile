import React, { useState } from 'react';

function ConsultationForm({ selectedCar }) {
  if (!selectedCar) {
    return <p className="text-red-500">Error: Car details not found.</p>;
  }

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // Name Validation: No numbers allowed
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Name should not contain numbers.";
    }

    // Phone Number Validation: Only digits, exactly 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // Email Validation: Must contain '@'
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email. Must contain '@'.";
    }

    // Message Validation: Cannot be empty
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Here, you can add the logic to send the data to a server
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <p className="text-lg font-bold text-gray-700">{`Enquiring about: ${selectedCar.name}`}</p>

      {/* Name Input */}
      <label className="block">
        Your Name
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </label>

      {/* Phone Number Input */}
      <label className="block">
        Phone Number
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </label>

      {/* Email Input */}
      <label className="block">
        Your Email
        <input
          type="email"
          className="w-full p-2 border rounded"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </label>

      {/* Address Input */}
      <label className="block">
        Your Address
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter your address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </label>

      {/* Checkbox */}
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
        />
        I hereby agree to receive notifications.
      </label>

      {/* Message Input */}
      <label className="block">
        Your Message
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Enter your message..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </label>

      <button type="submit" className="w-full bg-red-600 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default ConsultationForm;
