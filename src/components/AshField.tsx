"use client";

import { useEffect, useRef } from "react";

/** Subtle drifting ash / ember field — funereal, not festive. Canvas-2D, no deps. */
export default function AshField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = canvas.clientWidth * devicePixelRatio);
    let h = (canvas.height = canvas.clientHeight * devicePixelRatio);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; ember: boolean };
    const N = 70;
    const ps: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (-0.2 - Math.random() * 0.5) * devicePixelRatio,
      r: (0.6 + Math.random() * 2.2) * devicePixelRatio,
      a: 0.1 + Math.random() * 0.4,
      ember: Math.random() < 0.18,
    }));

    const onResize = () => {
      w = canvas.width = canvas.clientWidth * devicePixelRatio;
      h = canvas.height = canvas.clientHeight * devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.02 * devicePixelRatio;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.ember) {
          ctx.fillStyle = `rgba(207, 74, 50, ${p.a * 0.9})`;
          ctx.shadowColor = "rgba(207,74,50,0.8)";
          ctx.shadowBlur = 8 * devicePixelRatio;
        } else {
          ctx.fillStyle = `rgba(168, 137, 78, ${p.a * 0.6})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}
