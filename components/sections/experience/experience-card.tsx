"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MapPin, CalendarDays } from "lucide-react";

export type ExperienceCardProps = {
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
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="w-full max-w-[650px] rounded-2xl p-6 flex flex-col gap-4">
      {/* header: role and company */}
      <div>
        <h2 className="text-xl font-bold">{experience.role}</h2>
        {experience.companyLink ? (
          <Link
            href={experience.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-primary hover:underline"
          >
            {experience.company}
          </Link>
        ) : (
          <p className="text-lg text-primary">{experience.company}</p>
        )}
      </div>

      {/* sub-header: duration and location */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <CalendarDays size={16} />
          <span>{experience.duration}</span>
        </div>
        {experience.location && (
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{experience.location}</span>
          </div>
        )}
      </div>

      {/* description */}
      <p className="text-muted-foreground whitespace-pre-line text-sm">
        {experience.description}
      </p>

      {/* achievements */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div>
          <h3 className="font-semibold mb-1 text-sm">Key Achievements:</h3>
          <ul className="list-disc list-inside pl-2 space-y-1 text-sm text-muted-foreground">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {/* technologies used */}
      {experience.technologiesUsed &&
        experience.technologiesUsed.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2 text-sm">Technologies:</h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologiesUsed.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
