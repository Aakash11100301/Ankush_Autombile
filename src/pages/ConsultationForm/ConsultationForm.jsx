import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function ConsultationForm({ selectedCar }) {
  if (!selectedCar) {
    return <p className="text-red-500 text-center">Error: Car details not found.</p>;
  }

  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    address: "",
    message: "",
    agree: false,
    carModel: selectedCar.name,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Name is required.";
      else if (/\d/.test(value)) error = "Name should not contain numbers.";
    }

    if (name === "mobileNo") {
      if (!value.trim()) error = "Phone number is required.";
      else if (!/^\d{10}$/.test(value)) error = "Phone number must be exactly 10 digits.";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format.";
    }

    if (name === "message" && !value.trim()) {
      error = "Message cannot be empty.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (errors[name]) validateField(name, value);
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error);
    const hasEmptyFields = Object.entries(formData).some(
      ([key, value]) => key !== "address" && key !== "agree" && !value.trim()
    );
    setIsFormValid(!hasErrors && !hasEmptyFields);
  }, [formData, errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const response = await fetch("https://ankush-automobile-backend.onrender.com/submitform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      if (!response.ok) {
        setErrors({ form: responseData.message || "Submission failed." });
        return;
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        mobileNo: "",
        email: "",
        address: "",
        message: "",
        agree: false,
        carModel: selectedCar.name,
      });
      setErrors({});
    } catch (error) {
      setErrors({ form: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      {isSubmitted && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h2 className="text-lg font-bold text-gray-800">Query Sent Successfully!</h2>
            <p className="text-gray-600">The service station will reach back to you shortly.</p>
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              onClick={() => setIsSubmitted(false)}
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}

      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-5">
        Enquiring about: <span className="text-red-600">{selectedCar.name}</span>
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-red-300"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Mobile Number</label>
          <input
            type="text"
            name="mobileNo"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-red-300"
            placeholder="Enter your phone number"
            value={formData.mobileNo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mobileNo && <p className="text-red-500 text-sm">{errors.mobileNo}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-red-300"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Your Address (Optional)</label>
          <input
            type="text"
            name="address"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-red-300"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Your Message</label>
          <textarea
            name="message"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-red-300"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            name="agree"
            className="mr-2"
            checked={formData.agree}
            onChange={handleChange}
          />
          I hereby agree to receive notifications.
        </label>

        {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}

        <button
          type="submit"
          className={`w-full p-3 rounded-lg text-white font-bold ${isFormValid ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"}`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ConsultationForm;
