import {
  FaHome,
  FaRobot,
  FaFileAlt,
  FaBriefcase,
  FaCog,
  FaSignOutAlt,
  FaUserShield,
  FaHistory,
  FaComments,
} from "react-icons/fa";

import { PiStudentBold } from "react-icons/pi";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  const menuClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition duration-300 ${
      location.pathname === path
        ? "bg-cyan-500 text-white"
        : "hover:bg-slate-800 hover:text-cyan-400"
    }`;

  return (
    <div className="w-64 bg-slate-900 h-screen fixed left-0 top-0 flex flex-col justify-between shadow-xl">

      {/* Top */}

      <div>

        <div className="p-6 border-b border-slate-700">

          <h1 className="text-3xl font-bold text-cyan-400">
            Nexus AI
          </h1>

        </div>

        {/* User */}

        <div className="flex flex-col items-center mt-8">

          <img
            src={
              user?.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-cyan-500 object-cover"
          />

          <h2 className="mt-4 text-lg font-bold text-white">
            {user?.name}
          </h2>

          <p className="text-gray-400 text-sm">
            {user?.email}
          </p>

        </div>

        {/* Menu */}

        <div className="mt-10 px-4 space-y-2 text-white">

          <Link
            to="/dashboard"
            className={menuClass("/dashboard")}
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/chat"
            className={menuClass("/chat")}
          >
            <FaComments />
            AI Chat
          </Link>

          <Link
            to="/resume"
            className={menuClass("/resume")}
          >
            <FaFileAlt />
            Resume Builder
          </Link>

          <Link
            to="/resume-history"
            className={menuClass("/resume-history")}
          >
            <FaHistory />
            Resume History
          </Link>

          <Link
            to="/interview"
            className={menuClass("/interview")}
          >
            <PiStudentBold />
            AI Interview
          </Link>

          <Link
            to="/interview-history"
            className={menuClass("/interview-history")}
          >
            <FaHistory />
            Interview History
          </Link>

          <Link
            to="/placements"
            className={menuClass("/placements")}
          >
            <FaBriefcase />
            Placements
          </Link>

          {user?.role === "admin" && (
            <Link
              to="/admin"
              className={menuClass("/admin")}
            >
              <FaUserShield />
              Admin Panel
            </Link>
          )}

          <Link
            to="/settings"
            className={menuClass("/settings")}
          >
            <FaCog />
            Settings
          </Link>

          <Link
  to="/saved-jobs"
  className={menuClass("/saved-jobs")}
>
  💾 Saved Jobs
</Link>

<Link
  to="/analytics"
  className={menuClass("/analytics")}
>
  📊 Analytics
</Link>

        </div>

      </div>

      {/* Logout */}

      <div className="p-6">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;