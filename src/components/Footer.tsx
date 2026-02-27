import { Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-lime-400" />
          <span className="text-xl font-black tracking-tighter text-white uppercase">Adrenal<span className="text-lime-400">X</span></span>
        </div>
        <p className="text-zinc-600 text-sm font-bold uppercase tracking-wider text-center">
          © {new Date().getFullYear()} AdrenalX. Apenas para os fortes. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-zinc-500 hover:text-lime-400 font-bold uppercase text-sm transition-colors">Instagram</a>
          <a href="#" className="text-zinc-500 hover:text-lime-400 font-bold uppercase text-sm transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
};