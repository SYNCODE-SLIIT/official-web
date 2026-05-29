'use client';

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black">
      <Spotlight className="-top-48 -left-32 md:-top-28 md:left-20" fill="white" />

      <div className="grid min-h-[70vh] w-full items-center gap-8 px-6 py-16 md:grid-cols-2 md:px-12 lg:px-20">
        <div className="relative z-10 max-w-xl">
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-5xl font-bold leading-none text-transparent md:text-7xl lg:text-8xl">
            SYNCODE
          </h1>
          <p className="mt-5 text-base leading-relaxed text-neutral-300 md:text-xl">
            We engineer scalable web, mobile, and AI solutions for businesses that need reliable
            technology, faster delivery, and measurable outcomes.
          </p>
        </div>

        <div className="relative h-[340px] w-full md:h-[70vh]">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
