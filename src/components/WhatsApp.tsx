import { MessageCircle } from 'lucide-react';

export default function WhatsApp() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg shadow-green-900/50 transition-transform hover:scale-110 flex items-center justify-center animate-[bounce_3s_infinite]"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </a>
  );
}