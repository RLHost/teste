import React from 'react';
import { motion } from 'motion/react';
import { Truck, Wrench, BatteryCharging, Key, Car, Gauge } from 'lucide-react';

const services = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Guincho 24h',
    description: 'Resgate de veículos leves e utilitários em Vargem Grande e rodovias da região a qualquer hora.'
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Mecânica Geral',
    description: 'Reparos no motor, suspensão, freios e sistemas de direção com peças de qualidade.'
  },
  {
    icon: <BatteryCharging className="h-8 w-8" />,
    title: 'Socorro Elétrico',
    description: 'Recarga de bateria, troca no local e diagnóstico de problemas no sistema elétrico do veículo.'
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: 'Revisão Preventiva',
    description: 'Troca de óleo, filtros, correias e check-up completo para garantir sua viagem segura.'
  },
  {
    icon: <Key className="h-8 w-8" />,
    title: 'Abertura de Veículos',
    description: 'Trancou a chave dentro do carro? Realizamos a abertura sem danificar a lataria ou os vidros.'
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: 'Injeção Eletrônica',
    description: 'Diagnóstico computadorizado de falhas para veículos nacionais e importados.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-slate-600 text-lg">
            Soluções completas para o seu veículo em um só lugar. Do resgate na rua ao conserto na oficina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;