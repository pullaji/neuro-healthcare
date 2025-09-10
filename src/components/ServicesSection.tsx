import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Brain, Heart, Activity, Zap, Baby, Stethoscope, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Brain,
    title: "Stroke Recovery",
    description: "Comprehensive rehabilitation programs for stroke patients with advanced physiotherapy and neuroplasticity techniques.",
    badge: "Emergency Care",
    color: "from-red-500 to-pink-500",
    path: "/services/stroke-recovery"
  },
  {
    icon: Zap,
    title: "Epilepsy Care",
    description: "Specialized treatment for seizure disorders using latest EEG monitoring and anti-epileptic drug management.",
    badge: "Specialized Care",
    color: "from-purple-500 to-indigo-500",
    path: "/services/epilepsy-care"
  },
  {
    icon: Activity,
    title: "Parkinson's Management",
    description: "Comprehensive movement disorder treatment including DBS therapy and medication optimization.",
    badge: "Advanced Treatment",
    color: "from-blue-500 to-cyan-500",
    path: "/services/parkinsons-management"
  },
  {
    icon: Stethoscope,
    title: "Neurodiagnostics",
    description: "State-of-the-art diagnostic services including MRI, CT, EEG, and neuropsychological assessments.",
    badge: "Diagnostics",
    color: "from-green-500 to-teal-500",
    path: "/services/neurodiagnostics"
  },
  {
    icon: Baby,
    title: "Pediatric Neurology",
    description: "Specialized care for children with neurological conditions, developmental delays, and genetic disorders.",
    badge: "Child Care",
    color: "from-yellow-500 to-orange-500",
    path: "/services/pediatric-neurology"
  },
  {
    icon: Heart,
    title: "Neurocritical Care",
    description: "24/7 intensive care for patients with severe neurological conditions and post-surgical monitoring.",
    badge: "ICU Care",
    color: "from-pink-500 to-rose-500",
    path: "/services/neurocritical-care"
  }
];

const healthConditions = [
  {
    icon: Brain,
    title: "Cervical spondylosis",
    description: "Cervical spondylosis, also known as cervical disc disease, is a degenerative condition that affects the discs and joints in your neck.",
    color: "from-green-500 to-teal-500",
    path: "/health-conditions/cervical-spondylosis"
  },
  {
    icon: Zap,
    title: "Stroke (Ischemic, Hemorrhagic)",
    description: "What is a Stroke? A stroke occurs when the blood supply to part of your brain is interrupted or reduced, depriving brain tissue of oxygen and nutrients.",
    color: "from-blue-500 to-cyan-500",
    path: "/health-conditions/stroke"
  },
  {
    icon: Activity,
    title: "Epilepsy and Seizure Disorders",
    description: "Epilepsy is a neurological disorder marked by sudden recurrent episodes of sensory disturbance, loss of consciousness, or convulsions, associated with abnormal electrical activity in the brain.",
    color: "from-purple-500 to-indigo-500",
    path: "/health-conditions/epilepsy-seizure-disorders"
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleCards, setNumVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setNumVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setNumVisibleCards(2);
      } else {
        setNumVisibleCards(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % healthConditions.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + healthConditions.length) % healthConditions.length);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
            Our Specialties
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Neurological Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From diagnosis to treatment and rehabilitation, we provide complete neurological care
            using the latest medical technologies and evidence-based treatments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={service.path} className="block h-full">
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 bg-white hover:bg-teal-50">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white group-hover:text-teal-600 transition-colors duration-300" />
                    </motion.div>
                    <Badge variant="secondary" className="mb-2 bg-gray-100 text-gray-700 group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors duration-300">
                      {service.badge}
                    </Badge>
                    <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className="h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-4 transition-all duration-300"
                    />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* New Health Conditions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 mb-16 bg-blue-50 py-12 rounded-lg shadow-sm"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Health Condition
            </h2>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden space-x-8 justify-center">
              {healthConditions.slice(currentIndex, currentIndex + numVisibleCards).map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-w-[300px] max-w-[350px] w-full"
                >
                  <Link to={condition.path} className="block h-full">
                    <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white hover:bg-teal-100 active:bg-teal-100">
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${condition.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                        >
                          <condition.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                          {condition.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center justify-between h-full px-6 pb-6">
                        <CardDescription className="text-gray-600 text-center leading-relaxed">
                          {condition.description}
                        </CardDescription>
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          className="h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-4 transition-all duration-300"
                        />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevCard}
                className="rounded-full p-2 transition-all duration-300 hover:bg-teal-100 hover:text-teal-600"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextCard}
                className="rounded-full p-2 transition-all duration-300 hover:bg-teal-100 hover:text-teal-600"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">24/7 Neurological Emergency Care</h3>
          <p className="text-lg mb-6 opacity-90">
            Stroke, seizures, and other neurological emergencies require immediate attention.
            Our emergency team is available round the clock.
          </p>
          <motion.a
            href="tel:+919876543210"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Emergency: +91 98765 43210
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
