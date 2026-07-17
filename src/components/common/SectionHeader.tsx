import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "left", className = "" }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`mb-16 md:mb-24 ${align === "center" ? "text-center mx-auto" : ""} ${className}`}
    >
      {subtitle && (
        <span className="block text-xs uppercase tracking-[0.2em] text-primary mb-6">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}
