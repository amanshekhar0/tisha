import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  Users,
  DollarSign,
  Phone,
  MessageSquare,
  Instagram,
} from "lucide-react";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    people: 1,
    budget: 1000,
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendWhatsApp = () => {
    setIsSubmitting(true);

    try {
      const ownerNumber = "917068531095"; // ✅ your WhatsApp number with country code (91)

      const formattedDate = new Date(formData.date).toLocaleDateString(
        "en-IN",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

      const message = `🎨 *New Nail Art Appointment Request*

📅 *Date:* ${formattedDate}
⏰ *Time:* ${formData.time}
👥 *Number of People:* ${formData.people}
💰 *Budget Range:* ₹${formData.budget}
📱 *Client Contact:* +91 ${formData.phone}

_I would like to book an appointment for nail art services. Please confirm availability and provide any additional details needed._

Thank you! ✨`;

      const encodedMsg = encodeURIComponent(message);

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodedMsg}`;

      window.open(whatsappUrl, "_blank");

      toast.success("WhatsApp opened! The message is ready to send.");
      onClose();
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
      toast.error("Failed to open WhatsApp. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInstagram = () => {
    setIsSubmitting(true);

    try {
      const username = "tisha_parlour_";
      
      // For mobile devices - try to open Instagram app directly
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = `instagram://user?username=${username}`;
        
        // Fallback to web version after a short delay if app doesn't open
        setTimeout(() => {
          window.open(`https://www.instagram.com/${username}/`, "_blank");
        }, 2000);
      } else {
        // For desktop - open web version directly
        window.open(`https://www.instagram.com/${username}/`, "_blank");
      }

      toast.success("Instagram profile opened! Send your appointment details via DM.");
      onClose();
    } catch (error) {
      console.error("Error opening Instagram:", error);
      toast.error("Failed to open Instagram. Please visit @tisha_parlour_ manually.");
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    if (formData.phone.length !== 10 || !/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }
    if (!formData.date) {
      toast.error("Please select a date");
      return false;
    }
    if (!formData.time) {
      toast.error("Please select a time");
      return false;
    }
    return true;
  };

  const today = new Date().toISOString().split("T")[0];

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-gray-800">
                Book Your Appointment
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="p-6 space-y-6">
              <div className="space-y-4">
                {/* Date */}
                <div>
                  <label className="flex items-center text-gray-700 mb-2">
                    <Calendar className="w-5 h-5 text-[#E6B0AA] mr-2" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B0AA]"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="flex items-center text-gray-700 mb-2">
                    <Clock className="w-5 h-5 text-[#E6B0AA] mr-2" />
                    Select Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B0AA]"
                  >
                    <option value="">Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                  </select>
                </div>

                {/* People */}
                <div>
                  <label className="flex items-center text-gray-700 mb-2">
                    <Users className="w-5 h-5 text-[#E6B0AA] mr-2" />
                    Number of People
                  </label>
                  <input
                    type="number"
                    name="people"
                    min="1"
                    max="10"
                    value={formData.people}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B0AA]"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="flex items-center text-gray-700 mb-2">
                    <DollarSign className="w-5 h-5 text-[#E6B0AA] mr-2" />
                    Budget (₹)
                  </label>
                  <input
                    type="number"
                    name="budget"
                    min="500"
                    step="100"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6B0AA]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center text-gray-700 mb-2">
                    <Phone className="w-5 h-5 text-[#E6B0AA] mr-2" />
                    Phone Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-gray-500 bg-gray-50 rounded-l-lg border border-r-0 border-gray-200">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      pattern="[0-9]{10}"
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#E6B0AA]"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Enter your 10-digit mobile number
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => {
                    if (validateForm()) {
                      sendWhatsApp();
                    }
                  }}
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-medium flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white`}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>
                    {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => {
                    if (validateForm()) {
                      handleInstagram();
                    }
                  }}
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-medium flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                  } text-white`}
                >
                  <Instagram className="w-5 h-5" />
                  <span>
                    {isSubmitting
                      ? "Opening Instagram..."
                      : "Send via Instagram"}
                  </span>
                </motion.button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                📱 Choose your preferred way to send the appointment request
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};