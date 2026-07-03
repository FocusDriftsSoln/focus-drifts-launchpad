import { useMemo, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Columns3,
  Rows3,
} from "lucide-react";

import { gallery, categories, type GalleryItem } from "../galleryData";

type LayoutMode = "masonry" | "grid" | "rows";

const layoutOptions: { id: LayoutMode; label: string; icon: typeof LayoutGrid }[] = [
  { id: "masonry", label: "Masonry", icon: Columns3 },
  { id: "grid", label: "Grid", icon: LayoutGrid },
  { id: "rows", label: "Rows", icon: Rows3 },
];

export default function GalleryShowcase() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [layout, setLayout] = useState<LayoutMode>("masonry");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (active === "All" ? gallery : gallery.filter((g) => g.category === active)),
    [active],
  );

  const open = (item: GalleryItem) => setLightbox(items.indexOf(item));
  const close = () => setLightbox(null);
  const go = (dir: 1 | -1) =>
    setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length));

  const Caption = ({ item }: { item: GalleryItem }) => (
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
  );

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
            Switch the layout to see how your images breathe. Click any image to
            open the full-screen viewer.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
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

          {/* Layout switcher */}
          <div className="flex items-center gap-1 self-start rounded-full border border-ink/15 bg-paper-2 p-1 lg:self-auto">
            {layoutOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setLayout(opt.id)}
                aria-pressed={layout === opt.id}
                className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body text-sm transition-colors ${
                  layout === opt.id
                    ? "bg-ink text-paper"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                <opt.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Masonry */}
        {layout === "masonry" && (
          <div className="mt-10 gap-4 [column-fill:_balance] [columns:1] sm:[columns:2] lg:[columns:3] xl:[columns:4]">
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
                <Caption item={item} />
              </button>
            ))}
          </div>
        )}

        {/* Uniform grid */}
        {layout === "grid" && (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item, i) => (
              <button
                key={`${item.title}-${i}`}
                type="button"
                onClick={() => open(item)}
                className="group relative block aspect-square overflow-hidden rounded-xl bg-paper-2"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Caption item={item} />
              </button>
            ))}
          </div>
        )}

        {/* Justified rows */}
        {layout === "rows" && (
          <div className="mt-10 flex flex-wrap gap-4">
            {items.map((item, i) => (
              <button
                key={`${item.title}-${i}`}
                type="button"
                onClick={() => open(item)}
                style={{ flexGrow: item.width / item.height, width: `${(item.width / item.height) * 240}px` }}
                className="group relative h-60 flex-auto overflow-hidden rounded-xl bg-paper-2"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Caption item={item} />
              </button>
            ))}
          </div>
        )}
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
