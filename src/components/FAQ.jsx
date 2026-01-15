import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { q: "¿Es seguro dar mis datos personales?", a: "Absolutamente. Firmamos un acuerdo de confidencialidad y tus datos se eliminan de nuestros servidores una vez completado el trámite." },
    { q: "¿Garantizan la aprobación?", a: "Ninguna agencia honesta puede garantizar la aprobación, eso depende exclusivamente del cónsul. Nosotros garantizamos un proceso perfecto, sin errores técnicos que puedan causar un rechazo." },
    { q: "¿Cómo funciona el adelanto?", a: "Nuestro software monitorea el sistema de la embajada 24/7. Cuando se libera un cupo por cancelación, nuestro sistema lo captura automáticamente para ti en milisegundos." },
    { q: "¿Qué incluye el servicio?", a: "Incluye llenado de formulario DS-160, pago de tasas (si aplica), programación de citas, monitoreo para adelanto y una sesión de preparación para la entrevista." }
  ];

  return (
    <div id="faq" className="w-full h-full flex items-center bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-slate-900 mb-12"
        >
          Preguntas Frecuentes
        </motion.h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-800">{item.q}</span>
                {activeIndex === index ? <Minus size={20} className="text-ajp-600" /> : <Plus size={20} className="text-ajp-600" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
