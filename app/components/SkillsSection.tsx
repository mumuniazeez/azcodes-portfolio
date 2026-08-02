import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

import type { Skill } from "./SkillCard";

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
    masteryScore: 95,
    technicalCapabilities:
      "Strict typing, generics, utility types, and AST transformations for robust software systems.",
    favoriteFeature: "Type inference & union discriminating types",
  },
  {
    title: "React 19 & Next.js",
    category: "FRONTEND",
    experience: "4 Years",
    proficiency: 92,
    masteryScore: 92,
    technicalCapabilities:
      "Server Actions, Hooks, Suspense, custom context providers, state management with Zustand & Redux.",
    favoriteFeature: "Use hook & automatic batching",
  },
  {
    title: "Tailwind CSS & Styling",
    category: "FRONTEND",
    experience: "4 Years",
    proficiency: 98,
    masteryScore: 98,
    technicalCapabilities:
      "Neobrutalism UI design, custom color design tokens, fluid layouts, animation keyframes.",
    favoriteFeature: "Arbitrary values & container queries",
  },
  {
    title: "Node.js & Express",
    category: "BACKEND",
    experience: "3.5 Years",
    proficiency: 90,
    masteryScore: 90,
    technicalCapabilities:
      "Middleware architecture, ESM/CJS bundling, stream processing, security headers, rate limiting.",
    favoriteFeature: "Async middleware pipelines & event loops",
  },
  {
    title: "PostgreSQL & Prisma",
    category: "BACKEND",
    experience: "3 Years",
    proficiency: 85,
    masteryScore: 85,
    technicalCapabilities:
      "Relational schema design, indexes, triggers, complex SQL joins, ORM migrations.",
    favoriteFeature: "JSONB columns & transaction isolations",
  },
  {
    title: "REST & GraphQL APIs",
    category: "BACKEND",
    experience: "4 Years",
    proficiency: 90,
    masteryScore: 90,
    technicalCapabilities:
      "API design best practices, Swagger/OpenAPI spec, rate limiting, token auth, batching.",
    favoriteFeature: "Typed schema contracts with Zod",
  },
  {
    title: "Docker & Cloud Run",
    category: "DEVOPS & TOOLS",
    experience: "2.5 Years",
    proficiency: 80,
    masteryScore: 80,
    technicalCapabilities:
      "Multi-stage Docker builds, container orchestration, environment variables, Cloud Run serverless.",
    favoriteFeature: "Sub-second cold-start deployments",
  },
  {
    title: "Git & CI/CD Workflows",
    category: "DEVOPS & TOOLS",
    experience: "4 Years",
    proficiency: 90,
    masteryScore: 90,
    technicalCapabilities:
      "Git flow, GitHub Actions, automated linting, test runners, semantic release tagging.",
    favoriteFeature: "Automated test matrix workflows",
  },
];
export default function SkillsSection() {
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
    </section>
  );
}
