'use client';

import { useEffect, useRef } from 'react';

export default function MouseTrail() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d', { alpha: true })!;

        // Handle HiDPI displays without blurring
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const resize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        window.addEventListener('resize', resize, { passive: true });

        type Point = { x: number; y: number; t: number };
        const points: Point[] = [];
        const MAX_POINTS = 8;   // very short trail - only 8 points
        const LIFE_MS = 130;    // very short visible duration
        const FADE_MS = 130;    // very quick fade

        let lastMouse: { x: number; y: number } | null = null;

        const onMove = (e: PointerEvent) => {
        const now = performance.now();
        points.push({ x: e.clientX, y: e.clientY, t: now });

        // Densify if the pointer moved a long way between frames (smooth curves)
        if (lastMouse) {
            const dx = e.clientX - lastMouse.x;
            const dy = e.clientY - lastMouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 12) {
            const steps = Math.min(6, Math.floor(dist / 12));
            for (let i = 1; i < steps; i++) {
                points.push({
                x: lastMouse.x + (dx * i) / steps,
                y: lastMouse.y + (dy * i) / steps,
                t: now,
                });
            }
            }
        }
        lastMouse = { x: e.clientX, y: e.clientY };

        // Keep to max length
        if (points.length > MAX_POINTS) points.splice(0, points.length - MAX_POINTS);
        };

        window.addEventListener('pointermove', onMove, { passive: true });

        const alphaFor = (age: number) => {
            if (age <= LIFE_MS) return 1;
            const f = 1 - Math.min(1, (age - LIFE_MS) / FADE_MS);
            return Math.max(0, f);
        };

        let raf = 0;
        const tick = () => {
        const now = performance.now();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Drop points that are fully faded
        while (points.length && now - points[0].t > LIFE_MS + FADE_MS) points.shift();

        if (points.length > 1) {
                ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let i = 1; i < points.length; i++) {
                const p0 = points[i - 1];
                const p1 = points[i];
                const age = now - p1.t;
                const a = alphaFor(age);
                if (a <= 0) continue;

                ctx.strokeStyle = `rgba(255,255,255,${a})`;   // White trail
                ctx.shadowColor = "rgba(148,0,211,0.8)";       // Purple glow
                ctx.shadowBlur = 13;

                ctx.beginPath();
                ctx.moveTo(p0.x, p0.y);
                ctx.lineTo(p1.x, p1.y);
                ctx.stroke();
            }
        }

        raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
            window.removeEventListener('pointermove', onMove);
        };
    }, []);

    // Full-screen, behind-content, no pointer capture
    return (
        <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}
        />
    );
}