import ClientOnlyComponent from "~/components/ClientOnlyComponent";
import TargetCursor from "../components/TargetCursor";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Code,
  Github,
  Heart,
  Linkedin,
  Twitter,
  X,
  CodeIcon,
  CodeXml,
  CodeSimpleIcon,
  Moon02Icon,
  Document,
  Send,
} from "@hugeicons/core-free-icons";
import { Link, Outlet, useLocation } from "react-router";
import { cn } from "~/lib/utils";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <header className="flex items-center justify-between py-3 px-10 bg-background border-b-4 gap-x-5">
        <a href="#">
          <div className="bg-main border-border shadow-shadow border-2 p-2 font-bold flex items-center gap-x-2">
            <HugeiconsIcon icon={CodeSimpleIcon} />{" "}
            <h1 className="text-2xl">azcodes.dev</h1>
          </div>
        </a>
        <nav className="bg-white p-3 border-border border-2 shadow-shadow">
          <ul className="flex gap-x-4 items-center">
            <li className="bg-main p-3 border-border border-2 shadow-shadow">
              <a href="#">Home</a>
            </li>
            <li className="p-3 hover:bg-main transition-all">
              <a href="#">Projects</a>
            </li>
            <li className="p-3 hover:bg-main transition-all">
              <a href="#">Tech Stack</a>
            </li>
            <li className="p-3 hover:bg-main transition-all">
              <a href="#">Experience</a>
            </li>
            <li className="p-3 hover:bg-main transition-all">
              <a href="#">Article</a>
            </li>
            <li className="p-3 hover:bg-main transition-all">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-3">
          <Button>
            <HugeiconsIcon icon={Moon02Icon} />
          </Button>
          <Button>
            <HugeiconsIcon icon={Document} /> Resume
          </Button>
          <Button>
            <HugeiconsIcon icon={Send} /> Hire Me
          </Button>
        </div>
      </header>
    </>
  );
}
