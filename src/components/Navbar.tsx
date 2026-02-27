import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const navLinks = [
    { name: 'O Risco', id: 'problema' },
    { name: 'Arsenal', id: 'produtos' },
    { name: 'A Base', id: 'autoridade' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Zap className="w-8 h-8 text-lime-400" />
            <span className="text-2xl font-black tracking-tighter text-white uppercase">Adrenal<span className="text-lime-400">X</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-lime-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollToSection('produtos')} className="bg-lime-500 hover:bg-lime-400 text-zinc-950 px-6 py-2 font-black uppercase tracking-wider transform hover:-translate-y-1 transition-all duration-200">
              Equipar Agora
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-300 hover:text-lime-400">
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-900 border-b border-zinc-800 absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg font-bold uppercase text-zinc-300 hover:text-lime-400 py-2"
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollToSection('produtos')} className="bg-lime-500 text-zinc-950 w-full px-6 py-3 font-black uppercase tracking-wider mt-4">
              Equipar Agora
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};