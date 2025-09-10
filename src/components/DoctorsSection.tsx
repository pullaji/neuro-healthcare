import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Neurosurgeon & Spine Specialist",
    experience: "15+ Years",
    education: "MBBS, MS, MCh (Neurosurgery)",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    expertise: ["Brain Tumors", "Spine Surgery", "Minimally Invasive Surgery"],
    rating: 4.9,
    reviews: 156,
    bio: "Dr. Rajesh Kumar is a renowned neurosurgeon with over 15 years of experience in complex brain and spine surgeries. He specializes in minimally invasive techniques and has performed over 2000 successful surgeries."
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialization: "Neurologist & Epilepsy Specialist",
    experience: "12+ Years",
    education: "MBBS, MD (Neurology), DM (Epilepsy)",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    expertise: ["Epilepsy", "Stroke Care", "Movement Disorders"],
    rating: 4.8,
    reviews: 134,
    bio: "Dr. Priya Sharma is an expert neurologist specializing in epilepsy management and stroke care. She has pioneered several treatment protocols and is actively involved in neurological research."
  },
  {
    id: 3,
    name: "Dr. Sumanth chava",
    specialization: "Pediatric Neurologist",
    experience: "10+ Years",
    education: "MBBS, MD (Pediatrics), DM (Pediatric Neurology)",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    expertise: ["Pediatric Epilepsy", "Developmental Delays", "Genetic Disorders"],
    rating: 4.9,
    reviews: 98,
    bio: "Dr. Arun Patel specializes in pediatric neurology with extensive experience in treating children with neurological conditions. He is known for his compassionate approach to patient care."
  }
];

const DoctorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Expert Team
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Neurological Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified neurologists and neurosurgeons brings decades of combined experience
            in treating complex neurological conditions.
          </p>
        </motion.div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <DoctorCard doctor={doctor} onViewDetails={setSelectedDoctor} />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <DoctorCard doctor={doctors[currentIndex]} onViewDetails={setSelectedDoctor} />
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevDoctor}
                className="rounded-full p-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {doctors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextDoctor}
                className="rounded-full p-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Doctor Details Modal */}
        {selectedDoctor && (
          <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
        )}
      </div>
    </section>
  );
};

const DoctorCard = ({ doctor, onViewDetails }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border-0 shadow-md max-w-sm mx-auto">
      <CardHeader className="text-center pb-4">
        <div className="relative mb-4">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 bg-teal-600 text-white rounded-full p-2">
            <Award className="h-4 w-4" />
          </div>
        </div>

        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
          {doctor.name}
        </CardTitle>
        <CardDescription className="text-teal-600 font-medium">
          {doctor.specialization}
        </CardDescription>

        <div className="flex items-center justify-center space-x-4 mt-3">
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-gray-700 font-medium">{doctor.rating}</span>
          </div>
          <div className="text-gray-500 text-sm">
            ({doctor.reviews} reviews)
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{doctor.experience} Experience</span>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Specializes in:</p>
          <div className="flex flex-wrap gap-1">
            {doctor.expertise.slice(0, 2).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-teal-50 text-teal-700">
                {skill}
              </Badge>
            ))}
            {doctor.expertise.length > 2 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                +{doctor.expertise.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        <Button
          onClick={() => onViewDetails(doctor)}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

const DoctorModal = ({ doctor, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start space-x-6">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-teal-100"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
              <p className="text-teal-600 font-medium mb-2">{doctor.specialization}</p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-gray-700 font-medium">{doctor.rating}</span>
                </div>
                <div className="text-gray-500 text-sm">
                  ({doctor.reviews} reviews)
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-600">{doctor.education}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
              <p className="text-gray-600">{doctor.experience}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {doctor.expertise.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-teal-50 text-teal-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">About</h4>
              <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
              Book Appointment
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DoctorsSection;
