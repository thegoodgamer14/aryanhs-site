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
    githubUrl: "https://github.com/thegoodgamer14/tech-spec-extractor",
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
    liveUrl: "https://carrt-3g8e.onrender.com/",
    featured: false,
  },
  {
    name: "Telecom Customer Churn Prediction",
    tags: ["Data Science", "MLOps", "ML"],
    techStack: ["Python", "XGBoost", "AWS SageMaker", "AWS S3", "Pandas", "NumPy"],
    date: "Mar 2026",
    description: [
      "Architected an end-to-end Machine Learning pipeline for predicting telecom customer churn, deriving 44 high-signal features and optimizing an XGBoost ensemble to achieve an 0.84 AUC-ROC and 0.64 F1-Score.",
      "Orchestrated a secure, headless cloud training framework built on AWS SageMaker and Amazon S3, implementing dynamic IAM roles and automated artifact retrieval scripts for scalable MLOps.",
      "Calibrated prediction serving through precision-recall threshold tuning, mathematically balancing the model's sensitivity to capture maximum churners while minimizing false-positive retention costs.",
    ],
    githubUrl: "https://github.com/thegoodgamer14/telco-customer-churn",
    featured: true,
  },
  {
    name: "Walmart Sales Analysis and Forecasting",
    tags: ["Data Science", "Data Analytics", "ML"],
    techStack: ["Python", "Pandas", "NumPy", "Tableau", "Matplotlib", "XGBoost"],
    date: "Jan 2026",
    description: [
      "Engineered a multivariate time-series forecasting pipeline across 45 retail stores, constructing complex temporal features (52-week historical lags, rolling averages) and integrating macroeconomic indicators to solve the limitations of classical univariate ARIMA models.",
      "Architected and trained ensemble machine learning models (XGBoost, Random Forest) utilizing a strict chronological 80/20 train-test split to eliminate temporal data leakage, achieving a 98.5% R2 score on unseen test data.",
      "Developed an interactive Tableau business intelligence dashboard ready for supply chain and marketing teams, translating XGBoost feature importance metrics into dynamic inventory allocation heatmaps and actionable promotional planners.",
    ],
    kaggleUrl: "https://www.kaggle.com/code/thegoodgamer14/walmart-sales-analysis-and-forecasting",
    tableauUrl: "https://public.tableau.com/app/profile/aryan.sharma8116/viz/WalmartSalesAnalysisandForecast/Dashboard1",
    featured: false,
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
        {[...projects]
          .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
          .map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
