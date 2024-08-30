import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google";
import "./globals.css";

const inter = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Yuganthara",
  description: "Yuganthara is a concert to showcase students aesthetic skills and Organized by ICTBUS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo1.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <main className="bg-[url('/background.png')] bg-no-repeat bg-cover bg-bottom min-h-screen">{children}</main>
      </body>
    </html>
  );
}
