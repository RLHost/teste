import { motion } from 'motion/react';
import { Wind, Waves, Mountain } from 'lucide-react';

const products = [
  {
    title: "Asfalto & Concreto",
    desc: "Skates, Longboards e proteções de alto impacto para dominar o street e o downhill sem restrições.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fúria do Oceano",
    desc: "Pranchas de Surf, Wakeboard e Neoprenes de alta performance térmica. Domine a força das águas.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Domínio Vertical",
    desc: "Equipamentos de escalada, rapel e alpinismo com certificação internacional. Segurança absoluta nas alturas.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1516592673884-4a382dcb780b?auto=format&fit=crop&w=600&q=80"
  }
];

export const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Seu Arsenal <span className="text-lime-400">Extremo</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Construídos para resistir ao impacto, à velocidade e à fúria da natureza. Escolha sua arma e vá para a guerra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group relative bg-zinc-950 border border-zinc-800 hover:border-lime-500 transition-colors duration-300 overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-zinc-950 p-2 border border-zinc-800">
                  <prod.icon className="w-6 h-6 text-lime-400" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase text-white mb-3">{prod.title}</h3>
                <p className="text-zinc-400 mb-6 min-h-[80px]">{prod.desc}</p>
                <button className="w-full bg-transparent border-2 border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-zinc-950 py-3 font-bold uppercase tracking-wider transition-all duration-300">
                  Ver Equipamentos
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};