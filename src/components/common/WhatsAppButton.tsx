import { MessageCircle } from "lucide-react";
import { config } from "@/config";

const PRE_FILLED_MESSAGE = encodeURIComponent(
  "Hello! I visited the URBANLANE STUDIO website and I'm interested in a design consultation. Could you please share more details about your services and availability?"
);

export function WhatsAppButton() {
  return (
    <a
      href={`${config.whatsappLink}?text=${PRE_FILLED_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 bg-[#8A7055] text-white px-5 py-3 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-[#B5975A] transition-all duration-300"
      aria-label="Book Consultation on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-xs font-medium tracking-widest uppercase hidden md:inline-block pr-1">Start Your Project</span>
    </a>
  );
}
