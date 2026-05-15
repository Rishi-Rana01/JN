"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Programs", href: "#programs" },
  { name: "Admissions", href: "#" },
  { name: "Research", href: "#" },
  { name: "Campus Life", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/50"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            JG
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            University
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Login
          </button>
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Apply Now
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 md:hidden flex flex-col px-6 py-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 text-base font-medium text-slate-300 hover:text-white border-b border-white/5 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button className="py-2 text-center text-sm font-medium text-slate-300 hover:text-white border border-slate-700 rounded-lg">
                Login
              </button>
              <button className="py-2 text-center text-sm font-medium text-white bg-blue-600 rounded-lg">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
