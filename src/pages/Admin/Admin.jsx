import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {

  const [jobs, setJobs] = useState([]);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    package: "",
    skills: "",
    applyLink: "",
    lastDate: "",
    logo: "",
  });

  const loadJobs = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addJob = async () => {
    await axios.post(
      "http://localhost:5000/api/admin/job",
      formData
    );

    alert("Job Added Successfully");

    setFormData({
      company: "",
      role: "",
      location: "",
      package: "",
      skills: "",
      applyLink: "",
      lastDate: "",
      logo: "",
    });

    loadJobs();
  };

  const deleteJob = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/admin/job/${id}`
    );

    loadJobs();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Admin Panel
      </h1>

      <div className="grid grid-cols-2 gap-4">

        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
            className="bg-slate-800 p-4 rounded-xl"
          />
        ))}

      </div>

      <button
        onClick={addJob}
        className="mt-6 bg-cyan-500 px-8 py-4 rounded-xl"
      >
        Add Job
      </button>

      <div className="mt-12 space-y-5">

        {jobs.map((job) => (

          <div
            key={job._id}
            className="bg-slate-900 p-6 rounded-xl flex justify-between items-center"
          >
            <div>
              <h2 className="text-2xl font-bold">
                {job.company}
              </h2>

              <p>{job.role}</p>
              <p>{job.location}</p>
            </div>

            <button
              onClick={() => deleteJob(job._id)}
              className="bg-red-500 px-6 py-2 rounded-lg"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Admin;