import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Search, Calendar, Plane } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <ClipboardCheck size={32} />,
            title: "1. Diagnóstico Inicial",
            desc: "Evaluamos tu perfil y posibilidades reales. Sin falsas promesas.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Search size={32} />,
            title: "2. Gestión DS-160",
            desc: "Completamos tu formulario en inglés técnico para evitar errores comunes.",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: <Calendar size={32} />,
            title: "3. Programación",
            desc: "Agendamos tu cita inicial (aunque sea lejana) para entrar al sistema.",
            color: "bg-pink-100 text-pink-600"
        },
        {
            icon: <Plane size={32} />,
            title: "4. Adelanto Automático",
            desc: "Nuestro software detecta cupos liberados y adelanta tu cita meses o años.",
            color: "bg-green-100 text-green-600"
        }
    ];

    return (
        <div className="w-full h-full flex items-center relative overflow-hidden">
            {/* Background Decorative Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-50 -translate-y-1/2 hidden md:block z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-ajp-600 font-bold tracking-wide uppercase text-sm mb-2">Proceso Simplificado</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">Tu Visa en 4 Pasos</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-lg flex flex-col items-center text-center group hover:border-ajp-200 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                {step.icon}
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-3">{step.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
