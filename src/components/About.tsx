import { motion } from 'motion/react';
import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Equipe de mecânicos" 
              className="rounded-2xl shadow-lg w-full object-cover h-[600px]"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
              Tradição e excelência em Vargem Grande Paulista
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              A <strong>Borba Guincho e Serviços</strong> nasceu com o propósito de oferecer suporte rápido e de qualidade para motoristas em situações de emergência e na manutenção preventiva de seus veículos. Somos a principal escolha na região de Vargem Grande Paulista/SP.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-900">Nossa Missão</h4>
                  <p className="text-slate-600 mt-1">Garantir a mobilidade e segurança dos nossos clientes com serviços ágeis de guincho e mecânica precisa.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-900">Confiabilidade</h4>
                  <p className="text-slate-600 mt-1">Trabalhamos com transparência nos orçamentos e peças originais, prezando pelo respeito ao consumidor.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-900">Equipe Qualificada</h4>
                  <p className="text-slate-600 mt-1">Profissionais experientes, atualizados e prontos para resolver desde panes elétricas até reparos complexos no motor.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}