import { useState } from "react";

export default function SignUppage() {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });
  const [errors, setErrors] = useState({});

  const validate = (newForm = form) => {
    let newErrors = {};
    if (!newForm.username) {
      newErrors.username = "Username is required";
    } else if (!/^\S+@\S+\.\S+$/.test(newForm.username) && !/^\d{10}$/.test(newForm.username)) {
      newErrors.username = "Enter a valid email or 10-digit mobile number";
    }
    if (!newForm.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (newForm.fullName.length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters long";
    }
    if (!newForm.password) {
      newErrors.password = "Password is required";
    } else if (
      newForm.password.length < 8 ||
      !/[A-Z]/.test(newForm.password) ||
      !/\d/.test(newForm.password) ||
      !/[!@#$%^&*]/.test(newForm.password)
    ) {
      newErrors.password = "Password must be at least 8 characters, include an uppercase letter, a number, and a special character";
    }
    if (!newForm.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (newForm.password !== newForm.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    validate(updatedForm);
  };

  const handleFileChange = (e) => {
    setForm({ ...form, profilePicture: e.target.files[0] });
  };

  const isFormValid = Object.keys(errors).length === 0 && form.username && form.fullName && form.password && form.confirmPassword;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Email or Mobile Number"
            value={form.username}
            onChange={handleChange}
            className={`w-full border p-2 rounded-md ${errors.username ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className={`w-full border p-2 rounded-md ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`w-full border p-2 rounded-md ${errors.password ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className={`w-full border p-2 rounded-md ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

          <input type="file" accept="image/*" onChange={handleFileChange} className="w-full border p-2 rounded-md border-gray-300" />
        </div>
        <button
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-xl disabled:opacity-50"
          disabled={!isFormValid}
        >
          Sign Up
        </button>
        <p className="text-center text-sm mt-2">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
}