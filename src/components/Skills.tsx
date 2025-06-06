import { Badge } from "@/components/ui/badge";
import {
  SiPython,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiKaggle ,
  SiPytorch,
  SiGit,
  SiTableau,
  SiJupyter,
  SiGooglecolab,
} from "react-icons/si";
import { FaBrain, FaGlobe ,FaJava,FaChartBar  } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <SiPython className="h-5 w-5 text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="h-5 w-5 text-[#c0b027]" /> },
      { name: "SQL", icon: <SiMysql  className="h-5 w-5 text-[#e38c00]" /> },
      // { name: "JavaScript", icon: <SiJavascript className="h-5 w-5 text-[#f7df1e]" /> },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Pandas", icon: <SiPandas className="h-5 w-5 text-[#623fee]" /> },
      { name: "NumPy", icon: <SiNumpy className="h-5 w-5 text-[#013243]" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="h-5 w-5 text-[#f89939]" /> },
      { name: "NLTK", icon: <SiPython className="h-5 w-5 text-[#FF6F00]" /> },
      { name: "PyTorch", icon: <SiPytorch className="h-5 w-5 text-[#EE4C2C]" /> },
      // { name: "Matplotlib", icon: <FaChartBar className="h-5 w-5 text-[#11557c]" /> },
      { name: "Seaborn", icon: <FaChartBar  className="h-5 w-5 text-[#4c72b0]" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit className="h-5 w-5 text-[#F05032]" /> },
      { name: "Kaggle ", icon: <SiKaggle  className="h-5 w-5 text-[#E97627]" /> },
      { name: "Jupyter", icon: <SiJupyter className="h-5 w-5 text-[#F37626]" /> },
      { name: "Google Colab", icon: <SiGooglecolab className="h-5 w-5 text-[#007ACC]" /> },
      { name: "VS Code", icon: <VscVscode  className="h-5 w-5 text-[#007ACC]" /> },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: <FaBrain className="h-5 w-5 text-green-600" /> },
      { name: "Communication", icon: <FaGlobe className="h-5 w-5 text-blue-500" /> },
      { name: "Team Leadership", icon: <FaBrain className="h-5 w-5 text-orange-500" /> },
      { name: "Project Management", icon: <FaBrain className="h-5 w-5 text-teal-600" /> },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-card rounded-xl shadow-md border border-border p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 text-base bg-transparent border border-primary/30 font-medium text-white"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

