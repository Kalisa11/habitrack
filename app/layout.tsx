import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  function checkPath() {
    if (fullUrl.endsWith("login")) {
      return false;
    }
    return true;
  }
  return (
    <html lang="en">
      <AuthContext>
        <body className={`${poppins.className}`}>
          <ToastContext />
          {checkPath() && <Sidebar />}
          <div className="w-full h-screen">{children}</div>
        </body>
      </AuthContext>
    </html>
  );
}
