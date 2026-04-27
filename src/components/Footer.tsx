import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-brand-slate-600 pt-20 pb-10 border-t border-brand-slate-200">
      <div className="section-padding pb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="font-bold text-2xl tracking-tighter text-brand-slate-900 uppercase">EMINTEC</span>
          </div>
          <p className="text-brand-slate-500 leading-relaxed text-sm">
            Tecnología + Papelería + Soluciones Empresariales. La comunidad de Haina confía en nosotros para su productividad.
          </p>
          <div className="flex gap-4">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded bg-brand-slate-50 border border-brand-slate-200 flex items-center justify-center hover:bg-brand-blue-600 hover:text-white transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-slate-900 mb-8 border-b border-brand-slate-900 w-fit pb-1 text-brand-blue-600">Horario de Atención</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-brand-slate-500">
            <li className="flex justify-between">
              <span>Lunes a Viernes:</span>
              <span className="text-brand-slate-900">8:00 AM – 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sábados:</span>
              <span className="text-brand-slate-900">9:00 AM – 2:00 PM</span>
            </li>
            <li className="text-red-500 italic">Domingos: Cerrado</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-slate-900 mb-8 border-b border-brand-slate-900 w-fit pb-1 text-brand-blue-600">Enlaces Rápidos</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-wider">
            <li><a href="#services" className="hover:text-brand-blue-600 transition-colors">Tecnología</a></li>
            <li><a href="#about" className="hover:text-brand-blue-600 transition-colors">Nosotros</a></li>
            <li><a href="#contact" className="hover:text-brand-blue-600 transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-slate-900 mb-8 border-b border-brand-slate-900 w-fit pb-1 text-brand-blue-600">Contacto</h4>
          <ul className="space-y-6 text-xs font-bold uppercase tracking-wider">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              <span className="leading-relaxed text-brand-slate-500">
                Calle Manolo Tavárez Justo #28, Gringo, Haina, San Cristóbal, RD
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              <span>+1 829 876 5432</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              <span>info@emintec.com</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-2">
             <a href="https://wa.me/18298765432" target="_blank" className="bg-brand-slate-900 text-white p-2 rounded text-[10px] text-center font-bold">
               WhatsApp Directo
             </a>
             <a href="https://maps.google.com" target="_blank" className="border border-brand-slate-200 p-2 rounded text-[10px] text-center font-bold">
               Google Maps
             </a>
          </div>
        </div>
      </div>

      <div className="section-padding py-0">
        <div className="border-t border-brand-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest">
          <div>© 2024 EMINTEC TECHNOLOGIES. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-slate-900 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-slate-900 transition-colors">Términos</a>
            <span className="text-brand-blue-600 lowercase font-normal italic tracking-normal">La mejor tecnología en Haina</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

