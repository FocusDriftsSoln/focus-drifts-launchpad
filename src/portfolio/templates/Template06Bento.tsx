import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template06Bento() {
  return (
    <div className="min-h-screen bg-[#0f0f12] text-[#f2f2f2]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <header className="flex items-center justify-between px-6 py-5">
        <span className="text-sm font-semibold tracking-tight">◆ focus.drift</span>
        <nav className="hidden md:flex gap-1 rounded-full bg-[#1c1c22] p-1 text-xs">
          {["Work", "Studio", "Process", "Contact"].map((n) => (
            <a key={n} href="#" className="px-4 py-1.5 rounded-full hover:bg-[#2a2a32]">{n}</a>
          ))}
        </nav>
        <a href="#" className="text-xs bg-[#7dd3fc] text-[#0f0f12] font-semibold rounded-full px-4 py-2">Start a project</a>
      </header>

      <section className="px-6 py-6">
        <div className="grid grid-cols-4 grid-rows-[220px_220px_220px] gap-3">
          {/* Hero cell */}
          <div className="col-span-4 md:col-span-3 row-span-2 relative overflow-hidden rounded-3xl bg-[#1c1c22]">
            <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f0f12] via-transparent to-transparent" />
            <div className="relative p-8 h-full flex flex-col justify-end">
              <p className="text-xs uppercase tracking-widest text-[#7dd3fc]">Studio · 2026</p>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-2">Modern photography for modern brands.</h1>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 rounded-3xl bg-[#7dd3fc] text-[#0f0f12] p-6 flex flex-col justify-between">
            <p className="text-xs uppercase tracking-widest">Now booking</p>
            <p className="text-4xl font-bold">Q3<br/>2026</p>
          </div>
          <div className="col-span-2 md:col-span-1 rounded-3xl bg-[#1c1c22] p-6 flex flex-col justify-between">
            <p className="text-xs uppercase tracking-widest text-[#f2f2f2]/60">Clients</p>
            <p className="text-4xl font-bold">120+</p>
          </div>
          {gallery.slice(0, 4).map((g, i) => (
            <div key={i} className={`relative overflow-hidden rounded-3xl bg-[#1c1c22] ${i === 0 ? "col-span-2" : "col-span-1"}`}>
              <img src={g.src} alt={g.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12]/80 to-transparent" />
              <div className="relative p-4 h-full flex items-end">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#7dd3fc]">{g.category}</p>
                  <p className="text-lg font-semibold">{g.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">More work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {gallery.slice(4, 12).map((g, i) => (
            <a key={i} href="#" className="relative rounded-2xl overflow-hidden bg-[#1c1c22] group">
              <img src={g.src} alt={g.title} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
            </a>
          ))}
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-white/5 flex justify-between text-xs text-[#f2f2f2]/50">
        <span>© focus.drift studio</span>
        <span>hello@focusdrifts.com</span>
      </footer>
    </div>
  );
}
