import { motion } from "framer-motion";
import { FaFileAlt, FaDownload, FaCheckCircle } from "react-icons/fa";

function ResumeSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaFileAlt className="text-cyan-400 text-7xl mb-6" />

          <h2 className="text-5xl font-bold mb-6">
            AI Resume Builder
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Build professional ATS-friendly resumes with AI suggestions,
            resume scoring, and one-click PDF download.
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition">
            Build Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 border border-cyan-500 shadow-2xl"
        >
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-400 text-xl" />
              <span>ATS Score: 94%</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-400 text-xl" />
              <span>Professional Templates</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-400 text-xl" />
              <span>AI Writing Suggestions</span>
            </div>

            <div className="flex items-center gap-4">
              <FaDownload className="text-cyan-400 text-xl" />
              <span>Download PDF Resume</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ResumeSection;