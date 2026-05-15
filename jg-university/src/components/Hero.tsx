"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950">
      {/* Abstract Tech-Particle Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px]"
          style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-slate-300">Admissions open for 2026 Batch</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-br from-white to-slate-400 mb-6 max-w-5xl"
        >
          Shape the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-violet-500">
            Technology & Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mb-10"
        >
          JG University is a premier institution dedicated to excellence in education, 
          fostering leaders in Engineering, AI, and Commerce for tomorrow&apos;s challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Glassmorphism Apply Now Button */}
          <button className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-lg rounded-full text-white font-semibold transition-all flex items-center justify-center gap-2 overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-blue-600/50 to-violet-600/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 rounded-full text-white font-semibold border border-slate-700 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            Explore Programs
          </button>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="hidden lg:block absolute right-[10%] top-[30%] w-24 h-24 rounded-2xl bg-linear-to-br from-blue-500/20 to-transparent border border-blue-500/20 backdrop-blur-xl rotate-12"
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="hidden lg:block absolute left-[10%] bottom-[30%] w-32 h-32 rounded-full bg-linear-to-tr from-violet-500/20 to-transparent border border-violet-500/20 backdrop-blur-xl -rotate-12"
      />
    </section>
  );
}
