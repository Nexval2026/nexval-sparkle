import { useEffect, useRef } from 'react';

export function useScrollReveal(staggerDelay = 100) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = el.querySelectorAll('.scroll-reveal');
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * staggerDelay);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
}
