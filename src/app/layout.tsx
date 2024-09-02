import type { Metadata } from "next";
import { DM_Serif_Text, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const serif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400"
});

const inter = Inter({
  subsets: ["latin"],
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
      <body className={serif.className}>
        <div className="bg-[#171717] text-white">
          <div className="flex container mx-auto  items-center justify-end text-xs px-10 pt-4 pb-2 ">
            <button className="hover:underline underline-offset-2">login/register</button>
          </div>
        </div>
        <div className="bg-black py-3 text-white">
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 container mx-auto justify-between items-center px-10">
            <Image src={"/logo1.png"} alt={""} height={2000} width={2000} className="h-20 w-fit" />
            <div className={`flex gap-4 ${inter.className} text-xs md:text-base font-bold`}>
              <Link className="hover:bg-yellow-400 hover:text-black rounded-lg px-3 py-2" href={"/"}>Home</Link>
              <Link className="hover:bg-yellow-400 hover:text-black rounded-lg px-3 py-2" href={"/lineup"}>Lineup</Link>
              <Link className="bg-yellow-300 text-black hover:bg-yellow-400 rounded-lg px-8 py-2" href={"/tickets"}>Tickets</Link>
            </div>
          </div>
        </div>
        <main className="bg-[#171717] bg-no-repeat bg-cover bg-bottom min-h-screen">{children}</main>
        <div className={`flex w-full items-center bg-[#171717] justify-center py-2 text-sm font-thin text-white ${inter.className}`}>
          Copyright © 2024{' '}
          <span className="">
            <Link
              href={'https://www.ayodyabanukafernando.com/'}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={'/ab.png'}
                alt={''}
                width={1000}
                height={1000}
                className="h-9 w-9"
              />
            </Link>{' '}
          </span>
          . All rights reserved.
        </div>
      </body>
    </html>
  );
}
