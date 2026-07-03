import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot size={40} />,
      title: "AI Chat",
      desc: "Ask AI questions instantly.",
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Resume Builder",
      desc: "Create ATS friendly resumes.",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Analytics",
      desc: "Track your learning progress.",
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "Placement",
      desc: "Find jobs and internships.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <h2 className="text-5xl font-bold text-center mb-16">
        Our Features
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

        {features.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 p-8 rounded-2xl"
          >

            <div className="text-cyan-400 mb-5">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <p>{item.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Features;