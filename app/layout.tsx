import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Your Name — UI/UX 设计师",
  description:
    "专注于 UI/UX 设计，将复杂问题转化为直观、优雅的数字体验。欢迎合作洽谈。",
  openGraph: {
    title: "Your Name — UI/UX 设计师",
    description: "专注于 UI/UX 设计，将复杂问题转化为直观、优雅的数字体验。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
