import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [step, setStep] = useState("email"); // "email", "otp", "reset"
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    setStep("otp");
  };

  const handleVerifyOTP = async () => {
    if (!/^[0-9]{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    console.log("Verifying OTP", otp);
    setError("");
    setStep("reset");
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Verifying password reset", newPassword);
    alert("Password Reset Successfully! Redirecting to login page...");
    setTimeout(() => navigate("/login"), 2000); // Redirect to login page after 2 seconds
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        {step === "email" && (
          <div>
            <h2 className="text-xl font-bold text-center">Forgot Password</h2>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-4 w-full p-2 border rounded"
            />
            <button onClick={handleSendOTP} className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Send OTP</button>
          </div>
        )}

        {step === "otp" && (
          <div>
            <h2 className="text-xl font-bold text-center">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-4 w-full p-2 border rounded"
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button onClick={handleVerifyOTP} className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Verify OTP</button>
          </div>
        )}

        {step === "reset" && (
          <div>
            <h2 className="text-xl font-bold text-center">Reset Password</h2>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-4 w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-4 w-full p-2 border rounded"
            />
            {newPassword !== confirmPassword && confirmPassword && (
              <p className="text-red-500 text-center">Passwords do not match</p>
            )}
            <button
              onClick={handleResetPassword}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

