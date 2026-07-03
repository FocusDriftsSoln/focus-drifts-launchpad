import { useState } from "react";
import { Mail, Instagram, Youtube, ArrowRight } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-ink px-6 py-24 text-paper lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-paper/50">
            Let's work together
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Have a story
            <br />
            worth capturing?
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-paper/70">
            Tell us about your project — portraits, weddings, brand work or a film.
            We'll get back within two business days.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://www.threads.com/@foucsdrift"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="text-paper/70 transition-colors hover:text-paper"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="http://www.youtube.com/@FocusDrifts"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube"
              className="text-paper/70 transition-colors hover:text-paper"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="mailto:sateesh_ks@focusdrifts.com"
              aria-label="Email"
              className="text-paper/70 transition-colors hover:text-paper"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              aria-label="Your name"
              className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-paper/40 focus:border-paper"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-paper/40 focus:border-paper"
            />
          </div>
          <input
            placeholder="Type of shoot (e.g. wedding, portrait)"
            aria-label="Type of shoot"
            className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-paper/40 focus:border-paper"
          />
          <textarea
            required
            rows={4}
            placeholder="Tell us about your project"
            aria-label="Project details"
            className="rounded-lg border border-paper/20 bg-transparent px-4 py-3 font-body text-sm text-paper outline-none placeholder:text-paper/40 focus:border-paper"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {sent ? "Thanks — we'll be in touch!" : "Send enquiry"}
            {!sent && (
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
