
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex items-center justify-center hero-gradient bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=1600')" }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">Data Scientist</h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Transforming complex data into actionable insights and building machine learning solutions to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className={cn(
              "relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden",
              "border-4 border-primary/30 shadow-xl",
              "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/20 before:to-transparent before:z-10"
            )}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-white h-8 w-8 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
