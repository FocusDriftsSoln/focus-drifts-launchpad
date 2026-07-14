import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template05Lifestyle() {
  return (
    <div className="min-h-screen bg-[#faf3ee] text-[#5c4638]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="flex items-center justify-between px-8 py-6">
        <span className="text-2xl" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>Focus Drift</span>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-[#c17c74]">Weddings</a>
          <a href="#" className="hover:text-[#c17c74]">Families</a>
          <a href="#" className="hover:text-[#c17c74]">About</a>
          <a href="#" className="hover:text-[#c17c74]">Journal</a>
        </nav>
        <a href="#" className="text-xs uppercase tracking-[0.3em] bg-[#c17c74] text-[#faf3ee] rounded-full px-5 py-2">Inquire</a>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center px-8 pt-10 pb-24">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#a8c0a0] mb-6">Storytelling · Since 2019</p>
          <h1 className="text-6xl md:text-7xl leading-[1.02]" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Soft light,<br/><em className="text-[#c17c74]">honest</em> moments.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed">
            Wedding and family photography that feels like sitting on the porch with someone you love. No stiff poses. Just you.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#" className="rounded-full bg-[#5c4638] text-[#faf3ee] px-6 py-3 text-sm">See recent work</a>
            <a href="#" className="rounded-full border border-[#5c4638]/30 px-6 py-3 text-sm">Our story →</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-[#e8c5d0]" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#a8c0a0]" />
          <img src={hero} alt="" className="relative w-full aspect-[4/5] object-cover rounded-[3rem]" />
        </div>
      </section>

      <section className="px-8 py-20 bg-[#f0e6d9] rounded-t-[4rem]">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-[#a8c0a0]">Recent stories</p>
          <h2 className="mt-3 text-5xl" style={{ fontFamily: "'Instrument Serif', serif" }}>Kind, unhurried love.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.slice(0, 6).map((g, i) => (
            <a key={i} href="#" className="group block">
              <div className="overflow-hidden rounded-[2rem]">
                <img src={g.src} alt={g.title} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-3 text-center italic" style={{ fontFamily: "'Instrument Serif', serif" }}>{g.title}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-[#f0e6d9] px-8 py-10 text-center text-xs uppercase tracking-[0.3em] text-[#5c4638]/70">
        Made with love · © Focus Drift Studio
      </footer>
    </div>
  );
}
