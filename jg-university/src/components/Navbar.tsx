"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="https://jguni.in/images/logo.png" 
            alt="JG University Logo" 
            width={160} 
            height={40}
            loading="eager" 
            className="h-10 w-auto object-contain"
            style={{ width: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="small-caps text-muted-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button className="small-caps text-foreground hover:text-accent transition-colors">
            Login
          </button>
          <button className="min-h-[44px] px-6 py-2 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:bg-accent-secondary hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md transition-all duration-200">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-card border-b border-border md:hidden flex flex-col px-6 py-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-4 small-caps text-muted-foreground hover:text-accent border-b border-border last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-6">
              <button className="min-h-[44px] py-2 text-center small-caps text-foreground hover:text-accent border border-border rounded-md">
                Login
              </button>
              <button className="min-h-[44px] py-2 text-center text-sm font-medium text-accent-foreground bg-accent rounded-md">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
