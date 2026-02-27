import { motion } from 'motion/react';
import { Target } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problema" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <Target className="w-12 h-12 text-red-500" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-3xl md:text-5xl uppercase mb-8 leading-tight"
          >
            Sua evolução travou por causa de <span className="text-red-500">material amador?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 leading-relaxed"
          >
            Um rolamento estourado, um shape trincado no meio da manobra ou uma suspensão que vaza não apenas estragam sua sessão — <strong className="text-zinc-100">eles colocam sua integridade física em risco extremo.</strong> Você realmente vai confiar sua vida a equipamentos descartáveis?
          </motion.p>
        </div>
      </div>
    </section>
  );
}