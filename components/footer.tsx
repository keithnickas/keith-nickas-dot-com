export default function Footer() {

  return (
      <footer
        className={`py-8 px-6 border-t dark:border-slate-800 dark:bg-slate-900/50`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div
              className={`text-sm dark:text-slate-400 text-gray-600`}
            >
              © 2025 Keith Nickas.
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`text-xs px-3 py-1 rounded-full dark:bg-green-500/10 dark:text-green-400 dark:border dark:border-green-500/20 bg-green-100 text-green-700 border border-green-200`}
              >
                Lighthouse Score: 98
              </div>
              <div
                className={`text-xs dark:text-slate-400 text-gray-500`}>
                | 
              </div>
              <div
                className={`text-xs px-3 py-1 rounded-full dark:bg-purple-500/10 dark:text-purple-400 dark:border dark:border-purple-500/20 bg-purple-100 text-purple-700 border border-purple-200
                }`}
              >
                Bundle: 42KB gzip
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
