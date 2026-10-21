import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GH Trial — Legal Protection for Employees",
  description: "Give your team access to affordable legal support for life's everyday challenges. A valuable employee benefit designed to provide peace of mind.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
