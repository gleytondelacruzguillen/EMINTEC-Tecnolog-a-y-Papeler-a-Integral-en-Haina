import { motion } from "motion/react";
import { 
  Activity, Landmark, Building2, Truck, GraduationCap, ShoppingCart, Factory 
} from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Salud", icon: <Activity className="w-6 h-6" /> },
    { name: "Finanzas", icon: <Landmark className="w-6 h-6" /> },
    { name: "Gobierno", icon: <Building2 className="w-6 h-6" /> },
    { name: "Logística", icon: <Truck className="w-6 h-6" /> },
    { name: "Educación", icon: <GraduationCap className="w-6 h-6" /> },
    { name: "Retail", icon: <ShoppingCart className="w-6 h-6" /> },
    { name: "Industria", icon: <Factory className="w-6 h-6" /> },
    { name: "Tecnología", icon: <Building2 className="w-6 h-6" /> },
  ];

  return (
    <section id="industries" className="bg-brand-slate-100 py-16 border-b border-brand-slate-200">
      <div className="section-padding flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:max-w-xs text-center lg:text-left">
          <div className="text-brand-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2 italic">Industrias de Impacto</div>
          <h2 className="text-3xl font-bold text-brand-slate-900 leading-tight">Soluciones para cada sector</h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="px-6 py-3 bg-white border border-brand-slate-200 rounded flex items-center justify-center gap-3 hover:border-brand-blue-600 transition-all cursor-default shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="text-brand-blue-600">
                {industry.icon}
              </div>
              <span className="text-brand-slate-900 font-bold text-xs uppercase tracking-wider">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
