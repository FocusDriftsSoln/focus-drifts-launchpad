import { ArrowUpRight } from "lucide-react";

import { collections } from "../galleryData";

export default function Collections() {
  return (
    <section id="collections" className="bg-paper px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-ink-muted">
              Browse by
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Collections
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-ink-soft">
            Group your work into shareable galleries — each collection is its own
            curated album.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <a
              key={c.title}
              href="#work"
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-paper-2"
            >
              <img
                src={c.cover}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <span>
                  <span className="block font-display text-2xl font-semibold text-paper">
                    {c.title}
                  </span>
                  <span
                    className="mt-1 block font-body text-sm text-paper/75"
                    dangerouslySetInnerHTML={{ __html: `${c.subtitle} · ${c.count} photos` }}
                  />
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/40 text-paper transition-colors group-hover:bg-paper group-hover:text-ink">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
