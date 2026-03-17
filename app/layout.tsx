import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Space_Grotesk } from 'next/font/google'

const body = Poppins({
  subsets: ['latin'],
  weight: ['100','200', '400', '700'],
  variable: '--font-body',
})

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Demetrius Elchinou Gobardja",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${heading.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
