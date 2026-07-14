import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template04Brutalist() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <header className="flex items-center justify-between px-6 py-4 border-b-[3px] border-[#0a0a0a]">
        <span className="text-xl font-black">FOCUS//DRIFT</span>
        <nav className="hidden md:flex gap-2 text-xs font-bold uppercase">
          {["Work", "Info", "Shop", "Contact"].map((n) => (
            <a key={n} href="#" className="border-2 border-[#0a0a0a] px-3 py-1 hover:bg-[#ffeb3b]">{n}</a>
          ))}
        </nav>
        <a href="#" className="bg-[#ff3b30] text-white text-xs font-black uppercase px-4 py-2 border-2 border-[#0a0a0a]">Book →</a>
      </header>

      <section className="px-6 py-10 border-b-[3px] border-[#0a0a0a]">
        <h1 className="text-[18vw] md:text-[13vw] font-black leading-[0.85] tracking-tighter">
          PHOTO<br/>GRAPHY.
        </h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <p className="text-lg md:col-span-2">
            We shoot loud pictures for people who refuse to be forgettable. Weddings, portraits, editorial. Zero fluff.
          </p>
          <div className="bg-[#ffeb3b] border-2 border-[#0a0a0a] p-4">
            <p className="text-xs font-bold uppercase">Booking now →</p>
            <p className="text-3xl font-black mt-2">2026</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-0 border-b-[3px] border-[#0a0a0a]">
        <img src={hero} alt="" className="col-span-12 md:col-span-8 w-full aspect-[16/10] object-cover border-r-[3px] border-[#0a0a0a]" />
        <div className="col-span-12 md:col-span-4 p-6 bg-[#ff3b30] text-white flex flex-col justify-between">
          <span className="text-xs font-bold uppercase">Featured // 001</span>
          <div>
            <p className="text-4xl font-black">GO LOOK.</p>
            <p className="text-xs uppercase font-bold mt-2">Ridge series →</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="text-5xl font-black">THE WORK.</h2>
          <span className="text-xs font-bold uppercase">({gallery.length})</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {gallery.slice(0, 8).map((g, i) => (
            <a key={i} href="#" className="block border-2 border-[#0a0a0a] hover:bg-[#ffeb3b] p-2">
              <img src={g.src} alt={g.title} className="w-full aspect-square object-cover" />
              <p className="mt-2 text-xs font-black uppercase">{String(i + 1).padStart(2, "0")} · {g.title}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-[#0a0a0a] text-white px-6 py-6 flex justify-between text-xs font-bold uppercase">
        <span>© FOCUS//DRIFT ///</span>
        <span>YELL AT US →</span>
      </footer>
    </div>
  );
}
