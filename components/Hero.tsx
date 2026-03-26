"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="h-dvh px-15 flex items-start justify-start gap-7.5
    md:flex-col md:justify-center md:px-10 md:items-center"
      id="hero"
    >
      <motion.div
        className="flex flex-col gap-5
      md:gap-17.5 md:items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left md:text-center">
          <motion.h2
            className="text-[40px] font-black mb-6 text-foreground
          xl:text-[65px] md:text-[44px] mt-17.5 md:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to Developer OS App Official Website
          </motion.h2>
          <motion.p
            className="text-[20px] mb-6 text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional Tools For Developers
          </motion.p>
          <motion.div
            className="flex gap-6
          md:justify-center flex-col md:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              className="border border-[#dedede] rounded-xl px-5 py-1.25 font-medium flex items-center gap-2
            bg-white/70 backdrop-blur-[10px] drop-shadow-foreground drop-shadow-xl/20 text-black
            transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105
            xl:text-[14px] xl:px-3.5 xl:py-2"
              href="/download"
            >
              <Download className="text-[22px] xl:text-[18px]" />
              <span className="md:text-lg">
                Download Now{" "}
                <span className="text-red-500 text-xs md:text-sm font-bold">
                  (Android Only)
                </span>
              </span>
            </Link>
            <a
              className="border border-[#dedede] rounded-xl px-5 py-1.25 font-medium flex items-center gap-2
            bg-white/70 backdrop-blur-[10px] drop-shadow-foreground drop-shadow-xl/20 text-black
            transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105
            xl:text-[14px] xl:px-3.5 xl:py-2"
              href="https://developer-os.web.app"
              target="_blank"
            >
              <ExternalLink className="text-[22px] xl:text-[18px]" />
              <span className="md:text-lg">
                Use Web Version{" "}
                <span className="text-red-500 text-xs md:text-sm font-bold">
                  (iOS & Android)
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

{
  /* <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[520px] w-[44%]"
      >
        <Image
          src={theme === "dark" ? "/homeWhite.webp" : "/homeBlack.webp"}
          alt="home"
          width={520}
          height={400}
          className="max-w-[520px] w-[44%]
      md:w-[55%]
      sm:w-[75%]"
          priority
        />
      </motion.div> */
}
