import "@/styles/globals.css";
import "@mantine/core/styles.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { theme } from "@/theme";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { type Metadata } from "next";
import { cn } from "@/lib";

export const metadata: Metadata = {
  title: "Data Harbor",
  description:
    "Build your custom form schema and get started with our ingestion app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      data-mantine-color-scheme="light"
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        "font-sans [&_*]:!font-sans",
      )}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
