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
    <section className="py-24 bg-muted border-y border-border relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border border border-border bg-card">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-8 md:p-12"
            >
              <div className="flex items-baseline mb-3">
                <span className="text-5xl md:text-7xl font-serif text-foreground">
                  {stat.value}
                </span>
                <span className="text-3xl md:text-5xl font-serif text-accent">{stat.suffix}</span>
              </div>
              <p className="small-caps text-muted-foreground text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
