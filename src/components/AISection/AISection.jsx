import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

function AISection() {
  return (
    <section className="bg-gradient-to-r from-slate-950 to-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaRobot className="text-cyan-400 text-7xl mb-6" />

          <h2 className="text-5xl font-bold mb-6">
            AI Career Assistant
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Chat with AI to solve coding doubts, improve your resume,
            prepare for interviews, and get personalized placement guidance.
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition">
            Start AI Chat
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 border border-cyan-500 shadow-2xl"
        >
          <div className="space-y-5">
            <div className="bg-slate-800 p-4 rounded-xl">
              👨‍🎓 How do I prepare for placements?
            </div>

            <div className="bg-cyan-500 text-black p-4 rounded-xl">
              🤖 I'll create a personalized roadmap based on your skills and target companies.
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              👨‍🎓 Improve my resume.
            </div>

            <div className="bg-cyan-500 text-black p-4 rounded-xl">
              🤖 Your resume score is 92%. Add projects and measurable achievements to improve it.
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default AISection;