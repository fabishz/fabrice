import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const SectionHeading = ({ title, subtitle, children }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      {children}
    </motion.div>
  );
};
