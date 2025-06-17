import { Inter } from "next/font/google";

import "./globals.css";
import Script from "next/script";
import Analytics from "./components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Abu Daud Hossain |Fullstack developer|React developer|Frontend Developer",
  description:
    "A freelance Full Stack Developer with 2 years commercial experience create successful website",
  keywords: [
    "Fullstack developer",
    "Backend developer",
    "Nodejs developer",
    "React developer",
    "Frontend Developer",
  ],
  openGraph: {
    images: "https://avatars.githubusercontent.com/u/73416372?v=4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div id="modal"></div>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
