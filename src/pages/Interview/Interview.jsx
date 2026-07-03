import { useState } from "react";
import axios from "axios";

function Interview() {
  const token = localStorage.getItem("token");

  const [interviewType, setInterviewType] = useState("Technical");
  const [language, setLanguage] = useState("Java");
  const [difficulty, setDifficulty] = useState("Easy");

  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateInterview = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://nexus-ai-backend-qde1.onrender.com/api/interview/generate",
        {
          interviewType,
          language,
          difficulty,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setQuestions(res.data.questions);

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Interview Generation Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        AI Mock Interview
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Interview Type */}

        <div>
          <label className="block mb-2 font-bold">
            Interview Type
          </label>

          <select
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800"
          >
            <option>Technical</option>
            <option>HR</option>
            <option>Behavioral</option>
            <option>System Design</option>
          </select>
        </div>

        {/* Language */}

        <div>
          <label className="block mb-2 font-bold">
            Language
          </label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800"
          >
            <option>Java</option>
            <option>C</option>
            <option>C++</option>
            <option>Python</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Node.js</option>
          </select>
        </div>

        {/* Difficulty */}

        <div>
          <label className="block mb-2 font-bold">
            Difficulty
          </label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

      </div>

      <button
        onClick={generateInterview}
        disabled={loading}
        className="mt-8 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 px-8 py-4 rounded-xl font-bold"
      >
        {loading ? "Generating..." : "Generate Interview"}
      </button>

      {/* AI Output */}

      {questions && (

        <div className="mt-10 bg-slate-900 border border-slate-700 rounded-2xl p-8">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            AI Interview Questions & Answers
          </h2>

          <pre className="whitespace-pre-wrap text-gray-200 leading-8">
            {questions}
          </pre>

        </div>

      )}

    </div>
  );
}

export default Interview;