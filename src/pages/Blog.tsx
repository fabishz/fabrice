import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Blog"
          subtitle="Insights on software engineering, DevOps practices, and cloud infrastructure"
        />

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category === "all" ? "All Posts" : category}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} {...post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
