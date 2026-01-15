# Script: APLICAR DISEÑO AJP
# Este script DEBE ejecutarse DENTRO de la carpeta 'tramites-ajp'
# Sobrescribirá los archivos base de Vite con tu Landing Page profesional.

Write-Host ">>> 🎨 APLICANDO DISEÑO DE 'TRAMITES AJP'..." -ForegroundColor Cyan

# 1. Verificación de seguridad
if (!(Test-Path "src")) {
    Write-Error "❌ ERROR: No veo la carpeta 'src'. Asegúrate de ejecutar este comando DENTRO de la carpeta 'tramites-ajp'."
    exit
}

# 2. Instalar dependencias necesarias (si faltaron)
Write-Host ">>> Verificando librerías de diseño..." -ForegroundColor Yellow
cmd /c "npm install lucide-react framer-motion clsx tailwind-merge" | Out-Null

# 3. Preparar carpetas
New-Item -ItemType Directory -Force -Path "src/components" | Out-Null
New-Item -ItemType Directory -Force -Path "src/assets" | Out-Null

function Escribir {
    param($File, $Text)
    $Text | Out-File -FilePath $File -Encoding utf8 -Force
    Write-Host "   ✅ Actualizado: $File" -ForegroundColor Gray
}

# ---------------------- ARCHIVOS DE CONFIGURACIÓN ----------------------

# tailwind.config.js
$Tailwind = @'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ajp: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed', 
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
'@
Escribir "tailwind.config.js" $Tailwind

# src/index.css
$CSS = @'
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; @apply bg-slate-50 text-slate-800; }

@keyframes pulse-custom {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  50% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
}
.whatsapp-pulse { animation: pulse-custom 2s infinite; }
'@
Escribir "src/index.css" $CSS

# ---------------------- COMPONENTES (SRC) ----------------------

# src/main.jsx
$Main = @'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
'@
Escribir "src/main.jsx" $Main

# src/components/Navbar.jsx
$Navbar = @'
import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="h-10 w-10 bg-gradient-to-br from-ajp-600 to-ajp-800 rounded-full flex items-center justify-center text-white shadow-lg">
              <Plane size={20} className="transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-900 leading-none">TRAMITES AJP</span>
              <span className="text-[10px] tracking-widest text-ajp-600 font-semibold uppercase">Asesoria & Gestion</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className="text-slate-600 hover:text-ajp-700 font-medium transition">Inicio</a>
            <a href="#servicios" className="text-slate-600 hover:text-ajp-700 font-medium transition">Servicios</a>
            <a href="#faq" className="text-slate-600 hover:text-ajp-700 font-medium transition">Preguntas</a>
            <a href="https://wa.me/51999999999" target="_blank" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-ajp-700 transition shadow-lg transform hover:-translate-y-0.5">
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
            <a href="https://wa.me/51999999999" className="block mt-4 text-center bg-ajp-600 text-white py-3 rounded-lg font-bold shadow-md">Contactar</a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
'@
Escribir "src/components/Navbar.jsx" $Navbar

