import type { MetadataRoute } from "next";
import { person } from "./content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name} — ${person.title}`,
    short_name: person.name,
    description: person.bio,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6EE",
    theme_color: "#FBF6EE",
    lang: "bg",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
