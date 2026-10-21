import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { dashboardMarkup } from "@/dashboard/dashboardMarkup";
import { dashboardScript } from "@/dashboard/dashboardScript";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wyrwatch | Command Center" },
      {
        name: "description",
        content:
          "Command-center dashboard for monitoring manhole water levels, cover tampering, device health, and early-warning events.",
      },
      { property: "og:title", content: "Wyrwatch | Command Center" },
      {
        property: "og:description",
        content:
          "Command-center dashboard for monitoring manhole water levels, cover tampering, device health, and early-warning events.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Wyrwatch | Command Center" },
      {
        name: "twitter:description",
        content:
          "Command-center dashboard for monitoring manhole water levels, cover tampering, device health, and early-warning events.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const el = document.createElement("script");
    el.textContent = dashboardScript;
    document.body.appendChild(el);
    return () => {
      el.remove();
      const timer = (window as unknown as { T?: number }).T;
      if (timer) clearInterval(timer);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: dashboardMarkup }} />;
}
