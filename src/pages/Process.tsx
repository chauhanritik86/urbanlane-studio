import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function Process() {
  const phases = [
    {
      number: "01",
      title: "Discovery & Listening",
      desc: "We begin not with sketches, but with conversation. We visit the site, understand the light, the topography, and the specific ways you live and work. The brief is developed collaboratively."
    },
    {
      number: "02",
      title: "Concept & Spatial Logic",
      desc: "Before decoration comes architecture. We establish the structural flow, volume, and natural light penetration. We present conceptual massing and preliminary material palettes."
    },
    {
      number: "03",
      title: "Material Curation",
      desc: "We select materials that will age beautifully. Every stone slab, wood veneer, and metal finish is chosen for its tactile quality and contextual relevance to the overall concept."
    },
    {
      number: "04",
      title: "Technical Documentation",
      desc: "The poetry of design relies on the prose of engineering. We produce exhaustive, millimetre-perfect drawing sets detailing every joinery junction, lighting circuit, and plumbing route."
    },
    {
      number: "05",
      title: "Execution & Site Management",
      desc: "Our project managers oversee construction with military precision. We hold regular site meetings, enforce rigorous quality control, and ensure the execution matches the documentation perfectly."
    },
    {
      number: "06",
      title: "Styling & Handover",
      desc: "The final layer. We place bespoke furniture, curate art, and style the space down to the linens and ceramics. You are handed the keys to a completely realized environment."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="How We Work"
          title="A rigorous methodology for inevitable results."
          className="max-w-4xl mb-24"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-16">
            {phases.map((phase, idx) => (
              <motion.div 
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-12 border-l border-primary/20"
              >
                <span className="absolute left-0 top-1 -translate-x-1/2 bg-background text-xs text-primary font-mono px-2">
                  {phase.number}
                </span>
                <h3 className="font-serif text-2xl mb-4">{phase.title}</h3>
                <p className="font-light text-muted-foreground leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block relative">
            <div className="sticky top-32 space-y-8">
              <img src="/images/process-1.jpg" alt="Design Process" className="w-full aspect-[4/3] object-cover" />
              <img src="/images/process-2.jpg" alt="Construction Process" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </div>

      <section className="mt-8 bg-card py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary mb-4 block">Ready to Begin?</span>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Every great space starts with a conversation.</h2>
          <p className="font-light text-foreground/70 mb-10 max-w-lg mx-auto leading-relaxed">
            We accept a limited number of projects each year to ensure full architectural attention at every stage.
          </p>
          <Link href="/contact">
            <span className="text-xs uppercase tracking-widest bg-foreground text-background px-8 py-4 hover:bg-primary transition-all duration-300 cursor-pointer inline-block">
              Start Your Project
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
