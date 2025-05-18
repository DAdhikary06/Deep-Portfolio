
import { useRef, useEffect } from "react";
import { Database } from "lucide-react";
import { cn } from "@/lib/utils";

const Skills = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const skills = [
    { 
      name: "Python", 
      level: 90, 
      icon: "python",
      color: "bg-dscyan" 
    },
    { 
      name: "Machine Learning", 
      level: 85, 
      icon: "scikitlearn",
      color: "bg-dsred" 
    },
    { 
      name: "Deep Learning", 
      level: 80, 
      icon: "tensorflow",
      color: "bg-dsorange" 
    },
    { 
      name: "SQL", 
      level: 85, 
      icon: "database",
      color: "bg-dsblue" 
    },
    { 
      name: "Data Visualization", 
      level: 75, 
      icon: "chart-bar",
      color: "bg-dsteal" 
    },
    { 
      name: "Data Analysis", 
      level: 90, 
      icon: "pandas",
      color: "bg-dspurple" 
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const level = progressBar.dataset.level;
            if (progressBar.firstElementChild && level) {
              (progressBar.firstElementChild as HTMLElement).style.width = `${level}%`;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Icon mapping function
  const renderIcon = (iconName: string, color: string) => {
    const iconClass = cn("h-6 w-6", color.replace("bg-", "text-"));
    
    switch (iconName) {
      case 'python':
        return <span className={iconClass}>🐍</span>;
      case 'scikitlearn':
        return <span className={iconClass}>🔬</span>;
      case 'tensorflow':
        return <span className={iconClass}>🧠</span>;
      case 'database':
        return <Database className={iconClass} />;
      case 'chart-bar':
        return <span className={iconClass}>📊</span>;
      case 'pandas':
        return <span className={iconClass}>🐼</span>;
      default:
        return <span className={iconClass}>🔧</span>;
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card p-6">
              <div className="flex items-center mb-4">
                <div className={cn("p-2 rounded-lg mr-4", skill.color)}>
                  {renderIcon(skill.icon, skill.color)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <p className="text-sm text-foreground/70">{skill.level}%</p>
                </div>
              </div>
              
              <div 
                className="progress-bar"
                ref={el => progressRefs.current[index] = el}
                data-level={skill.level}
              >
                <div 
                  className={cn("progress-value", skill.color)} 
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
