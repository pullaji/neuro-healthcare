import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Brain, Zap, Syringe, MessageSquare } from 'lucide-react';

const EpilepsyCare = () => {
  const services = [
    {
      icon: Zap,
      title: "EEG Monitoring",
      description: "Advanced electroencephalography for accurate diagnosis and monitoring of seizure activity.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Syringe,
      title: "Medication Management",
      description: "Personalized anti-epileptic drug regimens to control seizures with minimal side effects.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Brain,
      title: "Surgical Evaluation",
      description: "Assessment for surgical options for intractable epilepsy, including pre-surgical mapping.",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: MessageSquare,
      title: "Lifestyle Counseling",
      description: "Guidance on diet, sleep, and stress management to support epilepsy control.",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <ServicePageLayout
      badgeText="Specialized Care"
      title="Epilepsy Care & Management"
      description="Our clinic offers comprehensive epilepsy care, focusing on precise diagnosis, effective seizure control, and improving quality of life for patients."
      imageUrl="/src/assets/images/elip.jpg" // Placeholder image
      imageAlt="Epilepsy Care"
      services={services}
    />
  );
};

export default EpilepsyCare; 