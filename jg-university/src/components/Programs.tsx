"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Code2, LineChart, BrainCircuit, Globe, Leaf } from "lucide-react";

const programs = [
  {
    title: "School of Computing",
    description: "Master modern software engineering, web development, and cloud architecture.",
    icon: <Code2 className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "School of AI",
    description: "Dive into machine learning, neural networks, and generative models.",
    icon: <BrainCircuit className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "School of Commerce",
    description: "Next-gen business strategies, fintech, and global economics.",
    icon: <LineChart className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "School of Engineering",
    description: "Hardware design, IoT, and core electronics.",
    icon: <Cpu className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Global Studies",
    description: "International relations and policy.",
    icon: <Globe className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Sustainability",
    description: "Environmental science and green tech.",
    icon: <Leaf className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Programs() {
  return (
    <section id="programs" className="py-32 bg-background relative border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <span className="small-caps text-accent mb-4 block">Academic Excellence</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 tracking-tight">
            Future-Ready Programs
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.75]">
            Choose from a diverse range of cutting-edge disciplines designed to equip you with the skills demanded by tomorrow&apos;s industries.
          </p>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]"
        >
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className={`group relative overflow-hidden bg-card border border-border p-8 transition-all duration-300 hover:shadow-xl hover:border-accent/30 ${program.className}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 flex items-center justify-center text-accent mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-none">{program.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
