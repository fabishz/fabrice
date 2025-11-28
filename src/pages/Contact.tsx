import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss opportunities? Let's connect!"
        />

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Phone</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">Connect on Social Media</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:contact@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a
                  href="https://docs.google.com/document/d/YOUR-RESUME-ID-HERE/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border bg-card p-8"
          >
            <h2 className="mb-6 text-3xl font-bold">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
