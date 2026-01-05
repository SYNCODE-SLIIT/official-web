import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projects = [
  {
    id: 1,
    title: "FinFlow Pro",
    category: "Enterprise Platform",
    description: "A comprehensive financial management platform serving 50,000+ users with real-time analytics and intelligent automation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format",
    path: "/projects/finflow-pro",
    tags: ["React", "Node.js", "PostgreSQL", "AI/ML"],
  },
  {
    id: 2,
    title: "HealthSync",
    category: "Mobile Application",
    description: "Cross-platform health tracking app with AI-powered insights, serving patients and healthcare providers worldwide.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop&auto=format",
    path: "/projects/healthsync",
    tags: ["React Native", "TypeScript", "Firebase", "Machine Learning"],
  },
  {
    id: 3,
    title: "Artisan Market",
    category: "E-Commerce",
    description: "Custom marketplace connecting independent artisans with global customers, featuring advanced search and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format",
    path: "/projects/artisan-market",
    tags: ["Next.js", "Stripe", "Elasticsearch", "AWS"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                Our Work
              </span>
              <h1 className="text-display-xl mb-6">
                Selected
                <br />
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A showcase of our most impactful work. Each project represents our commitment 
                to engineering excellence and delivering measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects List */}
        <section className="pb-32">
          <div className="container-wide">
            <div className="space-y-20">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <Link 
                    to={project.path} 
                    className={`group block ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 
                                   group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/40 opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-500
                                      flex items-center justify-center">
                        <span className="flex items-center gap-2 px-6 py-3 glass rounded-full 
                                         text-foreground font-semibold">
                          View Case Study
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                      {project.category}
                    </span>
                    <h2 className="text-display-md mb-4">{project.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-sm font-medium text-foreground/70 
                                     bg-foreground/5 rounded-full border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={project.path}
                      className="inline-flex items-center gap-2 text-foreground font-semibold 
                                 group/link link-underline"
                    >
                      View Full Case Study
                      <ArrowUpRight 
                        size={18} 
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 
                                   transition-transform duration-300" 
                      />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card border-t border-border">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-display-md mb-6">Have a Project in Mind?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's explore how we can bring your vision to life with the same dedication 
                and expertise.
              </p>
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
