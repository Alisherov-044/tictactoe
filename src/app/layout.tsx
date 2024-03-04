import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

type TRootLayout = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic Tac Toe",
};

export default function RootLayout({ children }: Readonly<TRootLayout>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
