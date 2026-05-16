"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          <div className="flex flex-col items-start text-left pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="small-caps text-accent border-b border-accent pb-1">
                Admissions open for 2026 Batch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-serif text-foreground mb-6 max-w-4xl tracking-tight"
            >
              Shape the Future of Technology & Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-xl mb-10 leading-[1.75]"
            >
              JG University is a premier institution dedicated to excellence in education, 
              fostering leaders in Engineering, AI, and Commerce for tomorrow&apos;s challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <button className="min-h-[44px] px-8 py-3 bg-accent text-accent-foreground font-medium rounded-md shadow-sm hover:bg-accent-secondary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group">
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="min-h-[44px] px-8 py-3 rounded-md text-foreground font-medium border border-border hover:border-accent hover:text-accent hover:bg-muted/50 transition-all duration-200 flex items-center justify-center">
                Explore Programs
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            <div className="absolute inset-0 border border-border rounded-lg translate-x-4 translate-y-4" />
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg border border-border">
              <Image 
                src="https://jguni.in/images/Untitled-4.webp"
                alt="JG University Campus Life"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
