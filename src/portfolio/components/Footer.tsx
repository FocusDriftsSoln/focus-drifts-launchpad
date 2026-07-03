export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-12 pt-4 text-paper lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-paper/10 pt-10 sm:flex-row">
        <span className="font-display text-sm font-bold uppercase tracking-[0.22em]">
          Focus Drift
        </span>
        <span className="font-body text-xs uppercase tracking-[0.3em] text-paper/50">
          © {new Date().getFullYear()} Focus Drift · focusdrifts.com
        </span>
      </div>
    </footer>
  );
}
