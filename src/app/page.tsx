import Image from "next/image";
import {About} from "@/components/about/About";
import GradualBlur from "@/components/GradualBlur";
import React from "react";


export default function Home() {
  return (
    <main className="min-h-screen w-full  relative overflow-hidden">

        <section id="about" className="min-h-screen flex items-center justify-center bg-neutral-800/20 text-white">
            <section style={{position: 'relative',height: 500,overflow: 'hidden'}}>
                <div style={{ height: '100%',overflowY: 'auto',padding: '6rem 2rem' }}>
                    <About/>
                </div>

                <GradualBlur
                    target="page"
                    position="top"
                    height="7rem"
                    strength={3}
                    divCount={5}
                    curve="bezier"
                    exponential={true}
                    opacity={1}
                    zIndex={-90}
                />
            </section>
        </section>

        <section style={{position: 'relative',height: 500,overflow: 'hidden'}}>
            <div style={{ height: '100%',overflowY: 'auto',padding: '6rem 2rem' }}>
            </div>

            <GradualBlur
                target="page"
                position="bottom"
                height="5rem"
                strength={3}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
                zIndex={-90}
            />
        </section>
        <section id="skills" className="min-h-screen bg-neutral-800/30 text-white">
            <div className="mx-auto flex h-full w-full max-w-5xl flex-col gap-10 px-6 py-24 lg:grid lg:grid-cols-2 lg:items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Skills Section</h2>
                    <p className="text-lg text-gray-200">
                        A quick glimpse at the tools I use to build rich interactive experiences,
                        from creative front-end animations to robust back-end services.
                    </p>
                </div>
                <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
                    <Image
                        src="/bg.jpeg"
                        alt="Abstract neon gradient"
                        fill
                        priority
                        className="object-cover object-center opacity-90"
                    />
                </div>
            </div>
        </section>

        <section id="projects" className="min-h-screen bg-neutral-700/30 text-white">
            <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse gap-10 px-6 py-24 lg:grid lg:grid-cols-2 lg:items-center">
                <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
                    <Image
                        src="/exquizzit.jpeg"
                        alt="Screenshot from a featured project"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Projects Section</h2>
                    <p className="text-lg text-gray-200">
                        Highlights from recent work, including interactive canvases, experimental UI concepts,
                        and full-stack applications built to solve real-world problems.
                    </p>
                </div>
            </div>
        </section>

        <section id="background" className="min-h-screen bg-neutral-600/30 text-white">
            <div className="mx-auto flex h-full w-full max-w-5xl flex-col gap-10 px-6 py-24 lg:grid lg:grid-cols-2 lg:items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Background Section</h2>
                    <p className="text-lg text-gray-200">
                        A snapshot of my journey—previous roles, collaborations, and the experiences
                        that shaped the developer I am today.
                    </p>
                </div>
                <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
                    <Image
                        src="/nc-news.jpeg"
                        alt="Collage representing professional background"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>


    </main>
  );
}
