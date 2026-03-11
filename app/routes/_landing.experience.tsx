import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_landing.experience";
import {
  ChevronDown,
  ChevronUp,
  Dots,
  SquareArrowRight,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experience | Mumuni Abdulazeez (AzCodes)" },
    {
      name: "description",
      content:
        "Professional work experience of Mumuni Abdulazeez (AzCodes), featuring roles at Antartes and Charmpay as a Project Manager and Backend Engineer.",
    },
    {
      name: "keywords",
      content: "Experience, Work History, Antartes, Charmpay, Project Manager, Backend Engineer, AzCodes",
    },
    { name: "author", content: "Mumuni Abdulazeez (AzCodes)" },
    {
      property: "og:title",
      content: "Experience | Mumuni Abdulazeez (AzCodes)",
    },
    {
      property: "og:description",
      content: "Professional work experience of Mumuni Abdulazeez (AzCodes).",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://azcodes.dev/experience" },
    { property: "og:image", content: "https://azcodes.dev/images/og-image.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@azcodesdev" },
    { name: "twitter:creator", content: "@azcodesdev" },
    {
      name: "twitter:title",
      content: "Experience | Mumuni Abdulazeez (AzCodes)",
    },
    {
      name: "twitter:description",
      content: "Professional work experience of Mumuni Abdulazeez (AzCodes).",
    },
    { name: "twitter:image", content: "https://azcodes.dev/images/og-image.png" },
  ];
}

type Experience = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  roles: Role[];
  companyLogo: string;
  type: string;
};

type Role = {
  title: string;
  startDate: string;
  endDate: string;
};
export function loader({}: Route.LoaderArgs): Experience[] {
  return [
    {
      title: "Antartes",
      description:
        "Antartes is a tech agency, that helps build digital solutions for school, hospitals, and other companies or business seeking to get digital presences",
      startDate: "2026",
      endDate: "Till Date",
      roles: [
        { title: "Project Manager", startDate: "2026", endDate: "Till Date" },
        { title: "Backend Engineer", startDate: "2026", endDate: "Till Date" },
      ],
      companyLogo: "/images/antartes_logo.png",
      type: "Self-Employed",
    },
    {
      title: "Charmpay",
      description:
        "Charmpay is an escrow payment platform that ensures secure transactions between buyers and sellers.",
      startDate: "2024",
      endDate: "Till Date",
      roles: [
        { title: "Backend Engineer", startDate: "2024", endDate: "Till Date" },
      ],
      companyLogo: "/images/charmpay_logo.png",
      type: "Contract",
    },
  ];
}

export default function Experience({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <p className="text-white/60 mt-2">See where I have worked before</p>

      <div className="mt-3 space-y-3">
        {loaderData.map((project) => {
          const [descOpen, setDescOpen] = useState(false);
          return (
            <div key={project.title} className="flex items-start gap-4">
              <img
                src={project.companyLogo}
                alt={project.title}
                width={50}
                draggable={false}
              />
              <div>
                <div className="flex items-center gap-x-1">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <GoDotFill className="text-white/60" size={10} />
                  <p className="text-white/60">{project.type}</p>
                </div>
                <button
                  className="cursor-target flex text-sm items-center gap-2 text-white/60 hover:text-white! font-light"
                  onClick={() => setDescOpen((prev) => !prev)}
                >
                  <HugeiconsIcon icon={descOpen ? ChevronUp : ChevronDown} />{" "}
                  Description
                </button>
                {descOpen && (
                  <p className="text-white mt-2 text-sm">
                    {project.description}
                  </p>
                )}
                <div className="mt-2 space-y-2">
                  {project.roles.map((role) => (
                    <div>
                      <h2 className="text-sm">{role.title}</h2>
                      <p className="text-white/60 text-sm">
                        {role.startDate} - {role.endDate}{" "}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
