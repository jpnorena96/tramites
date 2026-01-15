import React from 'react';
import { MessageCircle } from 'lucide-react';
const FloatingWhatsApp = () => {
  return (
    <a href="https://wa.me/5212291520671" target="_blank" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 flex items-center gap-2 group whatsapp-pulse">
      <MessageCircle size={28} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">Â¡Hablemos!</span>
    </a>
  );
};
export default FloatingWhatsApp;
