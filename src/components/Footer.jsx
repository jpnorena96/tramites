import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-6"><span className="font-bold text-2xl text-white">TRÁMITES AJP</span></div>
        <div className="flex justify-center gap-6 mb-8 text-slate-300 font-medium">
          <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="https://wa.me/51999999999">Contacto</a>
        </div>
        <p className="max-w-3xl mx-auto px-4">Descargo: Trámites AJP es una agencia privada. No somos la Embajada de EE.UU.</p>
      </div>
    </footer>
  );
};
export default Footer;
