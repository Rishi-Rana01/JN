import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <Image 
                src="https://jguni.in/images/logo.png" 
                alt="JG University Logo" 
                width={200} 
                height={50} 
                className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Empowering the next generation of innovators, leaders, and creators through world-class education and research.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <MapPin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="small-caps text-foreground mb-6">Academics</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Undergraduate Programs</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Graduate Programs</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Online Learning</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Executive Education</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="small-caps text-foreground mb-6">Admissions</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">How to Apply</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Tuition & Financial Aid</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">International Students</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Campus Tours</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="small-caps text-foreground mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Library</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Student Portal</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Career Center</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Alumni Network</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="small-caps text-muted-foreground/70">
            &copy; {new Date().getFullYear()} JG University. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="small-caps text-muted-foreground/70 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="small-caps text-muted-foreground/70 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
