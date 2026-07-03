import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-paper">
      <img
        src={heroImg}
        alt="Focus Drift photographer at dawn on a misty ridge"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-paper via-paper/40 to-paper/10"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10">
        <p className="mb-5 font-body text-xs uppercase tracking-[0.4em] text-ink-soft [animation:fade-up_0.8s_ease-out_both]">
          Photography &amp; Videography Studio
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink [animation:fade-up_0.9s_ease-out_0.1s_both] sm:text-6xl lg:text-8xl">
          Moments worth
          <br />
          keeping forever.
        </h1>
        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink-soft [animation:fade-up_1s_ease-out_0.2s_both] sm:text-lg">
          A modern portfolio &amp; client gallery template — share, showcase, and
          sell your photography with a gallery that feels like a private
          exhibition.
        </p>
        <div className="mt-9 flex flex-wrap gap-4 [animation:fade-up_1.1s_ease-out_0.3s_both]">
          <a
            href="#work"
            className="rounded-full bg-ink px-7 py-3 font-body text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            View the gallery
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/30 px-7 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
