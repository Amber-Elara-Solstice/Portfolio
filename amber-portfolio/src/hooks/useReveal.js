import { useEffect, useRef } from "react";

/** Adds a one-time fade-up when the element enters viewport (respects prefers-reduced-motion through CSS). */
export default function useReveal(delayMs = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("motion-safe:animate-fadeUp"), delayMs);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs]);
  return ref;
}
