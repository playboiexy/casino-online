import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import React, { createContext, useState } from "react";
import { Provider } from "@/components/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Navbar />
          {children}

          <footer className="mt-8 bg-base-100">
            <div className="grid"></div>
          </footer>
        </body>
      </Provider>
    </html>
  );
}
