import { motion } from "framer-motion";
import { ArrowRight, Code2, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Code2,
    title: "Engineering Mindset",
    description: "We approach every project with precision, building robust architectures that stand the test of scale.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solvers",
    description: "Complex challenges fuel our creativity. We transform intricate requirements into elegant solutions.",
  },
  {
    icon: Rocket,
    title: "Quality Driven",
    description: "Excellence isn't optional. We craft software that performs flawlessly and exceeds expectations.",
  },
];

export const CompanyOverview = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/50 via-transparent to-transparent opacity-50" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="text-display-lg mb-6">
              Building Digital
              <br />
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              SYNCODE is a software engineering studio focused on creating high-performance 
              digital products. We combine technical expertise with strategic thinking to 
              deliver solutions that drive real business impact.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From startups to enterprises, we partner with ambitious teams to build 
              software that scales. Our approach is grounded in clean architecture, 
              modern technologies, and a relentless focus on quality.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-foreground font-semibold 
                         group link-underline"
            >
              Learn More About Us
              <ArrowRight 
                size={18} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </Link>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-radial from-foreground/5 to-transparent rounded-full blur-3xl" />
            
            <div className="relative space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div 
                    className="glass rounded-2xl p-6 md:p-8 card-float
                               border border-border/50 hover:border-foreground/20 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground/10 
                                      flex items-center justify-center
                                      group-hover:bg-foreground/20 transition-colors duration-300">
                        <feature.icon size={24} className="text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
