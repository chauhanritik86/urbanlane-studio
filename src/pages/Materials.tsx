import { motion } from "framer-motion";
import { materials } from "@/data/materials";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Link } from "wouter";

export default function Materials() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 mb-20">
        <SectionHeader 
          subtitle="Material Library"
          title="The language of our architecture."
          className="max-w-3xl"
        />
        <p className="text-lg font-light text-foreground/80 max-w-2xl leading-relaxed">
          We believe in materials that possess intrinsic intelligence—materials that react to light, record touch, and develop character over decades rather than degrading.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 mt-16">
          {materials.map((material, idx) => (
            <motion.div 
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-square w-full overflow-hidden bg-secondary mb-8">
                <img 
                  src={material.image} 
                  alt={material.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                  {material.category}
                </span>
                <h3 className="font-serif text-3xl">{material.name}</h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                  {material.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-32 py-24 bg-card text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Sourced with intent.</h2>
          <p className="font-light text-foreground/70 mb-10 leading-relaxed">
            Our materials are sourced directly from quarries, mills, and artisan workshops across India and Europe. We bypass standard supply chains to guarantee absolute quality and authenticity.
          </p>
          <Link href="/contact">
            <span className="text-xs uppercase tracking-widest border border-primary/20 px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer inline-block">
              Request Material Sample
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
