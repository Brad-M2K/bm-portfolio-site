'use client'

import FrontEndTech from "@/components/skills/FrontEndTech";
import BackEndTech from "@/components/skills/BackEndTech";
import DevToolsTech from "@/components/skills/DevToolsTech";
import AiKnowledgeTech from "@/components/skills/AiKnowledgeTech";

export const Skills = () => {
  return (
    <section className="flex flex-col items-center gap-10 text-white">
      <FrontEndTech />
      <BackEndTech />
      <DevToolsTech />
      <AiKnowledgeTech />
    </section>
  );
};

export default Skills;
