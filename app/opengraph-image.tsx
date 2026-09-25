import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(145deg, #13232a, #050c10)", color: "#edf3f2" }}>
      <div style={{ display: "flex", fontSize: 25, letterSpacing: 8, color: "#a4d3d0" }}>NH / THE SPACE BETWEEN</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}><span>Nyasha</span><span>Hama.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4, color: "#aebfc0" }}><span>FULL-STACK SOFTWARE ENGINEER</span><span>CAPE TOWN, SA</span></div>
    </div>, size,
  );
}
