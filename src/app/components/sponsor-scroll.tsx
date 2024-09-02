"use client"
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type SponsorCarouselProps = {
       logos: string[];
};

const SponsorCarousel: FC<SponsorCarouselProps> = ({ logos }) => {
       return (
              <div className="overflow-hidden py-10">
                     <motion.div
                            className="flex space-x-40"
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{ ease: "linear", duration: logos.length * 10, repeat: Infinity }}
                     >
                            {logos.map((logo, index) => (
                                   <div key={index} className="flex-shrink-0 flex gap-10 items-center">
                                          <Image src={logo} alt={`Sponsor ${index}`} width={1000} height={1000} className="h-28 w-fit  grayscale hover:grayscale-0" />
                                   </div>
                            ))}
                            {/* Duplicate the logos for seamless scrolling */}
                            {logos.map((logo, index) => (
                                   <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                          <Image src={logo} alt={`Sponsor ${index}`} width={1000} height={1000} className="h-28 w-fit grayscale hover:grayscale-0" />
                                   </div>
                            ))}
                            {logos.map((logo, index) => (
                                   <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                          <Image src={logo} alt={`Sponsor ${index}`} width={1000} height={1000} className="h-28 w-fit grayscale hover:grayscale-0" />
                                   </div>
                            ))}
                            {logos.map((logo, index) => (
                                   <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                          <Image src={logo} alt={`Sponsor ${index}`} width={1000} height={1000} className="h-28 w-fit grayscale hover:grayscale-0" />
                                   </div>
                            ))}
                     </motion.div>
              </div>
       );
};

export default SponsorCarousel;
