"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/data";
import Image from "next/image";

export default function CaseStudyDetail() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    const study = caseStudies.find((s) => s.id === id);

    if (!study) {
        return (
            <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold">Case Study Not Found</h1>
                    <Button onClick={() => router.push("/case-studies")}>Back to Case Studies</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <Button variant="ghost" className="mb-8" onClick={() => router.push("/case-studies")}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Case Studies
                </Button>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="mb-8">
                        <h1 className="mb-4 text-5xl font-bold">{study.title}</h1>
                        <p className="text-xl text-muted-foreground">{study.description}</p>
                    </div>

                    <div className="mb-8 aspect-video overflow-hidden rounded-xl border bg-muted relative">
                        <Image src={study.image} alt={study.title} fill className="object-cover" />
                    </div>

                    <div className="mb-12 flex flex-wrap gap-3">
                        {study.tools.map((tool) => (
                            <Badge key={tool} variant="secondary">
                                {tool}
                            </Badge>
                        ))}
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="mb-4 text-3xl font-bold">The Problem</h2>
                            <p className="text-lg text-muted-foreground">{study.problem}</p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-3xl font-bold">Our Approach</h2>
                            <ul className="space-y-4">
                                {study.approach.map((step, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                                            {index + 1}
                                        </div>
                                        <p className="text-lg text-muted-foreground">{step}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-4 text-3xl font-bold">The Outcome</h2>
                            <p className="mb-6 text-lg text-muted-foreground">{study.outcome}</p>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {Object.entries(study.metrics).map(([key, value]) => (
                                    <div key={key} className="rounded-xl border bg-card p-6 text-center">
                                        <div className="mb-2 text-3xl font-bold text-primary">{value}</div>
                                        <div className="text-sm capitalize text-muted-foreground">
                                            {key.replace(/([A-Z])/g, " $1").trim()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </motion.article>
            </div>
        </div>
    );
}
