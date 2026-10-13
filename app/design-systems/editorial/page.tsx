import type { Metadata } from "next";
import EditorialSystem from "./system";

export const metadata: Metadata = {
  title: "Editorial — Design System",
};

export default function Page() {
  return <EditorialSystem />;
}
