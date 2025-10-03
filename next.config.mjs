/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Isso garante que arquivos .glb / .gltf sejam tratados como estáticos
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/models/",
            publicPath: "/_next/static/models/",
            name: "[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