# src/components/Hero.jsx
$Hero = @'
import React from 'react';
import { CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-white -z-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ajp-50/50 rounded-l-[100px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ajp-100 text-ajp-800 font-semibold text-xs uppercase tracking-wide mb-6 border border-ajp-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Sistema de Alertas Activo
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              ¿Tu cita es para el <span className="text-transparent bg-clip-text bg-gradient-to-r from-ajp-600 to-ajp-400">2026?</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No dejes que la espera arruine tus planes. En <strong>AJP</strong> somos expertos en detectar cupos liberados y gestionar tu <strong>formulario DS-160</strong> sin errores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/51999999999" className="bg-ajp-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-ajp-700 transition shadow-xl shadow-ajp-200 flex items-center justify-center gap-2">
                Adelantar mi Cita <ArrowRight size={20} />
              </a>
              <a href="#servicios" className="px-8 py-4 rounded-xl font-bold text-slate-700 border border-slate-200 hover:border-ajp-300 hover:bg-ajp-50 transition flex items-center justify-center">
                Ver Servicios
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded-full"><ShieldCheck className="text-green-600" size={18}/></div>
                <span className="text-sm font-medium text-slate-600">Gestión Segura</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-md">
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-ajp-200 rounded-full opacity-50 blur-xl"></div>
              <div className="flex items-center justify-between mb-8">
                 <div>
                    <h3 className="font-bold text-slate-800 text-lg">Estado del Trámite</h3>
                    <p className="text-slate-400 text-sm">Actualizado hace 5 min</p>
                 </div>
                 <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                    CONFIRMADO
                 </div>
              </div>
              <div className="space-y-6 relative pl-4 border-l-2 border-slate-100">
                 <div className="relative">
                    <div className="absolute -left-[21px] top-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white shadow"></div>
                    <p className="font-semibold text-slate-800 text-sm">Cita Reprogramada</p>
                    <p className="text-xs text-slate-500">Se adelantó de Octubre 2026 a Marzo 2025.</p>
                 </div>
                 <div className="relative">
                    <div className="absolute -left-[21px] top-1 bg-ajp-500 w-3 h-3 rounded-full border-2 border-white shadow"></div>
                    <p className="font-semibold text-slate-800 text-sm">Formulario DS-160 Enviado</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
'@
Escribir "src/components/Hero.jsx" $Hero

# src/components/Services.jsx
$Services = @'
import React from 'react';
import { FileText, Clock, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileText size={32} />,
      title: "Llenado DS-160",
      desc: "El formulario es la clave. Lo llenamos en inglés, perfilando tu información para minimizar riesgos de rechazo.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Clock size={32} />,
      title: "Adelanto de Citas",
      desc: "Nuestro software monitorea la embajada 24/7. Si alguien cancela, tomamos ese lugar para ti al instante.",
      color: "bg-ajp-50 text-ajp-600"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Asesoría Consular",
      desc: "Simulacro de entrevista. Te preparamos para las preguntas difíciles y revisamos tu documentación.",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-ajp-600 font-bold tracking-wide uppercase text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl font-bold text-slate-900">Todo lo que necesitas para tu Visa</h3>
          <p className="mt-4 text-slate-600">Nos encargamos de la burocracia para que tú solo te preocupes por hacer la maleta.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-slate-100 rounded-2xl bg-white shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
'@
Escribir "src/components/Services.jsx" $Services

# src/components/FAQ.jsx
$FAQ = @'
import React from 'react';
import { Plus } from 'lucide-react';
const FAQ = () => {
  const questions = [
    { q: "¿Es seguro dar mis datos personales?", a: "Absolutamente. Firmamos un acuerdo de confidencialidad." },
    { q: "¿Garantizan la aprobación?", a: "Ninguna agencia honesta puede garantizar la aprobación, eso depende del cónsul. Nosotros garantizamos un proceso sin errores." },
    { q: "¿Cómo funciona el adelanto?", a: "Monitoreamos el sistema 24/7. Cuando se libera un cupo, lo tomamos por ti." },
  ];
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-800 flex items-start gap-3"><Plus size={20} className="text-ajp-600"/>{item.q}</h3>
              <p className="mt-3 text-slate-600 pl-8 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
'@
Escribir "src/components/FAQ.jsx" $FAQ

# src/components/FloatingWhatsApp.jsx
$WSP = @'
import React from 'react';
import { MessageCircle } from 'lucide-react';
const FloatingWhatsApp = () => {
  return (
    <a href="https://wa.me/51999999999" target="_blank" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 flex items-center gap-2 group whatsapp-pulse">
      <MessageCircle size={28} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">¡Hablemos!</span>
    </a>
  );
};
export default FloatingWhatsApp;
'@
Escribir "src/components/FloatingWhatsApp.jsx" $WSP

# src/components/Footer.jsx
$Footer = @'
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-6"><span className="font-bold text-2xl text-white">TRAMITES AJP</span></div>
        <div className="flex justify-center gap-6 mb-8 text-slate-300 font-medium">
            <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="https://wa.me/51999999999">Contacto</a>
        </div>
        <p className="max-w-3xl mx-auto px-4">Descargo: Trámites AJP es una agencia privada. No somos la Embajada de EE.UU.</p>
      </div>
    </footer>
  );
};
export default Footer;
'@
Escribir "src/components/Footer.jsx" $Footer

# src/App.jsx
$App = @'
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ajp-200 selection:text-ajp-900">
      <Navbar />
      <main><Hero /><Services /><FAQ /></main>
      <Footer /><FloatingWhatsApp />
    </div>
  );
}
export default App;
'@
Escribir "src/App.jsx" $App

# Borrar basura
if (Test-Path "src/App.css") { Remove-Item "src/App.css" }

Write-Host "--------------------------------------------------------" -ForegroundColor Cyan
Write-Host "✨ ¡DISEÑO APLICADO! Ahora ejecuta:" -ForegroundColor Green
Write-Host "   npm run dev" -ForegroundColor Yellow
Write-Host "--------------------------------------------------------"