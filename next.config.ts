import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Force Turbopack to treat the project root (where next.config.ts lives)
    // as the workspace root, instead of incorrectly inferring /app.
    root: path.join(__dirname),
    rules: {
      // Treat all Markdown files (including README.md in @uploadthing/mime-types) as raw text modules
      "*.md": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
      // Treat all .d.cts declaration files (used by @uploadthing/mime-types and @uploadthing/shared) as raw text
      "*.d.cts": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
