"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
    const resumeUrl = "https://docs.google.com/document/d/YOUR-RESUME-ID-HERE/view";

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Resume"
                    subtitle="Download or view my complete professional resume"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="mb-8 flex flex-wrap justify-center gap-4">
                        <Button size="lg" asChild>
                            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-5 w-5" />
                                View Resume
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href={resumeUrl} download>
                                <Download className="mr-2 h-5 w-5" />
                                Download PDF
                            </a>
                        </Button>
                    </div>

                    <div className="overflow-hidden rounded-xl border bg-card">
                        <iframe
                            src={`${resumeUrl}?embedded=true`}
                            className="h-[800px] w-full"
                            title="Resume"
                        />
                    </div>

                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        <p>
                            Note: If the preview doesn't load, please click "View Resume" to open in a new tab.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
