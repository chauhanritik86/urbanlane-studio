import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/common/ProjectCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StatsCounter } from "@/components/common/StatsCounter";
import { BookingWidget } from "@/components/common/BookingWidget";
import { ChevronDown } from "lucide-react";

/* ─── FAQ DATA ─────────────────────────────────────── */
const faqs = [
  {
    q: "How do I get started with URBANLANE STUDIO?",
    a: "Begin with a free 30-minute discovery call — share your vision, site details, and timeline. We then prepare a tailored proposal. You can reach us instantly via WhatsApp or the booking form below.",
  },
  {
    q: "What is the minimum project size or budget?",
    a: "We typically work on projects starting from ₹30 Lakhs. Our focus is on quality of execution, so we take on a limited number of commissions each year to give every project our undivided attention.",
  },
  {
    q: "Do you handle complete turnkey projects?",
    a: "Yes. Turnkey is one of our specialities. We manage everything — architecture, interiors, furniture, landscaping, and final styling — so you only have one point of contact from empty plot to styled home.",
  },
  {
    q: "How long does a typical interior design project take?",
    a: "A luxury residential project usually spans 8–18 months depending on scale. Commercial projects can range from 4–12 months. We provide a detailed project timeline at the proposal stage.",
  },
  {
    q: "Do you work outside Karjat?",
    a: "Absolutely. We are based in Karjat but work extensively across Mumbai, Pune, Lonavala, Goa, and other locations across India. Distance is never a barrier to great design.",
  },
  {
    q: "What makes URBANLANE STUDIO different from other interior firms?",
    a: "We are architects and designers working together from day one — not decorators who add furniture after the fact. Every decision, from structural openings to hardware finishes, is considered in relation to the whole. We design spaces that feel inevitable.",
  },
];

/* ─── WHY US PILLARS ────────────────────────────────── */
const pillars = [
  {
    number: "01",
    title: "Curated Commissions",
    body: "We accept only 12 projects per year. Every commission receives the personal attention of our lead designer from concept to completion.",
  },
  {
    number: "02",
    title: "End-to-End Ownership",
    body: "Architecture, interiors, furniture, landscape — we take responsibility for every scale of the project under one roof.",
  },
  {
    number: "03",
    title: "Material Intelligence",
    body: "Every material is physically sampled and approved before specification. We source from verified suppliers across India and Europe.",
  },
  {
    number: "04",
    title: "Lifetime Partnership",
    body: "Our relationship does not end at handover. We return, review, and refine — because great spaces deserve great stewardship.",
  },
];

