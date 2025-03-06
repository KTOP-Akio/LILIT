import createMiddleware from 'next-intl/middleware';
import { locales } from '@/constants/locales';

/**
 * Конфигурация миддлвеира для i18n.
 */
export default createMiddleware({
    locales,
    defaultLocale: 'ru',
});

export const config = {
    matcher: ['/', '/(ru|en)/:path*'],
};
