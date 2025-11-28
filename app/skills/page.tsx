"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { skills } from "@/lib/data";

export default function Skills() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="Comprehensive expertise across the full stack, from frontend to backend to cloud infrastructure"
                />

                <div className="mx-auto max-w-6xl space-y-12">
                    <section>
                        <h2 className="mb-6 text-2xl font-bold">Languages</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {skills.languages.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} index={index} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6 text-2xl font-bold">Frontend Development</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {skills.frontend.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} index={index} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6 text-2xl font-bold">Backend Development</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {skills.backend.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} index={index} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6 text-2xl font-bold">DevOps & Cloud</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {skills.devops.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} index={index} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6 text-2xl font-bold">CI/CD</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {skills.cicd.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} index={index} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6 text-2xl font-bold">Monitoring & Observability</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {skills.monitoring.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} index={index} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
