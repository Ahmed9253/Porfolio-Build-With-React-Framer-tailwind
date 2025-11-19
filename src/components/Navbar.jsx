import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", path: "#" },
  { name: "About", path: "#about" },
  { name: "Portfolio", path: "#project" },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors">
      {/* Container */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-slate-900 dark:text-white tracking-tight"
        >
          Muhammad Ahmed
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <FaSun className="text-lg" />
            ) : (
              <FaMoon className="text-lg" />
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <FaSun className="text-lg" />
            ) : (
              <FaMoon className="text-lg" />
            )}
          </button>

          {/* Menu */}
          <button
            type="button"
            className="flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-2 text-slate-700 dark:text-slate-300"
            onClick={toggleNav}
            aria-label="Toggle"
          >
            {open ? (
              <AiOutlineClose className="text-xl" />
            ) : (
              <AiOutlineMenu className="text-xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-900 md:hidden">
          <div className="flex h-full items-center justify-center">
            <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-slate-900 dark:text-white">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={closeNav}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
