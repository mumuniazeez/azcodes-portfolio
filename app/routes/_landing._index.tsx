import ClientOnlyComponent from "~/components/ClientOnlyComponent";
import TargetCursor from "../components/TargetCursor";
import type { Route } from "./+types/_landing._index";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight,
  Download,
  Email,
  Github,
  Github01FreeIcons,
  GithubIcon,
  Linkedin,
  Twitter,
  X,
} from "@hugeicons/core-free-icons";
import { Outlet } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import Marquee from "~/components/ui/marquee";

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
      <section className="bg-grid-pattern bg-secondary-background px-30 py-20">
        <Badge
          variant={"neutral"}
          className="text-xl font-semibold neo-box transition-all -rotate-2 hover:rotate-0"
        >
          <div className="p-2 bg-main rounded-full animate-pulse" />
          AVAILABLE FOR FREELANCING AND FULL-TIME ROLES
        </Badge>

        <div className="flex items-center justify-between gap-x-10 my-8">
          <div className="space-y-2 md:w-[50%]">
            <h1 className="text-6xl">HEY! I'M</h1>
            <h1 className="text-6xl p-2 bg-white neo-box rotate-1 font-bold">
              ABDULAZEEZ MUMUNI
            </h1>
            <p className="mt-8 text-lg font-bold border-main border-l-5 ps-3">
              Software Engineer & Full-Stack Architect
            </p>
            <p className="mt-8">
              Passionate Full-Stack Engineer crafting high-performance web
              applications, scalable cloud backends, and intuitive user
              experiences. Specialized in React, TypeScript, Node.js, and
              AI-driven web technologies
            </p>
            <div className="flex items-center space-x-3">
              <Badge className="neo-box" variant={"neutral"}>
                #REACT
              </Badge>
              <Badge className="neo-box" variant={"neutral"}>
                #TYPESCRIPT
              </Badge>
              <Badge className="neo-box" variant={"neutral"}>
                #NODE.JS
              </Badge>
              <Badge className="neo-box" variant={"neutral"}>
                #TAILWIND CSS
              </Badge>
              <Badge className="neo-box" variant={"neutral"}>
                #EXPRESS.JS
              </Badge>
              <Badge className="neo-box" variant={"neutral"}>
                #NEST.JS
              </Badge>
              <Badge className="neo-box" variant={"neutral"}>
                #POSTGRESQL
              </Badge>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <Button>
                SEE MY WORK <HugeiconsIcon icon={ArrowUpRight} />
              </Button>
              <Button>
                <HugeiconsIcon icon={Download} />
                GET RESUME
              </Button>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <p className="">Connect: </p>
              <Button>
                <HugeiconsIcon icon={GithubIcon} fontWeight={900} />
              </Button>
              <Button>
                <HugeiconsIcon icon={Twitter} fontWeight={900} />
              </Button>
              <Button>
                <HugeiconsIcon icon={Email} fontWeight={900} />
              </Button>
            </div>
          </div>

          {/* <Card className="mx-auto bg-main">
          <CardContent>
            <Card className="mx-auto bg-secondary-background">
              <CardContent>
                <div className="p-10 flex items-center justify-center flex-col bg-main border-border border-2 hover:scale-105 transition-all group">
                  <div className="div rounded-full neo-box w-30 h-30 flex items-center justify-center bg-secondary-background group-hover:rotate-8 transition-all">
                    <h1 className="text-5xl">AZ</h1>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card> */}

          <div className="relative">
            <Badge className="font-semibold neo-box transition-all -rotate-6 absolute bottom-2 -right-3">
              {"<AzCodes />"}{" "}
              <span className="text-black/60">// Full-Stack Eng.</span>
            </Badge>
            <img
              className="neo-box  w-100 h-100"
              src="/images/azcodes-mumuni-abdulazeez.jpeg"
              alt="Mumuni Abdulazeez AzCodes"
            />
          </div>
        </div>
      </section>
      <section id="marque">
        <Marquee
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
    </div>
  );
}
