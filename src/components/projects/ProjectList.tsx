import React from "react";
import { projects } from "../../lib/projects";
import Link from "next/link";
import Image from "next/image";

const ProjectList = () => {
  return (
    <section className="mx-auto w-full max-w-sm md:max-w-5xl space-y-16 divide-y-4 divide-destructive  p-6 rounded-xl">
      {projects.featured.map((p, i) => (
        <article
          key={p.id}
          className={`flex flex-col items-center gap-8 pb-12  p-4 rounded-2xl md:items-stretch md:gap-12 ${
            i % 2 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* image/card */}
          <Link
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group block w-full md:w-1/2"
          >
            <div className="overflow-hidden w-full aspect-[10/9] rounded-2xl border border-white/10 bg-white/5 relative shadow-lg shadow-white/5">
              <Image
                src={p.image.desktop}
                alt={p.title}
                fill
                className=" w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold glow">{p.title}</h3>
            <p className="mt-3 text-sm text-gray/300">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.primary.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 glow"
                >
                  {t}
                </span>
              ))}
              {p.supporting.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-1 bg-black/80">
              {p.features.map((feature) => (
                <li key={feature} className="mt-3">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-4">
              <Link href={p.liveUrl} className="underline">
                Live Site
              </Link>
              {p.repoUrl && (
                <Link href={p.repoUrl} className="underline">
                  View Code
                </Link>
              )}
            </div>
            <p className="text-sm text-gray-400 italic">- {p.year}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProjectList;
