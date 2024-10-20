// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'sv'], // Available locales
  defaultLocale: 'en',   // Default fallback locale
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Matches all routes except those starting with _next or api
};
