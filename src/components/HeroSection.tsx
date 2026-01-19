import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, FileText, BookOpen, Dumbbell, Music, PenLine, Guitar } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/thegoodgamer14", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/aryanhs145", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/0xh_aryan", label: "Twitter" },
    { icon: Mail, href: "mailto:ahsnotify03@gmail.com", label: "Email" },
  ];

  const interests = [
    { icon: BookOpen, label: "Reading", href: "https://www.goodreads.com/user/show/50225131-aryan" },
    { icon: Music, label: "Metalhead", href: "https://open.spotify.com/playlist/37i9dQZF1DX49jUV2NfGku?si=O3ZjHegdT-uzRGlhyk4BQw" },
    { icon: PenLine, label: "Writing", href: "https://medium.com/@aryan.sgrbk" },
    { icon: Dumbbell, label: "Gym", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D" },
    { icon: Guitar, label: "Guitar", href: "https://www.youtube.com/watch?v=LTseTg48568&pp=ygUQY29tZm9ydGFibHkgbnVtYg%3D%3D" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Aryan Hemant Sharma
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            <span className="gradient-text font-medium">Software</span>
            <span className="text-muted-foreground/60 mx-2">|</span>
            <span className="gradient-text font-medium">Data</span>
            <span className="text-muted-foreground/60 mx-2">|</span>
            <span className="gradient-text font-medium">Product Engineer</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
            Full-stack engineer building scalable web applications.
            Currently crafting digital experiences in Dubai.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={link.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
          <motion.a
            href="https://drive.google.com/file/d/1fCzKFmqeTAlfwS40s_IzjKox2dFfI_Pf/view?usp=sharing"
            target="_blank"
            className="btn-outline ml-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </motion.a>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-6 text-muted-foreground/60 text-sm"
        >
          <span className="text-muted-foreground/40">I also like to →</span>
          {interests.map((interest) => (
            <a
              key={interest.label}
              href={interest.href}
              target="_blank"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <interest.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{interest.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
