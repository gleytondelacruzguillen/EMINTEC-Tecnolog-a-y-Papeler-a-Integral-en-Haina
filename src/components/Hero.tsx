import { motion } from "motion/react";
import { ChevronRight, MessageSquare, Monitor, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-brand-slate-200">
      <div className="max-w-full grid grid-cols-1 lg:grid-cols-12 min-h-[650px]">
        {/* Left Content */}
        <motion.div 
          className="lg:col-span-7 p-8 lg:p-20 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="pill-label w-fit">
            Haina • San Cristóbal • República Dominicana
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-brand-slate-900 leading-[1.1] mb-6">
            EMINTEC: <span className="text-brand-blue-600">Tecnología y Papelería</span> en un Solo Lugar
          </h1>
          <p className="text-xl text-brand-slate-600 mb-10 max-w-xl leading-relaxed">
            Soluciones rápidas y confiables en informática, impresión, redes, cámaras, diseño web, suministros de oficina y soporte técnico en Haina.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="btn-primary px-8 py-4 text-sm w-full sm:w-auto">
              Solicitar Servicio
            </button>
            <a 
              href="https://wa.me/18298765432" 
              target="_blank" 
              className="btn-secondary px-8 py-4 text-sm w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-brand-slate-400">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-slate-900">100%</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter">Garantía de Satisfacción</span>
            </div>
            <div className="w-px h-10 bg-brand-slate-200" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-slate-900">Rápido</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter">Entrega en Tiempo Récord</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section (Visual Highlight) */}
        <motion.div 
          className="lg:col-span-5 bg-brand-slate-900 p-8 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Abstract SVG Decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>

          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue-600 mb-8 border-b border-brand-blue-600 w-fit pb-2">
            Nuestros Pilares
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center flex-shrink-0 text-brand-blue-600">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Tecnología Avanzada</h3>
                <p className="text-brand-slate-400 text-sm">Venta y reparación de equipos, redes, seguridad y software.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center flex-shrink-0 text-brand-blue-600">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Papelería Integral</h3>
                <p className="text-brand-slate-400 text-sm">Impresiones a color, copias, suministros escolares y de oficina.</p>
              </div>
            </div>

            {/* Simulated office visual */}
            <div className="mt-8 rounded border border-white/10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
                alt="Servicio EMINTEC" 
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
