import aboutImg from "../assets/gallery-01.jpg";

const stats = [
  { value: "12+", label: "Years behind the lens" },
  { value: "480", label: "Stories captured" },
  { value: "60k", label: "Frames delivered" },
];

export default function About() {
  return (
    <section id="about" className="bg-paper px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-paper-2">
          <img
            src={aboutImg}
            alt="Portrait by Focus Drift"
            loading="lazy"
            width={800}
            height={1100}
            className="w-full object-cover"
          />
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-ink-muted">
            About the studio
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            We chase light, motion &amp; the in-between.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink-soft">
            Focus Drift is a photography and videography studio obsessed with the
            quiet moments most people miss. We shoot with intention, edit with
            restraint, and deliver galleries that feel like a private exhibition
            of your story.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
            This template is your starting point — swap in your own images,
            categories and words to make it unmistakably yours.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 font-body text-xs uppercase tracking-widest text-ink-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
