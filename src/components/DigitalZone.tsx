import { motion } from "motion/react";
import { ShoppingBag, Key, Bell, Send } from "lucide-react";

export default function DigitalZone() {
  return (
    <section className="bg-white border-b border-brand-slate-200">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="pill-label border border-brand-blue-600/20 w-fit">Zona Digital</div>
            <h2 className="text-4xl font-bold text-brand-slate-900 mb-6">Acceda a nuestra plataforma exclusiva</h2>
            <p className="text-lg text-brand-slate-500 mb-8 leading-relaxed">
              Explore nuestra tienda online, gestione sus pedidos y reciba ofertas exclusivas directamente en su bandeja de entrada.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded border border-brand-slate-100 hover:border-brand-blue-600 transition-colors group cursor-pointer bg-brand-slate-50/50">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-brand-blue-600 border border-brand-slate-200 group-hover:bg-brand-blue-600 group-hover:text-white transition-all shadow-sm">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="font-bold text-brand-slate-900 uppercase text-xs tracking-widest">Tienda Online</div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded border border-brand-slate-100 hover:border-brand-blue-600 transition-colors group cursor-pointer bg-brand-slate-50/50">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-brand-blue-600 border border-brand-slate-200 group-hover:bg-brand-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Key className="w-5 h-5" />
                </div>
                <div className="font-bold text-brand-slate-900 uppercase text-xs tracking-widest">Acceso Clientes</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-brand-slate-900 p-10 rounded shadow-2xl relative overflow-hidden text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 -right-10 opacity-5">
              <Bell className="w-40 h-40" />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Suscripción a Ofertas</h3>
            <p className="text-brand-slate-400 mb-8 text-sm leading-relaxed">
              Únase a nuestro boletín empresarial y reciba noticias sobre nuevas soluciones, descuentos en papelería y tips tecnológicos mensuales.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Su correo corporativo" 
                className="flex-grow bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:border-brand-blue-600 outline-none transition-all"
              />
              <button className="btn-primary py-3 px-6 whitespace-nowrap">
                Suscribirse
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
