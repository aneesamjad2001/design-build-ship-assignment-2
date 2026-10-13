import type { Metadata } from "next";
import ArcadeSystem from "./system";

export const metadata: Metadata = {
  title: "Arcade — Design System",
};

export default function Page() {
  return <ArcadeSystem />;
}
