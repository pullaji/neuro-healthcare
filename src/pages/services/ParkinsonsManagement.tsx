import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Activity, Brain, Pill, Syringe } from 'lucide-react';

const ParkinsonsManagement = () => {
    const services = [
        {
            icon: Pill,
            title: "Medication Optimization",
            description: "Tailored medication plans to manage symptoms and improve quality of life.",
            bgColor: "bg-green-100",
            iconColor: "text-green-600",
        },
        {
            icon: Activity,
            title: "Physical & Occupational Therapy",
            description: "Specialized therapies to enhance mobility, balance, and daily living activities.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            icon: Brain,
            title: "Deep Brain Stimulation (DBS)",
            description: "Advanced surgical option for eligible patients to alleviate severe symptoms.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600",
        },
        {
            icon: Syringe,
            title: "Botox Injections",
            description: "Targeted injections for specific symptoms like dystonia and tremor.",
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600",
        },
    ];

    return (
        <ServicePageLayout
            badgeText="Advanced Treatment"
            title="Parkinson's Disease Management"
            description="Our clinic offers comprehensive and individualized care for Parkinson's disease, focusing on symptom management, improving motor function, and enhancing overall well-being."
            imageUrl="/src/assets/images/n1.jpg" // Placeholder image
            imageAlt="Parkinson's Management"
            services={services}
        />
    );
};

export default ParkinsonsManagement; 