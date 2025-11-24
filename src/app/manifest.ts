import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SepsisCheck",
    short_name: "SepsisCheck",
    description: "Mobile paediatric sepsis diagnostics",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
  };
}
