import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link to="/" className="text-3xl font-bold text-cyan-400">
          Nexus AI
        </Link>

        <ul className="hidden md:flex gap-8">
          <li>
            <Link to="/" className="hover:text-cyan-400">
              Home
            </Link>
          </li>

          <li>
            <a href="#features" className="hover:text-cyan-400">
              Features
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>

        <Link
          to="/login"
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;