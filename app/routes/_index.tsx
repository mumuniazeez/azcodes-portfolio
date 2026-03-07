import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Mumuni Abdulazeez (AzCodes)" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <h1>Welcome to my protfolio</h1>;
}
