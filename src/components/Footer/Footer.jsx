import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-3xl font-bold text-cyan-400">
            Nexus AI
          </h2>

          <p className="text-gray-400 mt-2">
            AI Powered Student Productivity Platform
          </p>
        </div>

        <div className="flex gap-6 text-3xl mt-6 md:mt-0">
          <FaGithub className="hover:text-cyan-400 cursor-pointer transition" />
          <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
          <FaInstagram className="hover:text-cyan-400 cursor-pointer transition" />
        </div>

      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500">
          © 2026 Nexus AI. All Rights Reserved.
        </p>

        <p className="text-cyan-400 font-semibold mt-2">
          Developed by Sakshi Mendhe ❤️
        </p>
      </div>

    </footer>
  );
}

export default Footer;