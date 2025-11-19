import { motion } from "framer-motion";
import profileHero from "../assets/1.png";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  const [ready, setReady] = useState(false);

  /* Decode */
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = profileHero;

    const markReady = () => !cancelled && setReady(true);

    if (img.decode) {
      img.decode().then(markReady).catch(markReady);
    } else {
      img.onload = markReady;
      img.onerror = markReady;
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 px-6 pt-32 pb-16 lg:px-16 lg:pb-24 transition-colors">
      {/* Pattern */}
      <div className="absolute inset-0 bg-[radial-circle_at_50%_50%,_#dbeafe_1px,_transparent_1px)] dark:bg-[radial-circle_at_50%_50%,_#1e293b_1px,_transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl gap-12 lg:gap-16">
        {/* Text */}
        <div className="order-2 lg:order-1 flex-1 lg:max-w-2xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Muhammad Ahmed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Software Developer, Data Scientist & Educator from Pakistan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 dark:bg-blue-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="#project"
              className="rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-8 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 transition-all hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              View Projects
            </a>
            <a
              href="/CV.pdf"
              download="Muhammad Ahmed CV.pdf"
              className="flex items-center gap-2 rounded-lg bg-slate-700 dark:bg-slate-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-slate-800 dark:hover:bg-slate-700 hover:shadow-xl"
            >
              <FaDownload /> Download CV
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex flex-col items-center gap-6">
          {ready ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl border-4 border-blue-600 overflow-hidden shadow-2xl"
            >
              <img
                src={profileHero}
                alt="Profile"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                draggable={false}
              />
            </motion.div>
          ) : (
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl border-4 border-blue-600 overflow-hidden shadow-2xl animate-pulse bg-slate-200 dark:bg-slate-700" />
          )}

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/Ahmed9253"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 dark:bg-slate-600 text-white transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 dark:bg-slate-600 text-white transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 dark:bg-slate-600 text-white transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 hover:shadow-lg"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 dark:bg-slate-600 text-white transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
