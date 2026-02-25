import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Oliveira',
    text: 'Meu carro quebrou na Raposo Tavares de madrugada. O guincho da Borba chegou em 20 minutos e já deixaram o carro na oficina deles. No dia seguinte resolveram o problema rápido. Excelente serviço!',
    role: 'Cliente'
  },
  {
    name: 'Fernanda Costa',
    text: 'Sempre levo meu carro para revisão preventiva com a equipe da Borba. São muito honestos, mostram exatamente o que precisa ser trocado sem inventar defeito. Recomendo para toda região de Vargem Grande.',
    role: 'Cliente'
  },
  {
    name: 'Roberto Almeida',
    text: 'Preço justo e atendimento impecável. Fiquei na mão com a bateria e me socorreram super rápido. Profissionais educados e que entendem do assunto.',
    role: 'Cliente'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
          <p className="text-lg text-gray-300">
            A satisfação de quem confia na Borba Guincho e Serviços para cuidar do seu veículo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-800 p-8 rounded-2xl border border-brand-700 relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-blue-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}