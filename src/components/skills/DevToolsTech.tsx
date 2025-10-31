'use client'

import LogoLoop from "@/components/skills/LogoLoop";
import { SiJest, SiGithub, SiVercel, SiWebstorm, SiFigma, SiDocker, SiN8N } from 'react-icons/si';
import {useEffect, useState} from "react";

const devToolsLogos = [
  { node: <SiJest />, title: "Jest", href: "https://jestjs.io" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiWebstorm />, title: "WebStorm", href: "https://www.jetbrains.com/webstorm" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiN8N />, title: "n8n", href: "https://n8n.io" }
];

const DevToolsTech: React.FC = () => {

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
        logos={devToolsLogos}
        speed={30}
        direction="right"
        logoHeight={isDesktop ? 56: 36}
        gap={40}
        ariaLabel="Developer tools"
      />
      <p className="text-left text-lg md:text-2xl md:pl-10 text-balance text-gray-300 ">
        GitHub keeps everything versioned, Vercel ships it fast, and I round things out with Jest,
        WebStorm, Docker, Figma, and n8n to cover testing, automation, and product polish.
      </p>
    </section>
  );
};

export default DevToolsTech;
