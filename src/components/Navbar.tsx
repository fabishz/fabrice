"use client";

import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg transition-all ${isScrolled ? "shadow-lg" : ""
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fabrice
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeClassName="text-primary bg-primary/10"
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center space-x-2 md:flex">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t md:hidden"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                    activeClassName="text-primary bg-primary/10"
                    onClick={() => setIsOpen(false)}
                    end={link.to === "/"}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="flex space-x-2 px-3 pt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:contact@example.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
