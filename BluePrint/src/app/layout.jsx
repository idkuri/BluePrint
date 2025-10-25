// src/app/layout.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import "./globals.css"; // import global CSS / Tailwind

export const metadata = {
  title: "The BluePrint Series",
  description: "A Next.js app with a layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center bg-white min-h-screen overflow-x-hidden">
        <main className="max-w-[3840px] w-screen bg-white">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
