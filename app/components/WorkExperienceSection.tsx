import { Button } from "~/components/ui/button";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  ArrowUp,
  ArrowUpRight,
  Bolt,
  Code,
  Download,
  Filter,
  Github,
  Layer,
  Rocket,
  ShieldCheck,
  Sparkle,
  X,
} from "@hugeicons/core-free-icons";
import { Badge } from "~/components/ui/badge";
import { Input } from "./ui/input";
import { Link } from "react-router";
import type { Project } from "./ProjectCard";
import ProjectCard from "./ProjectCard";
import type { WorkExperience } from "./WorkExperienceAccordion";
import WorkExperienceAccordion from "./WorkExperienceAccordion";

const workExperience: WorkExperience[] = [
  {
    id: 1,
    employmentType: "SELF-EMPLOYED",
    location: "REMOTE",
    company: "Antartes",
    companyLogo: "/images/antartes_logo.png",
    startDate: "2026",
    endDate: "Till Date",
    summary:
      "Antartes is a tech agency, that helps build digital solutions for school, hospitals, and other companies or business seeking to get digital presences",
    roles: [
      { title: "Project Manager", startDate: "2026", endDate: "Till Date" },
      { title: "Backend Engineer", startDate: "2026", endDate: "Till Date" },
    ],
    achievements: [
      "Managed end-to-end delivery of digital solutions for school, hospital, and business clients, coordinating timelines across design and engineering.",
      "Architected and built backend APIs and services powering client-facing digital platforms.",
      "Established internal development workflows and processes for a growing agency team.",
    ],
    technologiesAndSkills: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    id: 2,
    employmentType: "VOLUNTEER",
    location: "LAGOS, NIGERIA",
    company: "TGDI: Tech Summer for Teens",
    companyLogo: "/images/tdgi_logo.png",
    startDate: "18th August, 2025",
    endDate: "29th August, 2025",
    summary:
      "TGDI: Tech Summer for Teens is an event organized to teach Teenagers (13-18 years) about technology, focusing on the under-served communities in Nigeria",
    roles: [
      {
        title: "Facilitator for Web Development",
        startDate: "18th August, 2025",
        endDate: "29th August, 2025",
      },
    ],
    achievements: [
      "Taught foundational web development concepts (HTML, CSS, JavaScript) to teenagers aged 13-18 from under-served communities.",
      "Designed beginner-friendly curriculum and hands-on exercises to introduce first-time coders to building web pages.",
      "Mentored students through their first web development projects during the two-week program.",
    ],
    technologiesAndSkills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    employmentType: "CONTRACT",
    location: "REMOTE",
    company: "Charmpay",
    companyLogo: "/images/charmpay_logo.png",
    startDate: "2024",
    endDate: "Till Date",
    summary:
      "Charmpay is an escrow payment platform that ensures secure transactions between buyers and sellers.",
    roles: [
      { title: "Backend Engineer", startDate: "2024", endDate: "Till Date" },
    ],
    achievements: [
      "Built secure escrow transaction flows ensuring safe fund handling between buyers and sellers.",
      "Designed backend APIs and database schema to support payment lifecycle states (pending, held, released, disputed).",
      "Implemented business logic for transaction verification and dispute resolution.",
    ],
    technologiesAndSkills: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
  },
];
export default function WorkExperienceSection() {
  return (
    <section
      className="px-10  md:px-30 py-20 space-y-10 border-t-2 bg-dots-pattern"
      id="experience"
    >
      <div className="flex gap-5 items-start md:items-end justify-between flex-col md:flex-row">
        <div className="space-y-3">
          <Badge className="font-bold">// CAREER TIMELINE</Badge>
          <h3 className="text-3xl md:text-5xl">
            WORK &{" "}
            <span className="p-2 neo-box bg-main font-bold w-fit ">
              EXPERIENCE
            </span>
          </h3>
        </div>
        <p className="text-lg font-bold border-main border-l-5 ps-3 md:max-w-150 text-black/80">
          4+ years of building fullstack applications, leading frontend teams,
          and architecting scalable backend APIs.
        </p>
      </div>

      <div className="space-y-8">
        {workExperience.map((work, idx) => (
          <WorkExperienceAccordion key={idx} work={work} />
        ))}
      </div>
    </section>
  );
}
