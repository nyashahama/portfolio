"use client";

import { useEffect, useState, RefObject } from "react";

interface Options {
  threshold?: number;
  once?: boolean;
}

/**
 * useInView
 * Keeps server-rendered content visible, then animates below-fold content once
 * the browser can safely observe it. By default, stays true after the first
 * intersection (once = true).
 */
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { threshold = 0.1, once = true }: Options = {},
): boolean {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else {
          setInView(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, once]);

  return inView;
}
