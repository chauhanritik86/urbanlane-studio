import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ImageGallery } from "@/components/common/ImageGallery";
import NotFound from "./NotFound";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  const nextProjectIndex = (projects.findIndex(p => p.slug === slug) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <article className="pt-24 pb-0 bg-background">
      {/* Hero Image */}
      <div className="w-full h-[70vh] md:h-[85vh] relative bg-secondary">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 pt-16 pb-24">
        {/* Project Header */}
        <div className="max-w-4xl mb-16">
          <SectionHeader 
            subtitle={project.category}
            title={project.title}
            className="mb-8"
          />
        </div>

        {/* Meta & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 border-t border-border pt-12">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Location</span>
              <p className="text-sm">{project.location}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Year</span>
              <p className="text-sm">{project.year}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Area</span>
              <p className="text-sm">{project.area}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Primary Materials</span>
              <ul className="text-sm space-y-1">
                {project.materials.map(m => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
              {project.description}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-24">
          <ImageGallery images={project.gallery} />
        </div>
      </div>

      {/* Next Project Footer */}
      <Link href={`/portfolio/${nextProject.slug}`}>
        <div className="w-full bg-card py-24 cursor-pointer group transition-colors hover:bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block group-hover:text-primary transition-colors">
              Next Project
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground">
              {nextProject.title}
            </h2>
          </div>
        </div>
      </Link>
    </article>
  );
}
