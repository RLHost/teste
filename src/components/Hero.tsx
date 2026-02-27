import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToProblem = () => {
    const element = document.getElementById('problema');
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80"
          alt="Skater doing a trick"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 border border-lime-500/30 bg-lime-500/10 text-lime-400 text-sm font-bold uppercase tracking-widest mb-6">
              Apenas para os insanos
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[1.05] mb-6">
              Desafie a Gravidade. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600">
                Domine o Medo.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 font-medium max-w-2xl">
              Equipamentos de alta performance projetados para quem vive no limite. Não aceite menos que a perfeição quando sua vida está em jogo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="group flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-zinc-950 px-8 py-4 text-lg font-black uppercase tracking-wider transition-all duration-300"
              >
                Quero Equipamento de Ponta
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToProblem}
                className="flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-wider text-white border-2 border-zinc-700 hover:border-lime-400 hover:text-lime-400 transition-colors duration-300"
              >
                Entenda o Risco
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};