import { useEffect, useState } from "react";
import axios from "axios";

function SavedJobs() {
  const token = localStorage.getItem("token");

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Load Saved Jobs
  const loadJobs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/jobs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setJobs(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // Delete Job
  const deleteJob = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/jobs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.company?.toLowerCase().includes(search.toLowerCase()) ||
    job.role?.toLowerCase().includes(search.toLowerCase()) ||
    job.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Saved Jobs
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl bg-slate-800 mb-8 outline-none"
      />

      {/* Loading */}
      {loading ? (
        <div className="text-center text-2xl mt-20">
          Loading...
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">
            No Saved Jobs
          </h2>
          <p className="text-gray-400 mt-4">
            Save jobs from placements section
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">

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

              <div className="flex gap-4 mt-6">

                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-bold"
                >
                  Apply
                </a>

                <button
                  onClick={() => deleteJob(job._id)}
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-bold"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default SavedJobs;