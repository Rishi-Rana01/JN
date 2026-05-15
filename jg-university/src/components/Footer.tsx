import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                JG
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                University
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of innovators, leaders, and creators through world-class education and research.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Academics</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Undergraduate Programs</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Graduate Programs</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Online Learning</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Executive Education</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Admissions</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">How to Apply</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Tuition & Financial Aid</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">International Students</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Campus Tours</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Library</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Student Portal</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Career Center</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Alumni Network</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} JG University. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
