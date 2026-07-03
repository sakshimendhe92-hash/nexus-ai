import { useEffect, useState } from "react";
import axios from "axios";

function Placements() {
  const token = localStorage.getItem("token");

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const loadJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Placement Portal
      </h1>

      <input
        type="text"
        placeholder="Search company, role or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl bg-slate-800 mb-8 outline-none"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-cyan-400">
              {job.company}
            </h2>

            <p className="mt-3">
              <strong>Role:</strong> {job.role}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Package:</strong> {job.package}
            </p>

            <p className="mt-3">
              <strong>Skills:</strong> {job.skills}
            </p>

            <p className="mt-3">
              <strong>Last Date:</strong> {job.lastDate}
            </p>

            <a
              href={job.applyLink}
              target="_blank"
              rel="noreferrer"
              className="block mt-6 text-center bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-bold"
            >
              Apply Now
            </a>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Placements;