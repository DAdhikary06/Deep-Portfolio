
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Briefcase } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  skills?: string[];
}

const Experience = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Tech Corp",
      role: "Senior Data Scientist",
      duration: "2020 - Present",
      description: "Led machine learning projects and developed predictive models for customer segmentation, churn prediction, and revenue forecasting. Collaborated with cross-functional teams to implement data-driven solutions.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Team Leadership"]
    },
    {
      id: 2,
      company: "Data Analytics Inc",
      role: "Data Analyst",
      duration: "2018 - 2020",
      description: "Performed data analysis and created visualization dashboards to track KPIs and business metrics. Developed ETL pipelines to process and clean data from various sources.",
      skills: ["Data Analysis", "SQL", "Tableau", "ETL"]
    },
    {
      id: 3,
      company: "Innovation Labs",
      role: "ML Research Intern",
      duration: "Summer 2017",
      description: "Researched and implemented novel machine learning algorithms for computer vision applications. Published a paper on efficient image classification techniques.",
      skills: ["Research", "Computer Vision", "Python", "Academic Writing"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("animate-fade-in", "animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              ref={el => timelineRefs.current[index] = el}
              className={cn(
                "mb-12 opacity-0 relative",
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-[50%]" : "md:pl-12 md:ml-[50%]"
              )}
            >
              {/* Timeline dot */}
              <div className="timeline-dot hidden md:block"></div>
              
              <div className="bg-card rounded-xl p-6 shadow-md border border-border relative z-10">
                <div className="flex items-center gap-2 mb-2 md:justify-end">
                  <Briefcase className={cn("h-5 w-5 text-primary", index % 2 !== 0 && "md:order-2")} />
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                </div>
                
                <h4 className="text-foreground/80 font-medium mb-2">{exp.company}</h4>
                
                <div className="flex items-center gap-2 mb-4 text-foreground/60 md:justify-end">
                  <Calendar className={cn("h-4 w-4", index % 2 !== 0 && "md:order-2")} />
                  <span className="text-sm">{exp.duration}</span>
                </div>
                
                <p className={cn("text-foreground/70 mb-4", index % 2 !== 0 && "md:text-left")}>{exp.description}</p>
                
                {exp.skills && (
                  <div className={cn("flex flex-wrap gap-2", index % 2 === 0 ? "md:justify-end" : "md:justify-start")}>
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
