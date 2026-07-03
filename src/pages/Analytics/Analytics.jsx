import { useEffect, useState } from "react";
import axios from "axios";

function Analytics() {
  const token = localStorage.getItem("token");

  const [data, setData] = useState({
    totalUsers: 0,
    totalResumes: 0,
    totalInterviews: 0,
    totalSavedJobs: 0,
    totalJobs: 0,
  });



  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          "http://localhost:5000/api/admin/analytics",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [token]);

  // LOADING UI
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="animate-spin h-12 w-12 border-4 border-cyan-400 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      {/* Title */}
      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        Analytics Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Users */}
        <div className="bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-cyan-400">
            {data.totalUsers}
          </h2>
          <p className="mt-2 text-gray-300">Total Users</p>
        </div>

        {/* Resumes */}
        <div className="bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-cyan-400">
            {data.totalResumes}
          </h2>
          <p className="mt-2 text-gray-300">AI Resumes</p>
        </div>

        {/* Interviews */}
        <div className="bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-cyan-400">
            {data.totalInterviews}
          </h2>
          <p className="mt-2 text-gray-300">AI Interviews</p>
        </div>

        {/* Saved Jobs */}
        <div className="bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-cyan-400">
            {data.totalSavedJobs}
          </h2>
          <p className="mt-2 text-gray-300">Saved Jobs</p>
        </div>

        {/* Jobs */}
        <div className="bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition">
          <h2 className="text-5xl font-bold text-cyan-400">
            {data.totalJobs}
          </h2>
          <p className="mt-2 text-gray-300">Total Jobs</p>
        </div>

      </div>
    </div>
  );
}

export default Analytics;