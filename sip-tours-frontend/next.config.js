/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const path = require('path');

const withImages = require('next-images');

module.exports = withImages({
  ...nextConfig,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos',
            outputPath: 'static/videos',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
});