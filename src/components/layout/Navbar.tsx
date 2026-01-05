import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/syncode-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto"
      >
        <nav
          className={`
            flex items-center gap-3 px-4 py-3 rounded-full
            transition-all duration-500 ease-smooth
            backdrop-blur-xl 
            bg-gradient-to-r from-black/20 via-black/15 to-black/20
            dark:from-white/15 dark:via-white/10 dark:to-white/15
            border border-white/30 dark:border-white/20
            shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]
            dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.08)]
            ${isScrolled 
              ? "bg-gradient-to-r from-black/30 via-black/25 to-black/30 dark:from-white/20 dark:via-white/15 dark:to-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]" 
              : ""
            }
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center pl-2">
            <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center bg-foreground/10">
              <img src={logo} alt="SYNCODE" className="h-full w-full object-cover" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 ml-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`
                    relative px-5 py-2.5 text-sm font-medium rounded-full
                    transition-all duration-300 ease-smooth
                    ${location.pathname === item.path 
                      ? "text-foreground" 
                      : "text-foreground/60 hover:text-foreground"
                    }
                  `}
                >
                  {location.pathname === item.path && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-foreground/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:flex ml-3 px-6 py-2.5 bg-foreground text-background 
                       text-sm font-semibold rounded-full transition-all duration-300
                       hover:scale-105 hover:shadow-glow"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 ml-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full gap-6"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`
                      text-3xl font-semibold transition-colors duration-300
                      ${location.pathname === item.path 
                        ? "text-foreground" 
                        : "text-foreground/50 hover:text-foreground"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="btn-primary text-lg"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
