"use client";
import React, { useEffect, useState } from "react";
import Background from "@/components/layout/Background";
import Particles from "@/components/layout/Particles";
import { useMediaQuery } from "react-responsive";

export default function DesktopOrMobileBackground() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      const visible = document.visibilityState === "visible";
      setIsActive(visible);
    };

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(false);

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const particleCount = isActive ? 700 : 0;

  return isDesktop ? (
    <Particles
      className="fixed inset-0 -z-10 pointer-events-none"
      backgroundColor="#000000"
      particleColors={["#ffffff", "#d1e6ff", "#ffd3a5", "#b3a7ff", "#79fff7"]}
      particleCount={particleCount}
      particleSpread={6}
      particleHoverFactor={0.3}
      speed={0.1}
      particleBaseSize={30}
      moveParticlesOnHover={isActive}
      alphaParticles={false}
      disableRotation={!isActive}
    />
  ) : (
    <Background />
  );
}
