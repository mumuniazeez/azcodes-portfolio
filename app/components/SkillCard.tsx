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
import { Progress } from "./ui/progress";

export interface Skill {
  title: string;
  category: "FRONTEND" | "BACKEND" | "DEVOPS & TOOLS";
  experience: string; 
  proficiency: number; // 0-100
  technicalCapabilities: string;
  favoriteFeature: string;
}

export default function SkillCard({ skill,setSelectedSkill }: { skill: Skill, setSelectedSkill: (skill: Skill) => void }) {
  return (
    <div className="neo-box hover:-translate-y-1 transition-all flex flex-col justify-between p-4 bg-main space-y-3 cursor-pointer" onClick={()=> setSelectedSkill(skill)}>
      <div className="flex items-center justify-between">
        <Badge variant={"neutral"}>{skill.category}</Badge>
        <p className="text-sm font-bold">{skill.experience}</p>
      </div>
      <h4 className="text-xl">{skill.title.toUpperCase()}</h4>
      <Progress value={skill.proficiency} />
         <div className="flex items-center justify-between">
        <p className="text-xs font-bold">PROFICIENCY</p>
        <p className="text-xs font-bold">{skill.proficiency}%</p>
      </div>
    </div>
  );
}
