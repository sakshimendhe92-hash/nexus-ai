import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "https://nexus-ai-backend-qde1.onrender.com/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Join Nexus AI Today
        </p>

        {/* Name */}

        <div className="relative mb-5">
          <FaUser className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />
        </div>

        {/* Email */}

        <div className="relative mb-5">
          <FaEnvelope className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />
        </div>

        {/* Password */}

        <div className="relative mb-5">
          <FaLock className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />
        </div>

        {/* Confirm Password */}

        <div className="relative mb-8">
          <FaLock className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />
        </div>

        <button
          onClick={handleSignup}
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold text-white transition"
        >
          Create Account
        </button>

        <p className="text-center text-gray-300 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;