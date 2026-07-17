import { Link } from "wouter";
import { config } from "@/config";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          <div className="md:col-span-1">
            <Link href="/">
              <span className="font-serif text-2xl tracking-widest uppercase text-white block mb-6">
                Urbanlane Studio
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs font-light text-background/70">
              Architecture and interior design rooted in material honesty, spatial logic, and enduring craft. Based in Karjat, Maharashtra.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6 font-light">Studio</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/studio"><span className="hover:text-white transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/portfolio"><span className="hover:text-white transition-colors cursor-pointer">Selected Works</span></Link></li>
              <li><Link href="/services"><span className="hover:text-white transition-colors cursor-pointer">Services</span></Link></li>
              <li><Link href="/process"><span className="hover:text-white transition-colors cursor-pointer">Design Process</span></Link></li>
              <li><Link href="/materials"><span className="hover:text-white transition-colors cursor-pointer">Material Library</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6 font-light">Connect</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/contact"><span className="hover:text-white transition-colors cursor-pointer">Start Your Project</span></Link></li>
              <li><Link href="/journal"><span className="hover:text-white transition-colors cursor-pointer">Journal</span></Link></li>
              <li><a href={`mailto:${config.studio.email}`} className="hover:text-white transition-colors">Email Us</a></li>
              <li><a href={config.studio.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6 font-light">Location</h4>
            <address className="not-italic text-sm font-light space-y-4 text-background/70">
              <p>{config.studio.address}</p>
              <p>{config.studio.workingHours}</p>
              <p className="pt-2">
                <a href={`tel:${config.studio.phone.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-accent transition-colors">
                  {config.studio.phone}
                </a>
              </p>
            </address>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Urbanlane Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy"><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></Link>
            <Link href="/terms"><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
