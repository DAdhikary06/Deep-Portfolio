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
          <h3 className="text-2xl font-semibold">Emerging Data Scientist with a Passion for Data-Driven Solutions</h3>

          <p className="text-foreground/80">
            I'm Deep Adhikary — an aspiring Data Scientist with a solid foundation in Python (Pandas, NumPy, Matplotlib), SQL, Excel, and Power BI. I’m passionate about uncovering insights that drive strategic decisions.
          </p>
          <p className="text-foreground/80">
            I’m currently exploring Transformer-based models to deepen my understanding of state-of-the-art NLP. My experience as a Subject Matter Expert in Mathematics has strengthened my analytical thinking and ability to explain complex concepts clearly.</p>

          <p className="text-foreground/80">
I thrive on solving problems with data and am eager to contribute to innovative projects that make a real-world impact.          </p>

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