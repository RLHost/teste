import React, { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-950/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 text-white">
            <Truck className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold tracking-tight uppercase">
              Borba <span className="text-blue-400">Guincho</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-blue-900/50"
            >
              Chamar Guincho
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-blue-950 shadow-xl border-t border-blue-900"
        >
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Chamar Guincho 24h
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;