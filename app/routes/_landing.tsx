import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeSimpleIcon,
  Moon02Icon,
  Document,
  Send,
  Time,
  Github,
  Email,
  Linkedin,
  ArrowUp,
  ArrowUp02Icon,
  Close,
  Menu,
} from "@hugeicons/core-free-icons";
import { Link, Outlet, useLocation } from "react-router";
import { cn } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import { useEffect, useState } from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
