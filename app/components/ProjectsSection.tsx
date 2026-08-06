"use client";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";

import { Badge } from "~/components/ui/badge";
import { Input } from "./ui/input";
import type { Project } from "./ProjectCard";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { Filter } from "@hugeicons/core-free-icons";

const tags: Project["tags"] = [
  "AI & CODING",
  "FULL-STACK",
  "OPEN SOURCE",
  "APP",
];

const projects: Project[] = [
  {
    title: "Charmpay",
    shortDescription: "Secure escrow payments for buyers and sellers.",
    description:
      "Charmpay is an escrow payment platform that ensures secure transactions between buyers and sellers.",
    liveUrl: "https://charmpay.com.ng",
    isLive: true,
    tags: ["FULL-STACK", "APP"],
    techStack: ["NodeJS", "Nestjs", "PostgreSQL"],
  },
  {
    title: "AzCodes Portfolio",
    shortDescription: "My personal portfolio showcasing projects and skills.",
    description:
      "This is a portfolio i built to showcase my project, skill, experience and a little about myself.",
    liveUrl: "https://azcodes.vercel.app",
    isLive: true,
    githubUrl: "https://github.com/mumuniazeez/azcodes-portfolio",
    tags: ["FULL-STACK"],
    techStack: ["ReactJS", "TypeScript", "TailwindCSS", "Vite", "Shadcn UI"],
  },
  {
    title: "MeFile",
    shortDescription: "Free online image resizer and file converter.",
    description:
      "Me-file is an online application that allow its user to resize images, and many more for FREE. This application is one best online FREE file converter.",
    liveUrl: "https://mefile.vercel.app",
    isLive: true,
    githubUrl: "https://github.com/mumuniazeez/me-file-project",
    tags: ["FULL-STACK", "OPEN SOURCE", "APP"],
    techStack: ["ReactJS", "TypeScript", "Vite"],
  },
  {
    title: "Shipmates",
    shortDescription:
      "A Hack Club matchmaker for finding project collaborators.",
    description:
      "Shipmate is an Hack Club match maker for hackers. Where you get to meet people to collaborate on project's with you.",
    isLive: false,
    githubUrl: "https://github.com/mumuniazeez/shipmates",
    tags: ["FULL-STACK", "OPEN SOURCE"],
    techStack: ["ReactJS", "TypeScript", "TailwindCSS", "Vite", "Shadcn UI"],
  },
  {
    title: "PDFman",
    shortDescription: "Open source web app for editing PDF documents.",
    description:
      "PDFman is an open source web application that allows you to edit PDF documents (Add text annotations, Signature, Rearrange Pages, etc)..",
    liveUrl: "https://pdfman-xi.vercel.app",
    isLive: true,
    githubUrl: "https://github.com/mumuniazeez/pdfman",
    tags: ["FULL-STACK", "OPEN SOURCE", "APP"],
    techStack: ["ReactJS", "TypeScript", "TailwindCSS", "Vite", "Shadcn UI"],
  },
  {
    title: "Backsnip",
    shortDescription: "A library of reusable backend code snippets.",
    description:
      "Backsnip contains a collection of pre-written solutions for common backend development tasks, covering various programming languages and frameworks. The goal is to provide a centralized resource for developers to find and reuse solutions, promoting efficiency and collaboration.",
    liveUrl: "https://backsnip.live",
    isLive: true,
    githubUrl: "https://github.com/mumuniazeez/backsnip",
    tags: ["OPEN SOURCE", "AI & CODING"],
    techStack: ["NodeJS", "ExpressJS", "PostgreSQL", "Google Gemini"],
  },
  {
    title: "Lobby",
    shortDescription: "Real-time chat platform for online communities.",
    description:
      "Lobby is an online chatting platform for communities. Lobby makes it possible for people to connect with each other, build up communities and share important information.",
    liveUrl: "https://lobbyapp.vercel.app",
    isLive: true,
    githubUrl: "https://github.com/mumuniazeez/lobbyapp",
    tags: ["FULL-STACK", "APP"],
    techStack: [
      "React",
      "Bootstrap",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "Socket.io",
    ],
  },
];
export default function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<Project["tags"][0] | "ALL">(
    "ALL",
  );

  const [search, setSearch] = useState("");

  return (
    <section className="px-10  md:px-30 py-20 space-y-10 border-t-2 bg-grid-pattern" id="projects">
      <div className="flex gap-5 items-start md:items-end justify-between flex-col md:flex-row">
        <div className="space-y-3">
          <Badge className="font-bold">// FEATURED PORTFOLIO</Badge>
          <h3 className="text-3xl md:text-5xl">
            SELECTED{" "}
            <span className="p-2 neo-box bg-main font-bold w-fit ">
              PROJECTS
            </span>
          </h3>
        </div>
        <p className="text-lg font-bold border-main border-l-5 ps-3 md:max-w-150 text-black/80">
          Production-grade fullstack web applications, AI integrations,
          developer tools, and open-source packages.
        </p>
      </div>
      <div className="bg-secondary-background neo-box p-3 gap-5 flex items-center justify-between flex-col md:flex-row">
        <div className="flex items-center gap-3 flex-wrap">
          <HugeiconsIcon icon={Filter} />
          <Button
            onClick={() => setSelectedTag("ALL")}
            variant={selectedTag === "ALL" ? "default" : "neutral"}
          >
            ALL
          </Button>
          {tags.map((tag, idx) => (
            <Button
              key={idx}
              onClick={() => setSelectedTag(tag)}
              variant={selectedTag === tag ? "default" : "neutral"}
            >
              {tag}
            </Button>
          ))}
        </div>
        <Input
          placeholder="Search projects...."
          className="md:w-150"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter(
            (p) =>
              p.title.toLowerCase().includes(search.toLowerCase()) ||
              p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
              p.description.toLowerCase().includes(search.toLowerCase()),
          )
          .filter((p) =>
            selectedTag !== "ALL" ? p.tags.includes(selectedTag) : true,
          )
          .map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
      </div>
    </section>
  );
}
