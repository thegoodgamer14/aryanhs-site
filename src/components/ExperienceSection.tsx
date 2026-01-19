import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Kema",
    companyUrl: "https://www.kema.co/",
    role: "Software Engineer Intern",
    duration: "Jan 2025 – Jul 2025",
    location: "Dubai, UAE",
    bullets: [
      "Identified and resolved 20+ critical platform and payments bugs to ensure stable performance and enhanced UX. Extensively documented existing payment gateway and ERP integrations.",
      "Refactored 2 critical modules to ensure light-weight delivery while enhancing functionality. Modified outbound message backend to accommodate custom templates and channel-specific reminders.",
      "Integrated Wafeq accounting APIs via short-polling service to sync 7 core modules ERP data. Setup OAuth 2.0 sign in for establishing one-click connections with Wafeq.",
    ],
    techStack: ["TypeScript", "Node.js", "React", "PostgreSQL", "REST APIs", "OAuth 2.0"],
  },
  {
    company: "Bluecrest Software",
    companyUrl: "https://mohap.ai/",
    role: "Software Development Intern",
    duration: "May 2024 – Sep 2024",
    location: "Remote",
    bullets: [
      "Developed star-schema based data warehouse for inventory management system with 8 dimension tables, 3 fact tables, 6 datamarts. Optimized SQL query duration by 33%.",
      "Derived 29 facts to analyze retail performance across sales, stock and target related business metrics.",
      "Delivered 5 BI dashboards on Metabase covering 15+ business KPIs in collaboration with product, business analysis and client teams.",
    ],
    techStack: ["SQL", "Python", "Metabase", "Data Warehousing", "ETL", "Star Schema"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
