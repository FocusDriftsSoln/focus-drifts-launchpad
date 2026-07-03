import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { gallery, categories, type GalleryItem } from "../galleryData";

export default function MasonryGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (active === "All" ? gallery : gallery.filter((g) => g.category === active)),
    [active],
  );

  const open = (item: GalleryItem) => setLightbox(items.indexOf(item));
  const close = () => setLightbox(null);
  const go = (dir: 1 | -1) =>
    setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length));

  return (
    <section id="work" className="bg-paper px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-ink-muted">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              The Gallery
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-ink-soft">
            Every frame in its own light. Click any image to open the full-screen
            viewer.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 font-body text-sm transition-colors ${
                active === c
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/20 text-ink-soft hover:border-ink/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className="mt-10 [column-fill:_balance] gap-4 [columns:1] sm:[columns:2] lg:[columns:3] xl:[columns:4]">
          {items.map((item, i) => (
            <button
              key={`${item.title}-${i}`}
              type="button"
              onClick={() => open(item)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl bg-paper-2"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                width={item.width}
                height={item.height}
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-left">
                  <span className="block font-display text-base font-semibold text-paper">
                    {item.title}
                  </span>
                  <span className="block font-body text-xs uppercase tracking-widest text-paper/70">
                    {item.category}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 [animation:fade-in_0.2s_ease-out]"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 text-paper/80 transition-colors hover:text-paper"
            onClick={close}
          >
            <X className="h-7 w-7" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-4 text-paper/70 transition-colors hover:text-paper sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <figure
            className="max-h-[85vh] max-w-5xl [animation:zoom-in_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[lightbox].src}
              alt={items[lightbox].title}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center font-body text-sm text-paper/80">
              {items[lightbox].title} · {items[lightbox].category}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-4 text-paper/70 transition-colors hover:text-paper sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </div>
      )}
    </section>
  );
}
