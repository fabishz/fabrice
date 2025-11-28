import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Professional Experience"
          subtitle="7+ years of building scalable systems and leading DevOps initiatives at high-growth companies"
        />

        <div className="mx-auto max-w-4xl space-y-8">
          {experience.map((exp, index) => (
            <ExperienceTimeline key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
