'use client'

import LogoLoop from "@/components/skills/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui
} from 'react-icons/si';

const frontEndLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://html.spec.whatwg.org" },
  { node: <SiCss3 />, title: "CSS3", href: "https://www.w3.org/Style/CSS/Overview.en.html" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiShadcnui />, title: "Shadcn UI", href: "https://ui.shadcn.com" }
];

const FrontEndTech: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4 text-white">
      <h3 className="text-xl font-bold">Front End</h3>
      <LogoLoop
        logos={frontEndLogos}
        direction="right"
        speed={30}
        logoHeight={36}
        gap={40}
        ariaLabel="Front end technologies"
      />
    </section>
  );
};

export default FrontEndTech;
