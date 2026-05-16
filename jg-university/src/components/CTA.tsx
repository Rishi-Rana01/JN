"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 bg-background relative border-t border-border">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-card border border-border shadow-md rounded-none p-12 md:p-24 text-center relative overflow-hidden max-w-5xl mx-auto"
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="small-caps text-accent mb-6 block">Join JG University</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground mb-8 tracking-tight leading-[1.1]">
              Ready to start your journey?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Join a community of innovators, thinkers, and creators. Applications for the Fall 2026 cohort are now open.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
              <button className="min-h-[52px] px-10 py-3 bg-accent text-accent-foreground font-medium rounded-md shadow-sm hover:bg-accent-secondary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group">
                Start Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="min-h-[52px] px-10 py-3 rounded-md text-foreground font-medium border border-border hover:border-accent hover:text-accent hover:bg-muted/50 transition-all duration-200 flex items-center justify-center">
                Contact Admissions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
