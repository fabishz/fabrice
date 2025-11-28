"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import Image from "next/image";

export default function BlogPost() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold">Post Not Found</h1>
                    <Button onClick={() => router.push("/blog")}>Back to Blog</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <Button variant="ghost" className="mb-8" onClick={() => router.push("/blog")}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Button>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-3xl"
                >
                    <div className="mb-8 aspect-video overflow-hidden rounded-xl border bg-muted relative">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>

                    <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
                        <Badge>{post.category}</Badge>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="mb-6 text-5xl font-bold">{post.title}</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>

                        <h2>Introduction</h2>
                        <p>
                            In this comprehensive guide, we'll explore the essential practices for running
                            Kubernetes in production environments. These insights come from years of experience
                            managing large-scale Kubernetes clusters serving millions of users.
                        </p>

                        <h2>Key Principles</h2>
                        <p>
                            When running Kubernetes in production, several core principles should guide your
                            decisions:
                        </p>

                        <ul>
                            <li>
                                <strong>Reliability:</strong> Build fault-tolerant systems with proper health checks
                                and graceful degradation
                            </li>
                            <li>
                                <strong>Observability:</strong> Comprehensive monitoring, logging, and tracing
                            </li>
                            <li>
                                <strong>Security:</strong> Network policies, RBAC, and secrets management
                            </li>
                            <li>
                                <strong>Cost Optimization:</strong> Right-sizing resources and efficient scaling
                            </li>
                        </ul>

                        <h2>Implementation Details</h2>
                        <p>
                            Let's dive into specific implementation strategies that have proven effective in
                            production environments. Each of these approaches has been battle-tested in
                            high-traffic scenarios.
                        </p>

                        <h3>1. Resource Management</h3>
                        <p>
                            Proper resource requests and limits are crucial. Set requests based on actual usage
                            patterns and limits to prevent resource exhaustion.
                        </p>

                        <h3>2. Auto-scaling Configuration</h3>
                        <p>
                            Implement both Horizontal Pod Autoscaler (HPA) and Vertical Pod Autoscaler (VPA) to
                            handle varying load patterns efficiently.
                        </p>

                        <h3>3. Monitoring & Alerting</h3>
                        <p>
                            Set up comprehensive monitoring with Prometheus and Grafana. Define clear SLOs and
                            implement alerting based on meaningful metrics.
                        </p>

                        <h2>Conclusion</h2>
                        <p>
                            Running Kubernetes in production requires careful planning, continuous monitoring, and
                            iterative improvements. By following these best practices, you can build reliable,
                            scalable, and cost-effective infrastructure.
                        </p>
                    </div>
                </motion.article>
            </div>
        </div>
    );
}
