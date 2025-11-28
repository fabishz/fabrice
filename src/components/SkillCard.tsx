import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  level: number;
  index: number;
}

export const SkillCard = ({ name, level, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
          className="h-full bg-gradient-primary"
        />
      </div>
    </motion.div>
  );
};
