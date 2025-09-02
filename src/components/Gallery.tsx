import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Move galleryItems outside component so it's stable
const galleryItems = [
  {
    id: 1,
    image: "/n1.jpg",
    title: "Elegant Gold Accents",
    price: "₹1,200",
    categories: ["minimal", "glitter"],
  },
  {
    id: 2,
    image: "/n2.jpg",
    title: "Pastel Pink & Gold",
    price: "₹1,400",
    categories: ["minimal", "glitter"],
  },
  {
    id: 3,
    image: "/n3.jpg",
    title: "Brown & Nude Elegance",
    price: "₹1,400",
    categories: ["minimal", "traditional"],
  },
  
  {
    id: 7,
    image: "/sa.jpg",
    title: "Festive Glitter",
    price: "₹1,500",
    categories: ["glitter", "traditional"],
  },
 
  {
    id: 9,
    image: "/w1.jpg",
    title: "Luxury Bridal Glamour",
    price: "₹1,100",
    categories: ["glitter", "traditional"],
  },
  {
    id: 10,
    image: "/w2.jpg",
    title: "Seasonal Spring Delight",
    price: "₹1,200",
    categories: ["minimal", "traditional"],
  },
  {
    id: 11,
    image: "/w3.jpg",
    title: "Modern Minimalist",
    price: "₹1,000",
    categories: ["minimal"],
  },
  {
    id: 12,
    image: "/l3.jpg",
    title: "Golden Glitter Delight",
    price: "₹900",
    categories: ["glitter", "minimal"],
  },
  {
    id: 13,
    image: "/l2.jpg",
    title: "Golden Glitter Delight",
    price: "₹1,500",
    categories: ["glitter", "minimal"],
  },
  {
    id: 14,
    image: "/leg.jpg",
    title: "Golden Glitter Delight",
    price: "₹1,200",
    categories: ["glitter", "minimal"],
  },
];

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  const filters = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "minimal",
      label: "Minimal",
    },
    {
      id: "glitter",
      label: "Glitter",
    }
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
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // ✅ Correct filtering logic - this is the fix
  useEffect(() => {
    let newFilteredItems = [];
    
    if (activeFilter === "all") {
      newFilteredItems = [...galleryItems]; // Show all items
    } else {
      newFilteredItems = galleryItems.filter(item => 
        item.categories && item.categories.includes(activeFilter)
      );
    }
    
    setFilteredItems(newFilteredItems);
  }, [activeFilter]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <section id="gallery" className="py-20 bg-[#FFF7F2]">
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
            duration: 1.4,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-800 mb-4">
            Our Stunning Nail Art Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of exquisite nail designs, from
            minimal elegance to traditional glamour
          </p>
        </motion.div>

        {/* Filter Buttons */}
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
            duration: 1.4,
            delay: 0.2,
          }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-[#E6B0AA] to-[#FDE2E4] text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-[#FDE2E4]/30 hover:shadow-md"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              custom={index}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              style={{
                aspectRatio: "1/1",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 z-10">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#FDE2E4] font-medium text-lg">
                    {item.price}
                  </p>
                </div>
              </div>

              {/* Image */}
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
              />

              {/* Price tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md"
              >
                <span className="text-sm font-bold text-[#E6B0AA]">
                  {item.price}
                </span>
              </motion.div>

              {/* Category badges */}
              <div className="absolute top-3 left-3 flex gap-1">
                {item.categories.map((category, catIndex) => (
                  <motion.span
                    key={catIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + catIndex * 0.1 }}
                    className="px-2 py-1 bg-[#E6B0AA]/80 text-white text-xs rounded-full backdrop-blur-sm"
                  >
                    {category}
                  </motion.span>
                ))}
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#E6B0AA]/20 to-[#FDE2E4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{
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

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">
              No images found for this category.
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};