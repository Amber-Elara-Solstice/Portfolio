import { ThemeToggle, SoundToggle } from "./Toggles";

export default function Taskbar({ onContact }) {
  return (
    <div className="sticky bottom-0 z-40 backdrop-blur bg-white/75 dark:bg-slate-950/60 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
        <div className="text-xs text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} Amber Solstice (she/her)
        </div>
        <div className="flex gap-2">
          <ThemeToggle />
          <SoundToggle />
          <button
            onClick={onContact}
            className="px-2.5 py-1.5 text-xs rounded-md bg-sky-600 text-white hover:bg-sky-700"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
