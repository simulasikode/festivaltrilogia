/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
