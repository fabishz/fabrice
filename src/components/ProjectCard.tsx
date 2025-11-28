import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  index: number;
}

export const ProjectCard = ({
  id,
  title,
  description,
  image,
  technologies,
  github,
  demo,
  featured,
  index,
}: ProjectCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg ${featured ? "border-primary/50 shadow-md" : ""
        }`}
    >
      {featured && (
        <div className="absolute right-4 top-4 z-10">
          <Badge className="bg-primary">Featured</Badge>
        </div>
      )}

      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button asChild className="flex-1">
            <Link href={`/projects/${id}`}>View Details</Link>
          </Button>
          {github && (
            <Button variant="outline" size="icon" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {demo && (
            <Button variant="outline" size="icon" asChild>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
