import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80"
              alt="Mecânico trabalhando"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              A Sua Escolha Certa em <br />Vargem Grande Paulista
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              A <strong>Borba Guincho e Serviços</strong> nasceu da necessidade de oferecer um atendimento automotivo honesto, rápido e eficaz para a região de Vargem Grande Paulista e Rodovia Raposo Tavares. Unimos a experiência em mecânica preventiva e corretiva com um serviço de resgate 24 horas.
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Seu carro quebrou? Precisa de uma revisão de confiança? Nossa equipe está pronta para atender com equipamentos modernos e a agilidade que você precisa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">Atendimento 24h</h3>
                  <p className="text-sm text-slate-600">Guincho disponível dia e noite.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">Transparência</h3>
                  <p className="text-sm text-slate-600">Orçamento claro e sem surpresas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950">Mão de Obra Especializada</h3>
                  <p className="text-sm text-slate-600">Profissionais experientes.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;