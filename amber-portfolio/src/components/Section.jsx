export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 ${className}`}>
      {children}
    </section>
  );
}
