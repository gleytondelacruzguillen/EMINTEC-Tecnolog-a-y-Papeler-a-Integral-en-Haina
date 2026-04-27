import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Reduce costos operativos considerablemente",
    "Aumenta la productividad de sus equipos",
    "Acceso ultra-rápido a información crítica",
    "Seguridad de datos de grado militar",
    "Escalabilidad empresarial garantizada",
    "Cumplimiento normativo y legal riguroso",
  ];

  return (
    <section id="benefits" className="bg-brand-slate-50 overflow-hidden border-b border-brand-slate-200">
      <div className="section-padding flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-brand-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Valor Empresarial</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-slate-900 mb-8 leading-tight">
            Impacto directo en su rentabilidad
          </h2>
          <p className="text-lg text-brand-slate-500 mb-10 leading-relaxed">
            Nuestras soluciones no solo modernizan procesos, sino que optimizan la estructura de costos y liberan el potencial de su capital humano.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue-600 flex-shrink-0" />
                <span className="font-bold text-brand-slate-900 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
          
          <button className="mt-12 btn-secondary">
            Ver Casos de Éxito
          </button>
        </motion.div>

        <div className="flex-1 relative">
          <motion.div 
            className="rounded overflow-hidden shadow-2xl relative z-10 border border-brand-slate-200"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=2070" 
              alt="Beneficios Corporativos" 
              className="w-full h-auto"
            />
          </motion.div>
          <div className="absolute -top-10 -right-4 bg-brand-slate-900 p-6 rounded shadow-xl text-white z-20 max-w-[240px] border border-white/10">
            <div className="text-4xl font-bold mb-1 text-brand-blue-600">99.9%</div>
            <div className="text-[10px] text-brand-slate-400 font-bold uppercase tracking-widest opacity-80">Cumplimiento Normativo y Uptime.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
