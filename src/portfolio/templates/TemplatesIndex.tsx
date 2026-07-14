import { Link } from "react-router-dom";
import { useEffect } from "react";
import { templates } from "./registry";

export default function TemplatesIndex() {
  useEffect(() => {
    document.title = "Focus Drift — 10 Photography Studio Templates";
  }, []);

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <header className="px-6 lg:px-10 py-6 flex items-center justify-between border-b border-ink/10">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">Focus Drift</Link>
        <nav className="flex gap-6 text-sm">
          <Link to="/portfolio" className="text-ink-soft hover:text-ink">Portfolio demo</Link>
          <a href="#templates" className="text-ink-soft hover:text-ink">Templates</a>
        </nav>
      </header>

      <section className="px-6 lg:px-10 pt-16 pb-10 max-w-6xl mx-auto">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-ink-muted">Template library</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold tracking-tight">
          10 photography studio templates.
        </h1>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Each template is a complete standalone homepage with its own nav, hero, and gallery.
          Same images and copy across all ten — only the design language changes.
        </p>
      </section>

      <section id="templates" className="px-6 lg:px-10 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <Link
              key={t.slug}
              to={`/templates/${t.slug}`}
              className="group block rounded-2xl overflow-hidden border border-ink/10 bg-paper-2 hover:border-ink/30 transition-colors"
            >
              <div className="aspect-[4/3] relative overflow-hidden" style={{ background: t.swatch[0] }}>
                <div className="absolute inset-0 grid grid-cols-4">
                  {t.swatch.map((c, i) => (
                    <div key={i} style={{ background: c }} />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-xs uppercase tracking-widest bg-ink text-paper px-2 py-1 rounded">
                    Preview →
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-ink-muted">{t.vibe}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{t.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink/10 px-6 lg:px-10 py-6 text-xs uppercase tracking-widest text-ink-muted flex justify-between">
        <span>© Focus Drift · Template library</span>
        <Link to="/" className="hover:text-ink">← Back to landing</Link>
      </footer>
    </div>
  );
}
