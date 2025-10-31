'use client'

import LogoLoop from "@/components/skills/LogoLoop";
import { SiNodedotjs, SiPrisma, SiSupabase, SiPostgresql } from 'react-icons/si';
import {useEffect, useState} from "react";

const backEndLogos = [
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" }
];

const BackEndTech: React.FC = () => {

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
        logos={backEndLogos}
        speed={30}
        direction="left"
        logoHeight={isDesktop ? 56 : 36}
        gap={40}
        ariaLabel="Back end technologies"
      />
      <p className="text-left text-lg md:text-2xl md:pl-10 text-balance text-gray-300">
        On the server side I lean on Node.js with Prisma for data access, Supabase for auth and storage,
        and PostgreSQL when I need a reliable relational backbone.
      </p>
    </section>
  );
};

export default BackEndTech;
