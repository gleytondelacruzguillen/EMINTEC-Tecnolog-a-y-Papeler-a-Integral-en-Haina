import { motion } from "motion/react";
import { 
  Home, GraduationCap, Briefcase, Building2, UserCircle, Store, Building 
} from "lucide-react";

export default function SolutionsFor() {
  const segments = [
    { name: "Hogares", icon: <Home /> },
    { name: "Estudiantes", icon: <GraduationCap /> },
    { name: "Profesionales", icon: <Briefcase /> },
    { name: "Oficinas", icon: <Building2 /> },
    { name: "Negocios", icon: <Store /> },
    { name: "Empresas", icon: <Building /> },
    { name: "Instituciones", icon: <Building2 /> },
  ];

  return (
    <section className="bg-brand-slate-900 py-16 border-b border-white/5">
      <div className="section-padding">
        <div className="text-center mb-12">
          <div className="text-brand-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 italic">Soluciones para quién</div>
          <h2 className="text-3xl font-bold text-white leading-tight">Servimos a toda nuestra comunidad</h2>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {segments.map((segment, index) => (
            <motion.div 
              key={index}
              className="px-6 py-4 bg-white/5 border border-white/10 rounded flex items-center gap-3 hover:border-brand-blue-600 transition-all cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="text-brand-blue-600 w-5 h-5">
                {segment.icon}
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-wider">{segment.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
