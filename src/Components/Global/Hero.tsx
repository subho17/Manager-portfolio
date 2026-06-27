"use client";

import { motion } from "framer-motion";
import { SplitText } from "./SplitText";
import { memo } from "react";

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden pt-0 pb-5">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-tl from-gray-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full min-h-[75vh] pt-24 lg:pt-0">
        {/* Left Content */}
        <div className="flex h-full min-h-[60vh] items-center justify-center lg:justify-start">
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[72px] font-black text-white leading-[1.1] tracking-tight whitespace-normal md:whitespace-nowrap"
            >
              <SplitText text="Lion" delay={0.2} />{" "}
              <SplitText text="GAGAN KALRA" className="text-[#FFFFFF]" delay={0.5} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-100 text-lg lg:text-x2 max-w-x5 mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              I have remained committed to creating meaningful change through community service, leadership, and collaboration.
            Service above self has always been the guiding principle of my journey
            </motion.p>
          </div>
        </div>

        {/* Right Content - SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 50, y: 20 }}
          animate={{ opacity: 1, scale: 1.1, x: 0, y: -20 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
          className="relative flex items-center justify-center lg:justify-end hidden sm:flex"
        >

        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
