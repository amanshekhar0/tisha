import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutOwner } from './components/AboutOwner';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { BookAppointment } from './components/BookAppointment';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Toaster } from 'sonner';
import { AnimatePresence } from 'framer-motion';
export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);
  return <div className="flex flex-col min-h-screen w-full bg-[#FFF7F2] font-['Poppins']">
      <Toaster position="top-center" />
      <Header openBookingModal={openBookingModal} />
      <main className="flex-grow">
        <Hero openBookingModal={openBookingModal} />
        <AboutOwner />
        <Gallery />
        <Services />
        <BookAppointment openBookingModal={openBookingModal} />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <AnimatePresence>
        {isBookingModalOpen && <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />}
      </AnimatePresence>
    </div>;
}