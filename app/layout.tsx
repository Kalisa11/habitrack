import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@components/Sidebar";
import ToastContext from "./context/ToastContext";
import AuthContext from "./context/AuthContext";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Habitrack",
  description: "Create & track healthy habits",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContext>
        <body className={`${poppins.className} flex`}>
          <ToastContext />
          <Sidebar />
          <div className="h-screen flex-1">{children}</div>
        </body>
      </AuthContext>
    </html>
  );
}
