import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/**
 * Конфигурация приложения.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['via.placeholder.com'],
  },
};

export default withNextIntl(nextConfig);
