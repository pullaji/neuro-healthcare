import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

interface FloatingCTAProps {
  onBookAppointment: () => void;
}

const FloatingCTA = ({ onBookAppointment }: FloatingCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-6 z-40 hidden md:flex space-x-3"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={onBookAppointment}
          className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg rounded-full px-6 py-3"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book Appointment
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCTA;
