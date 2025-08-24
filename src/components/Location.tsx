import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export const Location = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFF7F2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-800 mb-4">
            Visit Our Salon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find us in the heart of the city for your premium nail care
            experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#E6B0AA] mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    Tisha beauty parlour, Vijay cinema road, beside trends,
                    Ballia, Uttar Pradesh 277001, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#E6B0AA] mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                  <a
                    href="tel:+91 7068531095"
                    className="text-gray-600 hover:text-[#E6B0AA] transition-colors"
                  >
                    +91 7068531095
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#E6B0AA] mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <a
                    href="mailto:tishaparlour955@gmail.com"
                    className="text-gray-600 hover:text-[#E6B0AA] transition-colors"
                  >
                    tishaparlour955@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-[#E6B0AA] mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">WhatsApp</h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=917068531095&text=Hi! I'd like to know more about your nail art services. Can you please share your price list and available appointment slots?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#E6B0AA] transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#E6B0AA] mr-4 mt-1 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Instagram</h4>
                  <a
                    href="https://instagram.com/tisha_parlour_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#E6B0AA] transition-colors"
                  >
                    Follow us on Instagram
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#E6B0AA] mr-4 mt-1 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24H12.82v-9.294H9.692V11.07h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.505 0-1.796.715-1.796 1.764v2.31h3.587l-.467 3.636h-3.12V24h6.116C23.404 24 24 23.404 24 22.676V1.325C24 .596 23.404 0 22.675 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Facebook</h4>
                  <a
                    href="https://www.facebook.com/share/1BSnU9GWzF/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#E6B0AA] transition-colors"
                  >
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-800 mb-3">Opening Hours</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-600">Monday - Friday</div>
                <div className="text-gray-800">10:00 AM - 7:00 PM</div>
                <div className="text-gray-600">Saturday</div>
                <div className="text-gray-800">9:00 AM - 8:00 PM</div>
                <div className="text-gray-600">Sunday</div>
                <div className="text-gray-800">11:00 AM - 6:00 PM</div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1235900262544!2d84.14940761501624!3d25.756355983636705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzIyLjkiTiA4NMKwMDknMDcuMiJF!5e0!3m2!1sen!2sin!4v1625661234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="The Nail Affair with Tisha Location"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://api.whatsapp.com/send?phone=917068531095&text=Hi! I'm interested in booking a nail art appointment. Can you please help me?"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-40 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </motion.a>
    </section>
  );
};
