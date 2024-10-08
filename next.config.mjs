import withSvgr from "next-plugin-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mov|webm)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default withSvgr(nextConfig);
