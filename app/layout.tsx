import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malawi Motors – Vehicle Sourcing & Export",
  description:
    "Quality Japanese and South African vehicles sourced and shipped to Malawi. Browse our current stock or place a custom order.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
