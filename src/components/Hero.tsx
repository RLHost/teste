import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(23, 37, 84, 0.95), rgba(30, 58, 138, 0.8)), url("https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-blue-300 font-semibold mb-4"
          >
            <MapPin className="h-5 w-5" />
            <span>Vargem Grande Paulista / SP e Região</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Socorro Rápido e <br className="hidden md:block" />
            <span className="text-blue-400">Mecânica de Confiança</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl"
          >
            Disponível 24 horas para serviços de guincho. Nossa equipe de especialistas em mecânica automotiva garante sua segurança na estrada com rapidez e eficiência.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+5511999999999"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/30"
            >
              <Phone className="h-5 w-5" />
              Ligar Agora
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              <MessageCircle className="h-5 w-5 text-green-400" />
              WhatsApp 24h
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;