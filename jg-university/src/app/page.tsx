import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/20">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
