import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  /* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (password === adminPassword) {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-900 px-6 transition-colors">
      <motion.div
        className="w-full max-w-md rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
            <FaLock className="text-2xl text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Admin Login
        </h1>
        <p className="mb-8 text-center text-slate-600 dark:text-slate-300">
          Enter password to access dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-4 py-3 text-slate-900 dark:text-white transition-colors focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none"
              placeholder="Enter admin password"
              required
            />
            {error && (
              <motion.p
                className="mt-2 text-sm text-red-600 dark:text-red-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 dark:bg-blue-500 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Back */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}

