import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Navigation } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-gradient-to-r from-teal-50 to-blue-50 p-10 rounded-xl shadow-md"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Gachibowli, Hyderabad. Easy access with ample parking
            and modern facilities for your comfort.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >

            <Card className="border-0 shadow-lg sm:mr-4">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-teal-600">
                  <Mail className="h-6 w-6" />
                  <span>Email & Online</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">General Enquiries</p>
                  <a href="mailto:sumanth.chava@neurohealthcare.in" className="text-teal-600 hover:underline">
                    sumanth.chava@neurohealthcare.in
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Appointments</p>
                  <a href="mailto:appointments@neurohealthcare.com" className="text-teal-600 hover:underline">
                    appointments@neurohealthcare.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">WhatsApp</p>
                  <a
                    href="https://wa.me/+919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-teal-600">
                  <Clock className="h-6 w-6" />
                  <span>Working Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium">10:00 AM - 3:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    🚨 Emergency services available 24/7
                  </p>
                </div>
              </CardContent>
            </Card>


            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-teal-600">
                  <MapPin className="h-6 w-6" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Neuro Healthcare<br />
                  Plot No. 123, Cyber Towers Road<br />
                  Gachibowli, Hyderabad - 500032<br />
                  Telangana, India
                </p>
                <Button
                  variant="outline"
                  className="mt-4 text-teal-600 border-teal-600 hover:bg-teal-50"
                  onClick={() => window.open('https://maps.google.com/?q=Gachibowli,Hyderabad', '_blank')}
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Google Map and Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[260px] p-2 sm:pl-0 sm:pr-2 sm:w-11/12 sm:ml-0 lg:p-0 lg:w-full lg:ml-0"
          >
            {/* Map Card */}
            <Card className="border-0 shadow-lg h-full mr-8">
              <CardContent className="p-1 h-full">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6907131915!2d78.34869931490282!3d17.44008948800588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1635747445654!5m2!1sen!2sin"
                    width="100%"
                    height="350px"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Neuro Healthcare Clinic Location - Gachibowli, Hyderabad"
                  />
                  <img
                    src="/src/assets/images/male-doctor-old-man-wheelchair-isolated-white-background_1157-51763.jpg"
                    alt="Doctor"
                    className="w-40 h-40 object-cover rounded-full mx-auto mt-4 shadow-lg border-4 border-white"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2 mt-16 grid md:grid-cols-3 gap-8"
          >
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group p-6">
              <CardHeader>
                <Calendar className="h-12 w-12 text-teal-600 mx-auto group-hover:scale-110 transition-transform" />
                <CardTitle className="text-teal-600 mt-4">Book Online</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Schedule your appointment online 24/7</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group p-6">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-600 mx-auto group-hover:scale-110 transition-transform" />
                <CardTitle className="text-green-600 mt-4">Call Now</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Speak directly with our appointment desk</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group p-6">
              <CardHeader>
                <Mail className="h-12 w-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform" />
                <CardTitle className="text-blue-600 mt-4">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quick consultation and appointment booking</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
