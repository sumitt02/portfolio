import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090B",
          color: "#F5F7FA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#4F6DFF",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Full-Stack Developer · SDE-1
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 600, marginTop: 28, lineHeight: 1.15, maxWidth: 980 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9CA3AF", marginTop: 20, maxWidth: 900 }}>
          I build production software, from interface to infrastructure.
        </div>
      </div>
    ),
    { ...size },
  );
}
