import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

export default function Authority() {
  return (
    <section id="autoridade" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-neon-400 transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=800&q=80" 
                alt="Atleta patrocinado" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <Trophy className="w-12 h-12 text-neon-400 mb-6" />
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase mb-6 leading-tight">
              10 Anos Forjando <br/><span className="text-neon-400">Campeões</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Não somos apenas uma loja. Somos o bunker onde os melhores atletas extremos buscam seu arsenal. Mais de 5.000 profissionais já elevaram seu nível com nosso equipamento de elite.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading font-black text-4xl text-white mb-2">+5k</h4>
                <p className="text-zinc-500 font-bold uppercase tracking-wider text-sm">Atletas Equipados</p>
              </div>
              <div>
                <h4 className="font-heading font-black text-4xl text-white mb-2">100%</h4>
                <p className="text-zinc-500 font-bold uppercase tracking-wider text-sm">Garantia de Impacto</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}