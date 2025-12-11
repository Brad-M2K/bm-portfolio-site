"use client";

import React from "react";
import { background } from "../../lib/background";
import Link from "next/link";
import Image from "next/image";

export const Background = () => {
  const cardContainerClasses =
    "group relative w-full aspect-[10/9] md:w-1/2 rounded-4xl overflow-hidden bg-white/5 shadow-lg shadow-white/30 transition-transform duration-300 hover:rotate-1 hover:scale-105";
  const cardImageClasses =
    "animate-fadeIn object-cover transition-transform duration-300 group-hover:scale-110";

  return (
    <section className="mx-auto w-full max-w-sm md:max-w-5xl space-y-16 divide-y-4 divide-white/30  p-6 rounded-xl">
      {background.relevant.map((p, i) => (
        <article
          key={p.id}
          className={`flex flex-col items-center gap-8 pb-12  p-4 rounded-2xl md:items-stretch md:gap-12 ${
            i % 2 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* image/card */}
          <div className={cardContainerClasses}>
            <Image
              src={p.img}
              alt={p.title}
              fill
              className={cardImageClasses}
            />
          </div>

          {/* text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold glow">{p.title}</h2>
            <p className="mt-3 text-sm text-gray/300">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2"></div>

            <ul className="list-disc list-inside text-gray-300 space-y-1 bg-black/80"></ul>

            <div className="mt-5 flex gap-4"></div>
          </div>
        </article>
      ))}
    </section>
  );
};
