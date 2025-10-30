'use client'

import LogoLoop from "@/components/skills/LogoLoop";
import { SiOpenai, SiPerplexity, SiStackoverflow, SiMdnwebdocs, SiN8N } from 'react-icons/si';

const aiKnowledgeLogos = [
  { node: <SiOpenai />, title: "ChatGPT", href: "https://chat.openai.com" },
  { node: <SiPerplexity />, title: "Perplexity", href: "https://perplexity.ai" },
  { node: <SiStackoverflow />, title: "Stack Overflow", href: "https://stackoverflow.com" },
  { node: <SiMdnwebdocs />, title: "MDN Web Docs", href: "https://developer.mozilla.org" },
  { node: <SiN8N />, title: "n8n", href: "https://n8n.io" }
];

const AiKnowledgeTech: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4 text-white">
      <h3 className="text-xl font-bold">AI, Knowledge Pool, & Automation</h3>
      <LogoLoop
        logos={aiKnowledgeLogos}
        speed={30}
        direction="left"
        logoHeight={36}
        gap={40}
        ariaLabel="AI and knowledge tools"
      />
    </section>
  );
};

export default AiKnowledgeTech;
