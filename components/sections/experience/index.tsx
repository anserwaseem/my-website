"use client";
import { useRef } from "react";
import Image from "next/image";

import ExperienceCard from "./experience-card";
import PersonAnimation from "./person-animation";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";
import SpotlightCard from "@/components/ui/spotlight-card";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  useCurSection(ref, 0.1);

  const experiences = data.experiences || [];

  return (
    <div
      ref={ref}
      id="experience"
      className="w-full p-6 md:p-12 flex justify-between flex-col items-center lg:flex-row lg:items-start gap-8 md:gap-12 container my-16 md:my-32 text-sm md:text-base"
    >
      {/* left column: header */}
      <div className="lg:w-2/5 xl:w-1/3">
        <div className="sticky top-8 text-center md:text-left">
          {/* grid image behind */}
          <Image
            className="absolute -top-2 -left-5 -z-10 text-transparent opacity-30 w-full h-1/2 object-cover"
            src="/svgs/grid.svg"
            alt="grid image"
            width={0}
            height={0}
          />
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-gradient-primary mx-auto">
            <span>{"//"}</span>
            Professional Journey
          </h1>
          <PersonAnimation className="w-[250px] md:w-[300px] -scale-x-100 scale-y-100 mx-auto md:mx-0 -mt-12 md:-mt-16" />
          <p className="w-full max-w-[400px] text-muted-foreground px-4 md:px-6 text-sm md:text-base">
            A chronological timeline of my professional growth and key
            contributions.
          </p>
        </div>
      </div>

      {/* right column: timeline */}
      {experiences.length > 0 ? (
        <div className="lg:w-3/5 xl:w-2/3 w-full">
          <div className="max-w-4xl relative">
            {/* timeline structure with proper layering */}
            <div className="relative">
              {/* beautiful timeline line with gradient and glow - perfectly centered with dots */}
              <div className="absolute left-[17px] md:left-[21px] top-6 md:top-8 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/60 to-primary/30 rounded-full z-10" />

              {/* subtle glow effect for the line */}
              <div className="absolute left-[16px] md:left-[20px] top-6 md:top-8 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent rounded-full blur-sm z-10" />

              {/* timeline entries */}
              <div className="space-y-4 md:space-y-6 relative z-20">
                {experiences.map((experience, index) => {
                  const key = `${experience.role}-${experience.company}-${index}`;
                  return (
                    <div key={key} className="relative group">
                      {/* timeline dot - perfectly centered on line */}
                      <div className="absolute left-2.5 md:left-3 top-6 md:top-8 z-30">
                        {/* outer glow */}
                        <div className="absolute -inset-1 w-4 h-4 md:w-5 md:h-5 bg-primary/40 rounded-full blur-sm animate-pulse group-hover:bg-primary/60 transition-colors" />

                        {/* main dot with gradient */}
                        <div className="relative w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-primary to-primary/80 rounded-full border-[2px] border-background shadow-lg group-hover:scale-110 transition-transform">
                          {/* inner highlight */}
                          <div className="absolute top-0.5 left-0.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-white/60 rounded-full" />
                        </div>
                      </div>

                      {/* spotlight card content with responsive margin for timeline */}
                      <div className="ml-9 md:ml-12">
                        <SpotlightCard
                          spotlightColor="rgba(240, 0, 0, 0.3)"
                          className="bg-[hsl(240_31%_30%/0.7)] hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-200 border-primary/10"
                        >
                          <ExperienceCard
                            experience={experience}
                            isLast={index === experiences.length - 1}
                          />
                        </SpotlightCard>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:w-3/5 xl:w-2/3 flex justify-center">
          <p className="text-muted-foreground">
            Experience information coming soon.
          </p>
        </div>
      )}
    </div>
  );
}
