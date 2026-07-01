import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Youtube, Mail } from "lucide-react";

import logo from "@/assets/focus-drift-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-16 text-foreground">
      {/* Cinematic backdrop */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70 [animation:breathe_28s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
      />

      {/* Content */}
      <section className="relative z-10 flex w-full max-w-xl flex-col items-center text-center [animation:reveal-up_1.1s_cubic-bezier(0.2,0.8,0.2,1)_both]">
        <span className="mb-8 text-[11px] font-medium uppercase tracking-[0.4em] text-brand-amber/90">
          Coming Soon
        </span>

        {/* Logo card */}
        <div className="w-full max-w-md rounded-3xl bg-[oklch(0.98_0.008_80)] p-10 shadow-[var(--shadow-card)] ring-1 ring-white/10 sm:p-12">
          <img
            src={logo}
            alt="Focus Drift — photography and videography studio"
            className="mx-auto w-full max-w-[18rem]"
          />
        </div>

        <h1 className="mt-12 font-serif text-4xl italic leading-tight text-foreground sm:text-5xl">
          Something worth focusing on is on the way.
        </h1>

        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/70">
          Focus Drift is a photography &amp; videography studio capturing the art
          of motion and stillness. Our full site is currently in the edit —
          check back soon.
        </p>

        {/* Waitlist */}
        <form
          className="group mt-10 flex w-full max-w-sm items-center gap-2 border-b border-foreground/25 pb-2 transition-colors focus-within:border-brand-amber"
          onSubmit={(e) => e.preventDefault()}
        >
          <Mail className="h-4 w-4 shrink-0 text-foreground/50" aria-hidden="true" />
          <input
            type="email"
            required
            placeholder="Enter your email to get notified"
            aria-label="Email address"
            className="w-full bg-transparent py-1.5 text-sm text-foreground outline-none placeholder:text-foreground/40"
          />
          <button
            type="submit"
            className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-amber transition-opacity hover:opacity-70"
          >
            Notify
          </button>
        </form>

        {/* Socials */}
        <nav
          aria-label="Social links"
          className="mt-10 flex items-center gap-6 text-foreground/60"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="transition-colors hover:text-brand-amber"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="YouTube"
            className="transition-colors hover:text-brand-amber"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@focusdrifts.com"
            aria-label="Email"
            className="transition-colors hover:text-brand-amber"
          >
            <Mail className="h-5 w-5" />
          </a>
        </nav>
      </section>

      <footer className="relative z-10 mt-16 text-[11px] uppercase tracking-[0.3em] text-foreground/40">
        © {new Date().getFullYear()} Focus Drift · focusdrifts.com
      </footer>
    </main>
  );
}
