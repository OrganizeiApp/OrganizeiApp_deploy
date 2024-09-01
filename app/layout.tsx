/* trunk-ignore-all(prettier) */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Nunito } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Script from "next/script";

const font = Nunito({subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organizei",
  description: "Organizei é a sua estante digital!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/desenho.svg",
        href: "/desenho.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/desenho.svg",
        href: "/desenho.svg",
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  const session = await auth();

  return (
    <SessionProvider session={session}>
    <html lang="pt-br" suppressHydrationWarning>

      <Script
      id="gtm"
      strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T5LVP28C');`
        }}
      ></Script>

      <body className={font.className}>
        {children}
        </body>
    </html>
    </SessionProvider>
  );
}