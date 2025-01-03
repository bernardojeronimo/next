import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
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
  title: "Next",
  description: "My page next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
      </body>
    </html>
  );
}
