'use client';

import FaultyTerminal from '@/app/components/Home/Background';
import Hero from '@/app/components/Home/Hero';
import { useResponsive } from '@/app/hooks/useResponsive';

export default function Home() {
  const { isMobile } = useResponsive();

  return (
    <>

      <div style={{ width: '100%', height: '100%',  position: 'relative' }}>
          <FaultyTerminal
            scale={isMobile ? 1 : 2}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#8a7dff"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={1}
          />
        </div>
      
      <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 relative z-10">
        
        <main className="flex flex-col gap-[32px] row-start-2 w-full">
          <Hero/>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          
        </footer>
      </div>
    </>
  );
}
