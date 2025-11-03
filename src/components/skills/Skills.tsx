import FrontEndTech from "@/components/skills/FrontEndTech";
import BackEndTech from "@/components/skills/BackEndTech";
import DevToolsTech from "@/components/skills/DevToolsTech";
import Knowledge from "@/components/skills/Knowledge";
import BeyondTheCode from "@/components/skills/BeyondTheCode";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Skills = () => {
  return (
    <section className="flex flex-col items-center text-white md:p-4 ">
      <Accordion
        type="single"
        collapsible
        className=" w-full  rounded-3xl border border-white/30 bg-gradient-to-b from-black/30 via-fuchsia-500/40 to-sky-500/50 

        shadow-lg  md:px-8 md:py-8 px-4 py-8 max-w-90 md:max-w-5xl"
      >
        <h1 className="md:text-6xl text-4xl font-bold  text-shadow-3xs text-center pb-8 ">
          My <span className="glow">Evolving Skillset</span>
        </h1>
        <AccordionItem
          value="item-1"
          className="bg-violet-600/30 p-4 rounded-3xl border-b-white/50"
        >
          <AccordionTrigger className=" pl-5 md:pl-20 text-2xl md:text-3xl font-bold cursor-pointer ">
            Front End
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <FrontEndTech />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-violet-700/30 p-4 rounded-3xl border-b-white/50"
        >
          <AccordionTrigger className="pl-5 md:pl-20 text-2xl md:text-3xl font-bold cursor-pointer">
            Backend
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <BackEndTech />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3 "
          className="bg-violet-800/30 p-4 rounded-3xl border-b-white/50"
        >
          <AccordionTrigger className=" pl-5 md:pl-20 text-2xl md:text-3xl font-bold cursor-pointer">
            Dev Tools
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <DevToolsTech />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-violet-900/40 p-4 rounded-3xl border-b-white/50"
        >
          <AccordionTrigger className="pl-5 md:pl-20 text-2xl md:text-3xl font-bold cursor-pointer">
            Fountain of Knowledge
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <Knowledge />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-violet-950/40 p-4 rounded-3xl border-b-white/50"
        >
          <AccordionTrigger className="pl-5 md:pl-20 text-2xl md:text-3xl font-bold cursor-pointer">
            Beyond the Code
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <BeyondTheCode />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Skills;
