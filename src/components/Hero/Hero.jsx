import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-950 to-blue-950 text-white">

      <h1 className="text-7xl font-bold text-center">
        Welcome to <span className="text-cyan-400">Nexus AI</span>
      </h1>

      <p className="mt-6 text-xl text-center">
        AI Powered Student Productivity & Placement Platform
      </p>

      <div className="mt-8 flex gap-5">

        <Link
          to="/login"
          className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600"
        >
          Get Started
        </Link>

        <Link
          to="/dashboard"
          className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black"
        >
          Live Demo
        </Link>

      </div>

    </section>
  );
}

export default Hero;