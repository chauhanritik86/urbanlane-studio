import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";
import { ProjectCard } from "@/components/common/ProjectCard";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Selected Works"
          title="A portfolio of restraint."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-16 border-b border-border pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest transition-colors ${
                activeCategory === cat 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className={index % 2 !== 0 ? "md:mt-24" : ""}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-muted-foreground font-light">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
