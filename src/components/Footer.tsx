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
        <p className="text-sm text-muted-foreground/60">
          © 2026 Aryan Hemant Sharma
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
