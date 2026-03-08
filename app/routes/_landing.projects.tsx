import type { Route } from "./+types/_landing.projects";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Projects",
    },
  ];
}

type Project = {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  isLive: boolean;
};

export function loader({}: Route.LoaderArgs): Project[] {
  return [
    {
      title: "",
      description: "",
      liveUrl: "",
      githubUrl: "",
      isLive: true,
    },
  ];
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="text-white/60 mt-2">See what I've built</p>
    </div>
  );
}
