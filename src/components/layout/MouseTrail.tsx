"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  t: number;
};

const MAX_POINTS = 8;
const LIFE_MS = 130;
const FADE_MS = 130;

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const points: Point[] = [];
    let lastMouse: { x: number; y: number } | null = null;
    let raf = 0;

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize, { passive: true });

    const onPointerMove = (event: PointerEvent) => {
      const now = performance.now();
      points.push({ x: event.clientX, y: event.clientY, t: now });

      if (lastMouse) {
        const dx = event.clientX - lastMouse.x;
        const dy = event.clientY - lastMouse.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 12) {
          const steps = Math.min(6, Math.floor(distance / 12));
          for (let step = 1; step < steps; step++) {
            points.push({
              x: lastMouse.x + (dx * step) / steps,
              y: lastMouse.y + (dy * step) / steps,
              t: now,
            });
          }
        }
      }

      lastMouse = { x: event.clientX, y: event.clientY };

      if (points.length > MAX_POINTS) {
        points.splice(0, points.length - MAX_POINTS);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const alphaFor = (age: number) => {
      if (age <= LIFE_MS) {
        return 1;
      }

      const fade = 1 - Math.min(1, (age - LIFE_MS) / FADE_MS);
      return Math.max(0, fade);
    };

    const tick = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      while (points.length && now - points[0]!.t > LIFE_MS + FADE_MS) {
        points.shift();
      }

      if (points.length > 1) {
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let index = 1; index < points.length; index++) {
          const from = points[index - 1]!;
          const to = points[index]!;
          const age = now - to.t;
          const alpha = alphaFor(age);

          if (alpha <= 0) {
            continue;
          }

          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.shadowColor = "rgba(148,0,211,0.8)";
          ctx.shadowBlur = 13;

          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
