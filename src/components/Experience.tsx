
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Briefcase, Award } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  logo?: string;
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Tech Corp",
      role: "Senior Data Scientist",
      duration: "2020 - Present",
      description: "Led machine learning projects and developed predictive models for customer segmentation, churn prediction, and revenue forecasting. Collaborated with cross-functional teams to implement data-driven solutions.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Team Leadership"],
      achievements: [
        "Developed a churn prediction model that improved customer retention by 23%",
        "Led a team of 4 data scientists and mentored 2 junior analysts",
        "Implemented an automated data pipeline that reduced reporting time by 75%"
      ],
      logo: "https://ui-avatars.com/api/?name=TC&background=0D8ABC&color=fff"
    },
    {
      id: 2,
      company: "Data Analytics Inc",
      role: "Data Analyst",
      duration: "2018 - 2020",
      description: "Performed data analysis and created visualization dashboards to track KPIs and business metrics. Developed ETL pipelines to process and clean data from various sources.",
      skills: ["Data Analysis", "SQL", "Tableau", "ETL"],
      achievements: [
        "Created executive dashboards that helped identify $1.2M in cost-saving opportunities",
        "Optimized SQL queries that improved database performance by 40%"
      ],
      logo: "https://ui-avatars.com/api/?name=DAI&background=5F259F&color=fff"
    },
    {
      id: 3,
      company: "Innovation Labs",
      role: "ML Research Intern",
      duration: "Summer 2017",
      description: "Researched and implemented novel machine learning algorithms for computer vision applications. Published a paper on efficient image classification techniques.",
      skills: ["Research", "Computer Vision", "Python", "Academic Writing"],
      logo: "https://ui-avatars.com/api/?name=IL&background=E63946&color=fff"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-in", "animate-slide-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 opacity-0 transition-all duration-700">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="relative">
            Work <span className="text-primary">Experience</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
          </span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:transform md:-translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              ref={el => timelineRefs.current[index] = el}
              className={cn(
                "mb-12 opacity-0 relative transition-all duration-700",
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-[50%]" : "md:pl-12 md:ml-[50%]"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute top-0 bg-background rounded-full p-1 border-2 border-primary z-10"
                   style={{ 
                     left: index % 2 === 0 ? 'auto' : '0', 
                     right: index % 2 === 0 ? '0' : 'auto',
                     transform: 'translateX(-50%)' 
                   }}>
                <div className="h-4 w-4 rounded-full bg-primary"></div>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border relative z-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  {exp.logo && (
                    <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/30">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    </div>
                  )}
                  
                  <div className={cn("flex-1", index % 2 === 0 ? "md:text-right" : "")}>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Briefcase className={cn("h-5 w-5 text-primary flex-shrink-0", index % 2 === 0 ? "md:order-2" : "")} />
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                    </div>
                    
                    <h4 className="text-foreground/80 font-medium">{exp.company}</h4>
                  </div>
                </div>
                
                <div className={cn("flex items-center gap-2 mb-4 text-foreground/60", index % 2 === 0 ? "md:justify-end" : "")}>
                  <Calendar className={cn("h-4 w-4", index % 2 === 0 ? "md:order-2" : "")} />
                  <span className="text-sm">{exp.duration}</span>
                </div>
                
                <p className={cn("text-foreground/70 mb-4", index % 2 === 0 ? "md:text-right" : "")}>{exp.description}</p>
                
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className={cn("mb-4", index % 2 === 0 ? "md:text-right" : "")}>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className={cn("h-4 w-4 text-primary", index % 2 === 0 ? "md:order-2" : "")} />
                      <h5 className="font-semibold text-sm uppercase tracking-wide">Key Achievements</h5>
                    </div>
                    <ul className={cn("space-y-1 text-sm text-foreground/70", 
                                     index % 2 === 0 ? "list-none md:text-right" : "list-disc list-inside")}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exp.skills && (
                  <div className={cn("flex flex-wrap gap-2", index % 2 === 0 ? "md:justify-end" : "")}>
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
