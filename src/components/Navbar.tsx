import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tecnología", href: "#services" },
    { name: "Papelería", href: "#stationery" },
    { name: "Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className={`w-full px-10 py-6 flex justify-between items-center bg-white border-b border-brand-slate-200 sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : ""}`}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-blue-600 rounded flex items-center justify-center text-white font-bold">E</div>
        <span className="text-2xl font-extrabold tracking-tight text-brand-slate-900 uppercase">EMINTEC</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold text-brand-slate-600 uppercase tracking-widest">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="hover:text-brand-blue-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="hidden lg:block">
        <button className="btn-dark px-6 py-2 text-[10px] uppercase tracking-widest">
          Contacto Directo
        </button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden p-2 text-brand-slate-900"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-white border-b border-brand-slate-200 p-6 flex flex-col gap-4 shadow-xl z-40 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold text-brand-slate-600 uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-dark w-full py-4 mt-2">
              Hablar con un experto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
