import "./globals.css";
import type { Metadata } from "next";
import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "3J Solutions Pakistan — Integrated Construction & Facility Services",
  description: "Construction, maintenance, facility management, and IT solutions across Pakistan. Get a free quote today."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
