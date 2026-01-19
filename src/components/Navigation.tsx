import { motion } from "framer-motion";
import { Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center"
    >
      <div className="flex items-center gap-1 px-2 py-2 bg-card/60 backdrop-blur-lg border border-border rounded-full shadow-lg">
        <ThemeToggle />
        <a
          href="#"
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all duration-200"
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
        </a>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
