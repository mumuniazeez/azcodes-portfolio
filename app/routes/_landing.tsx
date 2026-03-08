import ClientOnlyComponent from "~/components/ClientOnlyComponent";
import TargetCursor from "../components/TargetCursor";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github,
  Heart,
  Linkedin,
  Twitter,
  X,
} from "@hugeicons/core-free-icons";
import { Link, Outlet, useLocation } from "react-router";
import { cn } from "~/lib/utils";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <ClientOnlyComponent>
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
      </ClientOnlyComponent>
      <main className="min-h-screen pt-20 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold mb-2">Hi, I'm Abdulazeez</h1>
            <p>
              I'm a Full-Stack Developer and Product-Focused Builder who enjoys
              turning ideas into real products. I specialize in building modern
              web applications, managing development teams, and creating
              technology solutions that solve real problems. Currently, I’m
              leading development at Antartes while exploring new tools and
              technologies.
            </p>
            <div className="flex gap-2 mt-2">
              <Button size={"icon"} className={"text-white cursor-target"}>
                <HugeiconsIcon icon={Github} />
              </Button>
              <Button size={"icon"} className={"text-white cursor-target"}>
                <HugeiconsIcon icon={Twitter} />
              </Button>
              <Button size={"icon"} className={"text-white cursor-target"}>
                <HugeiconsIcon icon={Linkedin} />
              </Button>
            </div>
          </div>
          <div className="mt-3">
            <div className="bg-secondary/10 border border-border/10 backdrop-blur-sm rounded-full px-2 py-1 flex gap-x-3">
              {[
                { label: "About", to: "/" },
                { label: "Projects", to: "/projects" },
                { label: "Experience", to: "/experience" },
                { label: "Tools", to: "/tools" },
                { label: "Services", to: "/services" },
              ].map((tab) => (
                <Link
                  key={tab.to}
                  to={tab.to}
                  className={cn(
                    "cursor-target rounded-full text-white px-3 py-1 tab transition-colors",
                    pathname === tab.to && "tab-active",
                  )}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <Outlet />
            </div>
            <div className="mt-10 border-t border-border/10 rounded-full p-1 flex">
              <p className="text-white/60">
                Build with <span className="text-red-500">&hearts;</span> by
                <span className="text-white font-bold"> AzCodes</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
