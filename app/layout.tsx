import "./globals.css";
import 'rsuite/dist/rsuite.min.css';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
  
  return (
    <html lang="en">
      <AuthContext>
        <body className={`${poppins.className}`}>
          <ToastContext />
          <div className="w-full h-screen">{children}</div>
        </body>
      </AuthContext>
    </html>
  );
}
