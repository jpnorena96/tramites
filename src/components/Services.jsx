import React from 'react';
import { FileText, Clock, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <FileText size={32} />,
      title: "Llenado DS-160",
      desc: "El formulario es la clave. Lo llenamos en inglés, perfilando tu información para minimizar riesgos de rechazo.",
      color: "bg-ajp-50 text-ajp-600"
    },
    {
      icon: <Clock size={32} />,
      title: "Adelanto de Citas",
      desc: "Nuestro software monitorea la embajada 24/7. Si alguien cancela, tomamos ese lugar para ti al instante.",
      color: "bg-us-red-50 text-us-red-600"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Asesoría Consular",
      desc: "Simulacro de entrevista. Te preparamos para las preguntas difíciles y revisamos tu documentación.",
      color: "bg-ajp-100 text-ajp-800"
    }
  ];

  return (
    <div id="servicios" className="w-full h-full flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-us-red-600 font-bold tracking-wide uppercase text-sm mb-2"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900"
          >
            Todo lo que necesitas para tu Visa
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-600"
          >
            Nos encargamos de la burocracia para que tú solo te preocupes por hacer la maleta.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 border border-slate-100 rounded-2xl bg-white shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
