import { gallery } from "../galleryData";
import hero from "../assets/hero.jpg";

export default function Template10Playful() {
  const chips = ["✿ portraits", "☀ weddings", "★ family", "♪ events"];
  return (
    <div className="min-h-screen bg-[#fef0f5] text-[#3a2540]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="flex items-center justify-between px-6 py-5">
        <span className="text-lg font-bold">✿ focus.drift</span>
        <nav className="hidden md:flex gap-2">
          {["work", "about", "prices", "hi!"].map((n, i) => (
            <a key={n} href="#" className={`text-sm rounded-full px-4 py-1.5 ${i === 3 ? "bg-[#c9a0dc] text-white" : "hover:bg-white"}`}>{n}</a>
          ))}
        </nav>
      </header>

      <section className="px-6 pt-6 pb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex gap-2 flex-wrap mb-6">
            {chips.map((c) => (
              <span key={c} className="text-xs bg-white rounded-full px-3 py-1 shadow-sm">{c}</span>
            ))}
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-[1] tracking-tight">
            hey! we take <span className="text-[#c9a0dc]">happy</span><br/> pictures of <span className="text-[#7dd3fc]">happy</span><br/> people.
          </h1>
          <p className="mt-6 text-lg max-w-md">
            A tiny photography studio that runs on iced coffee and good vibes. Booking cute little sessions all year round.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="bg-[#3a2540] text-white rounded-full px-6 py-3 text-sm">book a session →</a>
            <a href="#" className="bg-white rounded-full px-6 py-3 text-sm">see the gallery</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 bg-[#fecaca] rounded-full w-24 h-24" />
          <div className="absolute -bottom-6 right-10 bg-[#7dd3fc] rounded-3xl w-32 h-20 rotate-6" />
          <img src={hero} alt="" className="relative w-full aspect-square object-cover rounded-[2.5rem] border-4 border-white shadow-xl" />
          <div className="absolute -bottom-4 -right-4 bg-[#c9a0dc] text-white text-xs rounded-full px-4 py-2 rotate-6">say cheese!</div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white rounded-t-[3rem]">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-4xl font-bold">recent smiles ✿</h2>
          <a href="#" className="text-sm underline decoration-[#c9a0dc] decoration-2 underline-offset-4">see all →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.slice(0, 8).map((g, i) => (
            <a key={i} href="#" className={`block rounded-3xl overflow-hidden ${i % 3 === 0 ? "rotate-[-2deg]" : i % 3 === 1 ? "rotate-[1deg]" : ""}`}>
              <img src={g.src} alt={g.title} className="w-full aspect-square object-cover hover:scale-105 transition-transform" />
              <p className="p-2 text-xs text-center bg-[#fef0f5]">{g.title}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-white px-6 py-8 text-center text-sm">
        made with 💜 by focus drift · say hi @ hello@focusdrifts.com
      </footer>
    </div>
  );
}
