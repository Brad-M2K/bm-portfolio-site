
import FrontEndTech from "@/components/skills/FrontEndTech";
import BackEndTech from "@/components/skills/BackEndTech";
import DevToolsTech from "@/components/skills/DevToolsTech";
import Knowledge from "@/components/skills/Knowledge";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export const Skills = () => {
  return (
    <section className="flex flex-col items-center gap-10 text-white p-4">
        <Accordion
            type="single"
            collapsible
            className=' w-full  rounded-3xl border border-transparent backdrop-blur-xl shadow-lg  md:px-8 md:py-8  py-8'
        >
            <h1 className='md:text-6xl text-4xl font-bold  text-shadow-3xs text-center pb-8'>My Evolving Skillset</h1>
            <AccordionItem value="item-1" className='bg-gray-400/30 p-4 rounded-3xl'>
                <AccordionTrigger className="text-2xl md:text-3xl font-bold cursor-pointer">
                    Front End
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <FrontEndTech />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='bg-gray-500/30 p-4 rounded-3xl'>
                <AccordionTrigger className="text-2xl md:text-3xl font-bold cursor-pointer">Backend</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <BackEndTech />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3 " className='bg-gray-600/30 p-4 rounded-3xl'>
                <AccordionTrigger className="text-2xl md:text-3xl font-bold cursor-pointer">Dev Tools</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <DevToolsTech />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className='bg-gray-700/30 p-4 rounded-3xl border-b-white'>
                <AccordionTrigger className="text-2xl md:text-3xl font-bold cursor-pointer">Fountain of Knowledge</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <Knowledge />
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    </section>
  );
};

export default Skills;
