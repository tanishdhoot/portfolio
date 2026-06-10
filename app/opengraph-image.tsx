import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tanish Dhoot — finance × code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050505",
          color: "#ece9e2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 340,
            background:
              "radial-gradient(60% 100% at 50% 0%, rgba(212,175,55,0.16) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            fontFamily: "ui-monospace, monospace",
            color: "#8a857a",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex", gap: 12 }}>
            <span style={{ color: "#D4AF37" }}>01</span>
            <span>— pune, india</span>
          </span>
          <span>⌘K</span>
        </div>

        <div
          style={{
            fontSize: 210,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
            display: "flex",
          }}
        >
          TANISH
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 34,
              maxWidth: 760,
              lineHeight: 1.25,
              color: "rgba(236,233,226,0.9)",
              display: "flex",
              flexWrap: "wrap",
              gap: "0 11px",
            }}
          >
            <span>Building things at the intersection of</span>
            <span style={{ color: "#D4AF37" }}>finance</span>
            <span>and</span>
            <span style={{ color: "#D4AF37" }}>code.</span>
          </div>
          <div
            style={{
              fontSize: 19,
              fontFamily: "ui-monospace, monospace",
              color: "#8a857a",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#D4AF37",
                display: "block",
              }}
            />
            tanishdoesdumbstuff.in
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
