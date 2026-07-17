import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24 bg-card min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Client Voices"
          title="Trust placed in restraint."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-20 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-border pt-8"
            >
              <div className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-8">
                "{testimonial.quote}"
              </div>
              <div>
                <p className="text-sm font-medium">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
