import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_landing.services";
import { SquareArrowRight, Twitter } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { SiGithub } from "react-icons/si";
import { GoDotFill } from "react-icons/go";

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
      content:
        "Volunteering, Tech Education, Community Service, Digital Solutions, AzCodes",
    },
    { name: "author", content: "Mumuni Abdulazeez (AzCodes)" },
    {
      property: "og:title",
      content: "Community & Services | Mumuni Abdulazeez (AzCodes)",
    },
    {
      property: "og:description",
      content:
        "Community contributions and services by Mumuni Abdulazeez (AzCodes).",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://azcodes.dev/services" },
    {
      property: "og:image",
      content: "https://azcodes.dev/images/og-image.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@azcodesdev" },
    { name: "twitter:creator", content: "@azcodesdev" },
    {
      name: "twitter:title",
      content: "Community & Services | Mumuni Abdulazeez (AzCodes)",
    },
    {
      name: "twitter:description",
      content:
        "Community contributions and services by Mumuni Abdulazeez (AzCodes).",
    },
    {
      name: "twitter:image",
      content: "https://azcodes.dev/images/og-image.png",
    },
  ];
}

type ProjectLink = {
  label: string;
  icon: IconSvgElement;
  to: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  links: ProjectLink[];
};

export function loader({}: Route.LoaderArgs): Project[] {
  return [
    {
      title: "Tech Summer fro Teens by TGDI",
      description:
        "Volunteered in 2025 to help introduce teenagers in underserved Nigerian communities to technology. Supported coding sessions, guided students through basic programming concepts, and encouraged interest in digital skills and problem-solving.",
      image: "/images/tgdi_image.png",
      location: "Iju-Ishaga, Lagos",
      date: "August 2025",
      links: [
        {
          icon: Twitter,
          label: "Open Post on",
          to: "https://x.com/azcodesdev/status/1958782391092126073?s=20",
        },
      ],
    },
    {
      title: "Adopting to Change: AI and the future of Relevance in Tech",
      description:
        "I talked about how AI has come to revolutionize the way developers work, with several developer/beginners on board, we were able to clarify the future of Tech with AI",
      image: "/images/ilem_space_image.jpeg",
      location: "Online, X Space",
      date: "5th September 2025",
      links: [
        {
          icon: Twitter,
          label: "Listen to on",
          to: "https://x.com/Real_Tecky_Guy/status/1963912362739593655?s=20",
        },
      ],
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
            className="flex md:items-start items-center flex-col md:flex-row gap-4 border p-3 border-white/60 rounded-3xl"
          >
            <img
              src={project.image}
              alt={project.title}
              width={200}
              draggable={false}
            />
            <div>
              <div className="flex items-center font-bold gap-x-1 text-sm">
                <p className="text-white/60 mt-2">{project.location}</p>
                <GoDotFill className="text-white/60" size={10} />
                <p className="text-white/60 mt-2">{project.date}</p>
              </div>
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-white/60 mt-2">{project.description}</p>

              <div className="mt-2 flex gap-x-2">
                {project.links.map((link) => (
                  <a href={link.to} target="_blank" rel="noopener noreferrer">
                    <Button className="cursor-none cursor-target">
                      {link.label} <HugeiconsIcon icon={link.icon} size={30} />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
