import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Brain, Activity, Heart, Clock } from 'lucide-react';

const StrokeRecovery = () => {
    const services = [
        {
            icon: Brain,
            title: "Neuroplasticity Training",
            description: "Advanced techniques to help the brain form new neural connections and recover lost functions.",
            bgColor: "bg-teal-100",
            iconColor: "text-teal-600",
        },
        {
            icon: Activity,
            title: "Physical Therapy",
            description: "Customized exercise programs to improve mobility, strength, and coordination.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            icon: Heart,
            title: "Emotional Support",
            description: "Comprehensive counseling and support for patients and their families.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600",
        },
        {
            icon: Clock,
            title: "24/7 Care",
            description: "Round-the-clock monitoring and support for optimal recovery.",
            bgColor: "bg-pink-100",
            iconColor: "text-pink-600",
        },
    ];

    return (
        <ServicePageLayout
            badgeText="Comprehensive Care"
            title="Stroke Recovery & Rehabilitation"
            description="Our specialized stroke recovery program combines advanced rehabilitation techniques with personalized care to help patients regain independence and improve quality of life."
            imageUrl="/src/assets/images/stroke recovery.jpg"
            imageAlt="Stroke Recovery Rehabilitation"
            services={services}
        />
    );
};

export default StrokeRecovery;


