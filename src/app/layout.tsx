import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/context/AuthContext";
// import { StoreDataProvider } from '@/context/StoreContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Este retorno INSERTA el HTML y ENVUELVE a toda la APP
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <StoreDataProvider> */}
        <AuthProvider>
          <NavBar/>
            {children}
          <Footer/>
        </AuthProvider>
        {/* </StoreDataProvider> */}
      </body>
    </html>
  );
}
