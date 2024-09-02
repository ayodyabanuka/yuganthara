"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { Inter } from "next/font/google";
import SponsorCarousel from "./components/sponsor-scroll";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {

  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-29T00:00:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const sponsors = [
    "/ictbus.png",
    "/lnbti.jpeg",
    "/sponsor.png",
    "/sponsor.png",
    "/sponsor.png",
    "/sponsor.png",
  ];

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);


  return (
    <div className="flex flex-col text-[#E9E9E9] numbers ">

      <div className="w-full bg-[url('/background.png')] md:h-[40vh] lg:h-[70vh] lg:px-20 py-10 bg-no-repeat bg-cover bg-bottom ">
        <div className={`flex flex-col md:flex-row container mx-auto items-center w-full justify-center md:justify-between ${inter.className}`}>
          <div className="text-3xl md:text-5xl lg:text-7xl text-center md:text-left font-extrabold px-10 md:w-1/2 flex flex-col justify-center items-center md:items-start md:justify-start gap-10">
            Experience the Magic of Yuganthara 2024
            <Link className={`text-base ${inter.className} px-5 py-3 bg-yellow-300 text-black hover:bg-yellow-400 rounded-lg w-fit`} href={""}>Get Your Tickets Now</Link>
          </div>
          <div className="w-full flex justify-center items-center md:w-1/2 p-10">
            <Image src={"/tickets.png"} alt={""} height={2000} width={2000} className="hidden md:block h-fit w-[500px]" />
            <Image src={"/tickets.png"} alt={""} height={2000} width={2000} className="block md:hidden h-fit w-full" />
          </div>
        </div>
      </div>

      <div className={`flex items-center flex-col md:flex-row px-5 text-justify gap-10 place-content-center justify-items-center my-20 xl:px-32 container mx-auto ${inter.className}`}>
        <Image src={"/ictbus.png"} alt={""} height={2000} width={2000} className="hidden md:block h-fit w-[250px]" />
        <Image src={"/ictbus.png"} alt={""} height={2000} width={2000} className="block md:hidden h-fit w-[250px]" />
        <div className="md:px-10 flex flex-col gap-3">
          <div className="font-bold text-center md:text-start text-4xl md:text-5xl">
            About Yuganthara
          </div>
          <div className="text-base md:text-lg lg:text-xl">
            Yuganthara is a celebration of talent and creativity, hosted by ICTBUS Class. This annual event showcases the exceptional skills of our students in drama, singing, and dancing.

            With a mix of traditional and modern performances, Yuganthara highlights the passion and dedication of young talents. Whether you&apos;re an arts enthusiast or simply looking for a night of inspiring entertainment, Yuganthara promises a memorable experience.
          </div>
        </div>
      </div>
      <div className="text-3xl md:text-5xl flex w-full justify-center py-5">
        Sponsors
      </div>
      <SponsorCarousel logos={sponsors} />
      <div className="border-zinc-700 border border-t" />
      <div className="bg-yellow-600 text-black">
        <div className=" container mx-auto w-fit flex justify-center flex-col gap-10 items-center my-10">
          <div className="text-3xl md:text-5xl">
            Days to the event
          </div>
          <div className="flex gap-5 md:gap-10 justify-center items-center px-10 py-7 border border-[#000000] rounded-3xl  font-tnum font-tabular-nums">
            <div className="flex flex-col justify-center items-center">
              <div className="font-medium text-xs md:text-lg lg:text-lg">DAYS</div>
              <div className="font-extrabold text-4xl md:text-6xl lg:text-8xl  font-tnum font-tabular-nums">{timeLeft.days}</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-medium text-xs md:text-lg lg:text-lg">HOURS</div>
              <div className="font-extrabold text-4xl md:text-6xl lg:text-8xl  font-tnum font-tabular-nums">{timeLeft.hours}</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-medium text-xs md:text-lg lg:text-lg">MINUTES</div>
              <div className="font-extrabold text-4xl md:text-6xl lg:text-8xl  font-tnum font-tabular-nums">{timeLeft.minutes}</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-medium text-xs md:text-lg lg:text-lg">SECONDS</div>
              <div className="font-extrabold text-4xl md:text-6xl lg:text-8xl font-tnum font-tabular-nums">{timeLeft.seconds}</div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      {/* <div className="text-4xl md:text-6xl lg:text-9xl font-extrabold">
        COMING SOON
      </div> */}
      {/* <div className="flex flex-col gap-5 items-center justify-center">
        <Image src={"/ictbus.png"} alt={""} height={2000} width={2000} className="h-28 w-fit" />
        <div className="flex flex-col p-1">
          Follow us on
          <div className="flex justify-center items-center p-2 text-2xl gap-3">
            <Link target="_blank" href={""}><TiSocialFacebook /></Link>
            <Link target="_blank" href={"https://www.instagram.com/yuganthara_ictbus/"}><TiSocialInstagram /></Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}


{/*  */ }