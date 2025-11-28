import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="DevOps Case Studies"
          subtitle="Real-world infrastructure projects, migrations, and optimization initiatives"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} {...study} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
