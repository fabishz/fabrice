"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap } from "lucide-react";

export default function About() {
    const certifications = [
        "AWS Certified Solutions Architect – Professional",
        "AWS Certified DevOps Engineer – Professional",
        "Certified Kubernetes Administrator (CKA)",
        "Certified Kubernetes Application Developer (CKAD)",
        "HashiCorp Certified: Terraform Associate",
        "Docker Certified Associate",
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="About Me"
                    subtitle="Senior Full Stack & Mobile Developer with 7+ years building scalable web applications, cross-platform mobile apps, and cloud infrastructure"
                />

                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 rounded-xl border bg-card p-8"
                    >
                        <h2 className="mb-6 text-3xl font-bold">Biography</h2>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                I'm a passionate engineer with over 7 years of experience building and scaling
                                cloud infrastructure, developing cross-platform mobile applications with React Native,
                                and creating full-stack web applications that serve millions of users.
                            </p>
                            <p>
                                My journey began with software development, where I fell in love with creating
                                elegant solutions to complex problems. From building responsive web apps with React
                                and Next.js to crafting seamless mobile experiences for iOS and Android, I've
                                developed a comprehensive skill set across the entire development spectrum.
                            </p>
                            <p>
                                Today, I specialize in architecting cloud-native solutions on AWS and GCP,
                                developing production-ready mobile applications with React Native and Expo,
                                implementing GitOps workflows with Kubernetes and ArgoCD, and building CI/CD
                                pipelines that enable teams to ship features rapidly and confidently.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-12 rounded-xl border bg-card p-8"
                    >
                        <h2 className="mb-6 text-3xl font-bold">Mission & Philosophy</h2>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                I believe in building infrastructure that empowers developers to focus on creating
                                value rather than fighting with deployment issues. My goal is to create systems that
                                are:
                            </p>
                            <ul className="ml-6 list-disc space-y-2">
                                <li>
                                    <strong>Reliable:</strong> High availability and fault tolerance built-in
                                </li>
                                <li>
                                    <strong>Scalable:</strong> Handle growth from startup to enterprise
                                </li>
                                <li>
                                    <strong>Observable:</strong> Clear visibility into system health and performance
                                </li>
                                <li>
                                    <strong>Secure:</strong> Security and compliance as foundational principles
                                </li>
                                <li>
                                    <strong>Cost-effective:</strong> Optimal resource utilization and spending
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 rounded-xl border bg-card p-8"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <Award className="h-8 w-8 text-primary" />
                            <h2 className="text-3xl font-bold">Certifications</h2>
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.05 }}
                                >
                                    <Badge variant="outline" className="w-full justify-start py-3 text-sm">
                                        {cert}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl border bg-card p-8"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <GraduationCap className="h-8 w-8 text-primary" />
                            <h2 className="text-3xl font-bold">Education</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    Bachelor of Science in Computer Science
                                </h3>
                                <p className="text-muted-foreground">University of Technology • 2014 - 2018</p>
                                <p className="mt-2 text-muted-foreground">
                                    Specialized in distributed systems, cloud computing, and software engineering
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
