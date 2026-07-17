import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Studio", href: "/studio" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Journal", href: "/journal" },
  ];

  const isDarkNav = location === "/" && !isScrolled && !mobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled || mobileMenuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="z-50">
            <span
              className={`font-serif text-xl tracking-widest uppercase transition-colors duration-300 ${
                isDarkNav ? "text-white" : "text-foreground"
              }`}
            >
              Urbanlane Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-xs uppercase tracking-widest hover:text-accent transition-colors duration-300 ${
                    location.startsWith(link.href)
                      ? "text-accent"
                      : isDarkNav
                      ? "text-white/80"
                      : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span
                className={`text-xs uppercase tracking-widest border px-6 py-2 transition-all duration-300 ${
                  isDarkNav
                    ? "border-white/30 text-white hover:bg-white hover:text-black"
                    : "border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                }`}
              >
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="text-foreground w-6 h-6" />
            ) : (
              <Menu
                className={`w-6 h-6 ${isDarkNav ? "text-white" : "text-foreground"}`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-6 flex flex-col"
          >
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`font-serif text-4xl block ${
                        location.startsWith(link.href)
                          ? "text-accent"
                          : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                className="pt-8 border-t border-border mt-8"
              >
                <Link href="/contact">
                  <span className="text-sm uppercase tracking-widest border border-primary text-primary px-8 py-4 inline-block hover:bg-primary hover:text-primary-foreground transition-colors">
                    Start Your Project
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
