import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { value: 85, suffix: "+", label: "Projects Delivered", description: "Across Maharashtra & beyond" },
  { value: 6, suffix: "+", label: "Years of Excellence", description: "Founded in Karjat" },
  { value: 42, suffix: "L+", label: "Sq Ft Designed", description: "Residential & commercial" },
  { value: 8, suffix: "+", label: "Cities Served", description: "Mumbai, Pune, Karjat & more" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="py-20 bg-[#1F1C1A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="text-center px-6 py-8 md:py-0"
            >
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-3 leading-none">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">{stat.label}</p>
              <p className="text-xs text-white/30 font-light hidden md:block">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
