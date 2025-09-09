import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Better.com Replica | Next.js",
  description: "A simplified, responsive replica of selected Better.com pages for an internship assignment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="min-h-[68vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
