import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-8" onClick={() => navigate("/projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8">
            <h1 className="mb-4 text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="mb-8 aspect-video overflow-hidden rounded-xl border bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mb-12 flex flex-wrap gap-4">
            {project.github && (
              <Button asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button variant="outline" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-3xl font-bold">Overview</h2>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Key Features</h2>
              <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground">
                <li>High availability and fault tolerance</li>
                <li>Auto-scaling based on traffic patterns</li>
                <li>Comprehensive monitoring and alerting</li>
                <li>Infrastructure as Code implementation</li>
                <li>Automated deployment pipelines</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Architecture</h2>
              <div className="rounded-xl border bg-muted p-8">
                <p className="text-center text-muted-foreground">
                  [Architecture Diagram Placeholder]
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Technical Challenges</h2>
              <p className="text-lg text-muted-foreground">
                Building this system required solving complex challenges around scalability,
                reliability, and cost optimization. Key challenges included implementing proper
                service mesh communication, ensuring zero-downtime deployments, and building
                comprehensive observability.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Lessons Learned</h2>
              <p className="text-lg text-muted-foreground">
                This project reinforced the importance of proper planning, incremental rollouts, and
                comprehensive testing. Investing time in observability and automation early on paid
                dividends in operational efficiency.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
