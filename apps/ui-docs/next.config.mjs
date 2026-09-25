import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["@yuva-devlab/ui", "@yuva-devlab/tokens"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
