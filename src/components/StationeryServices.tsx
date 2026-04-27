import { motion } from "motion/react";
import { 
  Printer, Copy, Scan, Layers, FileText, Layout, BookOpen, PenTool, Folder, Package, Briefcase 
} from "lucide-react";

export default function StationeryServices() {
  const items = [
    { name: "Impresiones B&N", icon: <Printer /> },
    { name: "Impresiones Color", icon: <Printer className="text-brand-blue-600" /> },
    { name: "Copias Rápidas", icon: <Copy /> },
    { name: "Escaneos HD", icon: <Scan /> },
    { name: "Laminados", icon: <Layers /> },
    { name: "Transcripción", icon: <FileText /> },
    { name: "Diseño Carnets", icon: <Layout /> },
    { name: "Cuadernos", icon: <BookOpen /> },
    { name: "Lápices y Útiles", icon: <PenTool /> },
    { name: "Carpetas", icon: <Folder /> },
    { name: "Material Gastable", icon: <Package /> },
    { name: "Suministros Oficina", icon: <Briefcase /> },
  ];

  return (
    <section id="stationery" className="bg-brand-slate-50 border-b border-brand-slate-200">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-blue-600 font-bold uppercase tracking-widest text-xs mb-4 underline underline-offset-4 decoration-2">Servicios Integrales</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-slate-900 mb-6 uppercase tracking-tight">Papelería Integral</h2>
          <p className="text-brand-slate-500 text-lg">
            Todo lo necesario para estudiantes, profesionales y oficinas en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-brand-slate-200 rounded p-6 flex flex-col items-center gap-4 hover:border-brand-blue-600 hover:shadow-md transition-all cursor-default group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="text-brand-slate-400 group-hover:text-brand-blue-600 group-hover:scale-110 transition-all">
                {item.icon}
              </div>
              <span className="text-brand-slate-900 font-bold text-xs uppercase tracking-wider text-center">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
