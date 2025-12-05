import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LVC 360° Career Program™ – LVC Solutions LLC",
  description:
    "Premium full-time career consulting for OPT, CPT, H4, and MS students in the USA. Done-for-you job marketing, recruiter outreach, and interview support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-deep text-white">{children}</body>
    </html>
  );
}
