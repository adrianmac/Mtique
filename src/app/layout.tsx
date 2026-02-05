import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "EventPlanner Pro",
  description: "All-in-one Event Management Suite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${manrope.variable} font-display antialiased bg-background-light dark:bg-background-dark text-[#111618] dark:text-white transition-colors duration-200`}
      >
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
