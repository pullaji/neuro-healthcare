import ServicePageLayout from '@/components/ServicePageLayout';
import { Brain, Heart, Activity, Zap } from 'lucide-react';
import epilepsyImage from '@/assets/images/stroke.jpg';

const EpilepsyAndSeizureDisorders = () => {
    const content = {
        title: 'Epilepsy and Seizure Disorders',
        badgeText: 'Neurological Condition',
        imageUrl: epilepsyImage,
        imageAlt: 'Illustration of brain activity during a seizure',
        description: 'Epilepsy is a central nervous system (neurological) disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness.',
        sections: [
            {
                title: 'Understanding Seizures',
                text: 'Seizures are sudden, uncontrolled electrical disturbances in the brain. They can cause changes in your behavior, movements or feelings, and in levels of consciousness. Having two or more unprovoked seizures at least 24 hours apart is generally considered to be epilepsy.',
            },
            {
                title: 'Diagnosis and Treatment',
                text: 'To diagnose your condition, your doctor will review your symptoms and medical history. Your doctor may order several tests to diagnose epilepsy and determine the cause of seizures. Treatment with medications or sometimes surgery can control seizures for the majority of people with epilepsy.',
            },
            {
                title: 'Living with Epilepsy',
                text: 'With proper treatment, most people with epilepsy can lead full, productive lives. It\'s important to work closely with your doctor to manage your condition.',
            },
        ],
        services: [
            { icon: Brain, title: 'EEG Monitoring', description: 'Advanced diagnostics to monitor brain activity.', bgColor: 'bg-red-100', iconColor: 'text-red-600' },
            { icon: Heart, title: 'Medication Management', description: 'Personalized drug regimens to control seizures.', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
            { icon: Activity, title: 'Surgical Evaluation', description: 'Assessing candidacy for surgical interventions.', bgColor: 'bg-green-100', iconColor: 'text-green-600' },
            { icon: Zap, title: 'Lifestyle Counseling', description: 'Guidance on managing triggers and improving quality of life.', bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' }
        ]
    };

    return <ServicePageLayout {...content} />;
};

export default EpilepsyAndSeizureDisorders; 