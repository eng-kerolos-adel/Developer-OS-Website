"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      className="bg-transparent backdrop-blur-[10px] border-t-2 border-muted-foreground text-foreground rounded-t-3xl pb-30 md:pb-auto px-6 md:px-8 lg:px-12 py-6 md:py-8 flex items-center justify-center gap-5 md:gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Link
        href="/"
        className="text-xs md:text-base text-foreground hover:text-muted-foreground transition-all duration-300 hover:-translate-y-0.5"
      >
        Terms of Service
      </Link>
      <Link
        href="/"
        className="text-xs md:text-base text-foreground hover:text-muted-foreground transition-all duration-300 hover:-translate-y-0.5"
      >
        Privacy Policy
      </Link>
      <p className="text-xs md:text-base text-foreground transition-colors duration-300">
        <span className="text-xs">©</span> 2026 Developer OS.
        All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
