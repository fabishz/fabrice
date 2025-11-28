import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  index: number;
}

export const CaseStudyCard = ({
  id,
  title,
  description,
  image,
  tools,
  index,
}: CaseStudyCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
      onClick={() => navigate(`/case-studies/${id}`)}
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="outline">
              {tool}
            </Badge>
          ))}
        </div>

        <Button variant="link" className="group/btn p-0">
          Read Case Study
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};
