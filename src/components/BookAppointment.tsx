import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, DollarSign } from "lucide-react";
interface BookAppointmentProps {
  openBookingModal: () => void;
}
export const BookAppointment: React.FC<BookAppointmentProps> = ({
  openBookingModal,
}) => {
  return (
    <section className="py-20 bg-[#FDE2E4]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 1.4,
              }}
              className="p-8 md:p-12 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-['Playfair_Display'] font-bold text-gray-800 mb-4">
                Book Your Appointment
              </h2>
              <p className="text-gray-600 mb-6">
                Treat yourself to a luxurious nail care experience. Our skilled
                artists are ready to transform your nails into works of art.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-[#E6B0AA] mr-3" />
                  <span className="text-gray-700">
                    Choose your preferred date
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#E6B0AA] mr-3" />
                  <span className="text-gray-700">
                    Select a convenient time
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-[#E6B0AA] mr-3" />
                  <span className="text-gray-700">
                    Specify number of people
                  </span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-[#E6B0AA] mr-3" />
                  <span className="text-gray-700">Set your budget</span>
                </div>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={openBookingModal}
                className="px-8 py-3 bg-[#E6B0AA] text-white rounded-full shadow-md hover:shadow-lg transition-all font-medium text-lg"
              >
                Book Now
              </motion.button>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 1.4,
              }}
              className="relative h-64 md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Nail art services"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E6B0AA]/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
