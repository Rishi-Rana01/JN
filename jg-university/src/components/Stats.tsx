"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "17", label: "Colleges", suffix: "" },
  { value: "50", label: "Years Legacy", suffix: "+" },
  { value: "25", label: "Global Partners", suffix: "+" },
  { value: "100", label: "Placement Rate", suffix: "%" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-baseline mb-2">
                <span className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-white to-slate-400">
                  {stat.value}
                </span>
                <span className="text-2xl md:text-4xl font-bold text-blue-500">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
