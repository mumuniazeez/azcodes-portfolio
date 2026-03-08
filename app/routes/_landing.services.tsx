import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_landing.services";
import { SquareArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SiGithub } from "react-icons/si";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Services",
    },
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
