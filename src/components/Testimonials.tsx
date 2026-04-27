import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Juan Pérez",
      role: "Propietario de Negocio Local",
      content: "Excelente servicio técnico y entrega rápida. Repararon mi laptop en menos de 24 horas cuando pensaba que no tenía solución.",
      image: "https://i.pravatar.cc/150?u=12"
    },
    {
      name: "Ramona D'Oleo",
      role: "Estudiante Universitaria",
      content: "Todo lo que necesito para mi carrera en un solo lugar. Las impresiones son de calidad y los precios muy justos.",
      image: "https://i.pravatar.cc/150?u=24"
    },
    {
      name: "Andrés Medina",
      role: "Gerente Administrativo",
      content: "Muy profesionales y atentos. Instalaron las cámaras de seguridad en nuestra oficina con una eficiencia impecable.",
      image: "https://i.pravatar.cc/150?u=36"
    }
  ];

  return (
    <section className="bg-brand-slate-50 border-b border-brand-slate-200">
      <div className="section-padding">
        <div className="text-center mb-16">
          <div className="text-brand-blue-600 font-bold uppercase tracking-widest text-xs mb-4 underline underline-offset-4 decoration-2">La Voz de Haina</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-slate-900 mb-6">Nuestros clientes dicen</h2>
          <p className="text-brand-slate-500 text-lg max-w-2xl mx-auto">
            La confianza de nuestra comunidad es nuestro mayor activo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded border border-brand-slate-200 relative shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -top-4 right-8 bg-brand-slate-900 p-3 rounded text-white shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
              <div className="flex gap-1 text-brand-blue-600 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-brand-slate-900 font-medium italic mb-8 leading-relaxed">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-brand-slate-100 pt-6">
                <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <div className="font-bold text-brand-slate-900 text-sm uppercase tracking-tight">{testi.name}</div>
                  <div className="text-[10px] text-brand-slate-400 font-bold uppercase tracking-widest">{testi.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

