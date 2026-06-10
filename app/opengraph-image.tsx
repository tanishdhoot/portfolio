import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tanish Dhoot — finance × code, printed from Pune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F0E3",
          color: "#211D14",
          display: "flex",
          flexDirection: "column",
          padding: "56px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "3px solid #211D14",
            paddingTop: 14,
            fontSize: 20,
            fontFamily: "ui-monospace, monospace",
            color: "#75695A",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>Pune Edition</span>
          <span>Vol. 01 · No. 02</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 140,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Tanish Dhoot
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: "ui-monospace, monospace",
              color: "#75695A",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
              gap: 14,
            }}
          >
            <span>Finance</span>
            <span style={{ color: "#9A7B2D" }}>×</span>
            <span>Code</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "4px double #211D14",
            paddingTop: 14,
            fontSize: 20,
            fontFamily: "ui-monospace, monospace",
            color: "#75695A",
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
                background: "#9A7B2D",
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
