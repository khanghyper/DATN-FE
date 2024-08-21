import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"


const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Admin",
  description: "Admin app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${nunito.className} text-primary !scroll-smooth`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
