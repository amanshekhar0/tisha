import React, { Children } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Gem,
  Scissors,
  Heart,
  Palette,
  Star,
  Crown,
  Zap,
} from "lucide-react";

export const Services = () => {
  const services = [
    // Extensions
    {
      id: 1,
      title: "Gel Extensions",
      description: "Long-lasting gel extensions with or without color options.",
      price: "₹800 - ₹1,200",
      duration: "60-90 mins",
      icon: <Sparkles className="w-10 h-10 text-[#E6B0AA]" />,
      details: ["Without Colour - ₹800", "With Colour - ₹999/1200"],
    },
    {
      id: 2,
      title: "Acrylic Extensions",
      description: "Durable acrylic extensions for added length and strength.",
      price: "₹800",
      duration: "75 mins",
      icon: <Gem className="w-10 h-10 text-[#E9D7FE]" />,
      details: [],
    },
    // Overlays
    {
      id: 3,
      title: "Gel Overlays",
      description: "Strengthening gel overlays for natural nails.",
      price: "₹700",
      duration: "45 mins",
      icon: <Palette className="w-10 h-10 text-[#D8F3DC]" />,
      details: [],
    },
    {
      id: 4,
      title: "Acrylic Overlays",
      description: "Durable acrylic overlays for nail protection.",
      price: "₹600",
      duration: "45 mins",
      icon: <Star className="w-10 h-10 text-[#FDE2E4]" />,
      details: [],
    },
    // Refiling
    {
      id: 5,
      title: "Gel Refiling",
      description: "Professional gel nail refiling service.",
      price: "₹700",
      duration: "45 mins",
      icon: <Scissors className="w-10 h-10 text-[#E6B0AA]" />,
      details: [],
    },
    {
      id: 6,
      title: "Acrylic Refiling",
      description: "Professional acrylic nail refiling service.",
      price: "₹600",
      duration: "45 mins",
      icon: <Zap className="w-10 h-10 text-[#E9D7FE]" />,
      details: [],
    },
    // Feet Services
    {
      id: 7,
      title: "Feet Services",
      description: "Complete foot nail care and extensions.",
      price: "₹400 - ₹1,300",
      duration: "60-90 mins",
      icon: <Heart className="w-10 h-10 text-[#FDE2E4]" />,
      details: ["Toe Extensions - ₹1,300", "Permanent Colour - ₹400/500"],
    },
    // Nail Art
    {
      id: 8,
      title: "Nail Art & Design",
      description: "Creative nail art and decorative elements.",
      price: "₹50 - ₹500",
      duration: "30-60 mins",
      icon: <Crown className="w-10 h-10 text-[#D8F3DC]" />,
      details: [
        "Glitter & Mylars - ₹50 per finger",
        "Stone Work - ₹70-80 per finger",
        "Studs - ₹100 per finger",
        "Nail Jewellery - ₹150-₹200",
      ],
    },
    // French & Special Effects
    {
      id: 9,
      title: "French & Special Effects",
      description: "Classic French and advanced nail effects.",
      price: "₹40 - ₹100",
      duration: "30-45 mins",
      icon: <Sparkles className="w-10 h-10 text-[#E6B0AA]" />,
      details: [
        "Classic French - ₹40 per finger",
        "Additional French - ₹30 per finger",
        "French Fusion - ₹60 (with stones)",
        "Cat Eye - ₹70 per finger",
        "Marble - ₹70 per finger",
      ],
    },
    // Advanced Art
    {
      id: 10,
      title: "Advanced Nail Art",
      description: "Complex designs and 3D nail art creations.",
      price: "₹100 - ₹500",
      duration: "45-90 mins",
      icon: <Gem className="w-10 h-10 text-[#E9D7FE]" />,
      details: [
        "3D Nail Art - ₹100-500",
        "Advanced Art - ₹300-400 per cartoon",
        "Bride & Groom Art - ₹200 per finger",
        "Sweater/Emboss Art - ₹100 per finger",
      ],
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-[#E9D7FE]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-800 mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional nail care services
            with transparent pricing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md transition-all relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#FDE2E4]/10 rounded-full"></div>

              <div className="mb-4">
                <motion.div
                  animate={{
                    rotate: service.id % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: service.id * 0.2,
                  }}
                >
                  {service.icon}
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Service details */}
              {service.details.length > 0 && (
                <div className="mb-4">
                  {service.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-xs text-gray-500 mb-1 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-[#E6B0AA] rounded-full mr-2"></span>
                      {detail}
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="font-bold text-[#E6B0AA] text-lg">
                  {service.price}
                </span>
                <span className="text-gray-500 text-sm">
                  {service.duration}
                </span>
              </div>

              {/* Subtle pulsing effect on hover */}
              <motion.div
                className="absolute inset-0 bg-[#FDE2E4]/5 pointer-events-none opacity-0"
                whileHover={{
                  opacity: 1,
                }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional pricing info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-['Playfair_Display'] font-bold text-gray-800 mb-6 text-center">
            Additional Services & Pricing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-[#E6B0AA] text-lg">
                Removal Services
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Extensions Removal - ₹300 to ₹400</div>
                <div>Overlays Removal - ₹300</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-[#E6B0AA] text-lg">
                Permanent Colour
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Permanent Nail Colour - ₹300</div>
                <div>Additional art will be charged</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-[#E6B0AA] text-lg">
                Special Effects
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Foil - ₹50 per finger</div>
                <div>Spider Gel - ₹50 per finger</div>
                <div>Ombré - ₹60 per finger</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
