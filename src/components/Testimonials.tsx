import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Oliveira',
    role: 'Cliente de Guincho',
    content: 'Meu carro quebrou na Raposo Tavares de madrugada. O guincho chegou muito rápido, atendimento excelente. Recomendo para toda região de Vargem Grande!'
  },
  {
    name: 'Mariana Souza',
    role: 'Cliente de Oficina',
    content: 'Levei meu carro para uma revisão antes de viajar. O pessoal da mecânica foi super transparente, me explicaram tudo o que precisava ser feito sem empurrar serviços desnecessários.'
  },
  {
    name: 'Roberto Alves',
    role: 'Cliente de Socorro Elétrico',
    content: 'Fiquei sem bateria no estacionamento do supermercado. Liguei para a Borba, e em menos de 30 minutos resolveram meu problema. Muito eficientes!'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-blue-200 text-lg">
            A satisfação e segurança de quem confia no nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-900/50 p-8 rounded-2xl border border-blue-800"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 italic mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-blue-300">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;