import { Link } from "wouter";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    category: string;
    location: string;
    image: string;
  };
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group block"
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div className="cursor-pointer">
          <div className="overflow-hidden aspect-[3/4] sm:aspect-square md:aspect-[4/5] bg-secondary relative mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            {/* Elegant placeholder fallback is handled by the natural background color and standard img behavior if missing, but we can enhance it */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
          
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {project.category} — {project.location}
            </p>
            <h3 className="font-serif text-2xl group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
