import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "inDesign Tool Portal",
  description: "A centralized hub for InDesign-related tools, resources, and tutorials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
