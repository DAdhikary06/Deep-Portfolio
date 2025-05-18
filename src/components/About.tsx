import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Data visualization" className="rounded-xl shadow-xl w-full h-auto object-cover aspect-square md:aspect-auto" />
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold">Emerging Data Scientist with a Passion for Insights</h3>
            
            <p className="text-foreground/80">
              With over 5 years of experience in data science and machine learning, I've developed a deep passion for extracting meaningful insights from complex datasets and building intelligent systems that solve real-world problems.
            </p>
            
            <p className="text-foreground/80">
              My expertise includes developing end-to-end machine learning pipelines, predictive analytics, deep learning models, and creating interactive data visualizations that help businesses make data-driven decisions.
            </p>
            
            <p className="text-foreground/80">
              I'm constantly exploring new technologies and methodologies to enhance my skills and deliver innovative solutions that drive business value.
            </p>
            
            <Button variant="default" className="group" asChild>
              <a href="#skills">
                View My Skills <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default About;