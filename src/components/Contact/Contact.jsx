import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>

        <p className="text-gray-400 mb-12 text-lg">
          Have questions? We'd love to hear from you.
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
          ></textarea>

          <button
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;