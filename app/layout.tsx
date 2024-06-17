import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto_Flex({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Another Byte Of Tech",
  description: "Tech Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative left-1/2 -translate-x-1/2 px-6 bg-slate-50 max-w-[75rem] text-gray-950 `}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
