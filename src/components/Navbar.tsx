import { useState, useEffect } from 'react';
import { Truck, Menu, X, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-900 shadow-lg py-3' : 'bg-brand-900/95 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Truck className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white tracking-tight">Borba<span className="text-blue-400">Guincho</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a>
            <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
            <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
            <a href="#contato" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105">
              <Phone className="h-4 w-4" />
              <span>Plantão 24h</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-800 shadow-xl absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:bg-brand-700 rounded-md">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:bg-brand-700 rounded-md">Serviços</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:bg-brand-700 rounded-md">Sobre</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:bg-brand-700 rounded-md">Contato</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}