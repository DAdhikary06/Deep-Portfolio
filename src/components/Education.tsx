
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements?: string[];
}

const Education = () => {
  const educations: EducationItem[] = [
    {
      id: 1,
      degree: "M.S. in Data Science",
      institution: "Stanford University",
      duration: "2016 - 2018",
      description: "Specialized in machine learning and artificial intelligence with focus on neural networks and deep learning architectures.",
      achievements: [
        "GPA: 3.9/4.0",
        "Research Assistant in AI Lab",
        "Published 2 papers on ML techniques"
      ]
    },
    {
      id: 2,
      degree: "B.S. in Computer Science",
      institution: "MIT",
      duration: "2012 - 2016",
      description: "Foundational education in computer science with minors in mathematics and statistics.",
      achievements: [
        "Dean's List all semesters",
        "Senior project on predictive algorithms",
        "Undergraduate teaching assistant"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {educations.map((edu) => (
            <div key={edu.id} className="bg-card rounded-xl overflow-hidden shadow-md border border-border animate-fade-in">
              <div className="bg-primary/10 p-6">
                <div className="flex items-center gap-3 mb-1">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                </div>
                <h4 className="text-lg font-medium">{edu.institution}</h4>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-foreground/60">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{edu.duration}</span>
                </div>
                
                <p className="mb-6 text-foreground/80">{edu.description}</p>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="font-semibold flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Achievements
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-foreground/70">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
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

export default Education;
