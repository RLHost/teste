import { Truck, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-slate-950 text-gray-300 pt-16 pb-8 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Truck className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white tracking-tight">Borba<span className="text-blue-500">Guincho</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Referência em serviços de guincho 24h e mecânica especializada em Vargem Grande Paulista/SP. Qualidade e agilidade quando você mais precisa.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Links Rápidos</h3>
            <ul className="space-y-4">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Horário de Funcionamento</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Guincho</p>
                  <p className="text-gray-400">24 Horas / 7 Dias por semana</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Oficina Mecânica</p>
                  <p className="text-gray-400">Seg a Sex: 08:00 às 18:00</p>
                  <p className="text-gray-400">Sáb: 08:00 às 13:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Vargem Grande Paulista / SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="tel:+5511999999999" className="hover:text-white transition-colors text-lg font-bold text-blue-400">(11) 99999-9999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:contato@borbaguincho.com.br" className="hover:text-white transition-colors">contato@borbaguincho.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Borba Guincho e Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}