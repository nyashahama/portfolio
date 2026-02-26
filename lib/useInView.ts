"use client";

import { useEffect, useState, RefObject } from "react";

interface Options {
  threshold?: number;
  once?: boolean;
}

/**
 * useInView
 * Returns true once the referenced element enters the viewport.
 * By default, stays true after the first intersection (once = true).
 */
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { threshold = 0.1, once = true }: Options = {},
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
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
