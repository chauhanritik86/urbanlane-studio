import { motion } from "framer-motion";
import { Link } from "wouter";
import { journalArticles } from "@/data/journal";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function Journal() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeader 
          subtitle="Journal"
          title="Thoughts on architecture, materials, and living."
        />

        <div className="grid grid-cols-1 gap-20 mt-16">
          {journalArticles.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] bg-secondary overflow-hidden group">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>{article.date}</span>
                  <span className="w-4 h-[1px] bg-border block"></span>
                  <span className="text-primary">{article.category}</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                  {article.title}
                </h2>
                
                <p className="text-lg font-light text-foreground/80 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="prose prose-stone dark:prose-invert font-light text-muted-foreground line-clamp-3">
                  {article.content}
                </div>

                <div className="pt-4">
                  <span className="text-xs uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors cursor-pointer inline-block">
                    Read Article
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
