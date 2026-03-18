"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib";
import { useTheme } from "next-themes";

const Developer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section id="developer" className="px-6 py-10 bg-transparent">
      <div className="bg-transparent h-full p-16 flex flex-col flex-nowrap max-[991px]:px-10 max-[991px]:py-12">
        {/* العنوان */}
        <motion.div
          className="w-full flex justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-foreground">
            About Developer
          </h2>
        </motion.div>

        {/* المحتوى */}
        <div className="flex flex-nowrap flex-row justify-center items-center max-[991px]:flex-col">
          {/* الصورة */}
          <motion.div
            className="w-[45%] flex items-center mb-12 justify-center max-[991px]:w-full max-[767px]:w-[110%]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              suppressHydrationWarning
              src={
                resolvedTheme === "dark" ? "/homeWhite.webp" : "/homeBlack.webp"
              }
              alt="profile"
              width={400}
              height={400}
              className="h-full w-full drop-shadow-foreground drop-shadow-xl/50 lg:max-w-100 lg:max-h-100 max-[767px]:w-full max-[767px]:h-auto relative object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* النصوص */}
          <motion.div
            className="w-[55%] flex flex-nowrap flex-col justify-center gap-0 max-[991px]:w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-3xl font-semibold mb-6 text-foreground"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Engineer Kerolos Adel
            </motion.div>

            <motion.p
              className="text-justify text-lg text-foreground"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I am a dedicated and enthusiastic computer science student at
              Thebes Academy in Giza, Egypt. My primary focus is on front-end
              development, where I combine technical skills and creativity to
              build user-friendly interfaces and responsive websites. My goal is
              to bridge the gap between design and technology, ensuring seamless
              and engaging digital experiences. I am driven by a passion for
              continuous learning and staying up-to-date with the latest
              industry trends and technologies. I am committed to expanding my
              knowledge and honing my skills to deliver innovative solutions in
              the ever-evolving field of web development.
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-left md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-[16px] text-foregound mb-4">His Socials</p>
                <div
                  className="flex items-center gap-2.5 text-[20px] cursor-pointer w-fit text-foregound
                md:justify-center"
                >
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.url}
                        className="text-foreground hover:text-muted-foreground transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-110"
                        title={social.name}
                      >
                        <IconComponent />
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
