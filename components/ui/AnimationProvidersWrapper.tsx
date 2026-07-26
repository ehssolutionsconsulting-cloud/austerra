"use client";

import dynamic from "next/dynamic";

const AnimationProviders = dynamic(
  () => import("./AnimationProviders"),
  { ssr: false }
);

export default function AnimationProvidersWrapper() {
  return <AnimationProviders />;
}
