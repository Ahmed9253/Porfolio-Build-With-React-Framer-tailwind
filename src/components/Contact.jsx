import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors px-6 py-20 lg:py-32"
    >
      {/* Heading */}
      <motion.h2
        className="mb-16 text-center text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
        {/* Form */}
        <motion.form
          className="w-full space-y-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">Message</label>
            <textarea
              placeholder="Write your message…"
              rows="5"
              className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 dark:bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-xl"
          >
            Send Message →
          </button>
        </motion.form>

        {/* Socials */}
        <motion.div
          className="flex flex-col justify-center items-center text-center space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/contact.png"
            alt="Contact"
            className="w-[70%] max-w-md mx-auto"
          />

          {/* Links */}
          <div className="flex space-x-6">
            <a
              href="mailto:your@email.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xl transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xl transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xl transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xl transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

