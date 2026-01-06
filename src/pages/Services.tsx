import type React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown, Code, Smartphone, ShoppingCart, Brain, Palette, Server } from "lucide-react";
import Footer from "@/components/layout/Footer";
import modelSrc from "@/assets/texture_cube_-_free_download.glb";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        poster?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "shadow-intensity"?: string | number;
        exposure?: string | number;
        ar?: boolean;
        "disable-zoom"?: boolean;
        "tone-mapping"?: string;
        "environment-image"?: string;
      };
    }
  }
}

const ModelViewer = () => {
  useEffect(() => {
    if (!document.querySelector("script[data-model-viewer]") && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@google/model-viewer@^4.0.0/dist/model-viewer.min.js";
      script.async = true;
      script.setAttribute("data-model-viewer", "true");
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden">
      <model-viewer
        src={modelSrc}
        camera-controls
        auto-rotate
        ar
        disable-zoom
        shadow-intensity="0.8"
        exposure="1"
        tone-mapping="aces"
        style={{ width: "100%", height: "100%", background: "transparent" }}
      />
    </div>
  );
};

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Full-stack applications, enterprise platforms, and internal tools built for scale.",
    path: "/services/custom-software",
    features: ["Enterprise Platforms", "Internal Tools", "API Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description: "Cross-platform experiences with native performance on every device.",
    path: "/services/web-mobile",
    features: ["Responsive Web Apps", "iOS & Android", "Progressive Web Apps"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Scalable storefronts and marketplaces optimized for conversion.",
    path: "/services/ecommerce",
    features: ["Custom Stores", "Shopify & Headless", "Payment Integration"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Systems",
    description: "AI agents, chatbots, and automation that transform business operations.",
    path: "/services/ai-systems",
    features: ["AI Agents", "Chatbot Development", "Process Automation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    icon: Palette,
    title: "UI/UX & Website Design",
    description: "User-centered design that balances aesthetics with functionality.",
    path: "/services/design",
    features: ["Product Design", "Marketing Websites", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    icon: Server,
    title: "Hosting, Maintenance & Support",
    description: "Reliable infrastructure and ongoing support for peace of mind.",
    path: "/services/hosting",
    features: ["Web Hosting", "Performance Optimization", "SLA-Based Support"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="container-wide">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                  Our Services
                </span>
                <h1 className="text-display-xl mb-6">
                  Engineering-First
                  <br />
                  <span className="gradient-text">Digital Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  From concept to deployment, we build software that solves real problems. 
                  Our approach combines technical expertise with strategic thinking to deliver 
                  products that drive business growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ModelViewer />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="mt-0 flex justify-center"
            >
              <a
                href="#services-grid"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm text-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                aria-label="Scroll to services"
              >
                <ArrowDown size={24} />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="pb-10">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-display-sm font-semibold text-foreground">Explore Our Services</h2>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="pb-32">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={service.path} className="group block h-full">
                    <div className="h-full rounded-3xl bg-card border border-border/50 
                                    card-float hover:border-foreground/30 transition-all duration-500 overflow-hidden">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                          <service.icon size={24} className="text-foreground" />
                        </div>
                        <ArrowUpRight 
                          size={24} 
                          className="absolute top-4 right-4 opacity-0 -translate-y-2 translate-x-2 
                                     group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 
                                     transition-all duration-300 text-white"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-5">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1.5 text-xs font-medium text-foreground/70 
                                         bg-foreground/5 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white border-t border-border">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-display-md mb-6 text-black">Need Something Custom?</h2>
              <p className="text-lg text-black/70 mb-8">
                Every project is unique. Let's discuss your specific requirements and 
                explore how we can help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white font-semibold transition hover:bg-black/90"
              >
                Start a Conversation
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

export default Services;
