/* eslint-disable @next/next/no-page-custom-font */
import { type Metadata, type Viewport } from "next";
import { getClientConfig } from "./config/client";
import "./styles/globals.scss";
import "./styles/highlight.scss";
import "./styles/markdown.scss";

export const metadata: Metadata = {
  title: "ChatGPT Next Web",
  description: "Your personal ChatGPT Chat Bot.",
  appleWebApp: {
    title: "ChatGPT Next Web",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
