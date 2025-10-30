'use client'

import LogoLoop from "@/components/skills/LogoLoop";
import { SiNodedotjs, SiPrisma, SiSupabase, SiPostgresql } from 'react-icons/si';

const backEndLogos = [
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" }
];

const BackEndTech: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4 text-white">
      <h3 className="text-xl font-bold">Back End</h3>
      <LogoLoop
        logos={backEndLogos}
        speed={30}
        direction="left"
        logoHeight={36}
        gap={40}
        ariaLabel="Back end technologies"
      />
    </section>
  );
};

export default BackEndTech;
