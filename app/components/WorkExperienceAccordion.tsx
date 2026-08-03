import React from "react";
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
  technologies: string[];
}

export default function WorkExperienceAccordion({}) {
  return (
    <div className="border-border shadow-shadow border-2">
      <div className="bg-secondary-background p-4 border-b-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-main p-3 border-2">
              <h4 className="text-2xl">01</h4>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
