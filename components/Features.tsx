"use client";

import { features } from "@/lib";
import { motion } from "framer-motion";
import Link from "next/link";

const Features = () => {
  return (
    <section id="features" className="px-6 py-10 bg-transparent">
      <div className="bg-transparent h-full p-16 rounded-3xl flex flex-col flex-nowrap max-[991px]:px-10 max-[991px]:py-12">
        <motion.div
          className="w-full flex justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-foreground">Our Features</h2>
        </motion.div>

        <motion.div
          className="flex gap-4 items-center justify-center flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-transparent p-6 md:p-8 w-full sm:w-[48%] lg:w-[30%]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-[28px] w-min md:text-[38px] border border-foreground rounded-lg p-2.5 bg-transparent backdrop-blur-[10px] text-foreground"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent />
                </motion.div>
                <h1 className="block my-6 text-foreground text-xl">
                  {feature.title}
                </h1>
                <p className="text-foreground text-base leading-6">
                  {feature.description}
                </p>
                <motion.div
                  className="relative w-full aspect-9/19 mt-10 overflow-hidden lg:w-[80%]"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
