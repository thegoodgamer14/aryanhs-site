import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  companyUrl: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  index: number;
}

const ExperienceCard = ({
  company,
  companyUrl,
  role,
  duration,
  location,
  bullets,
  index,
}: ExperienceCardProps) => {
  const isEven = index % 2 === 0;

  // Function to bold numbers in text
  const formatBullet = (text: string) => {
    return text.split(/(\d+\+?%?)/g).map((part, i) => {
      if (/^\d+\+?%?$/.test(part)) {
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
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex items-center ${
        isEven ? "md:justify-start" : "md:justify-end"
      } justify-center`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />
      
      {/* Card */}
      <div
        className={`w-full md:w-[calc(50%-40px)] card-base card-hover ${
          isEven ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
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

        <ul className="space-y-2 text-muted-foreground">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span>{formatBullet(bullet)}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
