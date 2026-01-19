import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 text-center border-t border-border"
    >
      <div className="section-container py-0">
        <p className="text-sm text-muted-foreground mb-1">
          BTech CS, IIITM Gwalior '25
        </p>
        <p className="text-sm text-muted-foreground/60">
          © 2026 Aryan Sharma
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
