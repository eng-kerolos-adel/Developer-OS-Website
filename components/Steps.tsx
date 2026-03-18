"use client";

import { steps } from "@/lib";
import { motion } from "framer-motion";
import Link from "next/link";

const Steps = () => {
  return (
    <section id="steps" className="px-6 py-10 bg-transparent">
      <div className="bg-transparent h-full rounded-3xl flex flex-col flex-nowrap">
        <motion.div
          className="w-full flex justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-foreground px-6">
            How to Install
          </h2>
        </motion.div>

        <motion.div
          className="flex gap-4 items-center justify-center flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            return (
              <motion.div
                key={step.title}
                className="bg-transparent p-6 md:p-8 w-full sm:w-[48%] lg:w-[20%] flex flex-col justify-center items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="drop-shadow-foreground text-2xl h-12 flex items-center justify-center drop-shadow-xl/20 border border-foreground rounded-lg p-2.5 bg-white/70 backdrop-blur-[10px] text-foreground"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  Step {step.number}
                </motion.div>
                <motion.div
                  className="relative w-full aspect-9/19 mt-4 drop-shadow-foreground drop-shadow-xl/50 overflow-hidden lg:w-[80%]"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
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

export default Steps;
