import { useEffect, useState } from "react";
import { setSfxEnabled, playBleep } from "../lib/sfx";

export function ThemeToggle() {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [dark, setDark] = useState(prefersDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => {
        playBleep(900, 0.03);
        setDark((d) => !d);
      }}
      className="px-2.5 py-1.5 text-xs rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}

export function SoundToggle() {
  const [on, setOn] = useState(true);
  useEffect(() => setSfxEnabled(on), [on]);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="px-2.5 py-1.5 text-xs rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
    >
      {on ? "Sound: On" : "Sound: Off"}
    </button>
  );
}
