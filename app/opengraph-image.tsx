import { ImageResponse } from "next/og";
import { serifFonts } from "@/lib/og";
import { site } from "@/lib/data";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fcfbf7",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(15,163,127,0.18), transparent 42%), radial-gradient(circle at 75% 95%, rgba(240,180,67,0.28), transparent 45%)",
          padding: "72px 80px",
          fontFamily: "Instrument Serif",
          color: "#111816",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#096553", textTransform: "uppercase" }}>
            {site.role}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 124, lineHeight: 1 }}>{site.name}</div>
            <div style={{ display: "flex", gap: 13, fontSize: 46, marginTop: 24, color: "#3f4a47" }}>
              <span>Machine learning, from raw data to</span>
              <span style={{ fontStyle: "italic", color: "#0b7a64" }}>deployed models</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#855600" }}>
            {site.url.replace("https://", "")} · Ethiopia
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await serifFonts() }
  );
}
