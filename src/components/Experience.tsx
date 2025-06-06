import { useEffect, useState } from "react";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Chegg",
    role: "Subject Matter Expert",
    duration: "Nov 2022 - July 2023 ",
    description:
      "I provided expert guidance on complex mathematical concepts to enhance student understanding. Additionally, I offered comprehensive solutions to mathematical problems and delivered clear explanations along with tailored support to meet diverse student needs.",
    skills: ["Subject Expertise", "Analytical Skills", "Problem-Solving", "Research Proficiency"],
    logo: "https://play-lh.googleusercontent.com/MRFoeH2ytWajpVulg3b6mxt-2OiyrGkhV1Kht-R3Ejlbtl4TY8aCItZS0p5z8ivGHkhH",
  },
];

const Experience = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="experience" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">Experience</span>
        </h2>
        <div className="flex flex-col items-center">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`relative w-full max-w-xl mb-12 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } group`}
            >
              {/* Glowing effect behind card on hover */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl rounded-2xl w-full h-full bg-primary/40"></div>
              </div>
              {/* Logo above card */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full border-4 border-primary/30 bg-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Card */}
              <div className="relative bg-white dark:bg-card rounded-2xl shadow-xl border-l-8 border-primary/70 p-8 pt-12 flex flex-col
      group-hover:shadow-2xl group-hover:scale-[1.025] group-hover:border-primary transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="h-5 w-5 text-primary group-hover:animate-bounce" />
                  <span className="font-bold text-xl text-primary">{exp.role}</span>
                </div>
                <div className="text-lg font-medium text-foreground/80 mb-1">{exp.company}</div>
                <div className="flex items-center gap-2 mb-4 text-foreground/60 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
                <p className="text-foreground/70 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold group-hover:bg-primary/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;