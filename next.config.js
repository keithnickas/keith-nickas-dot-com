/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/why-you-should-hire-me",
        destination: "/talent-craft",
        basePath: false,
        permanent: true,
      },
      {
        source: "/talent-craft/:slug(\\gap\\|wristband\\|deem)",
        destination: "/talent-craft/:slug",
        basePath: false,
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "media.licdn.com",
      port: "",
    }]
  },
}

export default nextConfig
