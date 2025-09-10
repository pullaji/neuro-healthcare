import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

const Appointments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState("");

  const appointmentTypes = [
    {
      title: "General Consultation",
      duration: "30 minutes",
      description: "Initial consultation for neurological symptoms and concerns",
      price: "₹1,500"
    },
    {
      title: "Follow-up Visit",
      duration: "20 minutes",
      description: "Follow-up appointment for ongoing treatment monitoring",
      price: "₹1,000"
    },
    {
      title: "Emergency Consultation",
      duration: "45 minutes",
      description: "Urgent neurological consultation for acute symptoms",
      price: "₹3,000"
    }
  ];

  const clinicInfo = {
    name: "Neuro Healthcare Clinic",
    address: "Neuro Healthcare Clinic, 3rd Floor, Cyber Towers, Gachibowli, Hyderabad - 500032",
    phone: "+91 91234 56789",
    emergency: "+91 98765 43211",
    whatsapp: "+91 98765 43210",
    email: "appointments@neurohealthcare.com",
    timings: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Emergency Only"
    }
  };

  const handleAppointmentBooked = (details: any) => {
    console.log('Appointment booked with details:', details);
    const message = `
      Dear ${details.name},

      Thank you for booking your appointment with Neuro Healthcare Clinic.
      Your appointment for ${details.service} with Dr. ${details.doctor} is scheduled for ${details.date} at ${details.time}.
      A confirmation has been sent to your email at ${details.email}.
      We look forward to seeing you at our Gachibowli clinic.

      - The Neuro Healthcare Team
    `;
    setBookingConfirmation(message);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const subject = "New Appointment Request";
  const body = `
    Hello,
    
    I would like to book an appointment at Neuro Healthcare Clinic.
    
    Preferred Date: [Please enter your preferred date]
    Preferred Time: [Please enter your preferred time]
    Reason for visit: [Please briefly describe the reason for your visit]
    
    Thank you,
    [Your Name]
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
              Book Your Appointment
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Schedule Your Visit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Book an appointment with our expert neurologists. We offer flexible scheduling
              and multiple consultation options to meet your needs.
            </p>
            <Button
              onClick={() => setIsAppointmentFormOpen(true)}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Appointment Types */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Consultation Types
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Appointment Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer different types of consultations to meet your specific healthcare needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {appointmentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {type.title}
                    </CardTitle>
                    <CardDescription className="text-teal-600 font-medium">
                      {type.duration} • {type.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <Button
                      onClick={() => setIsAppointmentFormOpen(true)}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      Book This Appointment
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Clinic Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
                Clinic Information
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Gachibowli Clinic
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">{clinicInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact Numbers</h3>
                    <p className="text-gray-600">General: {clinicInfo.phone}</p>
                    <p className="text-red-600 font-medium">Emergency: {clinicInfo.emergency}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-600">Monday - Friday: {clinicInfo.timings.weekdays}</p>
                    <p className="text-gray-600">Saturday: {clinicInfo.timings.saturday}</p>
                    <p className="text-gray-600">Sunday: {clinicInfo.timings.sunday}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp Booking</h3>
                    <p className="text-gray-600 mb-2">Quick appointment booking via WhatsApp</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <a
                        href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^\d]/g, '')}?text=Hi, I would like to book an appointment at Neuro Healthcare Clinic.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">Find us at Cyber Towers, Gachibowli</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    <a
                      href="https://maps.google.com/?q=Cyber+Towers+Gachibowli+Hyderabad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Schedule?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait for neurological symptoms to worsen. Book your appointment today
              and take the first step towards better brain health.
            </p>
            <Button
              onClick={() => setIsAppointmentFormOpen(true)}
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Modal */}
      <AppointmentForm
        isOpen={isAppointmentFormOpen}
        onClose={() => setIsAppointmentFormOpen(false)}
      />

      {/* Booking Confirmation */}
      {bookingConfirmation && (
        <Card>
          <CardHeader>
            <CardTitle>Appointment Confirmation</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap text-sm">{bookingConfirmation}</pre>
            <Button onClick={() => setBookingConfirmation("")} className="mt-4">
              Book Another Appointment
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Appointments;
