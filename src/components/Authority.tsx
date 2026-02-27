import { motion } from 'motion/react';

export const Authority = () => {
  return (
    <section id="autoridade" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              Não somos apenas uma loja. <br />
              <span className="text-lime-400">Somos a Base.</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10">
              Há mais de 10 anos equipando os maiores kamikazes do Brasil. Nossos equipamentos são testados nas piores condições possíveis antes de chegarem às suas mãos. Nós não vendemos produtos, vendemos sobrevivência e adrenalina.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 border-lime-500 pl-4">
                <div className="text-4xl font-black text-white mb-1">+10k</div>
                <div className="text-sm font-bold uppercase text-zinc-500 tracking-wider">Atletas Equipados</div>
              </div>
              <div className="border-l-2 border-lime-500 pl-4">
                <div className="text-4xl font-black text-white mb-1">100%</div>
                <div className="text-sm font-bold uppercase text-zinc-500 tracking-wider">Garantia Extrema</div>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 border-l-4 border-lime-500 relative">
              <p className="text-zinc-300 italic mb-4">
                "Minha prancha antiga me limitava e quase quebrou no meio de um tubo gigante em Nazaré. Com o equipamento da AdrenalX, zerei a temporada com total segurança e confiança para arriscar mais."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-zinc-800 rounded-full bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80')] bg-cover bg-center"></div>
                <div>
                  <div className="text-white font-bold uppercase text-sm">Marcos 'Tsunami' Silva</div>
                  <div className="text-lime-400 text-xs font-bold uppercase">Surfista Profissional (Big Rider)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1541535881962-3bb380b08458?auto=format&fit=crop&w=400&q=80" alt="Action sport" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800" />
             <img src="https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?auto=format&fit=crop&w=400&q=80" alt="Action sport" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 sm:translate-y-8 border border-zinc-800" />
          </div>
        </div>
      </div>
    </section>
  );
};