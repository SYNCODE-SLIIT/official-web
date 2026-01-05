import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Full-stack applications and enterprise platforms tailored to your needs.",
    path: "/services/custom-software",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Web & Mobile Development",
    description: "Cross-platform experiences that perform beautifully on any device.",
    path: "/services/web-mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "E-Commerce Solutions",
    description: "Scalable stores and marketplaces built for conversion and growth.",
    path: "/services/ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "AI & Intelligent Systems",
    description: "AI agents, chatbots, and automation that transform workflows.",
    path: "/services/ai-systems",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "UI/UX & Website Design",
    description: "User-centered design that balances beauty with usability.",
    path: "/services/design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Hosting & Support",
    description: "Reliable infrastructure and ongoing maintenance you can count on.",
    path: "/services/hosting",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 noise opacity-[0.03]" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm font-medium text-background/60 tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-display-lg mb-6 text-background">
            Comprehensive
            <br />
            <span className="text-background/70">Digital Services</span>
          </h2>
          <p className="text-lg text-background/60 max-w-2xl mx-auto">
            End-to-end solutions for every stage of your digital journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.path}
                className="group block h-full"
              >
                <div 
                  className="h-full rounded-3xl bg-background/5 border border-background/10
                             hover:bg-background/10 hover:border-background/20 
                             transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 
                                 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-start justify-between gap-4 text-background">
                      {service.title}
                      <ArrowUpRight 
                        size={20} 
                        className="flex-shrink-0 mt-1 opacity-0 -translate-y-1 translate-x-1 
                                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 
                                   transition-all duration-300 text-background"
                      />
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 
                       bg-background text-foreground font-semibold rounded-full 
                       transition-all duration-300 hover:scale-105"
          >
            View All Services
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
