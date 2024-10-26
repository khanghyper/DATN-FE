import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Roboto } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { cookies } from "next/headers";
import AppProvider from "@/redux/providers/app.provider";
import ProfileProvider from "@/redux/providers/profile.provider";


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

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value

  const info = cookieStore.get('info')?.value


  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${nunito.className} text-primary !scroll-smooth`}>
        <Toaster />
        <ProfileProvider
          accessToken={accessToken ? accessToken : ''}
          info={accessToken ? JSON.parse(info as string) : null}
        >
          {children}
        </ProfileProvider>
      </body>
    </html>
  );
}
