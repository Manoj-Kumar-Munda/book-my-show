/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/db"],
  // Turbopack config (Next.js 16+ default bundler)
  turbopack: {
    resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".mts", ".mjs", ".json"],
  },
  // Webpack fallback for non-turbopack builds
  webpack(config) {
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js"],
      ".mjs": [".mts", ".mjs"],
    };
    return config;
  },
};

export default nextConfig;
