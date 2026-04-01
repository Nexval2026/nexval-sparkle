import { useEffect, useRef, useState } from 'react';

export function useCountUp(end: string, duration = 1500) {
  const [display, setDisplay] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Extract numeric part
          const match = end.match(/[\d.,]+/);
          if (!match) { setDisplay(end); return; }
          const numStr = match[0].replace(/\./g, '').replace(',', '.');
          const target = parseFloat(numStr);
          const isDecimal = end.includes(',');
          const prefix = end.slice(0, end.indexOf(match[0]));
          const suffix = end.slice(end.indexOf(match[0]) + match[0].length);
          
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            
            let formatted: string;
            if (isDecimal) {
              formatted = current.toFixed(1).replace('.', ',');
            } else if (target >= 1000) {
              formatted = Math.round(current).toLocaleString('de-DE');
            } else {
              formatted = Math.round(current).toString();
            }
            
            setDisplay(prefix + formatted + suffix);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, display };
}
