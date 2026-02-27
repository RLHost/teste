import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=1920&q=80" 
          alt="BMX Rider Extreme" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-zinc-900 border border-neon-400/30 text-neon-400 font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Equipamentos High-End
            </span>
            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase text-zinc-50 mb-6">
              Desafie a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-green-600">
                Gravidade.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-zinc-400 mb-10 max-w-2xl font-light"
          >
            Equipamentos de alta performance para atletas que não aceitam limites. Chegou a hora de quebrar seus recordes com segurança absoluta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => scrollToSection('solucao')}
              className="group relative bg-neon-400 hover:bg-neon-500 text-zinc-950 font-black py-4 px-8 uppercase tracking-widest text-sm transition-all overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Quero Dominar a Pista</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}