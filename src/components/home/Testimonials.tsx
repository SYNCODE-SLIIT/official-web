import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "SYNCODE delivered a platform that exceeded our expectations. Their attention to detail and technical expertise is remarkable.",
    name: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
  },
  {
    id: 2,
    quote: "The team's ability to translate complex requirements into elegant solutions made all the difference. True engineering partners.",
    name: "Michael Torres",
    role: "Founder, StartupLabs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format",
  },
  {
    id: 3,
    quote: "Working with SYNCODE transformed our digital presence. They don't just build software—they engineer success.",
    name: "Emily Watson",
    role: "Director of Product, FinServe",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
  },
  {
    id: 4,
    quote: "Their AI solutions automated 60% of our manual processes. The ROI was visible within the first quarter.",
    name: "David Park",
    role: "CEO, RetailGrowth",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
  },
  {
    id: 5,
    quote: "From concept to launch in 12 weeks. SYNCODE's efficiency and quality set them apart from any agency we've worked with.",
    name: "Lisa Anderson",
    role: "VP Engineering, HealthTech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format",
  },
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} className="section-padding bg-foreground overflow-hidden">
      <div className="container-wide mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-medium text-background/60 tracking-widest uppercase mb-4 block">
            Client Feedback
          </span>
          <h2 className="text-display-lg text-background">
            What They
            <br />
            <span className="text-background/70">Say About Us</span>
          </h2>
        </motion.div>
      </div>

      {/* Scroll-driven carousel */}
      <motion.div style={{ x }} className="flex gap-6 pl-4 md:pl-[10vw]">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[340px] md:w-[400px]"
          >
            <div className="h-full p-8 rounded-3xl bg-background/10 border border-background/20 
                            card-float hover:bg-background/15 hover:border-background/30 transition-all duration-300">
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center mb-6">
                <Quote size={18} className="text-background/60" />
              </div>

              {/* Quote */}
              <blockquote className="text-background/90 leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-background">{testimonial.name}</p>
                  <p className="text-sm text-background/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
