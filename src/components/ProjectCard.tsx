import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  tags: string[];
  techStack: string[];
  date: string;
  description: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  index: number;
}

const tagStyles: Record<string, string> = {
  "Full-stack": "tag-fullstack",
  "AI-ML": "tag-ai-ml",
  "NLP": "tag-ai-ml",
  "DS": "bg-cyan-500/10 text-cyan-400",
  "DE": "bg-orange-500/10 text-orange-400",
};

const ProjectCard = ({
  name,
  tags,
  techStack,
  date,
  description,
  githubUrl,
  liveUrl,
  featured,
  index,
}: ProjectCardProps) => {
  // Function to bold numbers in text
  const formatText = (text: string) => {
    return text.split(/(\d+\.?\d*\+?%?[MK]?)/g).map((part, i) => {
      if (/^\d+\.?\d*\+?%?[MK]?$/.test(part)) {
        return (
          <span key={i} className="text-primary font-semibold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-base card-hover h-full flex flex-col relative group"
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 tag-featured flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium z-10">
          Featured
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-foreground pr-8">{name}</h3>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span key={tag} className={`tag-pill ${tagStyles[tag] || ""}`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Date */}
      <p className="text-xs text-muted-foreground mb-4">{date}</p>

      {/* Description */}
      <ul className="space-y-2 flex-1">
        {description.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>{formatText(item)}</span>
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
