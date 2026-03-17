import { useMemo, useState } from "react";
import Section from "./components/Section";
import PrideRule from "./components/PrideRule";
import Window from "./components/Window";
import ProjectCard from "./components/ProjectCard";
import Taskbar from "./components/Taskbar";
import Credits from "./components/Credits";
import { PROJECTS } from "./data/projects";
import { CREDITS } from "./data/credits";
import { playBleep } from "./lib/sfx";
import useReveal from "./hooks/useReveal";

const CATEGORIES = ["Game Dev"];

export default function App() {
  const [cat, setCat] = useState("All");
  const [openProject, setOpenProject] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const filtered = useMemo(
    () => (cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat)),
    [cat]
  );

  const heroL = useReveal(0);
  const heroR = useReveal(120);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60">
        <Section className="py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            Amber Solstice <span className="text-slate-500 dark:text-slate-400 text-sm">(she/her)</span>
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#projects" className="hover:underline" onMouseEnter={() => playBleep(1200, 0.03)}>Projects</a>
            <a href="#about" className="hover:underline" onMouseEnter={() => playBleep(1200, 0.03)}>About</a>
            <button className="hover:underline" onMouseEnter={() => playBleep(1200, 0.03)} onClick={() => setContactOpen(true)}>
              Contact
            </button>
          </nav>
        </Section>
        <PrideRule />
      </header>

      {/* Hero */}
      <Section id="home" className="pt-12 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div ref={heroL}>
            <h1 className="text-4xl font-semibold">
              Game & web developer — Unity, Godot, React.
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-prose">
              Retro-modern, accessible UIs; reliable gameplay systems; thoughtful delivery.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700"
                onMouseEnter={() => playBleep()}
              >
                View projects
              </a>
              <button
                onClick={() => setContactOpen(true)}
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                onMouseEnter={() => playBleep()}
              >
                Contact me
              </button>
            </div>
          </div>

          <div ref={heroR} className="relative">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-800 shadow-card">
              <img
                src="/images/hero/nebula.jpg"
                alt="Abstract hero background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
            </div>
            <div className="absolute inset-x-6 -bottom-4">
              <div className="rounded-xl bg-white/80 dark:bg-slate-900/70 backdrop-blur border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm shadow-sm">
                Subtle trans accent. Strong UX. Clean engineering.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">Hover for summary, click for details.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                onMouseEnter={() => playBleep(1000, 0.02)}
                className={
                  "px-3 py-1.5 rounded-full border text-sm transition " +
                  (cat === c
                    ? "bg-sky-600 text-white border-sky-700"
                    : "border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={setOpenProject} />
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-16">
        <h2 className="text-2xl font-semibold">About</h2>
        <div className="mt-6 grid md:grid-cols-[1fr_2fr] gap-8 items-start">
          <div className="aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800" />
          <div className="text-slate-700 dark:text-slate-300 space-y-4 max-w-prose">
            <p>
              I build readable gameplay systems and clean web UIs. Comfortable in Unity, Godot, and
              React. I care about accessibility and developer empathy.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm list-disc pl-5">
              <li>Unity, C#, VR</li>
              <li>Godot</li>
              <li>React, TypeScript</li>
              <li>UX testing, CI, docs</li>
            </ul>
            <Credits items={CREDITS} />
          </div>
        </div>
      </Section>

      {/* Taskbar */}
      <Taskbar onContact={() => setContactOpen(true)} />

      {/* Project Window */}
      <Window open={!!openProject} onClose={() => setOpenProject(null)} title={openProject?.title || "Project"}>
        {openProject && (
          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">{openProject.summary}</p>
            <div className="flex flex-wrap gap-2">
              {openProject.tags.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                {openProject.cover ? (
                  <img src={openProject.cover} alt={`${openProject.title} preview`} className="w-full h-full object-cover" />
                ) : <div className="w-full h-full bg-slate-100 dark:bg-slate-800" />}
              </div>
              <div className="aspect-video rounded-lg bg-slate-100 dark:bg-slate-800" />
            </div>
            <div className="flex gap-3">
              {openProject.repo && (
                <a className="px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700" href={openProject.repo} target="_blank" rel="noreferrer">
                  Repository
                </a>
              )}
              {openProject.live && (
                <a className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900" href={openProject.live} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              )}
            </div>
          </div>
        )}
      </Window>

      {/* Contact Window */}
      <Window open={contactOpen} onClose={() => setContactOpen(false)} title="Contact">
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Portfolio contact from ${f.get("name")}`);
            const body = encodeURIComponent(`${f.get("message")}\n\nReply to: ${f.get("email")}`);
            window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
          }}
        >
          <label className="block text-sm">Your name
            <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm">Email
            <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm">Message
            <textarea name="message" required rows={4} className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          </label>
          <div className="pt-2 flex gap-3">
            <button type="submit" className="px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700">Send via email client</button>
            <button type="button" className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900" onClick={() => setContactOpen(false)}>Cancel</button>
          </div>
        </form>
      </Window>
    </div>
  );
}
