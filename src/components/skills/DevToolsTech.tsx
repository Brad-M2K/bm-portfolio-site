'use client'

import LogoLoop from "@/components/skills/LogoLoop";
import { SiJest, SiGithub, SiVercel, SiWebstorm, SiFigma, SiDocker } from 'react-icons/si';

const devToolsLogos = [
  { node: <SiJest />, title: "Jest", href: "https://jestjs.io" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiWebstorm />, title: "WebStorm", href: "https://www.jetbrains.com/webstorm" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" }
];

const DevToolsTech: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4 text-white">
      <h3 className="text-xl font-bold">Dev Tools</h3>
      <LogoLoop
        logos={devToolsLogos}
        speed={30}
        direction="right"
        logoHeight={36}
        gap={40}
        ariaLabel="Developer tools"
      />
    </section>
  );
};

export default DevToolsTech;
