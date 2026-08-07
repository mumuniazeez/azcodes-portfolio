import { Button } from "~/components/ui/button";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  Bolt,
  Code,
  Download,
  Rocket,
  ShieldCheck,
  Sparkle,
  X,
} from "@hugeicons/core-free-icons";
import { Badge } from "~/components/ui/badge";
import { Link } from "react-router";

interface CoreValue {
  icon: IconSvgElement;
  title: string;
  desc: string;
}

const coreValues: CoreValue[] = [
  {
    icon: Bolt,
    title: "PERFORMANCE FIRST",
    desc: "Sub-second initial page loads, optimized bundle splitting, and zero wasted render loops.",
  },
  {
    icon: Code,
    title: "TYPE SAFETY",
    desc: "Strict TypeScript end-to-end. Catch bugs at compile time before they hit user screens.",
  },
  {
    icon: ShieldCheck,
    title: "ROBUST BACKENDS",
    desc: "Clean microservices, secure API endpoints, Zod schema validation, and defensive error handling.",
  },
  {
    icon: Rocket,
    title: "TACTILE USER DELIGHT",
    desc: "Distinctive interfaces with micro-animations, tactile feedback, and high WCAG contrast.",
  },
];

export default function AboutSection() {
  return (
    <section className="px-10  md:px-30 py-20 space-y-10">
      <div className="flex gap-5 items-start md:items-end justify-between flex-col md:flex-row">
        <div className="">
          <Badge className="font-bold">// WHO IS ABDULAZEEZ MUMUNI</Badge>
          <h3 className="text-2xl md:text-4xl">ENGINEERING WITH</h3>
          <h1 className="text-3xl md:text-5xl p-2 -mt-2.5 neo-box bg-main font-bold w-fit ">
            PRECISION AND INTENSION
          </h1>
        </div>
                  <Link to={"/resume.pdf"} target="_blank">

        <Button>
          <HugeiconsIcon icon={Download} /> FULL RESUME (PDF)
        </Button>
        </Link>
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
              past 5+ years, I've built full-stack products spanning AI tooling,
              workflow platforms, developers design systems, and real-time
              dashboards.
            </p>
            <p>
              Whether structuring complex React state machines or deploying
              resilient Express/Nestjs services to serverless runtimes, my goal
              remains constant: delivering clean code that solves real problems
              with uncompromising speed and user delight
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreValues.map((value, idx) => (
              <div
                className="border-border border-2 shadow-shadow p-3 space-y-2 bg-secondary-background hover:-translate-y-1 transition-all"
                key={idx}
              >
                <div className="flex items-center gap-x-2">
                  <div className="border-border border-2 bg-main p-1">
                    <HugeiconsIcon icon={value.icon} />
                  </div>
                  <h3>{value.title}</h3>
                </div>
                <p className="font-light">{value.desc}</p>
              </div>
            ))}
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
          <div className="border-border border-2 shadow-shadow p-3 bg-secondary-background space-y-3">
            <div className="flex items-center justify-between gap-x-2 border-b pb-2">
              <h3 className="font-light font-jetbrains-mono  text-sm">
                developer_mindset.ts
              </h3>
              <Badge className="font-bold">
                <div className="bg-black p-1 rounded-full" /> EXECUTE
              </Badge>
            </div>
            <pre className="overflow-x-auto leading-relaxed text-[10px]">
              {`const engineer = {
  name: "Azeez Mumuni",
  handle: "azcodes",
  status: "building_the_future",
  passions: [
    "Clean Architecture",
    "React 19 & Next.js",
    "High Performance APIs",
    "Neobrutal Design"
  ],
  shipCode: async () => {
    await testAllEdgeCases();
    await optimizeBundle();
    return "Deployed!";
  }
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
