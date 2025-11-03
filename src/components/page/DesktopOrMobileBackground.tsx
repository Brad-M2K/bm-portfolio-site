"use client";
import React from "react";
import Background from "@/components/page/Background";
import Particles from "@/components/page/Particles";
import { useMediaQuery } from "react-responsive";

export default function DesktopOrMobileBackground() {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return isDesktop ? (
    <Particles
      className="fixed inset-0 -z-10 pointer-events-none"
      backgroundColor="#000000"
      particleColors={[
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#d1e6ff",
        "#ffd3a5",
        "#b3a7ff",
        "#79fff7",
      ]}
      particleCount={700}
      particleSpread={3}
      particleHoverFactor={0.3}
      speed={0.1}
      particleBaseSize={50}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  ) : (
    <Background />
  );
}
