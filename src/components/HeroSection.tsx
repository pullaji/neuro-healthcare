import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import CountingNumbers from '@/components/CountingNumbers';

interface HeroSectionProps {
  onBookAppointment: () => void;
}

const HeroSection = ({ onBookAppointment }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
        {/* Animated circles representing neurons */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-teal-200/20"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
                Advanced Brain & Spine Care in Hyderabad
              </Badge>
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Advanced Neurological Care in Gachibowli
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-black/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience world-class neurological treatment at Neuro Healthcare Clinic, Gachibowli.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={onBookAppointment}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg rounded-full"
              >
                <Users className="mr-2 h-5 w-5" />
                Meet Our Experts
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">
                  <CountingNumbers from={0} to={15} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">
                  <CountingNumbers from={0} to={5000} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">
                  <CountingNumbers from={0} to={24} suffix="/7" />
                </div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </div>
            </motion.div>
          </div>

          {/* Image/Animation Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Brain Animation */}
            <div className="relative w-full max-w-md mx-auto ml-8">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-full w-80 h-80 flex items-center justify-center relative overflow-hidden"
              >
                {/* Brain-like pattern */}
                <div className="absolute inset-4 border-4 border-white/30 rounded-full">
                  <div className="w-full h-full relative">
                    {/* Neural network lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="neuronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                        </linearGradient>
                      </defs>
                      {[...Array(8)].map((_, i) => (
                        <motion.path
                          key={i}
                          d={`M ${20 + i * 20} 50 Q 100 ${80 + i * 10} ${180 - i * 15} 150`}
                          stroke="url(#neuronGrad)"
                          strokeWidth="1"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Center icon */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-8xl"
                >
                  🧠
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0V120L1200,120V0C1200,0,600,60,0,0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
