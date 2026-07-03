import { Camera, Video, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Portrait Sessions",
    desc: "Editorial, personal and brand portraits shot on location or in studio.",
  },
  {
    icon: Users,
    title: "Weddings & Events",
    desc: "Full-day documentary coverage with a private online gallery to share.",
  },
  {
    icon: Video,
    title: "Videography",
    desc: "Cinematic films, reels and highlight edits crafted for every screen.",
  },
  {
    icon: Sparkles,
    title: "Client Galleries",
    desc: "Deliver, showcase and sell prints through beautiful shareable albums.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-ink/10 bg-paper-2 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-ink-muted">
          What we offer
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          A studio built for sharing your best work.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="bg-paper p-8">
              <s.icon className="h-8 w-8 text-ink" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
