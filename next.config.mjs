/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export a fully static site for GitHub Pages
  output: "export",
  // Safer for GitHub Pages to resolve index.html in folders
  trailingSlash: true,
};

export default nextConfig;
