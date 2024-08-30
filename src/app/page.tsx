"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";


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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);


  return (
    <div className="container mx-auto flex flex-col justify-center min-h-screen items-center p-10 gap-16 text-[#E9E9E9] numbers">
      <Image src={"/logo1.png"} alt={""} height={2000} width={2000} className="h-44 w-fit" />
      <div className="flex gap-10 justify-center items-center px-10 py-7 border border-[#E9E9E9] rounded-3xl  font-tnum font-tabular-nums">
        <div className="flex flex-col justify-center items-center">
          <div className="font-medium text-sm md:text-lg lg:text-lg">DAYS</div>
          <div className="font-extrabold text-4xl md:text-6xl lg:text-8xl  font-tnum font-tabular-nums">{timeLeft.days}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="font-medium text-sm md:text-lg lg:text-lg">HOURS</div>
          <div className="font-extrabold text-4xl md:text-6xl lg:text-8xl  font-tnum font-tabular-nums">{timeLeft.hours}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="font-medium text-sm md:text-lg lg:text-lg">MINUTES</div>
          <div className="font-extrabold text-4xl md:text-6xl lg:text-8xl  font-tnum font-tabular-nums">{timeLeft.minutes}</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="font-medium text-sm md:text-lg lg:text-lg">SECONDS</div>
          <div className="font-extrabold text-4xl md:text-6xl lg:text-8xl font-tnum font-tabular-nums">{timeLeft.seconds}</div>
        </div>
      </div>
      <div className="text-5xl md:text-6xl lg:text-9xl font-extrabold">
        COMING SOON
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <Image src={"/ictbus.png"} alt={""} height={2000} width={2000} className="h-28 w-fit" />
        <div className="flex flex-col p-1">
          Follow us on
          <div className="flex justify-center items-center p-2 text-2xl gap-3">
            <Link target="_blank" href={""}><TiSocialFacebook /></Link>
            <Link target="_blank" href={""}><TiSocialInstagram /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
