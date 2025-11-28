import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/data";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Case Study Not Found</h1>
          <Button onClick={() => navigate("/case-studies")}>Back to Case Studies</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-8" onClick={() => navigate("/case-studies")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8">
            <h1 className="mb-4 text-5xl font-bold">{study.title}</h1>
            <p className="text-xl text-muted-foreground">{study.description}</p>
          </div>

          <div className="mb-8 aspect-video overflow-hidden rounded-xl border bg-muted">
            <img src={study.image} alt={study.title} className="h-full w-full object-cover" />
          </div>

          <div className="mb-12 flex flex-wrap gap-3">
            {study.tools.map((tool) => (
              <Badge key={tool} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold text-destructive">The Problem</h2>
              <p className="text-lg text-muted-foreground">{study.problem}</p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-primary">The Approach</h2>
              <ul className="space-y-3">
                {study.approach.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-lg text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-accent">The Outcome</h2>
              <p className="mb-6 text-lg text-muted-foreground">{study.outcome}</p>

              <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(study.metrics).map(([key, value]) => (
                  <div key={key} className="rounded-xl border bg-card p-6">
                    <div className="mb-2 text-3xl font-bold text-primary">{value}</div>
                    <div className="text-muted-foreground">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Infrastructure Diagram</h2>
              <div className="rounded-xl border bg-muted p-12">
                <p className="text-center text-muted-foreground">
                  [Architecture Diagram Placeholder - Shows the infrastructure setup]
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold">Key Takeaways</h2>
              <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground">
                <li>
                  Proper planning and incremental migration are essential for zero-downtime
                  transitions
                </li>
                <li>
                  Comprehensive monitoring and observability should be implemented before migration
                </li>
                <li>
                  Automation and Infrastructure as Code reduce errors and enable rapid iteration
                </li>
                <li>
                  Team collaboration and clear communication are critical for successful DevOps
                  initiatives
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
