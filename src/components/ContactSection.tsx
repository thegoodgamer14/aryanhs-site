import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration - Set these in your .env file
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const socialLinks = [
  { icon: Github, href: "https://github.com/thegoodgamer14", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aryanhs145", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/0xh_aryan", label: "Twitter" },
  { icon: Mail, href: "mailto:ahsnotify03@gmail.com", label: "Email" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-container bg-secondary/30">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-start">
          {/* Left side - Social links and message */}
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to new opportunities, freelance projects, collaborations, or just a friendly hello!
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                    <link.icon className="w-5 h-5" />
                  </span>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1fCzKFmqeTAlfwS40s_IzjKox2dFfI_Pf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="font-medium">Resume</span>
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-base"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-base resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-3 text-emerald-400"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Message sent! I'll get back to you soon.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-3 text-destructive"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Something went wrong. Please try again.</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
