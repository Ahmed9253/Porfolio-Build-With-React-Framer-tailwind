import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaTools } from "react-icons/fa";

/* Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

/* Data */
const journeyData = [
  {
    year: "2016 - 2018",
    title: "Intermediate in Computer Science",
    icon: FaGraduationCap,
    description:
      "Started my journey in technology, learning operating systems, graphic design, and fundamental computer skills that laid the foundation for my career.",
    skills: ["Operating Systems", "Graphic Design", "Computer Fundamentals"],
  },
  {
    year: "2018 - 2020",
    title: "Secondary Education & Technical Skills",
    institution: "Milestone College",
    icon: FaTools,
    description:
      "Expanded my technical expertise with office productivity tools, Adobe Photoshop, video editing, and hardware repair while completing secondary education in Computer Science.",
    skills: [
      "Office Suite",
      "Photoshop",
      "Video Editing",
      "Hardware Repair",
      "Computer Science",
    ],
  },
  {
    year: "2022 - 2025",
    title: "Bachelor of Science in Computer Science",
    icon: FaLaptopCode,
    description:
      "Completed my BS in Computer Science, mastering advanced computing concepts, software development, operating systems, and artificial intelligence technologies.",
    skills: [
      "Software Development",
      "AI & Machine Learning",
      "Operating Systems",
      "Programming",
      "Web Development",
    ],
  },
];

export default function Journey() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900 px-6 py-20 lg:py-32 transition-colors">
      {/* Container */}
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="mb-6 text-center text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mb-20 max-w-2xl text-center text-lg text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A timeline of my educational milestones and technical growth
        </motion.p>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Animated Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 dark:from-blue-500 dark:via-blue-400 dark:to-blue-500"
              variants={lineVariants}
            />
          </div>

          {/* Items */}
          <div className="space-y-16">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                variants={itemVariants}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg transition-all hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Year */}
                    <span className="inline-block rounded-full bg-blue-600 dark:bg-blue-500 px-4 py-1.5 text-sm font-bold text-white mb-4 shadow-md">
                      {item.year}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>

                    {/* Institution */}
                    {item.institution && (
                      <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        📍 {item.institution}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 -ml-5 md:-ml-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-lg md:text-2xl shadow-xl border-4 border-white dark:border-slate-900 z-10">
                  <item.icon />
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>

          {/* End Dot */}
          <motion.div
            className="absolute left-4 md:left-1/2 bottom-0 w-4 h-4 -ml-2 md:-ml-2 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-slate-900 shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
