"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className=" grid w-full min-h-[80ch] max-w-2xl px-8 py-24 mx-auto text-white bg-black/30 rounded-2xl place-items-center backdrop-blur-sm">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="flex flex-col w-full max-w-5xl mx-auto gap-10 md:gap-12">
          <div className=" flex flex-row items-center gap-6 md:items-center md:justify-between">
            <h2 className=" text-center text-3xl font-bold md:text-left md:text-4xl lg:text-5xl">
              <span className="glow ">About</span> Me
            </h2>
            <div
              aria-label="Bradley Mattison profile photo"
              className="flex overflow-hidden object-cover h-40 w-40 mx-auto p-[4px] bg-gradient-to-br from-violet-500/60 to-blue-500/60 rounded-full border-6 border-white/20 shadow-xl transition-transform relative shrink-0 hover:scale-110 hover:rotate-360 duration-300 profile-glow md:mx-0 lg:h-48 lg:w-48"
            >
              <Image src="/me.png" alt="Bradley Mattison" fill />
            </div>
          </div>

          <div className=" flex flex-col max-w-xl p-6 text-base text-gray-300 bg-gradient-to-b from-black/30 via-black/10 to-transparent rounded-2xl gap-4 md:text-lg">
            <p>
              I’ve always been curious about how things work — and how they can
              be made better. But for a long time, life took me down a different
              path. Living with cystic fibrosis meant fighting just to stay
              stable, and when Kaftrio gave me a second chance at life, I felt I
              owed it to myself to build something lasting.
            </p>
            <p>
              In 2022, I began working in elderly care and quickly moved up to a
              Duty Manager role in a retirement living development. It was
              demanding but meaningful work that taught me leadership, empathy,
              and resilience. By 2024, I wanted a new challenge — something that
              reminded me less of my own health battles — so I moved into
              children’s residential care to make a difference earlier in
              people’s lives. After taking some time out to reset and refocus, I
              decided to finally pursue what had been in the back of my mind for
              years.
            </p>
            <p>
              That’s what led me to coding. I joined Northcoders in 2025 after
              years of wanting to take the leap, and since then, I’ve been
              learning to build full-stack web apps from the ground up. I’m
              still early in my journey, but I’m all in — driven by curiosity,
              progress, and the chance to make a career doing something that
              truly inspires me.
            </p>
          </div>
        </div>
      </motion.section>
    </section>
  );
};
