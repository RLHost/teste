import { motion } from 'motion/react';
import { Shield, Zap, Flame } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Blindagem Extrema',
    desc: 'Materiais de nível militar testados sob os impactos mais brutais. Feitos para durar, não para quebrar.'
  },
  {
    icon: Zap,
    title: 'Resposta Imediata',
    desc: 'Engenharia de precisão que garante que seu equipamento reaja na mesma fração de segundo que o seu cérebro.'
  },
  {
    icon: Flame,
    title: 'Performance Insana',
    desc: 'Design aerodinâmico e peso reduzido para você voar mais alto, ir mais rápido e ir além do limite.'
  }
];

export default function Solution() {
  return (
    <section id="solucao" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading font-black text-4xl md:text-5xl uppercase mb-6">
            A Força Que Você Precisa Para <span className="text-neon-400">Voar Mais Alto</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Nossa linha premium não é apenas equipamento. É a extensão do seu corpo preparada para o caos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-zinc-950 p-8 border-t-4 border-neon-400 hover:bg-zinc-900/80 transition-colors group"
            >
              <feat.icon className="w-14 h-14 text-neon-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-bold text-2xl uppercase mb-4">{feat.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}