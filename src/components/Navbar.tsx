import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { scrollToSection } from '../utils/scroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Problema', id: 'problema' },
    { name: 'Equipamentos', id: 'solucao' },
    { name: 'Autoridade', id: 'autoridade' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id, () => setIsMobileMenuOpen(false));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('hero')}
        >
          <Zap className="w-8 h-8 text-neon-400 group-hover:text-neon-500 transition-colors" />
          <span className="font-heading font-black text-2xl tracking-tighter uppercase">
            Extreme<span className="text-neon-400">Gear</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-zinc-300 hover:text-neon-400 font-medium text-sm uppercase tracking-wider transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-neon-400 hover:bg-neon-500 text-zinc-950 font-bold py-2 px-6 rounded-none uppercase tracking-wider text-sm transition-all transform hover:scale-105"
          >
            Garantir Equipamento
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-300 hover:text-neon-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-zinc-300 hover:text-neon-400 font-medium text-lg uppercase tracking-wider"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contato')}
            className="bg-neon-400 text-zinc-950 font-bold py-4 px-6 rounded-none uppercase tracking-wider text-center mt-4"
          >
            Garantir Equipamento Agora
          </button>
        </motion.div>
      )}
    </header>
  );
}