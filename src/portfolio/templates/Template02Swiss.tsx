import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template02Swiss() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <header className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#0a0a0a]">
        <span className="col-span-3 text-xs uppercase tracking-widest font-bold">Focus/Drift</span>
        <nav className="col-span-6 flex gap-6 text-xs uppercase tracking-widest">
          <a href="#">Index</a><a href="#">Works</a><a href="#">Info</a><a href="#">Contact</a>
        </nav>
        <span className="col-span-3 text-right text-xs uppercase tracking-widest">MMXXVI</span>
      </header>

      <section className="grid grid-cols-12 gap-4 px-6 pt-24 pb-32">
        <div className="col-span-12 md:col-span-2 text-xs uppercase tracking-widest">001 / Studio</div>
        <div className="col-span-12 md:col-span-7">
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            A photography<br/>studio. Nothing<br/>more, nothing<br/>less.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-3 flex flex-col justify-end text-xs leading-relaxed">
          <p>Portrait · Landscape · Wedding · Editorial. Est. 2019, based nowhere in particular.</p>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-0 border-y border-[#0a0a0a]">
        <img src={hero} alt="" className="col-span-12 md:col-span-8 w-full aspect-[16/10] object-cover" />
        <div className="col-span-12 md:col-span-4 p-8 flex flex-col justify-between">
          <span className="text-xs uppercase tracking-widest">Fig. 01 — Ridge, dawn</span>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#ff3b30]">Now booking</p>
            <p className="mt-2 text-sm">Autumn commissions open. Two slots remaining.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="grid grid-cols-12 gap-4 mb-6 text-xs uppercase tracking-widest border-b border-[#0a0a0a] pb-2">
          <span className="col-span-1">№</span>
          <span className="col-span-4">Title</span>
          <span className="col-span-3">Category</span>
          <span className="col-span-4 text-right">Format</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.slice(0, 8).map((g, i) => (
            <a key={i} href="#" className="block group">
              <div className="aspect-square overflow-hidden bg-[#f2f2f2]">
                <img src={g.src} alt={g.title} className="w-full h-full object-cover transition-opacity group-hover:opacity-70" />
              </div>
              <div className="mt-2 flex justify-between text-xs uppercase tracking-widest">
                <span>{String(i + 1).padStart(3, "0")} {g.title}</span>
                <span>{g.category}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-[#0a0a0a] text-xs uppercase tracking-widest">
        <span className="col-span-6">© Focus/Drift Studio</span>
        <span className="col-span-6 text-right">focusdrifts.com</span>
      </footer>
    </div>
  );
}
