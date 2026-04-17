"use client";

import { useRef } from "react";
import { PORTFOLIO, type Post } from "@/lib/data";
import { useInView } from "@/lib/useInView";

const ACCENT_MAP: Record<string, string> = {
  cyan: "text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/5 hover:border-cyber-cyan hover:shadow-neon-cyan",
  magenta:
    "text-cyber-magenta border-cyber-magenta/30 bg-cyber-magenta/5 hover:border-cyber-magenta hover:shadow-neon-magenta",
  green:
    "text-cyber-green border-cyber-green/30 bg-cyber-green/5 hover:border-cyber-green hover:shadow-neon-green",
  yellow:
    "text-cyber-yellow border-cyber-yellow/30 bg-cyber-yellow/5 hover:border-cyber-yellow",
};

const TAG_ACCENT: Record<string, string> = {
  cyan: "border-cyber-cyan/30 text-cyber-cyan/70",
  magenta: "border-cyber-magenta/30 text-cyber-magenta/70",
  green: "border-cyber-green/30 text-cyber-green/70",
  yellow: "border-cyber-yellow/30 text-cyber-yellow/70",
};

function BlogCard({ post, index }: { post: Post; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const accent = ACCENT_MAP[post.accent] ?? ACCENT_MAP.cyan;
  const tagAccent = TAG_ACCENT[post.accent] ?? TAG_ACCENT.cyan;

  return (
    <div
      ref={ref}
      className={`
        card-cyber p-6 border-cyber-border ${accent} cursor-pointer
        transition-all duration-700 group
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Date + read time */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-cyber-muted">{post.date}</span>
        <span className="font-mono text-xs text-cyber-muted">
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-display text-base font-bold text-white tracking-wide mb-3 leading-snug
                     group-hover:text-cyber-cyan transition-colors duration-300"
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-cyber-muted/80 text-sm leading-relaxed mb-5 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={`font-mono text-xs px-2 py-0.5 border ${tagAccent} bg-cyber-surface/50`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read more link */}
      <div
        className="flex items-center gap-2 font-mono text-xs text-cyber-muted
                      group-hover:text-cyber-cyan transition-colors duration-300"
      >
        <span>Area of focus</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transform group-hover:translate-x-1 transition-transform duration-200"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full opacity-60" />
    </div>
  );
}

export default function BlogSection() {
  const ref = useRef<HTMLElement>(null);
  const headerInView = useInView(ref, { threshold: 0.05 });

  return (
    <section
      id="notes"
      ref={ref}
      className="relative py-32 overflow-hidden bg-cyber-surface/20"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-magenta/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="section-label mb-3">05 / Notes</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <h2 className="section-title">
              Systems{" "}
              <span className="text-cyber-cyan text-glow-cyan">Interests</span>
            </h2>
            <span className="font-mono text-xs text-cyber-muted shrink-0">
              Current areas of focus
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PORTFOLIO.posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
