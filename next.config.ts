import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old and common misspelled styleguide URLs → the Tesla styleguide
    return ["/tesla-styleguide", "/style-guide", "/style%20guide", "/styleguides"].map((source) => ({
      source,
      destination: "/styleguide",
      permanent: false,
    }));
  },
};

export default nextConfig;
