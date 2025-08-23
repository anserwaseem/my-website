"use client";

import SpotlightCard from "@/components/ui/spotlight-card";
import { MapPin, CalendarDays } from "lucide-react";

type EducationCardProps = {
  education: {
    degree: string;
    institution: string;
    location: string;
    duration: string;
    programLink?: string;
  };
};

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <SpotlightCard
      spotlightColor="rgba(100, 100, 100, 0.3)"
      className="bg-[hsl(240_31%_20%/0.7)] hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-200 border-muted-foreground/10"
    >
      <div className="p-4 md:p-6">
        {/* header */}
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {education.degree}
            </h3>
            <p className="text-primary text-base md:text-lg font-medium">
              {education.institution}
            </p>
          </div>
        </div>

        {/* meta info */}
        <div className="flex flex-wrap items-center gap-x-3 md:gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
          <div className="flex items-center gap-1.5">
            <CalendarDays size={14} className="text-primary/70 md:w-4 md:h-4" />
            <span>{education.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary/70 md:w-4 md:h-4" />
            <span>{education.location}</span>
          </div>
        </div>

        {/* program link */}
        {education.programLink && (
          <div className="mb-3 md:mb-4">
            <a
              href={education.programLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground/50 hover:text-primary hover:underline transition-colors inline-flex items-center gap-1"
            >
              View Program Details
            </a>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
};

export default EducationCard;
