import { motion } from "motion/react";
import { 
  Monitor, Settings, Shield, Globe, Cpu, Network, Camera, Code, Share2, Zap, GraduationCap 
} from "lucide-react";

export default function TechServices() {
  const services = [
    {
      title: "Venta de Equipos",
      desc: "Computadoras nuevas y usadas de las mejores marcas con garantía.",
      icon: <Monitor className="w-7 h-7" />
    },
    {
      title: "Reparación de Laptops y PCs",
      desc: "Servicio técnico especializado para todas las marcas y modelos.",
      icon: <Settings className="w-7 h-7" />
    },
    {
      title: "Diagnóstico Avanzado",
      desc: "Identificamos fallas complejas con equipos de última generación.",
      icon: <Cpu className="w-7 h-7" />
    },
    {
      title: "Mantenimiento Preventivo",
      desc: "Limpieza y optimización para alargar la vida de tus equipos.",
      icon: <Zap className="w-7 h-7" />
    },
    {
      title: "Redes y Conectividad",
      desc: "Instalación de redes LAN/WLAN y cableado estructurado.",
      icon: <Network className="w-7 h-7" />
    },
    {
      title: "Cámaras de Seguridad",
      desc: "Sistemas CCTV con monitoreo remoto para tu tranquilidad.",
      icon: <Camera className="w-7 h-7" />
    },
    {
      title: "Diseño Web Moderno",
      desc: "Páginas web profesionales para llevar tu negocio al mundo digital.",
      icon: <Globe className="w-7 h-7" />
    },
    {
      title: "Desarrollo de Software",
      desc: "Soluciones a medida para automatizar procesos empresariales.",
      icon: <Code className="w-7 h-7" />
    },
    {
      title: "Marketing Digital",
      desc: "Publicidad en redes sociales para aumentar tus ventas.",
      icon: <Share2 className="w-7 h-7" />
    },
    {
      title: "Entrenamiento Tech",
      desc: "Capacitaciones personalizadas para individuos y equipos.",
      icon: <GraduationCap className="w-7 h-7" />
    }
  ];

  return (
    <section id="services" className="bg-white border-b border-brand-slate-200">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-blue-600 font-bold uppercase tracking-widest text-xs mb-4 underline underline-offset-4 decoration-2">Tecnología Avanzada</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-slate-900 mb-6 underline underline-offset-8 decoration-brand-slate-200">Unidad Tecnológica</h2>
          <p className="text-brand-slate-500 text-lg">
            Soluciones expertas en informática, redes y desarrollo para potenciar su competitividad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="premium-card group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-12 h-12 bg-brand-slate-50 text-brand-blue-600 rounded flex items-center justify-center mb-6 group-hover:bg-brand-blue-600 group-hover:text-white transition-all duration-300 border border-brand-slate-100">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold text-brand-slate-900 mb-2 leading-tight uppercase tracking-wide group-hover:text-brand-blue-600 transition-colors uppercase">{service.title}</h3>
              <p className="text-brand-slate-500 text-xs leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
