import { useEffect, useState } from "react";
import axios from "axios";

function ResumeHistory() {
  const token = localStorage.getItem("token");

  const [resumes, setResumes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const loadResumes = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/resume",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResumes(res.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResumes();
  }, []);

  const deleteResume = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this Resume?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/resume/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResumes(
        resumes.filter((resume) => resume._id !== id)
      );

      alert("Resume Deleted");

    } catch (error) {
      console.log(error);
    }
  };

  const filteredResumes = resumes.filter((resume) =>
    resume.fullName
      .toLowerCase()
      .includes(search.toLowerCase())
  );
    return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Resume History
      </h1>

      <input
        type="text"
        placeholder="Search Resume..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-slate-800 p-4 rounded-xl mb-8 outline-none"
      />

      {loading ? (

        <div className="text-center text-2xl mt-20">
          Loading...
        </div>

      ) : filteredResumes.length === 0 ? (

        <div className="text-center mt-20">

          <h2 className="text-3xl font-bold">
            No Resume Found
          </h2>

          <p className="text-gray-400 mt-4">
            Generate your first AI Resume.
          </p>

        </div>

      ) : (

        <div className="grid lg:grid-cols-2 gap-8">

          {filteredResumes.map((resume) => (

            <div
              key={resume._id}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-700"
            >

              <h2 className="text-2xl font-bold text-cyan-400">
                {resume.fullName}
              </h2>

              <p className="mt-3">
                <strong>Email :</strong> {resume.email}
              </p>

              <p>
                <strong>Phone :</strong> {resume.phone}
              </p>

              <p className="mt-3">
                <strong>Skills :</strong>
              </p>

              <p className="text-gray-300">
                {resume.skills}
              </p>

              <p className="mt-3">
                <strong>Created :</strong>{" "}
                {new Date(
                  resume.createdAt
                ).toLocaleDateString()}
              </p>

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() =>
                    window.open(
                      `http://localhost:5000/api/resume/${resume._id}`,
                      "_blank"
                    )
                  }
                  className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-bold"
                >
                  View
                </button>

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      resume.generatedResume
                    )
                  }
                  className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-bold"
                >
                  Copy
                </button>

                <button
                  onClick={() =>
                    deleteResume(resume._id)
                  }
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

export default ResumeHistory;