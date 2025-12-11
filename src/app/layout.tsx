import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StaggeredMenu from "@/components/layout/StaggeredMenu";
import React from "react";
import DesktopOrMobileBackground from "@/components/layout/DesktopOrMobileBackground";
// import MouseTrail from "@/components/layout/MouseTrail";

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
  { label: "About", ariaLabel: "Learn about us", section: "about" },
  { label: "Skills", ariaLabel: "Go to home page", section: "skills" },
  {
    label: "Projects",
    ariaLabel: "View my previous about",
    section: "projects",
  },
  {
    label: "Background",
    ariaLabel: "My previous Experience",
    section: "background",
  },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com/Brad-M2K" },
  { label: "LinkedIn", link: "https://linkedin.com/in/brad-m2k" },
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
          colors={["#a365db", "#7e0be8"]}
          accentColor="#8015c7fc"
          isFixed
        />
        {/*<MouseTrail />*/}
        <DesktopOrMobileBackground />

        {children}
      </body>
    </html>
  );
}
