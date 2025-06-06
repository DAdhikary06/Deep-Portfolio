import { useState } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements?: string[];
}

const educations: EducationItem[] = [
  {
    id: 1,
    degree: "Master of Computer Application (MCA)",
    institution: "Academy of Technology, MAKAUT",
    duration: "Oct 2023 – Oct 2025",
    description: "Advanced coursework in computer science and project development. Focused on real-world applications and collaborative projects.",
    achievements: [
      "CGPA: 8.16"
    ]
  },
  {
    id: 2,
    degree: "B.Sc. in Mathematics",
    institution: "Chandernagore College, University of Burdwan",
    duration: "Jul 2019 – Jul 2022",
    description: "Comprehensive study of mathematics with emphasis on analytical thinking, problem-solving, and research.",
    achievements: [
      "CGPA: 9.11"
    ]
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    institution: "Bagati Ramgopal Ghosh High School, WBCHSE",
    duration: "May 2019",
    description: "Specialized in science stream with a strong foundation in mathematics and physics.",
    achievements: [
      "80.80 %"
    ]
  },
  {
    id: 4,
    degree: "Secondary Education",
    institution: "Bagati Ramgopal Ghosh High School, WBBSE",
    duration: "Mar 2017",
    description: "Completed secondary education with distinction, excelling in core subjects.",
    achievements: [
      "72.57 %"
    ]
  }
];

const INITIAL_VISIBLE = 2;

const Education = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleEducations = showAll ? educations : educations.slice(0, INITIAL_VISIBLE);

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span>
        </h2>
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
          {visibleEducations.map((edu, idx) => (
            <div
              key={edu.id}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-500 blur-xl rounded-3xl w-full h-full bg-gradient-to-br from-primary/30 via-secondary/30 to-primary/40"></div>
              </div>
              {/* New Card Pattern */}
              <div className="relative z-10 bg-gradient-to-br from-card via-background to-card rounded-3xl shadow-xl border-2 border-primary/20 p-0 overflow-hidden group-hover:shadow-2xl group-hover:scale-[1.03] transition-all duration-300">
                {/* Header with icon and degree */}
                <div className="flex items-center gap-4 px-6 py-5 bg-primary/10 border-b border-primary/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/90 shadow-md">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{edu.degree}</h3>
                    <h4 className="text-base font-medium text-foreground">{edu.institution}</h4>
                  </div>
                </div>
                {/* Body */}
                <div className="px-6 py-5">
                  <div className="flex items-center gap-2 mb-3 text-foreground/60">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  <p className="mb-4 text-foreground/80">{edu.description}</p>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      <div className="font-semibold flex items-center gap-2 text-primary">
                        <Award className="h-4 w-4" />
                        Achievements
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {educations.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 rounded-full bg-primary text-white font-semibold shadow-md hover:bg-primary/80 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;