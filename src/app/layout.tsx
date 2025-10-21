


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseTrail from "@/components/layout/MouseTrail";
import StaggeredMenu from '@/components/layout/StaggeredMenu';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bradley Mattison's Portfolio",
  description: "A showcase of my work and skills as a developer.",
};



const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Projects', ariaLabel: 'View my previous projects', link: '/projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com/Brad-M2K' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/brad-m2k' }
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          menuButtonColor="#fff"
          openMenuButtonColor="#000000ff"
          changeMenuColorOnOpen
          colors={['#6c5482ff', '#7a27ffff']}
          accentColor="#8015c7fc"
          isFixed
        />
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
