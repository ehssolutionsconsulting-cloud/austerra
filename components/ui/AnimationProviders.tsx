"use client";

import dynamic from "next/dynamic";

const GsapAnimator = dynamic(() => import("./GsapAnimator"), { ssr: false });
const AosInit = dynamic(() => import("./AosInit"), { ssr: false });

export default function AnimationProviders() {
  return (
    <>
      <GsapAnimator />
      <AosInit />
    </>
  );
}
