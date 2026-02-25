import { motion } from 'motion/react';
import { Truck, Wrench, Zap, Settings } from 'lucide-react';

const services = [
  {
    title: 'Guincho 24 Horas',
    description: 'Socorro imediato para veículos leves e pesados em Vargem Grande Paulista e região. Chegamos rápido até você.',
    icon: <Truck className="h-8 w-8 text-blue-500" />
  },
  {
    title: 'Mecânica Geral',
    description: 'Reparos completos de motor, suspensão, freios e embreagem com peças de qualidade e garantia.',
    icon: <Wrench className="h-8 w-8 text-blue-500" />
  },
  {
    title: 'Elétrica Automotiva',
    description: 'Diagnóstico computadorizado, troca de baterias, alternadores, motores de partida e reparos elétricos.',
    icon: <Zap className="h-8 w-8 text-blue-500" />
  },
  {
    title: 'Revisão Preventiva',
    description: 'Troca de óleo, filtros, correias e check-up completo para você viajar com segurança e tranquilidade.',
    icon: <Settings className="h-8 w-8 text-blue-500" />
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-slate-600">
            Soluções completas para o seu veículo, desde o resgate na via até o reparo especializado em nossa oficina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors [&>svg]:group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}