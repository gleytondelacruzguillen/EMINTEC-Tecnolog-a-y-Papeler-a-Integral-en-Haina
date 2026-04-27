import { motion } from "motion/react";
import { Shield, Settings, Zap, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-brand-slate-900 text-white overflow-hidden">
      <div className="section-padding flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-48 rounded bg-brand-blue-600/20 flex items-center justify-center overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Oficina EMINTEC" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="h-64 rounded bg-white/5 flex flex-col p-6 border border-white/10 hover:border-brand-blue-600 transition-colors">
              <div className="w-10 h-10 bg-brand-blue-600 rounded flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Confianza Total</h3>
              <p className="text-sm text-brand-slate-400">Garantizamos soluciones efectivas respaldadas por años de experiencia en el sector.</p>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-64 rounded bg-white/5 flex flex-col p-6 border border-white/10 hover:border-brand-blue-600 transition-colors">
              <div className="w-10 h-10 bg-brand-blue-600 rounded flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Respuesta Rápida</h3>
              <p className="text-sm text-brand-slate-400">Sabemos que su tiempo vale oro. Atendemos sus requerimientos con agilidad imbatible.</p>
            </div>
            <div className="h-48 rounded bg-brand-blue-600/20 flex items-center justify-center overflow-hidden border border-white/5">
               <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                alt="Tecnología Avanzada" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>

        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-brand-blue-600 font-bold uppercase tracking-widest text-xs mb-4 underline underline-offset-4 decoration-2">Sobre EMINTEC</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
            Impulsamos la productividad en <span className="text-brand-blue-600">Haina</span>
          </h2>
          <p className="text-lg text-brand-slate-300 mb-8 leading-relaxed">
            EMINTEC es una empresa integral ubicada en Haina, San Cristóbal, dedicada a impulsar la productividad de personas y empresas mediante servicios tecnológicos avanzados y soluciones completas de papelería.
          </p>
          
          <p className="text-brand-slate-400 mb-8 leading-relaxed italic border-l-2 border-brand-blue-600 pl-4">
            Nos destacamos por nuestra rapidez, experiencia, soporte experto y atención personalizada que nos hace líderes en la región.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-brand-blue-600 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1 text-white">Soporte Experto</h4>
                <p className="text-brand-slate-400 text-sm">Técnicos altamente capacitados en hardware y redes.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-brand-blue-600 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1 text-white">Atención Local</h4>
                <p className="text-brand-slate-400 text-sm">Cercanía y compromiso con nuestra comunidad en Haina.</p>
              </div>
            </div>
          </div>
          
          <button className="mt-12 btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-slate-900">
            Conoce Más de Nosotros
          </button>
        </motion.div>
      </div>
    </section>
  );
}
