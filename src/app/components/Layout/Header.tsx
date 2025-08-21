'use client';
import { useState } from 'react';
import Link from 'next/link'; 

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'CV', path: '/cv' },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 font-mono">
        <div className="crt border-b border-white/10 bg-black/70 backdrop-blur">
            <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group font-bold">
                <span className="h-2 w-2 rounded-sm bg-[--accent] shadow-[0_0_8px_var(--accent)]" />
                <span className="text-lg tracking-widest text-white/90 group-hover:text-white">
                BRADDEZ<span className="text-[--accent]">.dev</span>
                </span>
                <span className="ml-1 h-4 w-2 animate-blink bg-white/80"></span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-6 text-lg text-white/80 md:flex">
                {navLinks.map(({ name, path }) => (
                <li key={name}>
                    <Link
                            href={path}
                            
                    className="hover:text-white transition-colors underline-offset-4 hover:underline"
                    >
                    {name}
                    </Link>
                </li>
                ))}
                <li>
                <a
                    href="#"
                    className="rounded border border-[--accent]/40 bg-[--accent]/10 px-3 py-1 text-white shadow-[0_0_12px_rgba(160,120,255,.35)] hover:bg-[--accent]/20 transition-colors"
                >
                    Hire&nbsp;Me
                </a>
                </li>
            </ul>

            {/* Mobile toggle */}
            <button
                aria-label="Menu"
                className="md:hidden text-white/80 h-10 w-10"
                onClick={() => setOpen(!open)}
            >
                {open ? '✕' : '≡'}
            </button>
            </nav>

            {/* Mobile sheet */}
            {open && (
            <div className="md:hidden border-t border-white/10 bg-black/80">
                <ul className="mx-auto max-w-6xl px-4 py-4 space-y-3 text-sm text-white/90">
                {navLinks.map(({ name, path }) => (
                    <li key={name}>
                    <Link href={path} className="block py-1">▌ {name}</Link>
                    </li>
                ))}
                <li>
                    <a
                    href="#"
                    className="mt-2 block rounded border border-[--accent]/40 bg-[--accent]/10 px-3 py-2 text-center shadow-[0_0_12px_rgba(160,120,255,.35)]"
                    >
                    Hire Me
                    </a>
                </li>
                </ul>
            </div>
            )}
            {/* scanlines overlay */}
            <div className="pointer-events-none scanlines"></div>
        </div>
        </header>
    );
}