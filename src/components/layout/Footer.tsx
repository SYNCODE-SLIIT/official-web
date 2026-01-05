import { Link } from "react-router-dom";
import { Github, ArrowUpRight } from "lucide-react";
import logo from "@/assets/syncode-logo.png";

const footerLinks = {
  services: [
    { name: "Custom Software", path: "/services/custom-software" },
    { name: "Web & Mobile", path: "/services/web-mobile" },
    { name: "E-Commerce", path: "/services/ecommerce" },
    { name: "AI Systems", path: "/services/ai-systems" },
    { name: "UI/UX Design", path: "/services/design" },
    { name: "Hosting & Support", path: "/services/hosting" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center bg-foreground/10">
                <img src={logo} alt="SYNCODE" className="h-full w-full object-cover" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Engineering software that scales. We build digital products with precision, 
              performance, and purpose.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground 
                         transition-colors duration-300 group"
            >
              <Github size={20} />
              <span className="text-sm font-medium">GitHub</span>
              <ArrowUpRight 
                size={14} 
                className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 
                           group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
              />
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground 
                               transition-colors duration-300 link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground 
                               transition-colors duration-300 link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wide uppercase">
              Get in Touch
            </h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Ready to start your next project? Let's build something remarkable together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background 
                         text-sm font-semibold rounded-full transition-all duration-300
                         hover:scale-105 hover:shadow-glow group"
            >
              Start a Conversation
              <ArrowUpRight 
                size={16} 
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row 
                        items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SYNCODE. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with precision in modern technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
