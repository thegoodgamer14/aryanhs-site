import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Engineering Specification Extraction Tool",
    tags: ["AI-ML", "NLP"],
    techStack: ["PyTorch", "DistilBERT", "Transformers", "NLTK"],
    date: "May 2025",
    description: [
      "Domain-adaptive NLP model using DistilBERT for technical specification extraction. Achieved 6.88% accuracy improvement and 2.69% perplexity reduction.",
      "Cross-domain evaluation across mechanical and electrical engineering using 2.5M+ words corpus.",
      "Architected extraction pipeline with regex pattern recognition and IOB2 tagging for NER.",
    ],
    githubUrl: "https://github.com/thegoodgamer14/Engineering-Specification-Extraction-Tool",
    featured: true,
  },
  {
    name: "carrt - Real Time Chat Application",
    tags: ["Full-stack"],
    techStack: ["TypeScript", "Next.js", "Socket.io", "Prisma", "MySQL"],
    date: "Feb 2024",
    description: [
      "Real-time messaging with Socket.io WebSocket, file attachments via UploadThing API, and message editing/deletion.",
      "Scalable server/channel management with role-based access control and unique invite links.",
      "Multimedia communication with LiveKit WebRTC for 1:1 video/audio calls and infinite scroll pagination.",
    ],
    githubUrl: "https://github.com/thegoodgamer14/carrt",
    liveUrl: "https://carrt.vercel.app",
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container bg-secondary/30">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
