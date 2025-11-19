import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt } from "react-icons/fa";
import projectsData from "../data/projects.json";
import CloudinaryUpload from "../components/CloudinaryUpload";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    image: "",
    link: "",
  });
  const navigate = useNavigate();

  /* Auth */
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  /* Load */
  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    } else {
      setProjects(projectsData);
      localStorage.setItem("projects", JSON.stringify(projectsData));
    }
  }, []);

  /* Save */
  const saveProjects = (updatedProjects) => {
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  /* Logout */
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/login");
  };

  /* Edit */
  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      tech: project.tech.join(", "),
      image: project.image,
      link: project.link,
    });

    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Delete */
  const handleDelete = (id) => {
    if (confirm("Delete this project?")) {
      const updated = projects.filter((p) => p.id !== id);
      saveProjects(updated);
    }
  };

  /* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    const techArray = formData.tech.split(",").map((t) => t.trim());

    if (editingProject) {
      const updated = projects.map((p) =>
        p.id === editingProject.id
          ? { ...editingProject, ...formData, tech: techArray }
          : p
      );
      saveProjects(updated);
    } else {
      const newProject = {
        id: Date.now(),
        ...formData,
        tech: techArray,
      };
      saveProjects([...projects, newProject]);
    }

    // Reset form
    setEditingProject(null);
    setFormData({
      title: "",
      description: "",
      tech: "",
      image: "",
      link: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      {/* Header */}
      <div className="border-b-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-4 transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 font-semibold text-slate-700 dark:text-slate-200 transition-all hover:border-red-500 dark:hover:border-red-400 hover:text-red-600 dark:hover:text-red-400"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl gap-6 p-6 lg:grid-cols-[400px_1fr]">
        {/* Form */}
        <div className="h-fit sticky top-6">
          <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-lg transition-colors">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-4 py-2 text-slate-900 dark:text-white transition-colors focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-4 py-2 text-slate-900 dark:text-white transition-colors focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none"
                  rows="3"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.tech}
                  onChange={(e) =>
                    setFormData({ ...formData, tech: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-4 py-2 text-slate-900 dark:text-white transition-colors focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none"
                  placeholder="React, Node.js, MongoDB"
                  required
                />
              </div>

              {/* Cloudinary */}
              <CloudinaryUpload
                currentImage={formData.image}
                onUpload={(url) => setFormData({ ...formData, image: url })}
              />

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Project Link
                </label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-4 py-2 text-slate-900 dark:text-white transition-colors focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none"
                  placeholder="https://project-demo.com or https://github.com/..."
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 dark:bg-blue-500 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                  {editingProject ? "Update" : "Add"} Project
                </button>
                {editingProject && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProject(null);
                      setFormData({
                        title: "",
                        description: "",
                        tech: "",
                        image: "",
                        link: "",
                      });
                    }}
                    className="w-full rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-6 py-3 font-semibold text-slate-700 dark:text-slate-200 transition-all hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            All Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded bg-blue-100 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 dark:hover:bg-blue-600"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 dark:bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-red-700 dark:hover:bg-red-600"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
