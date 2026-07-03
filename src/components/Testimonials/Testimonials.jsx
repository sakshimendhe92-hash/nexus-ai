import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "CSE Student",
      review:
        "Nexus AI helped me improve my resume and crack my first internship.",
    },
    {
      name: "Priya Verma",
      role: "Final Year Student",
      review:
        "The AI Assistant solved my coding doubts instantly. Amazing experience!",
    },
    {
      name: "Amit Patel",
      role: "Software Engineer",
      review:
        "Beautiful dashboard and placement tracker. Highly recommended.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Student Reviews
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300 mb-6">
                "{review.review}"
              </p>

              <h3 className="text-xl font-bold">
                {review.name}
              </h3>

              <p className="text-cyan-400">
                {review.role}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;