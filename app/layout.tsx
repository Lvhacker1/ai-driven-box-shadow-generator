import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSS Box Shadow Generator",
  description: "Create beautiful box shadows visually and get the CSS code instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
