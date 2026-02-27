import { motion } from 'motion/react';
import { Skull, ShieldAlert, Zap } from 'lucide-react';

export const ProblemSolution = () => {
  return (
    <section id="problema" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
              Você confia a sua vida a <br/><span className="text-red-500">equipamentos baratos?</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Frustrado com pranchas que racham na primeira manobra pesada ou cordas que não passam segurança? O barato custa caro quando você está a 20 metros do chão ou dropando uma onda gigante. Um erro de equipamento não é um contratempo, é um desastre.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 shrink-0">
                  <Skull className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase mb-1">Risco Iminente</h3>
                  <p className="text-zinc-500">Materiais de baixa qualidade cedem sob pressão extrema, colocando você em perigo real.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-lime-500/10 p-3 shrink-0">
                  <ShieldAlert className="w-6 h-6 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase mb-1">A Solução Definitiva</h3>
                  <p className="text-zinc-500">Engenharia militar aplicada aos esportes radicais. Testado até a falha para que nunca falhe com você.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 to-emerald-600 blur opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80"
              alt="Climber on a steep rock face"
              className="relative w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-zinc-800"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-sm p-6 border-l-4 border-lime-500">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-lime-400" />
                <span className="text-white font-bold uppercase tracking-wider">Performance Blindada</span>
              </div>
              <p className="text-zinc-400 text-sm">Nossos equipamentos não apenas acompanham você, eles empurram seus limites para o próximo nível.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};