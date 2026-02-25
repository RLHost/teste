import { motion } from 'motion/react';
import { Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-brand-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-brand-900 to-brand-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-700/50 mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Vargem Grande Paulista / SP</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Socorro rápido e mecânica de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">confiança.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Seu veículo parou? Nós resolvemos. Oferecemos serviços de guincho 24 horas e oficina mecânica completa para garantir que você volte à estrada com segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <Phone className="h-5 w-5" />
                Chamar Socorro Agora
              </a>
              <a href="#servicos" className="flex items-center justify-center gap-2 bg-brand-800 hover:bg-brand-700 text-white border border-brand-600 px-8 py-4 rounded-lg font-medium text-lg transition-all">
                Ver Serviços
              </a>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Plantão 24h</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Segurança</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl transform rotate-3 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1605810754117-91024cd42b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Mecânico trabalhando e serviço de guincho" 
              className="rounded-2xl shadow-2xl relative z-10 border border-brand-700/50 object-cover h-[500px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}