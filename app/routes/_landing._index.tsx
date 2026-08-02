import type { Route } from "./+types/_landing._index";
import Marquee from "~/components/ui/marquee";
import AboutSection from "~/components/AboutSection";
import HeroSection from "~/components/HeroSection";
import ProjectsSection from "~/components/ProjectsSection";
import SkillsSection from "~/components/SkillsSection";

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
      content:
        "Full-Stack Developer, Product Builder, ReactJS, NextJS, NodeJS, Portfolio, Mumuni Abdulazeez, AzCodes",
    },
    { name: "author", content: "Mumuni Abdulazeez (AzCodes)" },
    { property: "og:title", content: "About | Mumuni Abdulazeez (AzCodes)" },
    {
      property: "og:description",
      content:
        "Full-Stack Developer and Product-Focused Builder passionate about building useful technology.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://azcodes.dev/" },
    {
      property: "og:image",
      content: "https://azcodes.dev/images/og-image.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@azcodesdev" },
    { name: "twitter:creator", content: "@azcodesdev" },
    { name: "twitter:title", content: "About | Mumuni Abdulazeez (AzCodes)" },
    {
      name: "twitter:description",
      content: "Full-Stack Developer and Product-Focused Builder.",
    },
    {
      name: "twitter:image",
      content: "https://azcodes.dev/images/og-image.png",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="marque">
        <Marquee
          key={"dd"}
          items={[
            "REACT",
            "TYPESCRIPT",
            "NEXT.JS",
            "TAILWINDCSS",
            "NODE.JS",
            "EXPRESS.JS",
            "NEST.JS",
            "POSTGRESQL",
          ]}
        />
      </section>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}
