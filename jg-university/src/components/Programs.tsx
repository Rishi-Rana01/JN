"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, LineChart, BrainCircuit, Globe, Leaf } from "lucide-react";

const programs = [
  {
    title: "School of Computing",
    description: "Master modern software engineering, web development, and cloud architecture.",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "School of AI",
    description: "Dive into machine learning, neural networks, and generative models.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "from-violet-500 to-purple-400",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "School of Commerce",
    description: "Next-gen business strategies, fintech, and global economics.",
    icon: <LineChart className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-400",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "School of Engineering",
    description: "Hardware design, IoT, and core electronics.",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-orange-500 to-red-400",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Global Studies",
    description: "International relations and policy.",
    icon: <Globe className="w-6 h-6" />,
    color: "from-pink-500 to-rose-400",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Sustainability",
    description: "Environmental science and green tech.",
    icon: <Leaf className="w-6 h-6" />,
    color: "from-green-500 to-lime-400",
    className: "md:col-span-1 md:row-span-1",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Programs() {
  return (
    <section id="programs" className="py-32 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Future-Ready <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-violet-500">Programs</span>
          </h2>
          <p className="text-lg text-slate-400">
            Choose from a diverse range of cutting-edge disciplines designed to equip you with the skills demanded by tomorrow&apos;s industries.
          </p>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]"
        >
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className={`group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-slate-700 transition-all hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] ${program.className}`}
            >
              {/* Neon border effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-br ${program.color} transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-800 text-white shadow-inner border border-slate-700/50 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-slate-400 line-clamp-2 md:line-clamp-none">{program.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
