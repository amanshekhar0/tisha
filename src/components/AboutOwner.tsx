import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
export const AboutOwner = () => {
  return <section className="py-20 bg-[#FFF7F2]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 1.4
        }} className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#E9D7FE]/20 rounded-2xl transform rotate-3"></div>
            <img src="/f.jpg" alt="Tisha with her nail art certification" className="relative z-10 rounded-2xl shadow-lg" />
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md z-20">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#E6B0AA] text-[#E6B0AA]" />)}
              </div>
              <p className="text-sm font-medium text-gray-700">
                Certified Professional
              </p>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 1.4
        }}>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-800 mb-6">
              Meet Tisha
            </h2>
            <p className="text-gray-600 mb-6">
              With a passion for nail artistry and a certification in advanced
              nail techniques, Tisha brings creativity and precision to every
              service. Her journey began with a simple love for beautiful nails
              and has evolved into creating Patna's premier nail art
              destination.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-[#FDE2E4] p-2 rounded-full">
                  <Award className="w-5 h-5 text-[#E6B0AA]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Certified Professional
                  </h3>
                  <p className="text-gray-600">
                    Trained and certified in the latest nail art techniques and
                    trends
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-[#FDE2E4] p-2 rounded-full">
                  <Award className="w-5 h-5 text-[#E6B0AA]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    1+ Years Experience
                  </h3>
                  <p className="text-gray-600">
                    Dedicated to perfecting the craft of nail artistry
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-[#FDE2E4] p-2 rounded-full">
                  <Award className="w-5 h-5 text-[#E6B0AA]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Premium Products
                  </h3>
                  <p className="text-gray-600">
                    Using only the highest quality, safe materials for your
                    nails
                  </p>
                </div>
              </div>
            </div>
            <motion.a href="#services" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-block px-6 py-3 bg-[#E6B0AA] text-white rounded-full shadow-md hover:shadow-lg transition-all font-medium">
              Explore Our Services
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>;
};