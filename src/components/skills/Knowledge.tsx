'use client'

import LogoLoop from "@/components/skills/LogoLoop";
import { SiOpenai, SiPerplexity, SiStackoverflow, SiMdnwebdocs,  } from 'react-icons/si';
import {useEffect, useState} from "react";

const knowledgeLogos = [
  { node: <SiOpenai />, title: "ChatGPT", href: "https://chat.openai.com" },
  { node: <SiPerplexity />, title: "Perplexity", href: "https://perplexity.ai" },
  { node: <SiStackoverflow />, title: "Stack Overflow", href: "https://stackoverflow.com" },
  { node: <SiMdnwebdocs />, title: "MDN Web Docs", href: "https://developer.mozilla.org" },
];

const Knowledge: React.FC = () => {

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
        logos={knowledgeLogos}
        speed={30}
        direction="left"
        logoHeight={isDesktop ? 56 : 36}
        gap={40}
        ariaLabel="AI and knowledge tools"
      />
      <p className="text-left text-lg md:text-2xl md:pl-10 text-balance  text-gray-300 ">
        I keep my edge sharp by pairing AI assistants with trusted documentation—ChatGPT and Perplexity
        for fast ideation, Stack Overflow for real-world fixes, and MDN for the canonical web specs.
      </p>
    </section>
  );
};

export default Knowledge;
