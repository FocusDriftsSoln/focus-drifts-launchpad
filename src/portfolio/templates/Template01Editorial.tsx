import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template01Editorial() {
  const nav = ["Work", "Journal", "Studio", "Contact"];
  return (
    <div className="min-h-screen bg-[#f5f0e6] font-serif text-[#2b2b2b]" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
      <header className="flex items-center justify-between px-8 py-6 border-b border-[#2b2b2b]/15">
        <span className="text-2xl italic tracking-tight">Focus Drift</span>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.25em]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {nav.map((n) => <a key={n} href="#" className="hover:text-[#8b6f3a]">{n}</a>)}
        </nav>
        <a href="#" className="text-xs uppercase tracking-[0.3em] border border-[#2b2b2b] px-4 py-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Enquire</a>
      </header>

      <section className="grid md:grid-cols-2 gap-10 px-8 py-20 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Issue N°14 · Summer</p>
          <h1 className="text-6xl md:text-7xl leading-[0.95] italic">Moments<br/>worth<br/>keeping<br/>forever.</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            An editorial-first photography studio. We document weddings, portraits and stories with a magazine sensibility.
          </p>
        </div>
        <img src={hero} alt="hero" className="w-full aspect-[4/5] object-cover" />
      </section>

      <section className="px-8 pb-24">
        <div className="flex items-end justify-between border-b border-[#2b2b2b]/20 pb-4 mb-10">
          <h2 className="text-4xl italic">Selected work</h2>
          <span className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{gallery.length} plates</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.slice(0, 9).map((g, i) => (
            <figure key={i} className="group">
              <div className="overflow-hidden">
                <img src={g.src} alt={g.title} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="mt-3 flex justify-between text-sm">
                <span className="italic">{g.title}</span>
                <span className="uppercase tracking-widest text-xs text-[#8b6f3a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{g.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#2b2b2b]/20 px-8 py-10 flex justify-between text-xs uppercase tracking-[0.3em]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <span>© Focus Drift Editorial</span>
        <span>hello@focusdrifts.com</span>
      </footer>
    </div>
  );
}
