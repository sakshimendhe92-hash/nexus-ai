import { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

function ResumeBuilder() {
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: "",
  });

  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateResume = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://nexus-ai-backend-qde1.onrender.com/api/resume/generate",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResume(res.data.generatedResume);
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Resume Generation Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // Download PDF
  const downloadPDF = () => {
    if (!resume) {
      alert("Generate Resume First!");
      return;
    }

    const doc = new jsPDF();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(resume, 180);

    doc.text(lines, 10, 10);

    doc.save("Resume.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        AI Resume Builder
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Left Side Form */}

        <div className="space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <textarea
            rows="3"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <textarea
            rows="3"
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <textarea
            rows="3"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <button
            onClick={generateResume}
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 py-4 rounded-xl font-bold transition"
          >
            {loading ? "Generating..." : "Generate Resume"}
          </button>

        </div>

        {/* Right Side Resume */}

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Generated Resume
          </h2>

          <pre className="whitespace-pre-wrap text-gray-200 min-h-[450px]">
            {resume || "Your AI-generated resume will appear here..."}
          </pre>

          <button
            onClick={downloadPDF}
            disabled={!resume}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 py-4 rounded-xl font-bold transition"
          >
            Download PDF
          </button>

        </div>

      </div>

    </div>
  );
}

export default ResumeBuilder;