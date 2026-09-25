import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, background: "linear-gradient(145deg, #101c22, #050c10)", color: "#edf3f2" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 7, color: "#a4d3d0" }}><span>NH / SELECTED WORK</span><span>{project?.id ?? ""}</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4 }}>{project?.name ?? "Selected work"}</div><div style={{ fontSize: 27, color: "#aebfc0", maxWidth: 900 }}>{project?.tagline ?? "Engineering across the full product journey"}</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 5, color: "#8da2a4" }}><span>NYASHA HAMA</span><span>ENGINEER / BUILDER</span></div>
    </div>, size,
  );
}
