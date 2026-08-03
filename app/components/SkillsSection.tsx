import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

import type { Skill } from "./SkillCard";
import SkillCard from "./SkillCard";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight, Chip, Favorite, Sparkle } from "@hugeicons/core-free-icons";
import { Dot } from "lucide-react";
import { Progress } from "./ui/progress";

const categories: Skill["category"][] = [
  "FRONTEND",
  "BACKEND",
  "DEVOPS & TOOLS",
];

const skills: Skill[] = [
  {
    title: "TypeScript",
    category: "FRONTEND",
    experience: "4 Years",
    proficiency: 95,
    technicalCapabilities:
      "Strict typing, generics, utility types, and AST transformations for robust software systems.",
    favoriteFeature: "Type inference & union discriminating types",
  },
  {
    title: "React 19 & Next.js",
    category: "FRONTEND",
    experience: "4 Years",
    proficiency: 92,
    technicalCapabilities:
      "Server Actions, Hooks, Suspense, custom context providers, state management with Zustand & Redux.",
    favoriteFeature: "Use hook & automatic batching",
  },
  {
    title: "Tailwind CSS & Styling",
    category: "FRONTEND",
    experience: "4 Years",
    proficiency: 98,
    technicalCapabilities:
      "Neobrutalism UI design, custom color design tokens, fluid layouts, animation keyframes.",
    favoriteFeature: "Arbitrary values & container queries",
  },
  {
    title: "Node.js & Express",
    category: "BACKEND",
    experience: "3.5 Years",
    proficiency: 90,
    technicalCapabilities:
      "Middleware architecture, ESM/CJS bundling, stream processing, security headers, rate limiting.",
    favoriteFeature: "Async middleware pipelines & event loops",
  },
  {
    title: "PostgreSQL & Prisma",
    category: "BACKEND",
    experience: "3 Years",
    proficiency: 85,
    technicalCapabilities:
      "Relational schema design, indexes, triggers, complex SQL joins, ORM migrations.",
    favoriteFeature: "JSONB columns & transaction isolations",
  },
  {
    title: "REST & GraphQL APIs",
    category: "BACKEND",
    experience: "4 Years",
    proficiency: 90,
    technicalCapabilities:
      "API design best practices, Swagger/OpenAPI spec, rate limiting, token auth, batching.",
    favoriteFeature: "Typed schema contracts with Zod",
  },
  {
    title: "Docker & Cloud Run",
    category: "DEVOPS & TOOLS",
    experience: "2.5 Years",
    proficiency: 80,
    technicalCapabilities:
      "Multi-stage Docker builds, container orchestration, environment variables, Cloud Run serverless.",
    favoriteFeature: "Sub-second cold-start deployments",
  },
  {
    title: "Git & CI/CD Workflows",
    category: "DEVOPS & TOOLS",
    experience: "4 Years",
    proficiency: 90,
    technicalCapabilities:
      "Git flow, GitHub Actions, automated linting, test runners, semantic release tagging.",
    favoriteFeature: "Automated test matrix workflows",
  },
];
export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);
  return (
    <section className="px-30 py-20 space-y-10 border-t-2">
      <div className="flex items-end justify-between">
        <div className="space-y-3">
          <Badge className="font-bold">// TECH SKILLS MATRIX</Badge>
          <h3 className="text-5xl">
            SKILLS &{" "}
            <span className="p-2 neo-box bg-main font-bold w-fit ">
              CAPABILITIES
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-x-3">
          <Button>All</Button>
          {categories.map((category) => (
            <Button key={category}>{category}</Button>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[50%]">
          {skills.map((skill, idx) => (
            <SkillCard
              skill={skill}
              setSelectedSkill={setSelectedSkill}
              key={idx}
            />
          ))}
        </div>
        <div className="bg-secondary-background border-border shadow-shadow border-2 p-3 h-fit md:w-[50%] sticky top-25 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b-2">
            <div className="flex items-center gap-2">
              <HugeiconsIcon icon={Chip} size={18} />
              <p className="text-sm font-bold">INSPECTOR MATRIX</p>
            </div>
            <Badge variant={"neutral"}>SELECTED</Badge>
          </div>
          <Badge variant={"neutral"}>{selectedSkill.category}</Badge>
          <h2 className="text-3xl">{selectedSkill.title.toUpperCase()}</h2>
          <div className="flex items-center gap-0.5 text-xs font-semibold">
            <p>EXPERIENCE: {selectedSkill.experience}</p>
            <Dot />
            <p>MASTERY SCORE: {selectedSkill.proficiency}/100</p>
          </div>
          <div className="border-border shadow-shadow bg-secondary-background p-3 border-2 space-y-3">
            <div className="flex items-center justify-between ">
              <p className="text-xs font-bold">SKILL PROFICIENCY LEVEL</p>
              <p className="text-xs font-bold">{selectedSkill.proficiency}%</p>
            </div>
            <Progress value={selectedSkill.proficiency} />
          </div>
          <div className="border-border shadow-shadow bg-secondary-background p-3 border-2 space-y-3">
            <div className="flex items-center gap-2">
              <HugeiconsIcon icon={Sparkle} size={14} />

              <p className="text-xs font-bold">TECHNICAL CAPABILITIES</p>
            </div>
            <p>{selectedSkill.technicalCapabilities}</p>
          </div>
          <div className="border-border shadow-shadow bg-secondary-background p-3 border-2 space-y-3">
            <div className="flex items-center gap-2">
              <HugeiconsIcon icon={Favorite} size={14} />

              <p className="text-xs font-bold">FAVORITE FEATURE / ADVANTAGE</p>
            </div>
            <p>{selectedSkill.favoriteFeature}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
