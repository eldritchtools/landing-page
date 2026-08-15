/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export', // This is the key setting for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default Image Optimization
  },
  reactCompiler: true,
};

export default nextConfig;
