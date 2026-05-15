"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle grid in the card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-size-[24px_24px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to start your journey?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Join a community of innovators, thinkers, and creators. Applications for the Fall 2026 cohort are now open.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group relative px-8 py-4 bg-white hover:bg-slate-100 rounded-full text-slate-950 font-bold transition-all flex items-center justify-center gap-2">
                Start Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-white font-semibold border border-slate-700 hover:bg-slate-800 transition-colors">
                Contact Admissions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
