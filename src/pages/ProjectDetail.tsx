import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";

const projectsData = {
  "finflow-pro": {
    title: "FinFlow Pro",
    category: "Enterprise Platform",
    heroImage: "/finflow.png",
    overview: {
      client: "FinServe Corporation",
      timeline: "8 months",
      team: "6 engineers",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    },
    challenge: "FinServe needed to replace their legacy financial management system that was struggling to handle growing transaction volumes and lacked modern analytics capabilities. The existing system was slow, prone to errors, and couldn't scale with their expanding customer base.",
    solution: "We designed and built FinFlow Pro from the ground up—a comprehensive financial management platform with real-time analytics, intelligent automation, and enterprise-grade security. The system handles 50,000+ daily active users with sub-second response times.",
    features: [
      "Real-time transaction processing and monitoring",
      "AI-powered fraud detection and risk assessment",
      "Customizable dashboards and reporting",
      "Multi-currency support with live exchange rates",
      "Role-based access control and audit logging",
      "API integrations with major banking systems",
    ],
    results: [
      { metric: "100+", label: "Active Users" },
      { metric: "99.9%", label: "Uptime" },
      { metric: "3x", label: "Processing Speed" },
      { metric: "40%", label: "Cost Reduction" },
    ],
    testimonial: {
      quote: "SYNCODE delivered a platform that exceeded our expectations. The new system handles twice the volume at half the cost, and our customers love the improved experience.",
      name: "James Mitchell",
      role: "VP of Technology, FinServe",
    },
    images: [
      "/finflow.png",
      "/finflow.png",
    ],
  },
  "healthsync": {
    title: "HealthSync",
    category: "Mobile Application",
    heroImage: "/healthsync.png",
    overview: {
      client: "HealthTech Solutions",
      timeline: "6 months",
      team: "5 engineers",
      technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow", "GCP"],
    },
    challenge: "HealthTech wanted to create a mobile health tracking application that could provide personalized insights while maintaining strict data privacy and compliance with healthcare regulations. The app needed to work seamlessly across iOS and Android platforms.",
    solution: "We developed HealthSync, a cross-platform health tracking app with AI-powered insights. The app integrates with wearable devices, provides personalized recommendations, and maintains HIPAA compliance throughout.",
    features: [
      "Real-time health metric tracking and visualization",
      "AI-powered personalized health recommendations",
      "Integration with Apple Health and Google Fit",
      "Secure messaging with healthcare providers",
      "Medication reminders and tracking",
      "Emergency contact and alert system",
    ],
    results: [
      { metric: "50+", label: "Downloads" },
      { metric: "85%", label: "Daily Engagement" },
    ],
    testimonial: {
      quote: "The team's expertise in both mobile development and healthcare compliance made all the difference. HealthSync has become our flagship product.",
      name: "Dr. Sarah Chen",
      role: "CEO, HealthTech Solutions",
    },
    images: [
      "/healthsync.png",
      "/healthsync.png",
    ],
  },
};

const projectOrder = ["finflow-pro", "healthsync"];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projectOrder.indexOf(slug || "");
  const prevProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : null;
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-muted-foreground 
                           hover:text-foreground transition-colors duration-300 mb-8"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="text-display-xl mb-6">{project.title}</h1>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-24"
        >
          <div className="container-wide">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Overview */}
        <section className="pb-24">
          <div className="container-wide">
            <div className="grid md:grid-cols-4 gap-8">
              {Object.entries(project.overview).map(([key, value]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card border border-border/50"
                >
                  <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {key}
                  </h3>
                  <p className="font-semibold">
                    {Array.isArray(value) ? value.join(", ") : value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="pb-24">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display-sm mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display-sm mb-6">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-card">
          <div className="container-wide">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-display-sm mb-12 text-center"
            >
              Key Features
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-background 
                             border border-border/50"
                >
                  <CheckCircle size={20} className="text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-24">
          <div className="container-wide">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-display-sm mb-12 text-center"
            >
              The Results
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.results.map((result, index) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-3xl bg-card border border-border/50"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                    {result.metric}
                  </div>
                  <div className="text-muted-foreground">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                "{project.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{project.testimonial.name}</p>
                <p className="text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 border-t border-border">
          <div className="container-wide">
            <div className="flex items-center justify-between">
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject}`}
                  className="group flex items-center gap-3 text-muted-foreground 
                             hover:text-foreground transition-colors duration-300"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Previous Project</span>
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  to={`/projects/${nextProject}`}
                  className="group flex items-center gap-3 text-muted-foreground 
                             hover:text-foreground transition-colors duration-300"
                >
                  <span>Next Project</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-foreground">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-display-md text-background mb-6">
                Ready to Build Your Project?
              </h2>
              <p className="text-lg text-background/70 mb-8">
                Let's discuss how we can bring the same level of excellence to your next venture.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-background text-foreground 
                           text-lg font-semibold rounded-full transition-all duration-300 
                           hover:scale-105 hover:shadow-2xl"
              >
                Start Your Project
                <ArrowUpRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
