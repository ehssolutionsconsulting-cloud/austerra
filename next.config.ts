import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
