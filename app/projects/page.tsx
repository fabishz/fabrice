"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const other = projects.filter((p) => !p.featured);

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Projects"
                    subtitle="Showcase of production-grade systems, infrastructure projects, and full-stack applications"
                />

                {featured.length > 0 && (
                    <div className="mb-16">
                        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {featured.map((project, index) => (
                                <ProjectCard key={project.id} {...project} index={index} />
                            ))}
                        </div>
                    </div>
                )}

                {other.length > 0 && (
                    <div>
                        <h2 className="mb-8 text-3xl font-bold">More Projects</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {other.map((project, index) => (
                                <ProjectCard key={project.id} {...project} index={index + featured.length} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
