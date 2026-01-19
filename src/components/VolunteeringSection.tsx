import { motion } from "framer-motion";
import { MapPin, Calendar, Heart, ExternalLink } from "lucide-react";

const VolunteeringSection = () => {
  const bullets = [
    "Spearheaded 5 Cloth Donation Campaigns, 2 Blood Donation Drives, and literacy initiatives, positively impacting 500+ people.",
    "Implemented strategic outreach programs, resulting in 100% increase in membership registrations.",
    "Interviewed and wrote about Mr. Vikas Goswami, founder of Swarg Sadan Ashram. 650+ likes on Medium.",
  ];

  // Function to bold numbers in text
  const formatText = (text: string) => {
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
    <section id="volunteering" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Leadership & Volunteering
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto card-base card-hover"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <a
                  href="https://www.instagram.com/rotaractiiitm/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-semibold link-accent group"
                >
                  Rotaract Club of Youth
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-foreground font-medium mt-1">President</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Jan 2022 – Mar 2025
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Gwalior, Madhya Pradesh
              </span>
            </div>

            <ul className="space-y-2">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{formatText(bullet)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VolunteeringSection;
