import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template07Magazine() {
  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#111]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="border-y-[3px] border-double border-[#111]">
        <div className="px-6 py-3 flex justify-between text-[10px] uppercase tracking-[0.3em]">
          <span>Vol. XII</span>
          <span>Tuesday · July 2026</span>
          <span>$8.00</span>
        </div>
        <h1 className="text-center py-4 border-t border-[#111]" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1 }}>
          The Focus Drift Times
        </h1>
        <nav className="border-t border-[#111] px-6 py-2 flex justify-center gap-8 text-xs uppercase tracking-[0.3em]">
          <a href="#">Front page</a><a href="#">Portraits</a><a href="#">Weddings</a><a href="#">Reviews</a><a href="#">Contact</a>
        </nav>
      </header>

      <section className="grid md:grid-cols-3 gap-8 px-6 py-10 border-b border-[#111]">
        <div className="md:col-span-2">
          <img src={hero} alt="" className="w-full aspect-[16/10] object-cover" />
          <p className="text-[10px] uppercase tracking-widest mt-2 text-[#5a5a5a]">Photo: focus drift · ridge, 05:42</p>
          <h2 className="mt-4 text-4xl md:text-5xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Studio releases 2026 collection to critical acclaim
          </h2>
          <p className="mt-4 text-sm leading-relaxed columns-2 gap-6">
            <span className="float-left text-6xl leading-[0.8] pr-2 pt-1" style={{ fontFamily: "'Instrument Serif', serif" }}>F</span>
            or the twelfth consecutive season, Focus Drift returns with a body of work that refuses to shout.
            Instead, the collection whispers — a portrait of quiet mornings, of weddings that felt like family
            dinners, of landscapes that ask you to slow down. Readers who last year called the studio's work
            "quietly devastating" will find little reason to disagree. The full portfolio opens today across
            twelve chapters, each printed as though it were a page from a favorite novel.
          </p>
        </div>
        <aside className="border-l border-[#111] pl-6">
          <p className="text-[10px] uppercase tracking-widest text-[#b23a1e]">Also inside</p>
          <ul className="mt-3 space-y-3 text-sm">
            {gallery.slice(0, 4).map((g, i) => (
              <li key={i} className="border-b border-[#111]/20 pb-3">
                <p className="text-xs uppercase tracking-widest text-[#5a5a5a]">{g.category}</p>
                <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-lg">{g.title}</p>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="px-6 py-10">
        <h3 className="text-3xl mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>The gallery pages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.slice(0, 8).map((g, i) => (
            <figure key={i}>
              <img src={g.src} alt={g.title} className="w-full aspect-[4/5] object-cover grayscale contrast-125" />
              <figcaption className="mt-2 text-xs">
                <span className="text-[#b23a1e] uppercase tracking-widest">Plate {String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontFamily: "'Instrument Serif', serif" }} className="text-base italic">{g.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="border-t-[3px] border-double border-[#111] px-6 py-4 flex justify-between text-[10px] uppercase tracking-[0.3em]">
        <span>Printed with pride</span>
        <span>© Focus Drift Press · 2026</span>
      </footer>
    </div>
  );
}
