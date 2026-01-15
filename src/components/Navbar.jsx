import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-10 w-10 bg-gradient-to-br from-ajp-600 to-ajp-800 rounded-full flex items-center justify-center text-white shadow-lg">
              <Plane size={20} className="transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-900 leading-none">TRÁMITES MOMO</span>
              <span className="text-[10px] tracking-widest text-ajp-600 font-semibold uppercase">Asesoría & Gestión</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className="text-slate-600 hover:text-ajp-700 font-medium transition">Inicio</a>
            <a href="#servicios" className="text-slate-600 hover:text-ajp-700 font-medium transition">Servicios</a>
            <a href="#faq" className="text-slate-600 hover:text-ajp-700 font-medium transition">Preguntas</a>
            <a href="https://wa.me/5212291520671" target="_blank" className="bg-us-red-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-us-red-700 transition shadow-lg transform hover:-translate-y-0.5">
              Agendar Cita
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-ajp-600 transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="block py-3 text-slate-600 font-medium border-b border-gray-50">Inicio</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block py-3 text-slate-600 font-medium border-b border-gray-50">Servicios</a>
            <a href="https://wa.me/5212291520671" className="block mt-4 text-center bg-ajp-600 text-white py-3 rounded-lg font-bold shadow-md">Contactar</a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
