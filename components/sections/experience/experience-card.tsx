"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MapPin, CalendarDays, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_TECH_LENGTH = 4;
const MAX_DESCRIPTION_LENGTH = 120;

export type TimelineExperienceProps = {
  experience: {
    role: string;
    company: string;
    companyLink?: string;
    duration: string;
    location?: string;
    description: string;
    achievements?: string[];
    technologiesUsed?: string[];
  };
  isLast?: boolean;
};

export default function ExperienceCard({
  experience,
}: TimelineExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const primaryTechs =
    experience.technologiesUsed?.slice(0, MAX_TECH_LENGTH) || [];
  const hasMoreTechs =
    (experience.technologiesUsed?.length || 0) > MAX_TECH_LENGTH;
  const allTechs = experience.technologiesUsed || [];

  const expandCard = () => setIsExpanded(true);

  return (
    <div className="p-4 md:p-6">
      {/* header */}
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {experience.role}
          </h3>
          {experience.companyLink ? (
            <Link
              href={experience.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-base md:text-lg font-medium transition-colors"
            >
              {experience.company}
            </Link>
          ) : (
            <p className="text-primary text-base md:text-lg font-medium">
              {experience.company}
            </p>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 md:ml-3 p-1.5 md:p-2 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-105 shrink-0"
          aria-label={isExpanded ? "Show less" : "Show more"}
        >
          {isExpanded ? (
            <Minus
              size={16}
              className="text-muted-foreground md:w-[18px] md:h-[18px]"
            />
          ) : (
            <Plus
              size={16}
              className="text-muted-foreground md:w-[18px] md:h-[18px]"
            />
          )}
        </button>
      </div>

      {/* meta info */}
      <div className="flex flex-wrap items-center gap-x-3 md:gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
        <div className="flex items-center gap-1.5">
          <CalendarDays size={14} className="text-primary/70 md:w-4 md:h-4" />
          <span>{experience.duration}</span>
        </div>
        {experience.location && (
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary/70 md:w-4 md:h-4" />
            <span>{experience.location}</span>
          </div>
        )}
      </div>

      {/* technologies section - smart display based on expand state */}
      {allTechs.length > 0 && (
        <div className="mb-3 md:mb-4">
          {!isExpanded ? (
            // collapsed: show preview of first 4 technologies
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {primaryTechs.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs px-2 py-0.5 md:px-3 md:py-1 bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
              {hasMoreTechs && (
                <Badge
                  variant="outline"
                  onClick={expandCard}
                  className="text-xs px-2 py-0.5 md:px-3 md:py-1 border-primary/40 text-primary/90 cursor-pointer hover:bg-primary/10 hover:border-primary/60 transition-all duration-200 hover:scale-105"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      expandCard();
                    }
                  }}
                  aria-label="Click to show all technologies"
                >
                  +{allTechs.length - 4} more
                </Badge>
              )}
            </div>
          ) : (
            // expanded: show all technologies with title
            <div>
              <h4 className="font-semibold mb-1.5 md:mb-2 text-sm text-foreground/90">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {allTechs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs px-2 py-0.5 md:px-3 md:py-1 bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* summary description - only visible when collapsed */}
      {!isExpanded && (
        <div className="text-muted-foreground text-sm leading-relaxed">
          <span className="md:hidden">
            {experience.description.length > 80 ? (
              <>
                {experience.description.substring(0, 80)}
                <button
                  onClick={expandCard}
                  className="text-primary hover:text-primary/80 cursor-pointer ml-1 hover:underline transition-colors"
                  aria-label="Click to read full description"
                >
                  ...
                </button>
              </>
            ) : (
              experience.description
            )}
          </span>
          <span className="hidden md:block">
            {experience.description.length > MAX_DESCRIPTION_LENGTH ? (
              <>
                {experience.description.substring(0, MAX_DESCRIPTION_LENGTH)}
                <button
                  onClick={expandCard}
                  className="text-primary hover:text-primary/80 cursor-pointer ml-1 hover:underline transition-colors"
                  aria-label="Click to read full description"
                >
                  ...
                </button>
              </>
            ) : (
              experience.description
            )}
          </span>
        </div>
      )}

      {/* expandable content */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isExpanded ? "max-h-none opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="pt-3 md:pt-4 space-y-3 md:space-y-4 border-t border-white/10">
          {/* full description */}
          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line break-words">
            {experience.description}
          </p>

          {/* achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div>
              <h4 className="font-semibold mb-1.5 md:mb-2 text-sm text-foreground/90">
                Key Achievements:
              </h4>
              <ul className="space-y-1 md:space-y-1.5 text-sm text-muted-foreground">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs font-bold shrink-0">
                      ▸
                    </span>
                    <span className="flex-1 break-words">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
