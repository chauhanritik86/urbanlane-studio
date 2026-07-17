import { motion } from "framer-motion";
import { Link } from "wouter";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 mb-12">
        <SectionHeader 
          subtitle="Our Expertise"
          title="Disciplined execution across all scales."
          className="max-w-4xl"
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 aspect-[4/5] bg-secondary overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl mb-6">{service.title}</h2>
                <h3 className="text-lg md:text-xl font-light text-foreground mb-6">
                  {service.shortDescription}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-10">
                  {service.description}
                </p>
                <Link href="/portfolio">
                  <span className="text-xs uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors cursor-pointer">
                    View Related Work
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-32 bg-card py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Begin a Commission</h2>
          <p className="font-light text-foreground/70 mb-10 max-w-lg mx-auto">
            We accept a limited number of projects each year to ensure architectural depth and material rigour at every scale.
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
