import React from 'react';
import { Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-slate-300 py-12 border-t border-blue-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-white mb-6 md:mb-0">
            <Truck className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold tracking-tight uppercase">
              Borba <span className="text-blue-400">Guincho</span>
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">&copy; {new Date().getFullYear()} Borba Guincho e Serviços. Todos os direitos reservados.</p>
            <p className="text-sm text-blue-400">Vargem Grande Paulista / SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;