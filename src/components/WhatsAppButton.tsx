import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-lime-500 text-zinc-950 p-4 rounded-full shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:scale-110 transition-transform duration-300 group"
      aria-label="Contato pelo WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-lime-400 animate-ping opacity-75"></span>
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
};