/* ─── FAQ ITEM ──────────────────────────────────────── */
function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      className="border-t border-border"
    >
      <button
        className="w-full flex items-center justify-between py-6 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl pr-8 group-hover:text-primary transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-muted-foreground font-light leading-relaxed pb-6 pr-8 max-w-2xl">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ─── PAGE ──────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="w-full">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="/images/hero-1.jpg"
            alt="Luxury Interior by Urbanlane Studio"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35" />
        </div>

        <div className="relative z-10 text-center px-6 mt-20 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-xs md:text-sm uppercase tracking-[0.3em] text-white/75 mb-6"
          >
            Karjat, Maharashtra — Est. 2019
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-4"
          >
            Your Dream Home.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white/90 leading-tight mb-10 italic"
          >
            Crafted for Generations.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/portfolio">
              <span className="text-xs uppercase tracking-[0.2em] text-white border-b border-white/30 pb-2 hover:border-white transition-colors cursor-pointer inline-block">
                View Selected Works
              </span>
            </Link>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <Link href="/contact">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70 border-b border-white/20 pb-2 hover:text-white hover:border-white transition-colors cursor-pointer inline-block">
                Start Your Project
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white/70"
            />
          </div>
        </motion.div>
      </section>

      {/* ── STUDIO INTRO ──────────────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeader
            subtitle="The Studio"
            title="We believe in the intelligence of materials."
            align="center"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 max-w-3xl mx-auto"
          >
            <p className="mb-6">
              Stone that remembers heat, wood that records touch, concrete that holds silence.
              Our work is not about trends — it is about time. We design spaces meant to be lived in
              for decades, not seasons.
            </p>
            <Link href="/studio">
              <span className="text-xs font-normal uppercase tracking-widest text-primary hover:text-accent transition-colors cursor-pointer border-b border-primary/20 pb-1">
                Read our story
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS COUNTER ─────────────────────────────── */}
      <StatsCounter />

      {/* ── FEATURED PROJECTS ─────────────────────────── */}
      <section className="py-24 bg-card px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
            <SectionHeader
              subtitle="Selected Works"
              title="Recent Commissions"
              className="mb-0"
            />
            <Link href="/portfolio">
              <span className="text-xs uppercase tracking-widest border border-primary/20 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer whitespace-nowrap">
                View All Projects
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.slice(0, 4).map((project, index) => (
              <div key={project.id} className={index % 2 !== 0 ? "md:mt-24" : ""}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY URBANLANE STUDIO ──────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <SectionHeader
            subtitle="Our Promise"
            title="Why clients choose us."
            align="center"
            className="mb-16 md:mb-24"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-border last:border-r-0 group hover:bg-card transition-colors duration-300"
              >
                <span className="block font-serif text-4xl text-primary/30 mb-6 group-hover:text-primary/50 transition-colors duration-300">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-xl mb-4">{pillar.title}</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <SectionHeader
                  subtitle="Expertise"
                  title="Disciplined execution across scales."
                />
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  From the architectural massing of a rural villa down to the bespoke
                  brass joinery of a wardrobe, we approach every scale with the same
                  rigour. We are a multidisciplinary studio capable of taking a project
                  from empty land to styled interior.
                </p>
                <Link href="/services">
                  <span className="text-xs uppercase tracking-widest border border-primary/20 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer inline-block">
                    Explore Services
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-0">
              {[
                { title: "Luxury Residential", img: "/images/bedroom-1.jpg" },
                { title: "Commercial Interiors", img: "/images/commercial-1.jpg" },
                { title: "Architecture", img: "/images/villa-1.jpg" },
                { title: "Turnkey Projects", img: "/images/process-2.jpg" },
                { title: "Landscape Design", img: "/images/landscape-1.jpg" },
                { title: "Furniture Design", img: "/images/material-wood.jpg" },
                { title: "Interior Consultancy", img: "/images/architecture-detail-1.jpg" },
              ].map((service, idx) => (
                <Link key={idx} href="/services">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className="group relative border-t border-border py-7 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                  >
                    <h3 className="font-serif text-3xl md:text-4xl group-hover:text-primary transition-colors duration-300 mb-2 md:mb-0 z-10 relative">
                      {service.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors z-10 relative">
                      Explore →
                    </span>
                  </motion.div>
                </Link>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY / IMAGE SPLIT ──────────────────── */}
      <section className="flex flex-col md:flex-row min-h-[70vh]">
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
          <img
            src="/images/kitchen-1.jpg"
            alt="Crafted interior detail"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.background = '#EDE8E0'; }}
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#EDE8E0]">
          <div className="max-w-md">
            <span className="block text-xs uppercase tracking-widest text-primary/70 mb-6">Design Philosophy</span>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight text-foreground">
              Spaces that feel inevitable.
            </h2>
            <p className="font-light text-foreground/70 leading-relaxed mb-8">
              Every project begins with listening — to the client, to the site, to the light.
              We do not impose a predefined style; instead, we seek the specific logic of each space.
              The result is interiors that feel as though they could not have been any other way.
            </p>
            <Link href="/process">
              <span className="text-xs uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors cursor-pointer">
                Our Process →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SMART BOOKING WIDGET ──────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto">
          <SectionHeader
            subtitle="New Commissions"
            title="Start Your Project"
            align="center"
            className="mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-muted-foreground font-light max-w-xl mx-auto mb-16"
          >
            Tell us about your project in three steps. We will respond on WhatsApp within a few hours — no forms lost in email, no waiting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <BookingWidget />
          </motion.div>
          <div className="text-center mt-16 pt-12 border-t border-border max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Prefer the full form?</p>
            <Link href="/contact">
              <span className="text-sm font-light text-primary hover:text-accent transition-colors cursor-pointer border-b border-primary/20 pb-1">
                Visit our detailed contact page →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <SectionHeader
            subtitle="Questions"
            title="Frequently Asked"
            align="center"
            className="mb-16"
          />
          <div>
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} idx={idx} />
            ))}
            <div className="border-t border-border" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground font-light mb-4">Still have questions?</p>
            <Link href="/contact">
              <span className="text-xs uppercase tracking-widest border border-border px-6 py-3 hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer inline-block">
                Talk to us directly
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
