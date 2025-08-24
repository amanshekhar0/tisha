import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Heart, Sparkles } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#E9D7FE]/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="relative inline-block">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-gray-800 mb-4">
                <span className="text-[#D4A574]">The Nail Affair</span>{" "}
                <span className="text-[#E8B4B8]">with Tisha</span>
              </h3>
              <motion.div
                className="absolute -top-2 -right-4"
                animate={{
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="w-3 h-3 text-[#E6B0AA]" />
              </motion.div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Luxury nail care and art services in the heart of India. We
              specialize in premium nail treatments, custom designs, and a
              relaxing salon experience.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                href="https://instagram.com/tisha_parlour_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <Instagram className="w-5 h-5 text-[#E6B0AA]" />
              </motion.a>
              <motion.a
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                href="https://www.facebook.com/share/1BSnU9GWzF/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <Facebook className="w-5 h-5 text-[#E6B0AA]" />
              </motion.a>
              
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
              Quick Links
              <motion.div
                className="absolute h-1 bg-[#FDE2E4]/70 bottom-0 left-0"
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 1,
                }}
              />
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.4,
                    }}
                  />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.6,
                    }}
                  />
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.8,
                    }}
                  />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
              Services
              <motion.div
                className="absolute h-1 bg-[#FDE2E4]/70 bottom-0 left-0"
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
              />
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  Gel Nails
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                  Acrylic Nails
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.4,
                    }}
                  />
                  Nail Extensions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.6,
                    }}
                  />
                  Bridal Packages
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-[#E6B0AA] transition-colors flex items-center"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#E6B0AA] mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.8,
                    }}
                  />
                  Nail Spa
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} The Nail Affair with Tisha. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 flex items-center justify-center">
            Made with <Heart className="w-3 h-3 text-[#E6B0AA] mx-1" /> in India
          </p>
        </div>
      </div>
      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 bg-[#FDE2E4]/10 rounded-full hidden md:block"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </footer>
  );
};
