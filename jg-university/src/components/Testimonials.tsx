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
    <section className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Hear from our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-violet-500">Alumni</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors shadow-2xl shadow-black/50 group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-800 group-hover:text-slate-700 transition-colors" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-slate-300 mb-8 italic grow">&quot;{t.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full ring-2 ring-slate-800 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{t.name}</h4>
                    <p className="text-sm text-slate-400">{t.role}</p>
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
