import type { Metadata } from "next";
import "./globals.css";

import HeaderContainer from "@/components/layout/HeaderContainer";
import PromoBanner from "@/components/layout/PromoBanner";
import Navbar from "@/components/layout/navbar/Navbar";
import ThemeScript from "@/components/ui/ThemeScript";

import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Web Agency",
    template: "%s | Web Agency",
  },
  description:
    "Digital agency specialized in web development, SEO, e-commerce and hosting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>

      <body>
        <ThemeProvider>
          <HeaderContainer>
            <PromoBanner />
            <Navbar />
          </HeaderContainer>

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
