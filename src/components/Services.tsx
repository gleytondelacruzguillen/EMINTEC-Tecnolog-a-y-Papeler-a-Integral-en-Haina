import { motion } from "motion/react";
import { 
  FileText, Scan, Zap, Code, LayoutGrid, ShieldCheck, Cloud, TrendingUp 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Gestión Documental Inteligente",
      description: "Organización centralizada y acceso inmediato a toda su documentación crítica mediante IA.",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "Digitalización de Archivos",
      description: "Transformamos sus activos físicos en versiones digitales seguras y buscables de alta definición.",
      icon: <Scan className="w-8 h-8" />,
    },
    {
      title: "Automatización de Procesos",
      description: "Elimine tareas repetitivas y reduzca errores humanos con flujos de trabajo inteligentes.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Software Empresarial a Medida",
      description: "Desarrollamos soluciones tecnológicas que se adaptan exactamente a las necesidades de su negocio.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Integración de Sistemas",
      description: "Conectamos todas sus herramientas tecnológicas para que trabajen como un ecosistema unificado.",
      icon: <LayoutGrid className="w-8 h-8" />,
    },
    {
      title: "Ciberseguridad Documental",
      description: "Protección de datos sensible con los estándares de seguridad más rigurosos de la industria.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Cloud y Almacenamiento Seguro",
      description: "Infraestructura robusta en la nube para disponibilidad total en cualquier momento y lugar.",
      icon: <Cloud className="w-8 h-8" />,
    },
    {
      title: "Consultoría Tecnológica",
      description: "Asesoría estratégica para definir el rumbo digital de su compañía con visión a futuro.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="bg-white border-b border-brand-slate-200">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Nuestros Servicios</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-slate-900 mb-6">Soluciones Estratégicas</h2>
          <p className="text-brand-slate-500 text-lg">
            Combinamos tecnología de vanguardia y visión de consultoría para transformar su infraestructura informativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="premium-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-12 h-12 bg-brand-slate-50 text-brand-blue-600 rounded flex items-center justify-center mb-6 group-hover:bg-brand-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-slate-900 mb-3">{service.title}</h3>
              <p className="text-brand-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
