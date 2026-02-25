import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Fale Conosco
            </h2>
            <p className="text-slate-600 mb-8">
              Precisando de guincho emergencial ou agendar uma revisão na nossa oficina? Entre em contato, responderemos o mais rápido possível.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Localização</h4>
                  <p className="text-slate-600">Vargem Grande Paulista / SP</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Horário de Funcionamento</h4>
                  <p className="text-slate-600"><strong>Guincho:</strong> 24 Horas</p>
                  <p className="text-slate-600"><strong>Oficina:</strong> Seg a Sex, 08h às 18h</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">E-mail</h4>
                  <p className="text-slate-600">contato@borbaguincho.com.br</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <form className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Envie uma Mensagem</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="(11) 90000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;