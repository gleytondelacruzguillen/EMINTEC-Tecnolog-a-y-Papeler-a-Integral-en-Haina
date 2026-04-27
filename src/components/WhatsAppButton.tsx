import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/541144558899"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      title="Hablar con un experto"
    >
      <MessageSquare className="w-8 h-8 fill-current" />
      <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
        ONLINE
      </span>
    </motion.a>
  );
}
