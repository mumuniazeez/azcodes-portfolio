import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_landing.tools";
import {
  Bolt,
  CssThreeIcon,
  HtmlFiveIcon,
  JavaScriptIcon,
  Next,
  NodeAddIcon,
  QuestionIcon,
  ReactIcon,
  SquareArrowRight,
  TailwindcssIcon,
  Typescript01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { FaNodeJs } from "react-icons/fa6";
import {
  DiBootstrap,
  DiExtjs,
  DiGit,
  DiMongodb,
  DiNginx,
  DiPostgresql,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiPostman,
  SiVitess,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiNginx,
  SiDocker,
  SiSwagger,
  SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons/lib";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tools & Tech Stack | Mumuni Abdulazeez (AzCodes)" },
    {
      name: "description",
      content:
        "Explore the technology stack and development tools used by Mumuni Abdulazeez (AzCodes), including React, Node.js, TypeScript, and more.",
    },
    {
      name: "keywords",
      content:
        "Tech Stack, React, Node.js, TypeScript, Next.js, Docker, Nginx, PostgreSQL, MongoDB, AzCodes",
    },
    { name: "author", content: "Mumuni Abdulazeez (AzCodes)" },
    {
      property: "og:title",
      content: "Tools & Tech Stack | Mumuni Abdulazeez (AzCodes)",
    },
    {
      property: "og:description",
      content: "The tech stack and tools used by Mumuni Abdulazeez (AzCodes).",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://azcodes.dev/tools" },
    {
      property: "og:image",
      content: "https://azcodes.dev/images/og-image.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@azcodesdev" },
    { name: "twitter:creator", content: "@azcodesdev" },
    {
      name: "twitter:title",
      content: "Tools & Tech Stack | Mumuni Abdulazeez (AzCodes)",
    },
    {
      name: "twitter:description",
      content: "The tech stack and tools used by Mumuni Abdulazeez (AzCodes).",
    },
    {
      name: "twitter:image",
      content: "https://azcodes.dev/images/og-image.png",
    },
  ];
}

interface LoaderData {
  label: string;
  tools: Tool[];
}
type Tool = {
  name: string;
  icon: IconSvgElement | IconType;
};

export function clientLoader({}: Route.LoaderArgs): LoaderData[] {
  return [
    {
      label: "Frontend",
      tools: [
        {
          name: "ReactJS",
          icon: ReactIcon,
        },

        {
          name: "NextJS",
          icon: SiNextdotjs,
        },
        {
          name: "BootstrapCSS",
          icon: DiBootstrap,
        },
        {
          name: "TailwindCSS",
          icon: TailwindcssIcon,
        },
        {
          name: "React Native",
          icon: ReactIcon,
        },
        {
          name: "HTML",
          icon: HtmlFiveIcon,
        },
        {
          name: "CSS",
          icon: CssThreeIcon,
        },
        {
          name: "JavaScript",
          icon: JavaScriptIcon,
        },
        {
          name: "TypeScript",
          icon: Typescript01FreeIcons,
        },
      ],
    },
    {
      label: "Backend & Infrastructure",
      tools: [
        {
          name: "NodeJS",
          icon: SiNodedotjs,
        },
        {
          name: "Express",
          icon: SiExpress,
        },
        {
          name: "Postman",
          icon: SiPostman,
        },
        {
          name: "Swagger",
          icon: SiSwagger,
        },
        {
          name: "PostgreSQL",
          icon: DiPostgresql,
        },
        {
          name: "MongoDB",
          icon: DiMongodb,
        },
        {
          name: "NGINX",
          icon: SiNginx,
        },
        {
          name: "Docker",
          icon: SiDocker,
        },
      ],
    },
    {
      label: "Development Tools",
      tools: [
        {
          name: "Git",
          icon: DiGit,
        },
        {
          name: "Github",
          icon: SiGithub,
        },
        {
          name: "Vite",
          icon: SiVitess,
        },
        {
          name: "Visual Studio Code",
          icon: DiVisualstudio,
        },
      ],
    },
  ];
}

export default function Tools({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tools</h1>
      <p className="text-white/60 mt-2">
        See my Tech Stack, and my daily go to tools
      </p>

      <div className="mt-3 space-y-3">
        {loaderData.map((data) => (
          <div className="my-5">
            <p className="text-xl">{data.label}</p>
            <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-4 items-center justify-between gap-4">
              {data.tools.map((tool) => (
                <div className="group transition-all cursor-target flex justify-center flex-col items-center">
                  <div className="group-hover:scale-110 group-hover:bg-white/10 p-2 rounded-lg mb-2">
                    {typeof tool.icon === "function" ? (
                      <tool.icon size={30} />
                    ) : (
                      <HugeiconsIcon icon={tool.icon} size={30} />
                    )}
                  </div>
                  <p className="text-[10px] text-white/60 group-hover:text-white text-center">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
