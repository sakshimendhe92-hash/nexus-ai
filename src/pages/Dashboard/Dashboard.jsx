import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaFileAlt,
  FaBriefcase,
  FaChartLine,
  FaMicrophone,
  FaHistory,
} from "react-icons/fa";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <div className="bg-slate-950 min-h-screen">

      <Sidebar />

      <div className="ml-64 p-8">

        <Topbar />

        {/* Welcome Card */}

        <div className="bg-slate-900 rounded-3xl p-8 mt-8 flex justify-between items-center shadow-lg">

          <div className="flex items-center gap-6">

            <img
              src={
                user?.profileImage ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-cyan-500 object-cover"
            />

            <div>

              <h2 className="text-4xl font-bold text-cyan-400">
                Welcome, {user?.name}
              </h2>

              <p className="text-gray-300 mt-2">
                {user?.email}
              </p>

              <p className="text-green-400 mt-2">
                Ready to crack your dream placement 🚀
              </p>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold text-white"
          >
            Logout
          </button>

        </div>

        {/* Dashboard Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h2 className="text-5xl font-bold text-cyan-400">92%</h2>
            <p className="text-white mt-3">Resume Score</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h2 className="text-5xl font-bold text-green-400">152</h2>
            <p className="text-white mt-3">AI Chats</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h2 className="text-5xl font-bold text-yellow-400">18</h2>
            <p className="text-white mt-3">Applications</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h2 className="text-5xl font-bold text-pink-400">12</h2>
            <p className="text-white mt-3">Interviews</p>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-12">

          <h2 className="text-3xl text-white font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

            <div
              onClick={() => navigate("/chat")}
              className="bg-slate-900 rounded-2xl p-6 cursor-pointer hover:bg-slate-800 transition"
            >
              <FaRobot className="text-5xl text-cyan-400" />
              <h3 className="text-2xl text-white mt-5">
                AI Chat
              </h3>
              <p className="text-gray-400 mt-2">
                Ask coding & placement doubts instantly.
              </p>
            </div>

            <div
              onClick={() => navigate("/resume")}
              className="bg-slate-900 rounded-2xl p-6 cursor-pointer hover:bg-slate-800 transition"
            >
              <FaFileAlt className="text-5xl text-green-400" />
              <h3 className="text-2xl text-white mt-5">
                Resume Builder
              </h3>
              <p className="text-gray-400 mt-2">
                Generate ATS Friendly Resume.
              </p>
            </div>

            <div
              onClick={() => navigate("/interview")}
              className="bg-slate-900 rounded-2xl p-6 cursor-pointer hover:bg-slate-800 transition"
            >
              <FaMicrophone className="text-5xl text-pink-400" />
              <h3 className="text-2xl text-white mt-5">
                AI Interview
              </h3>
              <p className="text-gray-400 mt-2">
                Practice Interview Questions.
              </p>
            </div>

            <div
              onClick={() => navigate("/placements")}
              className="bg-slate-900 rounded-2xl p-6 cursor-pointer hover:bg-slate-800 transition"
            >
              <FaBriefcase className="text-5xl text-yellow-400" />
              <h3 className="text-2xl text-white mt-5">
                Placements
              </h3>
              <p className="text-gray-400 mt-2">
                Explore Latest Jobs.
              </p>
            </div>

            <div
              className="bg-slate-900 rounded-2xl p-6 cursor-pointer hover:bg-slate-800 transition"
            >
              <FaChartLine className="text-5xl text-cyan-400" />
              <h3 className="text-2xl text-white mt-5">
                Analytics
              </h3>
              <p className="text-gray-400 mt-2">
                Track your performance.
              </p>
            </div>

            <div
              className="bg-slate-900 rounded-2xl p-6 cursor-pointer hover:bg-slate-800 transition"
            >
              <FaHistory className="text-5xl text-orange-400" />
              <h3 className="text-2xl text-white mt-5">
                History
              </h3>
              <p className="text-gray-400 mt-2">
                Resume & Interview History.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;