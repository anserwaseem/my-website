"use client";
import { useRef } from "react";
import Image from "next/image";

import type { ExperienceCardProps } from "./experience-card";
import ExperienceCard from "./experience-card";
import PersonAnimation from "./person-animation"; // Import PersonAnimation
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
      className="w-full p-12 flex justify-between flex-col items-center lg:flex-row lg:items-stretch gap-12 container my-32 text-sm md:text-base"
    >
      <div>
        <div className="sticky top-8 text-center md:text-left">
          {/* grid image behind */}
          <Image
            className="absolute -top-2 -left-5 -z-10 text-transparent opacity-30 w-full h-1/2 object-cover"
            src="/svgs/grid.svg"
            alt="grid image"
            width={0}
            height={0}
          />
          <h1 className="text-3xl md:text-4xl text-gradient-primary">
            <span>{"//"}</span>
            Professional Experience
          </h1>
          <PersonAnimation className="w-[300px] -scale-x-100 scale-y-100 mx-auto md:mx-0 -mt-32" />
          <p className="w-[400px] text-muted-foreground px-6">
            My professional journey and key contributions in the tech industry.
          </p>
        </div>
      </div>

      {/* right column: experience cards */}
      {experiences.length > 0 ? (
        <div className="space-y-12">
          {experiences.map(
            (experience: ExperienceCardProps["experience"], index: number) => {
              const key = `${experience.role}-${experience.company}-${index}`;
              return (
                <SpotlightCard
                  key={key}
                  spotlightColor="rgba(240, 0, 0, 0.3)"
                  className="bg-[hsl(240_31%_30%)]"
                >
                  <ExperienceCard key={key} experience={experience} />
                </SpotlightCard>
              );
            },
          )}
        </div>
      ) : (
        <div className="w-full lg:w-3/5 xl:w-2/3 flex justify-center">
          <p className="text-muted-foreground">
            Experience information coming soon.
          </p>
        </div>
      )}
    </div>
  );
}
