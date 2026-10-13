import type { Metadata } from "next";
import LandmarksSite from "./landmarks-site";

export const metadata: Metadata = {
  title: "Landmarks of AI",
  description:
    "A field guide to the models that changed everything, 1958 to now.",
};

export default function Page() {
  return <LandmarksSite />;
}
