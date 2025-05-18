
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
}

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for predictive analytics",
      fullDescription: "Developed a comprehensive machine learning pipeline that automates data preprocessing, feature engineering, model training, hyperparameter tuning, and deployment. The system uses TensorFlow and scikit-learn to create and optimize various predictive models for business insights.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "Docker"],
      github: "https://github.com/username/project1",
      demo: "https://example.com/demo1",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboards for business insights",
      fullDescription: "Created a real-time interactive dashboard that visualizes key business metrics and KPIs. The system integrates with various data sources, processes the data using Python, and presents it through an intuitive interface built with React and D3.js.",
      technologies: ["Python", "React", "D3.js", "Pandas", "REST API"],
      github: "https://github.com/username/project2",
      demo: "https://example.com/demo2",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      title: "Sentiment Analysis Tool",
      description: "NLP-based sentiment analysis for customer feedback",
      fullDescription: "Built an advanced sentiment analysis tool that processes customer feedback from various channels. The system uses natural language processing techniques to categorize feedback, extract key topics, and identify sentiment trends over time.",
      technologies: ["Python", "NLTK", "spaCy", "Flask", "MongoDB"],
      github: "https://github.com/username/project3",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 4,
      title: "Recommendation System",
      description: "Collaborative filtering recommendation engine",
      fullDescription: "Designed and implemented a recommendation system using collaborative filtering techniques. The system analyzes user behavior and preferences to suggest relevant products or content, significantly improving user engagement and conversion rates.",
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS"],
      github: "https://github.com/username/project4",
      image: "https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" onClick={() => handleOpenProject(project)}>
                    Details
                  </Button>
                  {project.demo && (
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-md"
              />
              
              <p className="text-sm text-foreground/80">
                {selectedProject.fullDescription || selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
              
              <div className="flex justify-between pt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
                {selectedProject.demo && (
                  <Button asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
