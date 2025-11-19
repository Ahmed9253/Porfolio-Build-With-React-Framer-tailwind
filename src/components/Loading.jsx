import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 bg-white dark:bg-slate-900 transition-colors px-6">
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-5xl font-mono font-bold text-slate-900 dark:text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        &lt;Hello! My Name is{" "}
        <span className="text-blue-600 dark:text-blue-400">Muhammad Ahmed</span> /&gt;
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-center text-xl md:text-3xl font-mono text-slate-600 dark:text-slate-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        &lt;I work at <span className="text-blue-600 dark:text-blue-400">Dev Quantums</span> /&gt;
      </motion.h2>

      {/* Dots */}
      <div className="flex space-x-3 pt-6">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
