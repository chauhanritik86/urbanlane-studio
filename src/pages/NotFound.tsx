import { Link } from "wouter";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">404</span>
      <h1 className="font-serif text-4xl md:text-6xl mb-6">Page Not Found</h1>
      <p className="text-muted-foreground font-light max-w-md mx-auto mb-10">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <span className="text-sm uppercase tracking-widest border border-primary/20 px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
          Return Home
        </span>
      </Link>
    </div>
  );
}
