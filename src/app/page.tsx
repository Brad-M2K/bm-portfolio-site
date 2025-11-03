import Image from "next/image";
import { About } from "@/components/about/About";
import GradualBlur from "@/components/page/GradualBlur";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full  relative overflow-hidden">
      <section id="about" className="min-h-screen   text-white">
        <About />
      </section>

      <section id="skills" className="min-h-screen  text-white pt-20">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen  text-white">
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
              Highlights from recent work, including interactive canvases,
              experimental UI concepts, and full-stack applications built to
              solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      <section id="background" className="min-h-screen  text-white">
        <div className="mx-auto flex h-full w-full max-w-5xl flex-col gap-10 px-6 py-24 lg:grid lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Background Section</h2>
            <p className="text-lg text-gray-200">
              A snapshot of my journey—previous roles, collaborations, and the
              experiences that shaped the developer I am today.
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

      <section
        style={{ position: "relative", height: 500, overflow: "hidden" }}
      >
        <div
          style={{ height: "100%", overflowY: "auto", padding: "6rem 2rem" }}
        ></div>
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
      </section>
      {/* <section
        style={{ position: "relative", height: 500, overflow: "hidden" }}
      >
        <div
          style={{ height: "100%", overflowY: "auto", padding: "6rem 2rem" }}
        ></div>
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
      </section> */}
      <footer className="h-70 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 bg-[length:200%_200%] animate-gradient blur-3xl rounded-t-3xl" />
    </main>
  );
}
