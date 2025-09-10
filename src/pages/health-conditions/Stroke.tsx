import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Brain, Heart, Activity, Zap } from 'lucide-react';
import strokeImage from '@/assets/images/stroke.jpg';

const Stroke = () => {
    const content = {
        title: 'Stroke (Ischemic, Hemorrhagic)',
        badgeText: 'Medical Emergency',
        imageUrl: strokeImage,
        imageAlt: 'Illustration of a brain during a stroke',
        description: 'A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. A stroke is a medical emergency, and prompt treatment is crucial.',
        sections: [
            {
                title: 'Types of Stroke',
                text: 'There are two main causes of stroke: a blocked artery (ischemic stroke) or leaking or bursting of a blood vessel (hemorrhagic stroke). Some people may have only a temporary disruption of blood flow to the brain, known as a transient ischemic attack (TIA), that doesn\'t cause lasting symptoms.',
            },
            {
                title: 'Symptoms',
                text: 'Watch for these signs and symptoms if you think you or someone else may be having a stroke. Pay attention to when the signs and symptoms begin. The length of time they have been present can affect your treatment options.',
            },
            {
                title: 'Recovery and Rehabilitation',
                text: 'Stroke rehabilitation is an important part of recovery after stroke. It helps you regain skills you lost when a stroke affected part of your brain. Stroke rehabilitation can help you regain independence and improve your quality of life.',
            },
        ],
        services: [
            { icon: Brain, title: 'Emergency intervention', description: 'Immediate care to stabilize the patient.', bgColor: 'bg-red-100', iconColor: 'text-red-600' },
            { icon: Heart, title: 'Thrombolytic therapy', description: 'Using drugs to break up blood clots.', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
            { icon: Activity, title: 'Endovascular procedures', description: 'Minimally invasive surgery to remove clots.', bgColor: 'bg-green-100', iconColor: 'text-green-600' },
            { icon: Zap, title: 'Post-stroke rehabilitation', description: 'Therapy to regain lost skills.', bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' }
        ]
    };

    return <ServicePageLayout {...content} />;
};

export default Stroke; 