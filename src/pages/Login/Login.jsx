import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function LoginPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(isLogin ? "Login Successful" : "Signup Successful");
  };

  return (
    <div className={`flex items-center justify-center min-h-screen transition-all duration-300 ${darkMode ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white" : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-black"}`}>
      <div className="w-96 p-8 rounded-2xl shadow-2xl bg-opacity-90 bg-gray-800 border border-gray-600 backdrop-blur-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold tracking-wide text-gray-200">{isLogin ? "Welcome Back" : "Sign Up"}</h2>
          <button onClick={() => setDarkMode(!darkMode)} className="transition-transform transform hover:scale-110">
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Phone or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-500 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-500 focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between text-sm text-gray-300">
            <a href="/forgot-password" className="hover:text-blue-400 transition-colors">Forgot Password?</a>
            <a href="/register" className="hover:text-blue-400 transition-colors" onClick={() => setIsLogin((prev) => !prev)}>
              {isLogin ? "Sign Up" : "Login"}
            </a>
          </div>
          <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-transform transform hover:scale-105 p-3 text-lg font-semibold rounded-lg shadow-md">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}