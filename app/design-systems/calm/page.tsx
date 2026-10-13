import type { Metadata } from "next";
import CalmSystem from "./system";

export const metadata: Metadata = {
  title: "Calm — Design System",
};

export default function Page() {
  return <CalmSystem />;
}
