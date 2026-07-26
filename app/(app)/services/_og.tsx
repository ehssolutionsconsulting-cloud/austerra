import { ImageResponse } from "next/og";
import { getServiceBySlug } from "@/lib/payload";

const ACCENT: Record<string, string> = {
  "1": "#c0392b",
  "2": "#5a6b3a",
  "3": "#7a6e5e",
};

async function fetchImageAsDataUri(src: string): Promise<string | null> {
  try {
    const base = process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000";
    const url = src.startsWith("http") ? src : `${base}${src}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    const mime = res.headers.get("content-type") ?? "image/jpeg";
    return `data:${mime};base64,${Buffer.from(buf).toString("base64")}`;
  } catch {
    return null;
  }
}

export async function serviceOG(slug: string): Promise<ImageResponse> {
  const service = await getServiceBySlug(slug);

  const title = service?.title ?? "Our Services";
  const description = service?.shortDescription ?? "";
  const accent = ACCENT[service?.disciplineNumber ?? "1"] ?? "#5a6b3a";
  const imgData = service?.featuredImage
    ? await fetchImageAsDataUri(service.featuredImage)
    : null;

  const truncated =
    description.length > 110 ? description.slice(0, 110) + "…" : description;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#1a1a14",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left — text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px",
            flex: imgData ? "0 0 58%" : "0 0 100%",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{ width: "28px", height: "2px", background: accent }}
            />
            <span
              style={{
                color: accent,
                fontSize: "13px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Austerra Group
            </span>
          </div>

          {/* Title + description */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1
              style={{
                color: "#ffffff",
                fontSize: "58px",
                fontWeight: 700,
                lineHeight: 1.08,
                margin: 0,
              }}
            >
              {title}
            </h1>
            {truncated && (
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "19px",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {truncated}
              </p>
            )}
          </div>

          {/* Domain */}
          <span
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "13px",
              letterSpacing: "0.14em",
            }}
          >
            austerra.com.au
          </span>
        </div>

        {/* Right — featured image */}
        {imgData && (
          <div
            style={{
              flex: "0 0 42%",
              display: "flex",
              borderLeft: `3px solid ${accent}`,
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgData}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
