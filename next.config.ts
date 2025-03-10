import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  compilerOptions: {
    strict: false,
  },
}

export default nextConfig
