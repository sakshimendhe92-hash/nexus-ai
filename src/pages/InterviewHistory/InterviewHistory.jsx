import { useEffect, useState } from "react";
import axios from "axios";

function InterviewHistory() {
  const token = localStorage.getItem("token");

  const [interviews, setInterviews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const loadInterviews = async () => {
    try {
      const res = await axios.get(
        "http://nexus-ai-backend-qde1.onrender.com/api/interview",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setInterviews(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInterviews();
  }, []);

  const deleteInterview = async (id) => {
    if (!window.confirm("Delete this Interview?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/interview/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setInterviews(
        interviews.filter((item) => item._id !== id)
      );

      alert("Interview Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const filteredInterviews = interviews.filter(
    (item) =>
      item.language
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.interviewType
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );
    return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Interview History
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by language or type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl bg-slate-800 mb-8 outline-none"
      />

      {/* Loading */}
      {loading ? (
        <div className="text-center text-2xl mt-20">
          Loading...
        </div>
      ) : filteredInterviews.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">
            No Interview Found
          </h2>
          <p className="text-gray-400 mt-4">
            Generate your first AI Interview.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">

          {filteredInterviews.map((item) => (
            <div
              key={item._id}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-cyan-400">
                  {item.interviewType} Interview
                </h2>

                <button
                  onClick={() => deleteInterview(item._id)}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>

              <p className="mt-3 text-gray-300">
                <strong>Language:</strong> {item.language}
              </p>

              <p className="text-gray-300">
                <strong>Difficulty:</strong> {item.difficulty}
              </p>

              {/* Questions Preview */}
              <div className="mt-4 bg-slate-800 p-4 rounded-xl max-h-40 overflow-auto text-sm text-gray-300">
                {item.questions?.slice(0, 300)}...
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-5">

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(item.questions)
                  }
                  className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-bold text-sm"
                >
                  Copy
                </button>

                <button
                  onClick={() =>
                    alert(item.questions)
                  }
                  className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-bold text-sm"
                >
                  View Full
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default InterviewHistory;