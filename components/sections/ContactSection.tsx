"use client";

import { useRef, useState } from "react";
import { PORTFOLIO } from "@/lib/data";
import { useInView } from "@/lib/useInView";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Demo submit handler — wire up to your API/Formspree/Resend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      label: "GitHub",
      href: PORTFOLIO.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: PORTFOLIO.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: PORTFOLIO.twitter,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: `mailto:${PORTFOLIO.email}`,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-cyber-cyan/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-cyber-cyan/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-cyber-magenta/3 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="section-label mb-3">06 / Contact</p>
          <h2 className="section-title">
            Let&apos;s{" "}
            <span className="text-cyber-cyan text-glow-cyan">Connect</span>
          </h2>
          <p className="text-cyber-muted mt-4 max-w-xl">
            Have a project in mind, want to collaborate, or just want to chat
            about tech? My inbox is always open — I respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ── Left: Form ── */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            {formState === "success" ? (
              <div className="card-cyber p-10 border-cyber-green/40 bg-cyber-green/5 text-center space-y-4">
                <div className="text-4xl">✓</div>
                <p className="font-display text-cyber-green text-glow-green text-xl tracking-wide">
                  Message Sent!
                </p>
                <p className="font-mono text-sm text-cyber-muted">
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="btn-neon text-xs mt-4"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    className="font-mono text-xs text-cyber-muted tracking-widest"
                    htmlFor="name"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-cyber-surface border border-cyber-border px-4 py-3 font-mono text-sm
                               text-cyber-text placeholder:text-cyber-muted/40 outline-none
                               focus:border-cyber-cyan focus:shadow-neon-cyan transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    className="font-mono text-xs text-cyber-muted tracking-widest"
                    htmlFor="email"
                  >
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-cyber-surface border border-cyber-border px-4 py-3 font-mono text-sm
                               text-cyber-text placeholder:text-cyber-muted/40 outline-none
                               focus:border-cyber-cyan focus:shadow-neon-cyan transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    className="font-mono text-xs text-cyber-muted tracking-widest"
                    htmlFor="message"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-cyber-surface border border-cyber-border px-4 py-3 font-mono text-sm
                               text-cyber-text placeholder:text-cyber-muted/40 outline-none resize-none
                               focus:border-cyber-cyan focus:shadow-neon-cyan transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="btn-neon w-full justify-center flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "sending" ? (
                    <>
                      <span className="animate-spin w-3 h-3 border border-current border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 2L11 13M22 2 15 22l-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Right: Info ── */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            {/* Email direct */}
            <div className="card-cyber p-6 border-cyber-border hover:border-cyber-cyan/40 transition-colors duration-300 group">
              <p className="font-mono text-xs text-cyber-muted tracking-widest mb-2">
                DIRECT EMAIL
              </p>
              <a
                href={`mailto:${PORTFOLIO.email}`}
                className="font-display text-lg text-white group-hover:text-cyber-cyan transition-colors duration-300"
              >
                {PORTFOLIO.email}
              </a>
            </div>

            {/* Location */}
            <div className="card-cyber p-6 border-cyber-border hover:border-cyber-magenta/40 transition-colors duration-300">
              <p className="font-mono text-xs text-cyber-muted tracking-widest mb-2">
                LOCATION
              </p>
              <p className="font-display text-lg text-white">
                {PORTFOLIO.location}
              </p>
              <p className="font-mono text-xs text-cyber-muted mt-1">
                Open to remote worldwide
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-xs text-cyber-muted tracking-widest mb-4">
                FIND ME ON
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-cyber p-4 border-cyber-border hover:border-cyber-cyan/50
                               hover:shadow-neon-cyan flex items-center gap-3 group transition-all duration-300"
                  >
                    <span className="text-cyber-muted group-hover:text-cyber-cyan transition-colors duration-200">
                      {social.icon}
                    </span>
                    <span className="font-mono text-xs text-cyber-muted group-hover:text-cyber-text transition-colors duration-200">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="flex items-center gap-3 border border-cyber-green/30 bg-cyber-green/5 px-4 py-3">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse shadow-neon-green" />
              <span className="font-mono text-xs text-cyber-green">
                Available for new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
