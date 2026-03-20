import type { Metadata } from "next";
import { Josefin_Sans , DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";
import  Preloader  from "@/components/loader";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});
const dm_Sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "OmEngineers",
  description: "Developed in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin_Sans.variable} ${dm_Sans.variable} text-black bg-white`}>
                <Preloader />

        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
