/** @type {import('next').NextConfig} */

import UnoCSS from "@unocss/webpack"

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      UnoCSS(),
    )
    return config
  },
};

export default nextConfig;
