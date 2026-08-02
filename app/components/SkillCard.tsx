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

export interface Skill {
  title: string;
  category: "FRONTEND" | "BACKEND" | "DEVOPS & TOOLS";
  experience: string; // e.g. "4 Years"
  proficiency: number; // 0-100
  masteryScore: number; // out of 100
  technicalCapabilities: string;
  favoriteFeature: string;
}


export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="neo-box hover:-translate-y-1 transition-all flex flex-col justify-between">
     
    </div>
  );
}
