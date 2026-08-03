import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase,
  Calendar,
  Calendar02Icon,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Location,
} from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
interface Role {
  title: string;
  startDate: string;
  endDate: string;
}

export interface WorkExperience {
  id: number;
  employmentType:
    | "FULL-TIME"
    | "PART-TIME"
    | "CONTRACT"
    | "INTERNSHIP"
    | "SELF-EMPLOYED"
    | "VOLUNTEER";
  location: string;
  company: string;
  companyLogo: string;
  startDate: string;
  endDate: string; // "Till Date" if current
  summary: string;
  roles: Role[];
  achievements: string[];
  technologiesAndSkills: string[];
}

export default function WorkExperienceAccordion({
  work,
}: {
  work: WorkExperience;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-border shadow-shadow border-2">
      <div
        className="bg-secondary-background hover:bg-secondary-background/70 transition-colors p-4 border-b-2 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-main p-3 border-2">
              <h4 className="text-2xl">
                {work.id < 10 ? `0${work.id}` : work.id}
              </h4>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Badge className="bg-black text-white dark:bg-white dark:text-black">
                  {work.employmentType}
                </Badge>
                <div className="flex items-center gap-1">
                  <HugeiconsIcon icon={Location} size={14} />
                  <p className="text-xs">{work.location}</p>
                </div>
              </div>
              <h1 className="text-2xl">
                {work.roles.map((role) => role.title.toUpperCase()).join(" & ")}{" "}
                <span className="bg-main p-1">
                  @ {work.company.toUpperCase()}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-background   border-border border-2 p-2 flex items-center gap-x-2">
              <HugeiconsIcon icon={Calendar02Icon} size={16} />
              <p className="text-xs font-bold">
                {work.startDate.toUpperCase()} - {work.endDate.toUpperCase()}
              </p>
            </div>
            <Button size={"icon"}>
              <HugeiconsIcon icon={!isOpen ? ChevronDown : ChevronUp} />
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-background p-4">
          <div className="space-y-4">
            <p className="font-bold">{work.summary}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-1">
                <HugeiconsIcon icon={Briefcase} size={14} />
                <p className="text-xs font-semibold">
                  KEY IMPACT AND ACHIEVEMENTS:
                </p>
              </div>
              {work.achievements.map((achievement, idx) => (
                <div
                  className="flex items-center space-x-1 p-3 border-border shadow-shadow border-2 bg-secondary-background"
                  key={idx}
                >
                  <HugeiconsIcon icon={CheckCircle} size={16} />
                  <p className="text-sm">{achievement}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold">
                TECHNOLOGIES/SKILLS APPLIED:
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {work.technologiesAndSkills.map((technologyOrSkill, idx) => (
                  <Badge key={idx} className="font-bold border-border shadow-shadow">
                    {technologyOrSkill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
