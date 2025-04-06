import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ThemeProvider from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon.co.jp クローン",
  description: "Amazon.co.jp クローン",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
