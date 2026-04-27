import { motion } from "motion/react";
import { Send, ArrowRight, MessageSquare } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-padding">
      <div className="bg-brand-slate-900 rounded overflow-hidden relative p-8 md:p-16 lg:p-24 shadow-2xl flex flex-col lg:flex-row gap-16 items-center text-white">
        {/* Abstract decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none -z-10 text-white">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="pill-label border border-brand-blue-600/20 w-fit text-brand-blue-600">Contacto Inmediato</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              ¿Necesitas soporte técnico o servicios de impresión hoy?
            </h2>
            <p className="text-xl text-brand-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Estamos listos para atenderte con la rapidez y profesionalidad que nos caracteriza en Haina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary px-10 py-5 text-base !bg-brand-blue-600">
                Contactar Ahora
              </button>
              <a 
                href="https://wa.me/18298765432" 
                target="_blank" 
                className="btn-secondary px-10 py-5 text-base flex items-center justify-center gap-2 !border-white !text-white hover:!bg-white hover:!text-brand-slate-900"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-md p-8 rounded border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">Solicita presupuesto</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white placeholder:text-brand-slate-400 focus:border-brand-blue-600 outline-none transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Correo o teléfono" 
                  className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white placeholder:text-brand-slate-400 focus:border-brand-blue-600 outline-none transition-all"
                />
              </div>
              <div>
                <textarea 
                  rows={3}
                  placeholder="Detalla tu requerimiento" 
                  className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white placeholder:text-brand-slate-400 focus:border-brand-blue-600 outline-none transition-all"
                />
              </div>
              <button className="btn-primary w-full py-4 text-sm uppercase tracking-widest !bg-brand-blue-600">
                <Send className="w-5 h-5 mr-2" />
                Enviar Solicitud
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
