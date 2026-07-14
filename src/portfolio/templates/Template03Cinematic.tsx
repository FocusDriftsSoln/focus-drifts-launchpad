import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template03Cinematic() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e6e6e6]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="fixed top-0 inset-x-0 z-20 flex items-center justify-between px-8 py-5 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent">
        <span className="text-sm font-bold tracking-[0.35em] uppercase">Focus Drift</span>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.3em] text-[#e6e6e6]/70">
          <a href="#" className="hover:text-[#c9a84c]">Reel</a>
          <a href="#" className="hover:text-[#c9a84c]">Stills</a>
          <a href="#" className="hover:text-[#c9a84c]">Films</a>
          <a href="#" className="hover:text-[#c9a84c]">Contact</a>
        </nav>
        <span className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]">● Live</span>
      </header>

      <section className="relative h-screen w-full overflow-hidden">
        <img src={hero} alt="hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/60" />
        <div className="absolute inset-0 flex items-end px-8 pb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[#c9a84c] mb-4">Feature 01 — 4K</p>
            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-[0.95]">
              Cinema for<br/>quiet moments.
            </h1>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-[#c9a84c] text-[#0a0a0a] text-xs uppercase tracking-[0.3em]">Play reel</button>
              <button className="px-6 py-3 border border-[#e6e6e6]/40 text-xs uppercase tracking-[0.3em]">Book studio</button>
            </div>
          </div>
        </div>
        {/* faux letterbox */}
        <div className="absolute top-0 inset-x-0 h-16 bg-[#0a0a0a]" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-[#0a0a0a]" />
      </section>

      <section className="px-8 py-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-light">Selected frames</h2>
          <a href="#" className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]">View archive →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {gallery.slice(0, 6).map((g, i) => (
            <div key={i} className="relative group overflow-hidden">
              <img src={g.src} alt={g.title} className="w-full aspect-[16/10] object-cover grayscale-[30%] transition duration-700 group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]">Reel {String(i + 1).padStart(2, "0")}</span>
                <p className="text-2xl mt-1">{g.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#e6e6e6]/10 px-8 py-8 flex justify-between text-xs uppercase tracking-[0.3em] text-[#e6e6e6]/50">
        <span>© Focus Drift Films</span>
        <span>Shot on location</span>
      </footer>
    </div>
  );
}
