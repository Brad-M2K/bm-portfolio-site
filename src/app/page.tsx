"use client";

import { About } from "@/components/about/About";
import GradualBlur from "@/components/page/GradualBlur";
import { Skills } from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import { Background } from "@/components/background/Background";
import { FloatingTimeline } from "@/components/page/FloatingTimeline";

const menuItems = [
  { label: "About", ariaLabel: "Learn about us", section: "about" },
  { label: "Skills", ariaLabel: "Go to home page", section: "skills" },
  {
    label: "Projects",
    ariaLabel: "View my previous about",
    section: "projects",
  },
  {
    label: "Background",
    ariaLabel: "My previous Experience",
    section: "background",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="flex w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 gap-4 md:gap-8">
        <aside className="block sticky top-24 h-[calc(100vh-6rem)] w-4 md:w-50">
          <FloatingTimeline
            sections={menuItems.map((item) => ({
              id: item.section,
              label: item.label,
            }))}
          />
        </aside>

        <main className="flex-1 space-y-24 md:space-y-32">
          <section id="about" className="min-h-screen text-white">
            <About />
          </section>

          <section id="skills" className="min-h-screen text-white pt-14">
            <Skills />
          </section>

          <section id="projects" className="min-h-screen text-white pt-17">
            <Projects />
          </section>

          <section id="background" className="min-h-screen text-white pt-8">
            <Background />
          </section>
        </main>
      </div>

      <GradualBlur
        target="page"
        position="top"
        height="5rem"
        strength={3}
        divCount={10}
        curve="bezier"
        exponential={true}
        opacity={1}
        zIndex={-90}
        responsive={true}
      />
      <GradualBlur
        target="page"
        position="bottom"
        height="5rem"
        strength={3}
        divCount={10}
        curve="bezier"
        exponential={true}
        opacity={1}
        zIndex={-90}
        responsive={true}
      />
      {/* <footer className="h-70 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 bg-[length:200%_200%] animate-gradient blur-3xl rounded-t-3xl" /> */}
    </div>
  );
}
