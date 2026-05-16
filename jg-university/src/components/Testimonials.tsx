"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "AI Researcher at DeepTech",
    image: "https://i.pravatar.cc/150?img=44",
    content: "JG University's School of AI provided me with the foundational knowledge and hands-on experience needed to thrive in today's rapidly evolving tech landscape.",
  },
  {
    name: "Michael Chen",
    role: "Founder, FinConnect",
    image: "https://i.pravatar.cc/150?img=11",
    content: "The intersection of technology and business at the School of Commerce was exactly what I needed to launch my fintech startup. Unparalleled faculty support.",
  },
  {
    name: "Aisha Patel",
    role: "Senior Systems Engineer",
    image: "https://i.pravatar.cc/150?img=5",
    content: "State-of-the-art labs and a curriculum that constantly adapts to industry needs. JG University truly prepares you for the future of engineering.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <span className="small-caps text-accent mb-4 block">Student Success</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight">
            Hear from our Alumni
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
              className="relative p-8 md:p-10 bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-muted/50 group-hover:text-accent/20 transition-colors" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-foreground text-lg leading-relaxed italic mb-10 grow font-serif">&quot;{t.content}&quot;</p>
                <div className="flex items-center gap-4 border-t border-border pt-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <div>
                    <h4 className="text-foreground font-medium">{t.name}</h4>
                    <p className="small-caps text-muted-foreground mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
