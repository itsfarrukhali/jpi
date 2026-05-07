// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

// ❌ yeh line delete karo
// export const runtime = "edge";

export const alt = "Jinnah Polytechnic Institute";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "60px",
        backgroundColor: "#0D1F3C",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          backgroundColor: "#D4921A",
        }}
      />
      <div style={{ display: "flex", marginBottom: "24px" }}>
        <div
          style={{
            backgroundColor: "#D4921A",
            color: "#0D1F3C",
            fontSize: "14px",
            fontWeight: 700,
            padding: "6px 16px",
            letterSpacing: "3px",
          }}
        >
          EST. 1961 · KARACHI
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "68px",
          fontWeight: 800,
          color: "#FFFFFF",
          lineHeight: 1.1,
          marginBottom: "20px",
        }}
      >
        <span>Jinnah Polytechnic</span>
        <span>Institute</span>
      </div>
      <div
        style={{
          fontSize: "26px",
          color: "#D4921A",
          marginBottom: "40px",
        }}
      >
        Knowledge · Skills · Attitude
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: "24px",
        }}
      >
        {[
          "DAE Programs",
          "Certifications",
          "Short Courses",
          "SBTE Affiliated",
        ].map((item, i, arr) => (
          <div
            key={item}
            style={{ display: "flex", alignItems: "center", gap: "24px" }}
          >
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "18px" }}>
              {item}
            </div>
            {i < arr.length - 1 && (
              <div
                style={{ color: "rgba(255,255,255,0.25)", fontSize: "18px" }}
              >
                |
              </div>
            )}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
