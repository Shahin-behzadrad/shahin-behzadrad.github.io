import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Shahin Behzadrad",
  description: "Shahin Behzadrad landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <style>{`html { visibility: hidden; }`}</style>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem("theme") || "dark";
                document.documentElement.setAttribute("data-theme", theme);
                document.documentElement.style.visibility = "visible";
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
