"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

interface ExperienceTimelineProps {
  experience: Experience;
  index: number;
}

export const ExperienceTimeline = ({ experience, index }: ExperienceTimelineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-xl border bg-card p-8"
    >
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold">{experience.role}</h3>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="text-lg font-semibold text-primary">{experience.company}</span>
          <span>•</span>
          <span>{experience.duration}</span>
        </div>
      </div>

      <p className="mb-6 text-muted-foreground">{experience.description}</p>

      <div className="mb-6">
        <h4 className="mb-3 font-semibold">Key Responsibilities:</h4>
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{resp}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="mb-3 font-semibold">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 font-semibold text-primary">Key Achievements:</h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-sm font-medium">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
