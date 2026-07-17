import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Link } from "wouter";

export default function Studio() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <SectionHeader 
          subtitle="The Studio"
          title="Architectural rigour. Interior soul."
          className="max-w-4xl"
        />
        <div className="aspect-[21/9] w-full bg-secondary overflow-hidden mb-16">
          <img 
            src="/images/studio-team.jpg" 
            alt="Urbanlane Studio" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-6">Founding Vision</h3>
          </div>
          <div className="md:col-span-8 max-w-3xl">
            <div className="prose prose-lg prose-stone dark:prose-invert font-light">
              <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-8">
                URBANLANE STUDIO was founded with a single belief: that great spaces are not decorated—they are designed from the ground up, with intention.
              </p>
              <p>
                Based in Karjat, Maharashtra, our studio works across residential, commercial, and landscape projects, bringing architectural rigour to every interior. We deliberately position ourselves away from the fleeting trends of the design world. Instead, we look to permanence.
              </p>
              <p>
                Our team consists of architects, interior designers, and material specialists who share a common language of restraint. We believe that a well-designed space should not shout for attention; it should provide a quiet backdrop for life to unfold.
              </p>
              <p>
                We source our materials meticulously—from local quarries in Rajasthan and Maharashtra to bespoke metalworkers in Pune. By controlling the entire process from conceptual massing to the final placement of a linen cushion, we ensure the integrity of the vision remains uncompromised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-card py-24 px-6 mb-32">
        <div className="container mx-auto">
          <SectionHeader subtitle="Core Values" title="What guides us" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: "Material Honesty",
                desc: "We do not use materials that pretend to be something else. Stone should be cold, wood should have grain, brass should age. We embrace the organic truth of what we build with."
              },
              {
                title: "Spatial Logic",
                desc: "Before we consider surfaces, we consider volume, light, and flow. The architecture must work flawlessly before the decoration begins."
              },
              {
                title: "Endurance",
                desc: "We design for the next fifty years, not the next five. Our aesthetic relies on timeless proportions and materials that gain character as they age."
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-t border-border pt-6"
              >
                <h4 className="font-serif text-2xl mb-4">{value.title}</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / CTA */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-secondary overflow-hidden">
            <img src="/images/architecture-detail-1.jpg" alt="Karjat Studio" className="w-full h-full object-cover" />
          </div>
          <div className="pl-0 md:pl-12">
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block">Our Location</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Rooted in Karjat.</h2>
            <p className="font-light text-foreground/80 leading-relaxed mb-10">
              Our studio is intentionally located outside the frantic pace of the city. Surrounded by the landscape of the Western Ghats, we find the quiet necessary to do deep, considered work for clients across Maharashtra and beyond.
            </p>
            <Link href="/contact">
              <span className="text-xs uppercase tracking-widest border border-primary/20 px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer inline-block">
                Visit the Studio
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
