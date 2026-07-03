import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

function PlacementSection() {
  const jobs = [
    {
      company: "Google",
      role: "Frontend Developer",
      location: "Bangalore",
      salary: "₹18 LPA",
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      location: "Hyderabad",
      salary: "₹22 LPA",
    },
    {
      company: "Amazon",
      role: "Full Stack Developer",
      location: "Pune",
      salary: "₹20 LPA",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Placement Opportunities
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition"
            >
              <FaBriefcase className="text-cyan-400 text-4xl mb-5" />

              <h3 className="text-2xl font-bold mb-4">
                {job.role}
              </h3>

              <div className="space-y-3 text-gray-300">

                <div className="flex items-center gap-3">
                  <FaBuilding />
                  {job.company}
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt />
                  {job.location}
                </div>

                <div className="flex items-center gap-3">
                  <FaMoneyBillWave />
                  {job.salary}
                </div>

              </div>

              <button className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PlacementSection;