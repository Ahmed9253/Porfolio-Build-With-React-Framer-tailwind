const Copywrite = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-900 transition-colors py-6 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
      <p className="tracking-wide">
        &copy; {year} Muhammad Ahmed. All rights reserved.
      </p>
    </div>
  );
};

export default Copywrite;
