import ClientOnlyComponent from "~/components/ClientOnlyComponent";
import TargetCursor from "../components/TargetCursor";
import type { Route } from "./+types/_landing._index";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github, Linkedin, Twitter, X } from "@hugeicons/core-free-icons";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Mumuni Abdulazeez (AzCodes) - Full-Stack Developer" },
    {
      name: "description",
      content:
        "Mumuni Abdulazeez (AzCodes) is a Full-Stack Developer and Product-Focused Builder passionate about building useful technology and digital solutions.",
    },
    {
      name: "keywords",
      content: "Full-Stack Developer, Product Builder, ReactJS, NextJS, NodeJS, Portfolio, Mumuni Abdulazeez, AzCodes",
    },
    { name: "author", content: "Mumuni Abdulazeez (AzCodes)" },
    { property: "og:title", content: "About | Mumuni Abdulazeez (AzCodes)" },
    {
      property: "og:description",
      content: "Full-Stack Developer and Product-Focused Builder passionate about building useful technology.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://azcodes.dev/" },
    { property: "og:image", content: "https://azcodes.dev/images/og-image.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@azcodesdev" },
    { name: "twitter:creator", content: "@azcodesdev" },
    { name: "twitter:title", content: "About | Mumuni Abdulazeez (AzCodes)" },
    {
      name: "twitter:description",
      content: "Full-Stack Developer and Product-Focused Builder.",
    },
    { name: "twitter:image", content: "https://azcodes.dev/images/og-image.png" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About me</h1>
      <p className="text-white/60 mt-2">Get to know me</p>

      <div className="mt-3 space-y-3">
        <p>
          I’m a developer who is passionate about building useful technology and
          understanding how systems work from the inside out. My interests span
          across full-stack web development, product design, and exploring
          emerging technologies that can solve real-world problems.
        </p>

        <p>
          I enjoy transforming ideas into real, working products. Whether it's
          designing and developing web applications, managing a development
          team, or experimenting with new tools and frameworks, I love the
          process of building things that people can actually use. For me,
          programming is not just about writing code—it’s about creating
          solutions, improving systems, and continuously learning better ways to
          build technology
        </p>

        <p>
          Beyond development, I also volunteer to help introduce young students
          to programming and technology, because I believe access to tech
          education can change lives.
        </p>
      </div>
    </div>
  );
}
