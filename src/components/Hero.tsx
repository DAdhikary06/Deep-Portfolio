
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after component mounts for entrance animations
    const hero = heroRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    
    if (hero && text && image) {
      // Apply entrance animations with staggered timing
      setTimeout(() => {
        text.classList.add("animate-fade-in");
        text.style.opacity = "1";
      }, 300);
      
      setTimeout(() => {
        image.classList.add("animate-fade-in");
        image.style.opacity = "1";
      }, 700);
    }

    // Optional: Add parallax effect on scroll
    const handleScroll = () => {
      if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=1600')" }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={textRef} className="opacity-0 transition-all duration-700" style={{ transform: "translateY(20px)" }}>
            <div className="inline-block mb-4 py-1 px-3 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-primary font-medium">Data Scientist</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="text-primary">John Doe</span>
            </h1>
            
            <div className="overflow-hidden h-14 mb-6">
              <div className="font-medium text-xl md:text-2xl text-white/90 typing-animation">
                Transforming Data into Insights
              </div>
            </div>
            
            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Leveraging machine learning and statistical analysis to solve complex problems and build data-driven solutions that make a real-world impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" onClick={() => window.open("/resume.pdf")}>
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="#contact">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="h-[1px] w-10 bg-white/30"></div>
              <span className="text-white/50 text-sm">Scroll to discover</span>
            </div>
          </div>
          
          <div ref={imageRef} className="flex justify-center md:justify-end opacity-0 transition-all duration-700" style={{ transform: "translateX(20px)" }}>
            <div className={cn(
              "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden",
              "border-4 border-primary/30 shadow-2xl",
              "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/20 before:to-transparent before:z-10",
              "after:absolute after:inset-0 after:bg-black/10 after:animate-pulse-slow"
            )}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                alt="John Doe"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-1000"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-dscyan/20 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-dspurple/30 blur-xl"></div>
            </div>
            
            {/* Animated floating badges */}
            <div className="absolute top-1/4 left-1/4 animate-float bg-card p-2 rounded-lg shadow-lg border border-border z-20 hidden md:block">
              <span className="text-sm font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-dsblue rounded-full"></span> Machine Learning
              </span>
            </div>
            
            <div className="absolute bottom-1/3 right-1/4 animate-float-delayed bg-card p-2 rounded-lg shadow-lg border border-border z-20 hidden md:block">
              <span className="text-sm font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-dsred rounded-full"></span> Data Analysis
              </span>
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
