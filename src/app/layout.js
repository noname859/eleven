import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "11",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body dir="rtl" className="h-screen w-full">{children}</body>
    </html>
  );
}
