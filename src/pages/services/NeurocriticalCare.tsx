import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Heart, Activity, Clock, Brain } from 'lucide-react';

const NeurocriticalCare = () => {
    const services = [
        {
            icon: Heart,
            title: "24/7 Intensive Care",
            description: "Round-the-clock monitoring and critical care for severe neurological conditions.",
            bgColor: "bg-red-100",
            iconColor: "text-red-600",
        },
        {
            icon: Activity,
            title: "Post-Surgical Monitoring",
            description: "Specialized care and observation for patients recovering from neurosurgery.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            icon: Clock,
            title: "Emergency Response",
            description: "Rapid assessment and intervention for acute neurological emergencies.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600",
        },
        {
            icon: Brain,
            title: "Advanced Life Support",
            description: "Comprehensive life support measures tailored for neurologically critical patients.",
            bgColor: "bg-green-100",
            iconColor: "text-green-600",
        },
    ];

    return (
        <ServicePageLayout
            badgeText="ICU Care"
            title="Neurocritical Care Services"
            description="Our neurocritical care unit provides immediate and intensive medical attention for patients with life-threatening neurological conditions, ensuring optimal outcomes."
            imageUrl="/src/assets/images/n4.jpg" // Placeholder image
            imageAlt="Neurocritical Care"
            services={services}
        />
    );
};

export default NeurocriticalCare; 