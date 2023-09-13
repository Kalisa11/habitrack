import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@components/Sidebar";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Habitrack",
  description: "Create & track healthy habits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex`}>
        <Sidebar />
        <div className="h-screen flex-1 p-7">{children}</div>
      </body>
    </html>
  );
}
