// app/[locale]/layout.tsx
import '../globals.css';
import SVGNoiseBackground from '../../components/SVGNoiseBackground';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { NextIntlClientProvider } from 'next-intl';

config.autoAddCss = false; // Disable auto-adding CSS to avoid duplicate styling

// Add icons to the library
library.add(fas, fab, far);

export const metadata = {
  title: 'Code Aura | We Build Websites!',
  description: 'Welcome!',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Dynamically import the correct messages based on locale
  const messages = (await import(`../../messages/${params.locale}.json`)).default;

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <SVGNoiseBackground />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
