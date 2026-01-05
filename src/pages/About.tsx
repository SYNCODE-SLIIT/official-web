import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Code2, Users, Lightbulb, Award, X } from "lucide-react";
import Footer from "@/components/layout/Footer";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "8", label: "Team Members" },
  { value: "6+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    description: "We build software that works—cleanly architected, thoroughly tested, and built to last.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work alongside your team, sharing knowledge and building together for lasting success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We embrace modern technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description: "Every line of code, every design decision—quality is non-negotiable in everything we do.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "15+ years in software engineering. Previously led engineering teams at Fortune 500 companies. Passionate about building products that make a difference.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO",
    bio: "Full-stack architect with expertise in cloud infrastructure and distributed systems. Open source contributor and conference speaker.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    bio: "Specializes in React ecosystems and performance optimization. Built applications serving millions of users worldwide.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Emily Wong",
    role: "Design Director",
    bio: "Award-winning designer with a focus on user experience and brand identity. Previously at leading design agencies.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "David Park",
    role: "AI Engineer",
    bio: "Machine learning specialist focusing on practical AI applications for business automation and intelligent systems.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Lisa Thompson",
    role: "Project Manager",
    bio: "Ensures every project runs smoothly from kickoff to launch. Expert in agile methodologies and client communication.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Ryan Foster",
    role: "Backend Developer",
    bio: "Database architect and API specialist. Builds robust, scalable backend systems that power modern applications.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Maya Rodriguez",
    role: "Mobile Developer",
    bio: "Cross-platform mobile expert with published apps reaching millions of downloads. React Native and Flutter specialist.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
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
                About Us
              </span>
              <h1 className="text-display-xl mb-6">
                We're Engineers Who
                <br />
                <span className="gradient-text">Love Building</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                SYNCODE is a software engineering studio founded on the belief that great 
                technology should be accessible to every business. We combine technical 
                mastery with genuine partnership to deliver products that matter.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-24 md:pb-32">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-3xl bg-card border border-border/50"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-display-md mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    SYNCODE began with a simple observation: too many businesses struggle with 
                    technology that doesn't work for them. Whether it's outdated systems, 
                    misaligned solutions, or unreliable partners—the result is wasted time 
                    and missed opportunities.
                  </p>
                  <p>
                    We founded SYNCODE to change that. Our team brings together decades of 
                    combined experience from leading technology companies, startups, and 
                    agencies. But more importantly, we bring a shared commitment to doing 
                    things right.
                  </p>
                  <p>
                    Every project we take on is treated like our own. We invest the time to 
                    understand your business, challenge assumptions, and build solutions that 
                    genuinely solve problems. That's the SYNCODE difference.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="p-6 rounded-2xl bg-background border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-4">
                      <value.icon size={20} className="text-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm">{value.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                The Team
              </span>
              <h2 className="text-display-lg">
                Meet the People
                <br />
                <span className="gradient-text">Behind SYNCODE</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.button
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedMember(member)}
                  className="group text-left"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 
                                 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300
                                    flex items-center justify-center">
                      <span className="text-sm font-medium text-foreground">View Profile</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-foreground/80 
                                 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md p-8 rounded-3xl bg-card border border-border 
                           shadow-soft z-10"
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-2 text-muted-foreground 
                             hover:text-foreground transition-colors duration-300"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{selectedMember.name}</h3>
                    <p className="text-muted-foreground">{selectedMember.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedMember.bio}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              <h2 className="text-display-md mb-6">Want to Work With Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented individuals and exciting projects. 
                Let's start a conversation.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in Touch
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

export default About;
