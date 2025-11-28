"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero opacity-10" />
                <div className="container relative mx-auto px-4 py-20 md:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6 flex flex-wrap justify-center gap-3"
                        >
                            <Badge variant="secondary" className="text-sm">
                                AWS Certified
                            </Badge>
                            <Badge variant="secondary" className="text-sm">
                                Kubernetes Expert
                            </Badge>
                            <Badge variant="secondary" className="text-sm">
                                CI/CD Specialist
                            </Badge>
                            <Badge variant="secondary" className="text-sm">
                                Cloud Architect
                            </Badge>
                        </motion.div>

                        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                            Senior Software Engineer
                            <br />
                            <span className="bg-gradient-primary bg-clip-text text-transparent">
                                & DevOps Engineer
                            </span>
                        </h1>

                        <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                            Building scalable cloud infrastructure and modern applications with 7+ years of
                            experience in AWS, Kubernetes, and full-stack development.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Button size="lg" className="group" asChild>
                                <Link href="/projects">
                                    View Projects
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a
                                    href="https://docs.google.com/document/d/YOUR-RESUME-ID-HERE/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Download className="mr-2 h-5 w-5" />
                                    View Resume
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Contact Me
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-8 flex justify-center gap-4"
                        >
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-6 w-6" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="mailto:contact@example.com">
                                    <Mail className="h-6 w-6" />
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="border-y bg-muted/30 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="mb-2 text-4xl font-bold text-primary">7+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="mb-2 text-4xl font-bold text-primary">100+</div>
                            <div className="text-muted-foreground">Projects Deployed</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="mb-2 text-4xl font-bold text-primary">99.99%</div>
                            <div className="text-muted-foreground">Uptime Achieved</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <div className="mb-2 text-4xl font-bold text-primary">10M+</div>
                            <div className="text-muted-foreground">Users Served</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specializations */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-4xl font-bold">Core Specializations</h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Expertise in building and scaling cloud infrastructure, automating deployments, and
                            developing full-stack applications.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Cloud Infrastructure",
                                description:
                                    "Design and deploy scalable cloud architecture on AWS, GCP, and Azure with focus on reliability and cost optimization.",
                                icon: "☁️",
                            },
                            {
                                title: "DevOps & CI/CD",
                                description:
                                    "Implement automated deployment pipelines, GitOps workflows, and infrastructure as code for rapid delivery.",
                                icon: "🚀",
                            },
                            {
                                title: "Full-Stack Development",
                                description:
                                    "Build modern web applications using React, Node.js, and TypeScript with focus on performance and UX.",
                                icon: "💻",
                            },
                        ].map((spec, index) => (
                            <motion.div
                                key={spec.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-xl border bg-card p-8 transition-all hover:shadow-lg"
                            >
                                <div className="mb-4 text-5xl">{spec.icon}</div>
                                <h3 className="mb-3 text-2xl font-bold">{spec.title}</h3>
                                <p className="text-muted-foreground">{spec.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
