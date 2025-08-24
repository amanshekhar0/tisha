import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Phone } from "lucide-react";

interface HeaderProps {
  openBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ openBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    console.log(`Attempting to scroll to section: ${id}`);

    // Close mobile menu first
    setIsMobileMenuOpen(false);

    // Add a small delay to ensure the DOM is ready
    setTimeout(() => {
      const element = document.getElementById(id);
      console.log(`Found element:`, element);

      if (element) {
        // Scroll to the element with offset for fixed header
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.offsetTop - headerHeight;
        console.log(`Scrolling to position: ${elementPosition}`);

        // Try smooth scrolling first
        try {
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        } catch (error) {
          console.log(`Smooth scrolling failed, using fallback`);
          // Fallback for browsers that don't support smooth scrolling
          window.scrollTo(0, elementPosition);
        }
      } else {
        console.warn(
          `Section with id "${id}" not found. Available sections:`,
          Array.from(document.querySelectorAll("section[id]")).map((s) => s.id)
        );

        // Fallback: try to find the section by scrolling to approximate position
        const sections = document.querySelectorAll("section");
        let targetSection = null;

        for (const section of sections) {
          if (section.textContent?.toLowerCase().includes(id.toLowerCase())) {
            targetSection = section;
            break;
          }
        }

        if (targetSection) {
          console.log(`Found fallback section:`, targetSection);
          const headerHeight = 80;
          const elementPosition = targetSection.offsetTop - headerHeight;
          window.scrollTo(0, elementPosition);
        }
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-[#FDE2E4]/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="relative group">
            <motion.h1
              className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-gradient-to-r from-[#D4A574] via-[#E6C17A] to-[#F4E4BC] bg-clip-text text-transparent">
                The Nail Affair
              </span>
              <span className="text-[#E8B4B8]">&nbsp;with Tisha</span>
            </motion.h1>

            {/* Enhanced sparkle animation */}
            <motion.div
              className="absolute -top-2 -right-4"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1.1, 1],
                opacity: [1, 0.8, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Sparkles className="w-5 h-5 text-[#E6B0AA] drop-shadow-sm" />
            </motion.div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E6B0AA]/20 to-[#FDE2E4]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Enhanced Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {[
            { id: "home", label: "Home" },
            { id: "gallery", label: "Gallery" },
            { id: "services", label: "Services" },
            { id: "testimonials", label: "Testimonials" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-gray-700 hover:text-[#E6B0AA] transition-colors duration-300 font-medium group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6B0AA] to-[#FDE2E4] transition-all duration-300 group-hover:w-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </motion.button>
          ))}

          {/* Enhanced Book Appointment Button */}
          <motion.button
            onClick={openBookingModal}
            className="relative px-6 py-3 bg-gradient-to-r from-[#E6B0AA] to-[#FDE2E4] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium group overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(230, 176, 170, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Book Now
            </span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#FDE2E4] to-[#E6B0AA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.nav>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative p-3 focus:outline-none bg-white/20 backdrop-blur-sm rounded-full border border-[#FDE2E4]/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-[#E6B0AA]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-[#E6B0AA]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#FDE2E4]/20 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid gap-2">
                {[
                  { id: "home", label: "Home", icon: "🏠" },
                  { id: "gallery", label: "Gallery", icon: "🖼️" },
                  { id: "services", label: "Services", icon: "💅" },
                  { id: "testimonials", label: "Testimonials", icon: "⭐" },
                  { id: "contact", label: "Contact", icon: "📞" },
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-[#E6B0AA] transition-all duration-300 rounded-xl hover:bg-[#FDE2E4]/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.button>
                ))}

                {/* Mobile Book Appointment Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4"
                >
                  <motion.button
                    onClick={() => {
                      openBookingModal();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#E6B0AA] to-[#FDE2E4] text-white rounded-xl shadow-lg font-medium text-lg flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    Book Appointment
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
