import { motion } from "motion/react";
import { UserCheck, Zap, Award, Tag, MapPin, CheckCircle, Clock } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Atención Personalizada",
      desc: "Trato humano y cercano. Entendemos tus necesidades específicas.",
      icon: <UserCheck className="w-8 h-8" />
    },
    {
      title: "Respuesta Rápida",
      desc: "Entregas en tiempo récord para que tu flujo de trabajo no se detenga.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Técnicos Capacitados",
      desc: "Personal experto con años de experiencia en el área tecnológica.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Precios Competitivos",
      desc: "Las mejores tarifas de Haina sin comprometer la calidad del servicio.",
      icon: <Tag className="w-8 h-8" />
    },
    {
      title: "Soluciones Completas",
      desc: "Papelería y tecnología bajo un mismo techo para ahorrarte tiempo.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Ubicación Estratégica",
      desc: "Estamos en el corazón de Haina, listos para servirte.",
      icon: <MapPin className="w-8 h-8" />
    }
  ];

  return (
    <section className="bg-white border-b border-brand-slate-200">
      <div className="section-padding flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <div className="sticky top-32">
            <div className="text-brand-blue-600 font-bold uppercase tracking-widest text-xs mb-4 underline underline-offset-4 decoration-2">El Compromiso EMINTEC</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-slate-900 mb-8 leading-tight">¿Por qué EMINTEC es su mejor opción?</h2>
            <p className="text-lg text-brand-slate-500 mb-8 leading-relaxed">
              En Haina, somos más que una tienda; somos su socio estratégico para resolver retos diarios en el hogar, la escuela y la oficina.
            </p>
            <div className="p-8 bg-brand-slate-900 rounded text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                <Clock className="w-20 h-20" />
              </div>
              <div className="text-3xl font-bold mb-2 text-white">Rapidez y Eficiencia</div>
              <p className="text-brand-slate-400 mb-6 text-sm">Nuestro sistema de trabajo está diseñado para que usted obtenga lo que necesita sin esperas innecesarias.</p>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-brand-blue-600" />
                <span className="font-bold border-b border-brand-blue-600 cursor-pointer uppercase text-xs tracking-widest text-brand-blue-600">Servicio de Calidad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid gap-4 grid-cols-1 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="bg-brand-slate-50 p-6 rounded flex flex-col gap-4 border border-brand-slate-200 hover:border-brand-blue-600 transition-colors"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-12 h-12 bg-white text-brand-blue-600 rounded flex items-center justify-center flex-shrink-0 border border-brand-slate-200">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-slate-900 mb-1 leading-tight">{reason.title}</h3>
                <p className="text-brand-slate-500 text-xs leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

