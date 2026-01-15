import React from 'react';
import { CalendarCheck, ArrowRight, Star, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="inicio" className="relative w-full h-full flex items-center overflow-hidden bg-white pt-20 lg:pt-28">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Background Gradient Blobs */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 w-[800px] h-[800px] bg-ajp-100/40 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ajp-100 shadow-sm text-ajp-700 font-semibold text-xs uppercase tracking-wide mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Sistema de Alertas 24/7 Activo
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 lg:mb-8 tracking-tight">
              ¿Tu cita es para el <span className="text-transparent bg-clip-text bg-gradient-to-r from-us-red-600 to-us-red-400">2027?</span><br />
              <span className="relative z-10 inline-block">
                Viaja Antes.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ajp-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Somos expertos en detectar cupos liberados. Adelantamos tu entrevista consular de meses a semanas. <strong>Tu viaje a USA empieza aquí.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5212291520671"
                className="bg-us-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-us-red-700 transition shadow-xl shadow-us-red-200 flex items-center justify-center gap-2"
              >
                Adelantar mi Cita <ArrowRight size={20} />
              </motion.a>
              <a href="#servicios" className="px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-ajp-300 hover:bg-ajp-50 transition flex items-center justify-center shadow-sm">
                Cómo Funciona
              </a>
            </div>

          </motion.div>

          {/* Graphic Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Card */}
              <div className="bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 relative z-20">
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <span className="font-bold text-blue-600 text-lg">US</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Embajada de EE.UU.</h3>
                      <p className="text-xs text-slate-500">Lima, Perú</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">CONFIRMADO</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CalendarCheck className="text-slate-400" size={20} />
                      <div>
                        <p className="text-xs text-slate-500 font-medium line-through">Fecha Original</p>
                        <p className="text-sm font-bold text-slate-400">15 Octubre, 2027</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-ajp-50 border border-ajp-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CalendarCheck className="text-ajp-600" size={24} />
                      <div>
                        <p className="text-xs text-ajp-600 font-medium">Nueva Fecha</p>
                        <p className="text-lg font-bold text-ajp-700">22 Marzo, 2025</p>
                      </div>
                    </div>
                    <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 z-30 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg"><Star className="text-orange-500" size={18} fill="currentColor" /></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Visa Aprobada</p>
                    <p className="text-xs text-slate-500">Hace 2 minutos</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 z-30 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg"><Users className="text-blue-500" size={18} /></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Grupo Familiar</p>
                    <p className="text-xs text-slate-500">4 Visas gestionadas</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Blobs behind card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-ajp-200/50 to-blue-100/50 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
