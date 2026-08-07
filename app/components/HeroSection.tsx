import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight,
  Download,
  Email,
  GithubIcon,
  Twitter,
  X,
} from "@hugeicons/core-free-icons";
import { Badge } from "~/components/ui/badge";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="bg-grid-pattern bg-secondary-background px-10  md:px-30 py-20">
      <Badge
        variant={"neutral"}
        className="text-sm md:text-xl font-semibold neo-box transition-all -rotate-2 hover:rotate-0"
      >
        <div className="p-2 bg-green-500 rounded-full animate-pulse" />
        AVAILABLE FOR FREELANCING <br className="md:hidden" /> AND FULL-TIME
        ROLES
      </Badge>

      <div className="flex md:items-center justify-between gap-10 my-8 flex-col md:flex-row">
        <div className="space-y-2 md:w-[50%]">
          <h1 className="text-3xl md:text-5xl">HEY! I'M</h1>
          <h1 className="text-3xl md:text-5xl p-2 bg-secondary-background neo-box rotate-1 font-bold  w-fit">
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
          <div className="flex flex-wrap items-center gap-3">
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
            <Link to={"#projects"}>
              <Button>
                SEE MY WORK <HugeiconsIcon icon={ArrowUpRight} />
              </Button>
            </Link>
            <Link to={"/resume.pdf"} target="_blank">
              <Button>
                <HugeiconsIcon icon={Download} />
                GET RESUME
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-3 mt-5">
            <p className="">Connect: </p>
            <Link to={"https://github.com/mumuniazeez"} target="_blank">
              <Button size={"icon"}>
                <HugeiconsIcon icon={GithubIcon} fontWeight={900} />
              </Button>
            </Link>
            <Link to={"https://x.com/azcodesdev"} target="_blank">
              <Button size={"icon"}>
                <HugeiconsIcon icon={Twitter} fontWeight={900} />
              </Button>
            </Link>
            <Link to={"mailto:mumuniazeez99@gmail.com"} target="_blank">
              <Button size={"icon"}>
                <HugeiconsIcon icon={Email} fontWeight={900} />
              </Button>
            </Link>
          </div>
        </div>

        {/* <Card className="mx-auto bg-main">
          <CardContent>
            <Card className="mx-auto bg-secondary-background">
              <CardContent>
                <div className="p-10 flex items-center justify-center flex-col bg-main border-border border-2 hover:scale-105 transition-all group">
                  <div className="div rounded-full neo-box w-30 h-30 flex items-center justify-center bg-secondary-background group-hover:rotate-8 transition-all">
                    <h1 className="text-3xl md:text-5xl">AZ</h1>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card> */}

        <div className="relative">
          <Badge className="font-semibold neo-box transition-all -rotate-6 absolute bottom-1 -right-3 px-10">
            {"<AzCodes />"}
          </Badge>
          <img
            className="neo-box  w-100 h-100"
            src="/images/azcodes-mumuni-abdulazeez.jpg"
            alt="Mumuni Abdulazeez AzCodes"
          />
        </div>
      </div>
    </section>
  );
}
