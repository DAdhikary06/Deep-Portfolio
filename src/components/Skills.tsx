
import { useRef, useEffect } from "react";
import { Database, Code2, Brain, LineChart, Languages, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    color: string;
  }[];
}

const Skills = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      category: "Technical Skills",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Python", level: 90, color: "bg-dscyan" },
        { name: "Machine Learning", level: 85, color: "bg-dsblue" },
        { name: "Deep Learning", level: 80, color: "bg-dspurple" },
        { name: "SQL", level: 85, color: "bg-dsred" }
      ]
    },
    {
      category: "Data Tools",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Pandas", level: 90, color: "bg-dsteal" },
        { name: "TensorFlow", level: 80, color: "bg-dsorange" },
        { name: "Scikit-learn", level: 85, color: "bg-dsblue" },
        { name: "Tableau", level: 75, color: "bg-dspurple" }
      ]
    },
    {
      category: "Soft Skills",
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Problem Solving", level: 95, color: "bg-dsred" },
        { name: "Communication", level: 85, color: "bg-dscyan" },
        { name: "Team Leadership", level: 80, color: "bg-dsorange" },
        { name: "Project Management", level: 75, color: "bg-dsteal" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            
            // Animate progress bars when section is visible
            const progressBars = entry.target.querySelectorAll(".progress-bar");
            progressBars.forEach((bar) => {
              const level = bar.getAttribute("data-level");
              if (bar.firstElementChild && level) {
                setTimeout(() => {
                  (bar.firstElementChild as HTMLElement).style.width = `${level}%`;
                }, 300);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.category}
              className="bg-card rounded-xl shadow-md border border-border p-6 transform transition-all duration-500 hover:shadow-xl opacity-0"
              style={{ animationDelay: `${catIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className={cn("w-2 h-2 rounded-full", skill.color)}></span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge variant="outline">{skill.level}%</Badge>
                    </div>
                    
                    <div 
                      className="progress-bar h-2 bg-muted rounded-full overflow-hidden"
                      data-level={skill.level}
                    >
                      <div 
                        className={cn("h-full transition-all duration-1000 ease-out", skill.color)} 
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-card rounded-xl shadow-md border border-border p-6 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <Boxes className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Other Technical Skills</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {["Git", "Docker", "AWS", "Cloud Computing", "Big Data", "Data Visualization", "Statistical Analysis", "Neural Networks", "NLP", "Computer Vision", "A/B Testing", "Data Engineering"].map((skill) => (
              <Badge key={skill} variant="secondary" className="py-2 px-3 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-card rounded-xl shadow-md border border-border p-6 opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <Languages className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Languages</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { language: "English", proficiency: "Native", level: 100, color: "bg-dsblue" },
              { language: "Spanish", proficiency: "Fluent", level: 90, color: "bg-dscyan" },
              { language: "French", proficiency: "Intermediate", level: 60, color: "bg-dsred" }
            ].map((lang) => (
              <div key={lang.language} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-muted-foreground">{lang.proficiency}</span>
                </div>
                <div className="progress-bar h-2 bg-muted rounded-full overflow-hidden" data-level={lang.level}>
                  <div className={cn("h-full", lang.color)} style={{ width: "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
