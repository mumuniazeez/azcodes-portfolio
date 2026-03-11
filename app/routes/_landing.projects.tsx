import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_landing.projects";
import { SquareArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SiGithub } from "react-icons/si";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Mumuni Abdulazeez (AzCodes)" },
    {
      name: "description",
      content:
        "Explore a collection of projects built by Mumuni Abdulazeez (AzCodes), including Charmpay and other modern web applications.",
    },
    {
      name: "keywords",
      content: "Projects, Portfolio, Software Engineering, Charmpay, web applications, AzCodes",
    },
    { name: "author", content: "Mumuni Abdulazeez (AzCodes)" },
    { property: "og:title", content: "Projects | Mumuni Abdulazeez (AzCodes)" },
    {
      property: "og:description",
      content: "Explore a collection of projects built by Mumuni Abdulazeez (AzCodes).",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://azcodes.dev/projects" },
    { property: "og:image", content: "https://azcodes.dev/images/og-image.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@azcodesdev" },
    { name: "twitter:creator", content: "@azcodesdev" },
    { name: "twitter:title", content: "Projects | Mumuni Abdulazeez (AzCodes)" },
    {
      name: "twitter:description",
      content: "Explore a collection of projects built by Mumuni Abdulazeez (AzCodes).",
    },
    { name: "twitter:image", content: "https://azcodes.dev/images/og-image.png" },
  ];
}

type Project = {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  isLive: boolean;
  projectImg: string;
};

export function loader({}: Route.LoaderArgs): Project[] {
  return [
    {
      title: "Charmpay",
      description:
        "Charmpay is an escrow payment platform that ensures secure transactions between buyers and sellers.",
      liveUrl: "https://charmpay.com.ng",
      isLive: true,
      projectImg: "/images/charmpay_logo.png",
    },
  ];
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="text-white/60 mt-2">See what I've built</p>

      <div className="mt-3 space-y-3">
        {loaderData.map((project) => (
          <div key={project.title} className="flex items-start gap-4">
            <img src={project.projectImg} alt={project.title} width={50} draggable={false} />
            <div>
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-white/60 mt-2">{project.description}</p>
              <div className="flex items-center gap-4 mt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={"cursor-target"}>
                      See it Live <HugeiconsIcon icon={SquareArrowRight} />
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={"cursor-target"}>
                   See it on Github   GitHub <SiGithub />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
