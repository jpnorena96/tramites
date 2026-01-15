import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-ajp-600 rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                    ¿Listo para obtener tu Visa <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ajp-300 to-ajp-500">sin estrés ni demoras?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto"
                >
                    Deja el proceso en manos de expertos. Aseguramos tu formulario y monitoreamos tu cita mientras tú planeas tu viaje.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="https://wa.me/5212291520671" target="_blank" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition shadow-lg shadow-green-500/30">
                        <MessageCircle size={20} />
                        Contactar por WhatsApp (+52 1 229 152 0671)
                    </a>
                    <a href="#servicios" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition">
                        Ver Servicios <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default CTA;
