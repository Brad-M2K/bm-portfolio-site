"use client";

import React from "react";
import { projects } from "../../lib/projects";
import Link from "next/link";
import Image from "next/image";

const ProjectList = () => {
  const cardContainerClasses =
    "group relative w-full aspect-[10/9] rounded-4xl overflow-hidden bg-white/5 shadow-lg shadow-white/30 transition-transform duration-300 hover:rotate-1 hover:scale-105";
  const cardImageClasses =
    "w-full animate-fadeIn object-cover transition-transform duration-300 group-hover:scale-110";

  return (
    <section className="mx-auto w-full max-w-sm md:max-w-5xl space-y-16 divide-y-4 divide-white/30  p-6 rounded-xl">
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
            className="block w-full md:w-1/2"
          >
            <div className={cardContainerClasses}>
              <Image
                src={p.image.desktop}
                alt={p.title}
                fill
                className={cardImageClasses}
              />
            </div>
          </Link>

          {/* text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold glow">{p.title}</h2>
            <p className="mt-3 text-sm text-gray/300">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.primary.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 glow hover:scale-105 transition-transform hover:rotate-2 curor-pointer cursor-default"
                >
                  {t}
                </span>
              ))}
              {p.supporting.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 hover:scale-105 transition-transform hover:rotate-2 curor-pointer cursor-default"
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
