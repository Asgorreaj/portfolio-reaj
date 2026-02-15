import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="fixed top-6 right-6 z-[9999]">
        <ThemeToggle />
      </div>

      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Md. Asgor Hossain Reaj
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Full Stack Developer | AI/ML Researcher
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black transition">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-zinc-400 dark:border-zinc-600 transition">
              Contact Me
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
