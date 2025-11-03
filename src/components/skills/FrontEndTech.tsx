"use client";

import LogoLoop from "@/components/skills/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui,
} from "react-icons/si";
import { useEffect, useState } from "react";

const frontEndLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://www.javascript.com",
  },
  { node: <SiHtml5 />, title: "HTML5", href: "https://html.spec.whatwg.org" },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiShadcnui />, title: "Shadcn UI", href: "https://ui.shadcn.com" },
];

const FrontEndTech: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024); // desktop breakpoint
    checkScreen(); // run once on mount
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="flex w-full flex-col items-center gap-4 text-white">
      <LogoLoop
        logos={frontEndLogos}
        direction="right"
        speed={30}
        logoHeight={isDesktop ? 56 : 36}
        gap={40}
        ariaLabel="Front end technologies"
      />
      <p className=" text-left text-lg md:text-2xl md:pl-10  text-balance text-gray-300">
        I build clean, responsive interfaces with React, Next.js, and Tailwind,
        using TypeScript as I grow more fluent — among other bits in my stack.
      </p>
    </section>
  );
};

export default FrontEndTech;
