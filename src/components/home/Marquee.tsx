import { motion } from "framer-motion";

const marqueeItems = [
  "Custom Software Development",
  "•",
  "Web & Mobile Apps",
  "•",
  "E-Commerce Solutions",
  "•",
  "AI & Intelligent Systems",
  "•",
  "UI/UX Design",
  "•",
  "Hosting & Support",
  "•",
];

export const Marquee = () => {
  return (
    <section className="py-4 md:py-6 bg-card border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className={`
                flex-shrink-0 px-3 md:px-6 text-base md:text-xl lg:text-2xl font-semibold
                ${item === "•" 
                  ? "text-foreground/20" 
                  : "text-foreground/80 hover:text-foreground transition-colors duration-300"
                }
              `}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Marquee;
