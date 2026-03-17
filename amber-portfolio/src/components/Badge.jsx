export default function Badge({ children }) {
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
      {children}
    </span>
  );
}
