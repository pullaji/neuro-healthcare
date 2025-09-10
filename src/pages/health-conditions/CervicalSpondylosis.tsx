import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Brain, Heart, Activity, Zap } from 'lucide-react';
import cervicalImage from '@/assets/images/cervical.jpg';

const CervicalSpondylosis = () => {
    const content = {
        title: 'Cervical Spondylosis',
        badgeText: 'Degenerative Condition',
        imageUrl: cervicalImage,
        imageAlt: 'Illustration of a spine with cervical spondylosis',
        description: 'Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).',
        sections: [
            {
                title: 'Symptoms',
                text: 'For most people, cervical spondylosis causes no symptoms. When symptoms do occur, they typically include pain and stiffness in the neck. Sometimes, cervical spondylosis results in a narrowing of the space needed by the spinal cord and the nerve roots that pass through the spine to the rest of your body.',
            },
            {
                title: 'Causes',
                text: 'As you age, the bones and cartilage that make up your backbone and neck gradually develop wear and tear. These changes can include dehydrated disks, herniated disks, bone spurs, and stiff ligaments.',
            },
            {
                title: 'Treatment',
                text: 'Treatments for cervical spondylosis focus on providing pain relief, lowering the risk of permanent damage, and helping you lead a normal life. Non-surgical methods are usually very effective.',
            },
        ],
        services: [
            { icon: Brain, title: 'Physical Therapy', description: 'Exercises to help strengthen and stretch neck muscles.', bgColor: 'bg-red-100', iconColor: 'text-red-600' },
            { icon: Heart, title: 'Medications', description: 'Pain relievers, muscle relaxants, and anti-inflammatory drugs.', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
            { icon: Activity, title: 'Surgical Options', description: 'In severe cases, surgery may be an option to remove bone spurs or parts of a herniated disk.', bgColor: 'bg-green-100', iconColor: 'text-green-600' },
            { icon: Zap, title: 'Lifestyle Modifications', description: 'Advice on posture, ergonomics, and other ways to reduce neck strain.', bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' }
        ]
    };

    return <ServicePageLayout {...content} />;
};

export default CervicalSpondylosis; 