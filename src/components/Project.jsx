import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../data/projects.json";

export default function Project() {
  const [projects, setProjects] = useState([]);

  /* Load */
  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    } else {
      setProjects(projectsData);
    }
  }, []);

  /* Ensure */
  const ensureHttps = (url) => {
    if (!url) return "#";
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `https://${url}`;
  };
  return (
    <div
      id="project"
      className="min-h-screen bg-white dark:bg-slate-900 transition-colors px-6 py-20 lg:py-32"
    >
      {/* Heading */}
      <motion.h2
        className="mb-16 text-center text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm transition-all hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-56 transition-transform hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={ensureHttps(project.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      ensureHttps(project.link),
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 dark:bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg"
                >
                  <FaExternalLinkAlt /> View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="#contact"
          className="rounded-lg bg-blue-600 dark:bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-xl"
        >
          Get In Touch →
        </a>
      </motion.div>
    </div>
  );
}
