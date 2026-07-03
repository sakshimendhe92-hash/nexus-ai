import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
  try {
    const res = await axios.post(
      "https://nexus-ai-backend-qde1.onrender.com/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Login Successful");

    navigate("/dashboard");

  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message || "Login Failed"
    );
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Login to your Nexus AI account
        </p>

        <div className="relative mb-6">
          <FaEnvelope className="absolute left-4 top-4 text-cyan-400" />

       <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter Email"
  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
/>
        </div>

        <div className="relative mb-8">
          <FaLock className="absolute left-4 top-4 text-cyan-400" />

         <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter Password"
  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
/>
        </div>

        <button
  onClick={loginUser}
  className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-bold text-white transition"
>
  Login
</button>

        <p className="text-center text-gray-300 mt-8">
          Don't have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;