import type { Metadata } from "next";
import { Suspense } from "react";
import { Teko } from "next/font/google";
import "./globals.css";
import Header from "./components/section/header/Header";
import Footer from "./components/section/footer/Footer";
import SmoothScroll from "./components/shared/SmoothScroll";

const teko = Teko({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-teko",
});

export const metadata: Metadata = {
  title: "Courier Services",
  description: "Courier Services Fast, Safe & Everywhere",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${teko.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll/>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
