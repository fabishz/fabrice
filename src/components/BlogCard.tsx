"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  index: number;
}

export const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  category,
  readTime,
  image,
  index,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group cursor-pointer overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
      >
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          <Badge variant="secondary" className="mb-3">
            {category}
          </Badge>

          <h3 className="mb-3 text-xl font-bold group-hover:text-primary">{title}</h3>
          <p className="text-muted-foreground">{excerpt}</p>
        </div>
      </motion.article>
    </Link>
  );
};
