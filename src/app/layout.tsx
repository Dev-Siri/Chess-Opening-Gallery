import { Inter } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";

import type { Metadata } from "next";

import ThemeContextProvider from "@/context/ThemeContext";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chess Database",
  description:
    "Search openings, and go move by move to see the most common responses until checkmate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#111111] overflow-x-hidden text-white ${inter.className}`}
      >
        <ThemeContextProvider>
          <Header />
          <main>{children}</main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
