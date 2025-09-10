import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import DoctorsSection from '../components/DoctorsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  const handleBookAppointment = () => {
    // This will be handled by the Layout component
    window.dispatchEvent(new CustomEvent('openAppointmentForm'));
  };

  return (
    <div className="min-h-screen">
      <HeroSection onBookAppointment={handleBookAppointment} />
      <ServicesSection />
      <DoctorsSection />
    </div>
  );
};

export default Home;
