import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    id: 1,
    name: 'Sakshi',
    location: 'ballia',
    image: '/sakshi.jpg',
    text: "I absolutely loved my acrylic nails! Tisha is amazing – her creativity and attention to detail are unmatched"
  }, {
    id: 2,
    name: 'Siddhi',
    location: 'ballia',
    image: '/siddhi.png',
    text: "I've been a regular client for over a year now. The salon is always clean, the staff is friendly, and the nail designs are absolutely stunning. Worth every rupee!"
  }, {
    id: 3,
    name: 'Ramsha',
    location: 'ballia',
    image: '/ramsha.png',
    text: "Tisha created the most beautiful traditional mehndi-inspired nail art for my sister's wedding. Everyone was asking where I got them done!"
  }, {
    id: 4,
    name: 'Vanshika',
    location: 'ballia',
    image: '/vanshika.png',
    text: 'The gel nails I got lasted for weeks without chipping. The salon ambiance is so relaxing and the service is always professional. Highly recommend!'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };
  return <section id="testimonials" className="py-20 bg-[#D8F3DC]/20">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 1.2
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with Tisha
            Nail Art
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[300px] md:h-[250px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div key={currentIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{
              duration: 0.5,
              ease: 'easeInOut'
            }} className="absolute inset-0">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg h-full">
                  <Quote className="w-12 h-12 text-[#E6B0AA]/30 absolute top-6 left-6" />
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                      <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-gray-700 italic mb-4">
                        "{testimonials[currentIndex].text}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-[#E6B0AA]">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button onClick={prevTestimonial} className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all" aria-label="Previous testimonial">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }} className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#E6B0AA]' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
            </div>
            <button onClick={nextTestimonial} className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all" aria-label="Next testimonial">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};