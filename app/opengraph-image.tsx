import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tanish — building at the intersection of finance and code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#e8e6e1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 320,
            background:
              "radial-gradient(60% 100% at 50% 0%, rgba(201, 168, 76, 0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            fontFamily: "ui-monospace, monospace",
            color: "#7a7670",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#C9A84C" }}>~</span>
          <span>tanish</span>
          <span style={{ color: "rgba(201,168,76,0.6)" }}>@</span>
          <span>pune</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 168,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 0.95,
              display: "flex",
              alignItems: "center",
              color: "#e8e6e1",
            }}
          >
            Tanish
            <span
              style={{
                display: "inline-block",
                width: 18,
                height: 110,
                background: "#C9A84C",
                marginLeft: 18,
                marginTop: 24,
              }}
            />
          </div>

          <div
            style={{
              fontSize: 38,
              color: "rgba(232, 230, 225, 0.92)",
              maxWidth: 980,
              lineHeight: 1.2,
              display: "flex",
              flexWrap: "wrap",
              gap: "0 12px",
            }}
          >
            <span>Building things at the intersection of</span>
            <span style={{ color: "#C9A84C" }}>finance</span>
            <span>and</span>
            <span style={{ color: "#C9A84C" }}>code</span>
            <span>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            fontFamily: "ui-monospace, monospace",
            color: "#7a7670",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>tanishdoesdumbstuff.in</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#C9A84C",
                display: "block",
              }}
            />
            shipping
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
