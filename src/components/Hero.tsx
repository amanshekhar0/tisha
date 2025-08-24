import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  openBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ openBookingModal }) => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF7F2 0%, #FDE2E4 30%, #E9D7FE 60%, #F8BBD9 100%)",
      }}
    >
      {/* Enhanced animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 120 + 60,
              height: Math.random() * 120 + 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 20, Math.random() * -20],
              x: [Math.random() * 15, Math.random() * -15],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#FDE2E4]/40 to-[#E9D7FE]/40 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[#E9D7FE]/40 to-[#FDE2E4]/40 rounded-full blur-xl"
        animate={{
          y: [0, 15, 0],
          scale: [1, 0.8, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Enhanced Title with gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-[#D4A574] via-[#E6C17A] to-[#F4E4BC] bg-clip-text text-transparent drop-shadow-lg">
                Nails That Tell
              </span>
              <br />
              <span className="text-[#E8B4B8] drop-shadow-lg">
                Your Story ✨
              </span>
            </motion.h1>

            {/* Enhanced subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Luxury Nail Art & Care in the heart of Ballia
              <br />
              <span className="text-[#E6B0AA] font-medium">
                Where every nail tells a story of elegance
              </span>
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(230, 176, 170, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openBookingModal}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#E6B0AA] to-[#FDE2E4] text-white rounded-full shadow-lg hover:shadow-xl transition-all font-medium text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  💅 Book Appointment
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#FDE2E4] to-[#E6B0AA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToGallery}
                className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all font-medium text-lg border border-[#FDE2E4] hover:border-[#E6B0AA] group"
              >
                <span className="flex items-center gap-2">
                  View Gallery
                  <motion.span
                    className="text-[#E6B0AA]"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-[#E6B0AA] rounded-full"
                />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-2 h-2 bg-[#FDE2E4] rounded-full"
                />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  className="w-2 h-2 bg-[#E9D7FE] rounded-full"
                />
                <span>5-Star Service</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 md:mt-0"
          >
            {/* Mobile-optimized collage */}
            <div className="md:hidden">
              <div className="relative mx-auto max-w-sm">
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-[#E9D7FE]/40 to-[#FDE2E4]/40 rounded-full blur-sm"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#FDE2E4]/40 to-[#E9D7FE]/40 rounded-full blur-sm"
                  animate={{
                    y: [0, 8, 0],
                    rotate: [360, 180, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                />

                {/* Main image with enhanced effects */}
                <motion.div
                  className="relative z-10 bg-white p-1.5 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-xs mx-auto"
                  whileHover={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/n3.jpg"
                    alt="Elegant nail art design"
                    className="w-full h-auto rounded-xl"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E6B0AA]/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Grid of smaller images */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <motion.div
                    className="bg-white p-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    whileHover={{ rotate: [0, -3, 3, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src="/n1.jpg"
                      alt="Stylish nail design"
                      className="w-full h-auto rounded-xl"
                    />
                  </motion.div>
                  <motion.div
                    className="bg-white p-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    whileHover={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src="/n2.jpg"
                      alt="Premium bridal nail art"
                      className="w-full h-auto rounded-xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Desktop collage - enhanced with same images */}
            <div className="hidden md:block relative">
              <motion.div
                className="absolute -top-12 -left-12 w-72 h-72 bg-gradient-to-br from-[#E9D7FE]/30 to-[#FDE2E4]/30 rounded-full blur-lg"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-12 -right-12 w-56 h-56 bg-gradient-to-br from-[#FDE2E4]/30 to-[#E9D7FE]/30 rounded-full blur-lg"
                animate={{
                  y: [0, 15, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 3 }}
              />

              <motion.div
                className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500 max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/sa.jpg"
                  alt="Elegant nail art design"
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-16 -left-10 z-20 bg-white p-2 rounded-2xl shadow-xl -rotate-6 transform hover:rotate-0 transition-transform duration-500 w-36"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/n1.jpg"
                  alt="Stylish nail design"
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>

              <motion.div
                className="absolute top-20 -right-8 z-20 bg-white p-2 rounded-2xl shadow-xl rotate-6 transform hover:rotate-0 transition-transform duration-500 w-32"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/n2.jpg"
                  alt="Premium bridal nail art"
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced floating sparkle effects */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background:
              i % 4 === 0
                ? "#FDE2E4"
                : i % 4 === 1
                  ? "#E9D7FE"
                  : i % 4 === 2
                    ? "#E6B0AA"
                    : "#ffffff",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, Math.random() * -40],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 6,
          }}
        />
      ))}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#E6B0AA] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#E6B0AA] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
