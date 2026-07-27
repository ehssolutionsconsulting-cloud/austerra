import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "austerra.vercel.app" },
      { protocol: "https", hostname: "austerra.com.au" },
      { protocol: "http",  hostname: "localhost" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/Occupational%20Hygiene",
        destination: "/services/occupational-hygiene",
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
