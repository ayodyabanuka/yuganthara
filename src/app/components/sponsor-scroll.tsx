"use client"
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type SponsorCarouselProps = {
       logos: string[];
};

const SponsorCarousel: FC<SponsorCarouselProps> = ({ logos }) => {
       return (
              <div>
                     <div className="hidden md:block overflow-hidden py-10 h-32">
                            <motion.div
                                   className="flex space-x-40"
                                   animate={{ x: ["0%", "-100%"] }}
                                   transition={{ ease: "linear", duration: logos.length * 10, repeat: Infinity }}
                            >
                                   {logos.map((logo, index) => (
                                          <div key={index} className="flex-shrink-0 flex gap-10 items-center">
                                                 <Image src={logo} alt={`Sponsor ${index}`} width={200} height={200} className=" h-fit grayscale hover:grayscale-0" />
                                          </div>
                                   ))}
                                   {/* Duplicate the logos for seamless scrolling */}
                                   {logos.map((logo, index) => (
                                          <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                                 <Image src={logo} alt={`Sponsor ${index}`} width={200} height={200} className="  h-fit grayscale hover:grayscale-0" />
                                          </div>
                                   ))}
                                   {logos.map((logo, index) => (
                                          <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                                 <Image src={logo} alt={`Sponsor ${index}`} width={200} height={200} className="  h-fit grayscale hover:grayscale-0" />
                                          </div>
                                   ))}
                                   {logos.map((logo, index) => (
                                          <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                                 <Image src={logo} alt={`Sponsor ${index}`} width={200} height={200} className="  h-fit grayscale hover:grayscale-0" />
                                          </div>
                                   ))}
                            </motion.div>
                     </div>
                     <div className="block md:hidden overflow-hidden py-10 h-20">
                            <motion.div
                                   className="flex space-x-10"
                                   animate={{ x: ["0%", "-100%"] }}
                                   transition={{ ease: "linear", duration: logos.length * 3, repeat: Infinity }}
                            >
                                   {logos.map((logo, index) => (
                                          <div key={index} className="flex-shrink-0 flex gap-10 items-center">
                                                 <Image src={logo} alt={`Sponsor ${index}`} width={1000} height={1000} className="h-16 w-full  grayscale hover:grayscale-0" />
                                          </div>
                                   ))}
                                   {/* Duplicate the logos for seamless scrolling */}
                                   {logos.map((logo, index) => (
                                          <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                                 <Image src={logo} alt={`Sponsor ${index}`} width={1000} height={1000} className="h-16 w-full grayscale hover:grayscale-0" />
                                          </div>
                                   ))}
                                   {logos.map((logo, index) => (
                                          <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                                 <Image src={logo} alt={`Sponsor ${index}`} width={1000} height={1000} className="h-16 w-full grayscale hover:grayscale-0" />
                                          </div>
                                   ))}
                                   {logos.map((logo, index) => (
                                          <div key={index + logos.length} className="flex-shrink-0 flex gap-10 items-center">
                                                 <Image src={logo} alt={`Sponsor ${index}`} width={1000} height={1000} className="h-16 w-full grayscale hover:grayscale-0" />
                                          </div>
                                   ))}
                            </motion.div>
                     </div>
              </div>
       );
};

export default SponsorCarousel;
