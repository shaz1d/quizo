import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quizo | Modern Quiz App",
  description: "MOdern Quiz Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full flex flex-col items-center max-w-3xl mx-auto min-h-screen p-4 pb-20 gap-10 sm:p-8 font-[family-name:var(--font-geist-sans)]">
          {children}
          <footer className=" flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
      </body>
    </html>
  );
}
