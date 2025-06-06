import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Label } from "@/components/ui/label";

const CONTACTS = [
  {
    href: "mailto:deep712148@gmail.com",
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: "deep712148@gmail.com",
  },
  {
    href: "https://github.com/DAdhikary06",
    icon: <Github className="h-5 w-5 text-primary" />,
    label: "github.com/DAdhikary06",
    external: true,
  },
  {
    href: "https://linkedin.com/in/deep-adhikary-030478222",
    icon: <Linkedin className="h-5 w-5 text-primary" />,
    label: "linkedin.com/in/deep-adhikary-030478222",
    external: true,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-foreground/70 max-w-md">
                I'm always open to discussing new projects, opportunities, and collaborations. Feel free to reach out to me through the form or via my social media.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-lg font-medium">Connect With Me</h4>
              <div className="flex flex-col space-y-4">
                {CONTACTS.map(({ href, icon, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">{icon}</div>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-md border border-border animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;