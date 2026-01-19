import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import VolunteeringSection from "@/components/VolunteeringSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  // Set dark mode by default
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (!stored) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <VolunteeringSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
