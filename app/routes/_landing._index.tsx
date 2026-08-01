import ClientOnlyComponent from "~/components/ClientOnlyComponent";
import TargetCursor from "../components/TargetCursor";
import type { Route } from "./+types/_landing._index";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight,
  Bolt,
  Code,
  Download,
  Email,
  Github,
  Github01FreeIcons,
  GithubIcon,
  Linkedin,
  Rocket,
  Shield,
  ShieldCheck,
  Sparkle,
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
          <div className="p-2 bg-green-500 rounded-full animate-pulse" />
          AVAILABLE FOR FREELANCING AND FULL-TIME ROLES
        </Badge>

        <div className="flex items-center justify-between gap-x-10 my-8">
          <div className="space-y-2 md:w-[50%]">
            <h1 className="text-5xl">HEY! I'M</h1>
            <h1 className="text-5xl p-2 bg-secondary-background neo-box rotate-1 font-bold  w-fit">
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
            <Badge className="font-semibold neo-box transition-all -rotate-6 absolute bottom-1 -right-3 px-10">
              {"<AzCodes />"}{" "}
            </Badge>
            <img
              className="neo-box  w-100 h-100"
              src="/images/azcodes-mumuni-abdulazeez.jpeg"
              alt="Mumuni Abdulazeez AzCodes"
            />
          </div>
        </div>
        <div className="grid grid-cols-4"></div>
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
      <section className="px-30 py-20 space-y-10">
        <div className="flex items-end justify-between">
          <div className="">
            <Badge className="font-bold">// WHO IS ABDULAZEEZ MUMUNI</Badge>
            <h3 className="text-4xl">ENGINEERING WITH</h3>
            <h1 className="text-5xl p-2 -mt-2.5 neo-box bg-main font-bold w-fit ">
              PRECISION AND INTENSION
            </h1>
          </div>
          <Button>
            <HugeiconsIcon icon={Download} /> FULL RESUME (PDF)
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="border-border border-2 shadow-shadow p-3 bg-secondary-background space-y-3">
              <div className="flex items-center gap-x-2">
                <HugeiconsIcon icon={Sparkle} />
                <h3 className="text-xl">THE AZCODES PHILOSOPHY</h3>
              </div>
              <p>
                I'm Abdulazeez Mumuni, a software engineer who believes web
                applications should be as robust as they are memorable. Over the
                past 5+ years, I've built full-stack products spanning AI
                tooling, workflow platforms, developers design systems, and
                real-time dashboards.
              </p>
              <p>
                Whether structuring complex React state machines or deploying
                resilient Express/Nestjs services to serverless runtimes, my
                goal remains constant: delivering clean code that solves real
                problems with uncompromising speed and user delight
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-border border-2 shadow-shadow p-3 space-y-2 bg-secondary-background">
                <div className="flex items-center gap-x-2">
                  <div className="border-border border-2 bg-main p-1">
                    <HugeiconsIcon icon={Bolt} />
                  </div>
                  <h3>PERFORMANCE FIRST</h3>
                </div>
                <p className="font-light">
                  Sub-second initial page loads, optimized bundle splitting, and
                  zero wasted render loops.
                </p>
              </div>

              <div className="border-border border-2 shadow-shadow p-3 space-y-2 bg-secondary-background">
                <div className="flex items-center gap-x-2">
                  <div className="border-border border-2 bg-main p-1">
                    <HugeiconsIcon icon={Code} />
                  </div>
                  <h3>TYPE SAFETY</h3>
                </div>
                <p className="font-light">
                  Strict TypeScript end-to-end. Catch bugs at compile time
                  before they hit user screens.
                </p>
              </div>

              <div className="border-border border-2 shadow-shadow p-3 space-y-2 bg-secondary-background">
                <div className="flex items-center gap-x-2">
                  <div className="border-border border-2 bg-main p-1">
                    <HugeiconsIcon icon={ShieldCheck} />
                  </div>
                  <h3>ROBUST BACKENDS</h3>
                </div>
                <p className="font-light">
                  Clean microservices, secure API endpoints, Zod schema
                  validation, and defensive error handling.
                </p>
              </div>

              <div className="border-border border-2 shadow-shadow p-3 space-y-2 bg-secondary-background">
                <div className="flex items-center gap-x-2">
                  <div className="border-border border-2 bg-main p-1">
                    <HugeiconsIcon icon={Rocket} />
                  </div>
                  <h3>TACTILE USER DELIGHT</h3>
                </div>
                <p className="font-light">
                  Distinctive interfaces with micro-animations, tactile
                  feedback, and high WCAG contrast.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-border border-2 shadow-shadow p-3 bg-secondary-background space-y-3">
              <div className="flex items-center gap-x-2 border-b-2 pb-2">
                <HugeiconsIcon icon={Bolt} />
                <h3 className="text-xl">QUICK DEVELOPER SNAPSHOT</h3>
              </div>
              <div className="flex items-center justify-between gap-x-2 border-b pb-2">
                <h6>PRIMARY ROLE:</h6>
                <Badge variant={"neutral"} className="font-bold">
                  FULL-STACK ENG.
                </Badge>
              </div>
              <div className="flex items-center justify-between gap-x-2 border-b pb-2">
                <h6>FAVORITE STACK:</h6>
                <Badge variant={"neutral"} className="font-bold">
                  REACT + TS + NODE
                </Badge>
              </div>
              <div className="flex items-center justify-between gap-x-2 border-b pb-2">
                <h6>FAVORITE STACK:</h6>
                <p className="font-bold">LAGOS // GLOBAL REMOTE</p>
              </div>
              <div className="flex items-center justify-between">
                <h6>TIMEZONE:</h6>
                <p className="font-bold">WAT (UTC+1)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
