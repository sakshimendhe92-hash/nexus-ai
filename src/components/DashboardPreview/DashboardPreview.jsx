import { motion } from "framer-motion";

function DashboardPreview() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Smart Student Dashboard
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Track your placement progress, AI chats, resume score,
            interview preparation and learning journey from one dashboard.
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition">
            Explore Dashboard
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 border border-cyan-500 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-cyan-400">92%</h3>
              <p className="text-gray-400 mt-2">Resume Score</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-cyan-400">150+</h3>
              <p className="text-gray-400 mt-2">AI Chats</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-cyan-400">35</h3>
              <p className="text-gray-400 mt-2">Courses</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-cyan-400">18</h3>
              <p className="text-gray-400 mt-2">Interviews</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default DashboardPreview;