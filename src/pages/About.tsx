import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Heart, Shield, Clock, Star } from 'lucide-react';
import CountingNumbers from '@/components/CountingNumbers';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    { icon: Users, from: 0, to: 5000, suffix: "+", label: "Patients Treated" },
    { icon: Award, from: 0, to: 15, suffix: "+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Care" },
    { icon: Star, from: 0, to: 4.9, decimalPlaces: 1, label: "Patient Rating" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe in treating every patient with empathy, understanding, and personalized attention."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in neurological care using advanced techniques and technologies."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Patient safety and trust are our top priorities in every treatment and interaction."
    }
  ];

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
              About NeuroCare Clinic
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Leading Neurological Care in
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Hyderabad</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, NeuroCare Clinic has been at the forefront of neurological treatment,
              providing world-class care with cutting-edge technology and compassionate service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {achievement.number ? (
                    achievement.number
                  ) : (
                    <CountingNumbers
                      from={achievement.from}
                      to={achievement.to}
                      suffix={achievement.suffix}
                      decimalPlaces={achievement.decimalPlaces}
                    />
                  )}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Our Story
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Founded on Excellence and Innovation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  NeuroCare Clinic was established in 2008 with a vision to provide world-class
                  neurological care in Hyderabad. Our founders, leading neurologists and neurosurgeons,
                  recognized the need for specialized, patient-centered neurological services in the region.
                </p>
                <p>
                  Over the years, we have grown from a small clinic to a comprehensive neurological center,
                  treating complex brain and spine conditions with state-of-the-art technology and
                  evidence-based medicine.
                </p>
                <p>
                  Today, we are proud to be the trusted choice for patients seeking neurological care,
                  with a team of highly qualified specialists and a commitment to continuous innovation
                  in treatment approaches.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="NeuroCare Clinic"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every interaction we have with our patients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To provide exceptional neurological care that combines medical excellence with compassionate service,
              ensuring that every patient receives personalized treatment in a supportive environment. We are
              committed to advancing neurological medicine through continuous learning, innovation, and research.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
