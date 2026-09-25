"use client";

import dynamic from "next/dynamic";

const PortfolioScene = dynamic(() => import("./PortfolioScene"), {
  ssr: false,
  loading: () => (
    <div className="scene-backdrop" aria-hidden="true">
      <div className="scene-fallback"><span>NH</span></div>
      <div className="scene-vignette" />
    </div>
  ),
});

export default function SceneBoundary() {
  return <PortfolioScene />;
}
