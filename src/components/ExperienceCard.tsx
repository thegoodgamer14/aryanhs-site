import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  companyUrl: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  techStack: string[];
  index: number;
}

const ExperienceCard = ({
  company,
  companyUrl,
  role,
  duration,
  location,
  bullets,
  techStack,
  index,
}: ExperienceCardProps) => {
  // Function to bold numbers in text
  const formatBullet = (text: string) => {
    return text.split(/(\d+\.?\d*\+?%?)/g).map((part, i) => {
      if (/^\d+\.?\d*\+?%?$/.test(part)) {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Card with left border accent */}
      <div className="relative pl-6 border-l-[3px] border-primary">
        {/* Dot indicator at top-left */}
        <div className="absolute -left-[7px] top-0 w-3 h-3 bg-primary rounded-full border-2 border-background" />

        <div className="card-base card-hover">
          <div className="flex items-start justify-between mb-3">
            <div>
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xl font-semibold link-accent group"
              >
                {company}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-foreground font-medium mt-1">{role}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
          </div>

          <ul className="space-y-2 text-muted-foreground mb-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>{formatBullet(bullet)}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
