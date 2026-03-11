import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_landing.services";
import { SquareArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SiGithub } from "react-icons/si";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Community & Services | Mumuni Abdulazeez (AzCodes)" },
    {
      name: "description",
      content:
        "Learn how Mumuni Abdulazeez (AzCodes) contributes to the community through technology education, volunteering, and digital services.",
    },
    {
      name: "keywords",
      content: "Volunteering, Tech Education, Community Service, Digital Solutions, AzCodes",
    },
    { name: "author", content: "Mumuni Abdulazeez (AzCodes)" },
    { property: "og:title", content: "Community & Services | Mumuni Abdulazeez (AzCodes)" },
    {
      property: "og:description",
      content: "Community contributions and services by Mumuni Abdulazeez (AzCodes).",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://azcodes.dev/services" },
    { property: "og:image", content: "https://azcodes.dev/images/og-image.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@azcodesdev" },
    { name: "twitter:creator", content: "@azcodesdev" },
    { name: "twitter:title", content: "Community & Services | Mumuni Abdulazeez (AzCodes)" },
    {
      name: "twitter:description",
      content: "Community contributions and services by Mumuni Abdulazeez (AzCodes).",
    },
    { name: "twitter:image", content: "https://azcodes.dev/images/og-image.png" },
  ];
}

type Project = {
  title: string;
  description: string;
  image: string;
};

export function loader({}: Route.LoaderArgs): Project[] {
  return [
    {
      title: "Tech Summer fro Teens by TGDI",
      description:
        "Volunteered in 2025 to help introduce teenagers in underserved Nigerian communities to technology. Supported coding sessions, guided students through basic programming concepts, and encouraged interest in digital skills and problem-solving.",
      image: "/images/tgdi_image.png",
    },
  ];
}

export default function Services({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Services</h1>
      <p className="text-white/60 mt-2">
        See how I have contributed to the community
      </p>

      <div className="mt-3 space-y-3 ">
        {loaderData.map((project) => (
          <div
            key={project.title}
            className="flex items-start gap-4 border p-3 border-white/60 rounded-3xl cursor-target"
          >
            <img
              src={project.image}
              alt={project.title}
              width={200}
              draggable={false}
            />
            <div>
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-white/60 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
