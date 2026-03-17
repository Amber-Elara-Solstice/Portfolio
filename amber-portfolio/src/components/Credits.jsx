export default function Credits({ items }) {
  if (!items?.length) return null;
  return (
    <div className="mt-10 text-xs text-slate-500 dark:text-slate-400 space-y-2">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Image credits</h3>
      <ul className="space-y-1 list-disc pl-5">
        {items.map((c, i) => (
          <li key={i}>
            <span className="font-medium">{c.use}:</span>{" "}
            {c.title} — {c.artist} ({c.source})
            {c.url ? <> — <a className="underline hover:no-underline" href={c.url} target="_blank" rel="noreferrer">source</a></> : null}
            {c.license ? ` — ${c.license}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
