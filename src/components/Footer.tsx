import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-black py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8">
            <Zap className="w-10 h-10 text-neon-400" />
            <span className="font-heading font-black text-3xl tracking-tighter uppercase">
              Extreme<span className="text-neon-400">Gear</span>
            </span>
          </div>
          
          <h2 className="font-heading font-black text-3xl md:text-4xl uppercase mb-8 max-w-2xl">
            Pronto Para Deixar Os Amadores Para Trás?
          </h2>
          
          <button 
            className="bg-neon-400 hover:bg-neon-500 text-zinc-950 font-black py-5 px-10 uppercase tracking-widest text-lg transition-all transform hover:scale-105 mb-16"
          >
            Falar Com Especialista Agora
          </button>

          <p className="text-zinc-600 text-sm font-medium uppercase tracking-wider">
            &copy; {new Date().getFullYear()} ExtremeGear. Alta Performance Garantida.
          </p>
        </div>
      </div>
    </footer>
  );
}