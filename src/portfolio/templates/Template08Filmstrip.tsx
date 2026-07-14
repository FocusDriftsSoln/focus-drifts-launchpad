import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template08Filmstrip() {
  return (
    <div className="min-h-screen bg-[#111] text-[#e8dcc4]" style={{ fontFamily: "'JetBrains Mono', 'Space Mono', monospace" }}>
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#e8dcc4]/20">
        <span className="text-sm">[FD-35mm]</span>
        <nav className="hidden md:flex gap-6 text-xs uppercase">
          <a href="#">./rolls</a><a href="#">./contact-sheet</a><a href="#">./darkroom</a><a href="#">./mail</a>
        </nav>
        <span className="text-xs text-[#d84a1a]">● REC</span>
      </header>

      <section className="px-6 py-16">
        <p className="text-xs uppercase text-[#d84a1a] mb-4">roll #014 — kodak portra 400</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
          shot on film.<br/>developed with care.
        </h1>
        <div className="mt-8 max-w-xl text-sm leading-relaxed text-[#e8dcc4]/80">
          A working darkroom disguised as a modern studio. Every frame scanned by hand,
          every negative filed in a metal drawer.
        </div>
      </section>

      {/* Film strip */}
      <section className="relative bg-[#2b2b2b] py-6 border-y-4 border-[#111]">
        <div className="absolute top-0 inset-x-0 h-3 bg-repeat-x" style={{ backgroundImage: "linear-gradient(90deg, #111 0 20px, transparent 20px 40px)", backgroundSize: "40px 12px" }} />
        <div className="absolute bottom-0 inset-x-0 h-3 bg-repeat-x" style={{ backgroundImage: "linear-gradient(90deg, #111 0 20px, transparent 20px 40px)", backgroundSize: "40px 12px" }} />
        <div className="flex gap-3 overflow-x-auto px-6 py-4">
          {[hero, ...gallery.map((g) => g.src)].map((src, i) => (
            <div key={i} className="shrink-0 w-64 aspect-[3/2] relative">
              <img src={src} alt="" className="w-full h-full object-cover" />
              <span className="absolute top-1 left-2 text-[10px] text-[#d84a1a]">{String(i + 1).padStart(2, "0")}</span>
              <span className="absolute bottom-1 right-2 text-[10px] text-[#e8dcc4]/70">→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-2xl">contact_sheet.tif</h2>
          <span className="text-xs text-[#e8dcc4]/50">{gallery.length} frames</span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-[#2b2b2b] p-3">
          {gallery.map((g, i) => (
            <div key={i} className="relative">
              <img src={g.src} alt="" className="w-full aspect-square object-cover" />
              <span className="absolute bottom-0.5 left-1 text-[9px] text-[#d84a1a]">{String(i + 1).padStart(2, "0")}A</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#e8dcc4]/20 px-6 py-4 flex justify-between text-xs text-[#e8dcc4]/50">
        <span>~/focus-drift/2026</span>
        <span>ISO 400 · f/2.8</span>
      </footer>
    </div>
  );
}
