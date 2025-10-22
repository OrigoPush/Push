/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    appDir: true,
    esmExternals: false,
    turbo: {
      rules: {
        // Asegura compatibilidad de export estático con app router
        '*.tsx': { loaders: ['tsx'], as: 'jsx' },
      },
    },
  },
}

export default nextConfig
