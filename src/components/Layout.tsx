import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import MobileNav from './MobileNav';
import MobileBottomNav from './MobileBottomNav';
import AppointmentForm from './AppointmentForm';
import UrgentAppealPopup from './UrgentAppealPopup';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
  const [isUrgentAppealOpen, setIsUrgentAppealOpen] = useState(true); // State for popup visibility
  const location = useLocation();

  const handleBookAppointment = () => {
    setIsAppointmentFormOpen(true);
  };

  // Listen for the custom event from Home page
  useEffect(() => {
    const handleOpenAppointmentForm = () => {
      setIsAppointmentFormOpen(true);
    };

    window.addEventListener('openAppointmentForm', handleOpenAppointmentForm);

    return () => {
      window.removeEventListener('openAppointmentForm', handleOpenAppointmentForm);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onBookAppointment={handleBookAppointment} />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="pt-16 pb-20 md:pb-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Keep the mobile navigation exactly as it was */}
      {/* <MobileNav onBookAppointment={handleBookAppointment} /> */}

      {/* Appointment Form Modal */}
      <AppointmentForm
        isOpen={isAppointmentFormOpen}
        onClose={() => setIsAppointmentFormOpen(false)}
      />

      {/* Urgent Appeal Popup */}
      <UrgentAppealPopup
        isOpen={isUrgentAppealOpen}
        onClose={() => setIsUrgentAppealOpen(false)}
      />

      <MobileBottomNav onBookAppointment={handleBookAppointment} />

      {/* Only show Footer if not on home page */}
      <Footer />
    </div>
  );
};

export default Layout;
