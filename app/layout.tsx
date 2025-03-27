import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Kaushan_Script, Alex_Brush } from "next/font/google";
import { Header, Footer } from "@/components/index";
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Imported fonts; import from "next/font/google", add a "variable" to the const(variable has to come first), mirror that variable in the globals.css file, then add a "${font.variable}" to the body tag in layout.tsx.
const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400", 
  subsets: ["latin"], 
});

const kaushan_Script = Kaushan_Script({
  variable: "--font-kaushanScript", 
  weight: "400", 
  subsets: ["latin"],
});

const alex_Brush = Alex_Brush({
  variable: "--font-alexBrush", 
  weight: "400", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maris Beauty Salon",
  description: "looking good is paramount...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${kaushan_Script.variable} ${alex_Brush.variable} antialiased overflow-x-hidden bg-[#E3E4DB] text-[#2A2B2A] min-h-screen flex flex-col justify-between`}>
        <Suspense>
          <Header/>
          <main className="pt-0 pb-20 px-[6%]">{children}</main>
        </Suspense>

        <Footer/>
      </body>
    </html>
  );
}
