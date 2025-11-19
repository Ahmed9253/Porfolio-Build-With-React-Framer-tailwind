import React from "react";
import { motion } from "framer-motion";
import codingImage from "/coding.png";
import dataImage from "/data.png";
import hardwareImage from "/hardware.png";
import teachingImage from "/online.png";

const servicesItems = [
  {
    nameService: "Web & App Development",
    icon: codingImage,
  },
  {
    nameService: "Data Science & AI",
    icon: dataImage,
  },
  {
    nameService: "Hardware",
    icon: hardwareImage,
  },
  {
    nameService: "Teaching",
    icon: teachingImage,
  },
];

/* Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center w-full min-h-screen bg-white dark:bg-slate-900 px-6 py-20 lg:py-32 transition-colors"
    >
      {/* Container */}
      <div className="w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-3xl mx-auto text-center text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-16"
            variants={itemVariants}
          >
            Hey, I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Muhammad Ahmed
            </span>{" "}
            — a Software Developer, Data Scientist, and Hardware Technician with
            a passion for teaching. Let's build or learn together.
          </motion.p>

          {/* Services */}
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-10"
            variants={itemVariants}
          >
            What I Offer
          </motion.h3>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {servicesItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-8 transition-all hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <img
                  src={item.icon}
                  alt={item.nameService}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
                <p className="font-semibold text-base sm:text-lg text-center text-slate-800 dark:text-slate-200">
                  {item.nameService}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex justify-center mt-16"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Let's Have a Talk →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
