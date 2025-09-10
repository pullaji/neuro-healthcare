import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Baby, Brain, Microscope, Heart } from 'lucide-react';

const PediatricNeurology = () => {
  const services = [
    {
      icon: Baby,
      title: "Developmental Delays",
      description: "Early diagnosis and intervention for developmental and cognitive delays in children.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Brain,
      title: "Epilepsy in Children",
      description: "Specialized diagnosis and management of seizure disorders in pediatric patients.",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Microscope,
      title: "Genetic & Metabolic Disorders",
      description: "Diagnosis and management of neurological conditions with genetic or metabolic origins.",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: Heart,
      title: "Neuromuscular Disorders",
      description: "Care for conditions affecting muscles and nerves, such as muscular dystrophy and neuropathies.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <ServicePageLayout
      badgeText="Child Care"
      title="Pediatric Neurology Services"
      description="Our pediatric neurology specialists provide compassionate and expert care for children with a wide range of neurological conditions, from infancy through adolescence."
      imageUrl="/src/assets/images/n3.jpg" // Placeholder image
      imageAlt="Pediatric Neurology"
      services={services}
    />
  );
};

export default PediatricNeurology; 