import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template09Luxury() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f0d78c]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="flex items-center justify-between px-10 py-6 border-b border-[#c9a84c]/25">
        <span className="text-xl tracking-[0.25em]" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>Focus Drift</span>
        <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.4em] text-[#f0d78c]/70">
          <a href="#" className="hover:text-[#c9a84c]">Maison</a>
          <a href="#" className="hover:text-[#c9a84c]">Collections</a>
          <a href="#" className="hover:text-[#c9a84c]">Atelier</a>
          <a href="#" className="hover:text-[#c9a84c]">Contact</a>
        </nav>
        <a href="#" className="text-[10px] uppercase tracking-[0.4em] border border-[#c9a84c]/50 text-[#c9a84c] px-5 py-2 hover:bg-[#c9a84c] hover:text-[#0d0d0d]">Private viewing</a>
      </header>

      <section className="relative h-[85vh] overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#c9a84c] mb-6">Maison de photographie · Est. MMXIX</p>
          <h1 className="text-6xl md:text-8xl leading-[0.95] text-[#f5efe0]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            The art of<br/><em className="text-[#c9a84c]">stillness</em>.
          </h1>
          <div className="mt-12 h-px w-24 bg-[#c9a84c]" />
          <p className="mt-6 max-w-md text-sm text-[#f0d78c]/70">
            A private atelier for couture photography commissions. By appointment only.
          </p>
        </div>
      </section>

      <section className="px-10 py-24">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#c9a84c]">The Collections</p>
          <h2 className="mt-3 text-5xl text-[#f5efe0]" style={{ fontFamily: "'Instrument Serif', serif" }}>Chapters of light.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.slice(0, 6).map((g, i) => (
            <a href="#" key={i} className="group">
              <div className="relative overflow-hidden">
                <img src={g.src} alt={g.title} className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 border border-[#c9a84c]/0 group-hover:border-[#c9a84c]/40 transition-colors" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#c9a84c]">Chapter {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-xl text-[#f5efe0]" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>{g.title}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#c9a84c]/20 px-10 py-8 flex justify-between text-[10px] uppercase tracking-[0.4em] text-[#f0d78c]/50">
        <span>© Maison Focus Drift · MMXXVI</span>
        <span>Paris · New York · Tokyo</span>
      </footer>
    </div>
  );
}
