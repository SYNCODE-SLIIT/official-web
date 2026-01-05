import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, MapPin, Mail, ArrowUpRight } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                Get in Touch
              </span>
              <h1 className="text-display-xl mb-6">
                Let's Build Something
                <br />
                <span className="gradient-text">Remarkable</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Have a project in mind? We'd love to hear about it. Share your vision 
                and let's explore how we can bring it to life together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="pb-32">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-card border border-border/50 
                                 text-foreground placeholder:text-muted-foreground
                                 focus:outline-none focus:border-foreground/30 
                                 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-card border border-border/50 
                                 text-foreground placeholder:text-muted-foreground
                                 focus:outline-none focus:border-foreground/30 
                                 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 rounded-2xl bg-card border border-border/50 
                                 text-foreground placeholder:text-muted-foreground
                                 focus:outline-none focus:border-foreground/30 
                                 transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send size={18} />
                      </span>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-display-sm mb-6">Other Ways to Connect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Prefer to reach out directly? Here are some other ways to get in touch 
                    with our team.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <a
                    href="mailto:hello@syncode.dev"
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-card 
                               border border-border/50 hover:border-foreground/30 
                               transition-all duration-300 card-float"
                  >
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center
                                    group-hover:bg-foreground/10 transition-colors duration-300">
                      <Mail size={22} className="text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground">hello@syncode.dev</p>
                    </div>
                    <ArrowUpRight 
                      size={20} 
                      className="text-foreground/40 group-hover:text-foreground 
                                 transition-colors duration-300" 
                    />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-card 
                               border border-border/50 hover:border-foreground/30 
                               transition-all duration-300 card-float"
                  >
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center
                                    group-hover:bg-foreground/10 transition-colors duration-300">
                      <Github size={22} className="text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">GitHub</h3>
                      <p className="text-sm text-muted-foreground">Follow our open source work</p>
                    </div>
                    <ArrowUpRight 
                      size={20} 
                      className="text-foreground/40 group-hover:text-foreground 
                                 transition-colors duration-300" 
                    />
                  </a>

                  <div className="flex items-center gap-4 p-6 rounded-2xl bg-card 
                                  border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center">
                      <MapPin size={22} className="text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Remote-first, serving clients globally
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-card border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635180000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SYNCODE Location"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
