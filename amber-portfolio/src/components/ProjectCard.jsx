import { playBleep } from "../lib/sfx";
import Badge from "./Badge";
import useReveal from "../hooks/useReveal";

export default function ProjectCard({ p, onOpen }) {
  const ref = useReveal(60);
  return (
    <button
      ref={ref}
      onClick={() => onOpen(p)}
      onMouseEnter={() => playBleep(1100, 0.03)}
      className="group w-full text-left card overflow-hidden transition will-change-transform hover:shadow-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
        {p.cover ? (
          <img src={p.cover} alt={`${p.title} cover`} className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-[1.03]" />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 translate-y-3 group-hover:translate-y-0 transition bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-sm">
          <p className="opacity-90">{p.summary}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold">{p.title}</h3>
          <Badge>{p.category}</Badge>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
