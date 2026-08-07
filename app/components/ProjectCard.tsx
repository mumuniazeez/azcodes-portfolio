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

export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  isLive: boolean;
  tags: ("AI & CODING" | "FULL-STACK" | "OPEN SOURCE" | "APP")[];
  techStack: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="neo-box hover:-translate-y-1 transition-all flex flex-col justify-between">
      <div className="p-4 bg-main flex items-center flex-wrap gap-x-3 border-b-2">
        {project.tags.map((tag) => (
          <Badge variant={"neutral"} key={tag} className="font-bold">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="px-4 py-5 bg-secondary-background border-b-2 space-y-3 h-full">
        <h3 className="text-xl">{project.title.toUpperCase()}</h3>
        <p className="border-l-3 ps-2 text-sm text-black/80 font-semibold">
          {project.shortDescription}
        </p>
        <p className="text-black/80 font-semibold">{project.description}</p>
        <div className="flex items-center flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <Badge variant={"neutral"} key={tech} className="font-bold">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <div className="p-4 bg-background flex items-center justify-between">
        {/* <Button>
          <HugeiconsIcon icon={Layer} /> CASE STUDY
        </Button> */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <Link to={project.githubUrl} target="_blank">
              <Button size={"icon"}>
                <HugeiconsIcon icon={Github} />
              </Button>
            </Link>
          )}
          {project.liveUrl && (
            <Link to={project.liveUrl} target="_blank">
              <Button size={"icon"}>
                <HugeiconsIcon icon={ArrowUpRight} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
