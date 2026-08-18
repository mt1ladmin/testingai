import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MALAWI MOTORS | Vehicle Sourcing & Export",
  description: "Reliable vehicle sourcing and export to Malawi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}