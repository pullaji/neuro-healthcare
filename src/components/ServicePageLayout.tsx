import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    bgColor: string;
    iconColor: string;
}

interface ServicePageLayoutProps {
    badgeText: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    services: ServiceCardProps[];
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
    badgeText,
    title,
    description,
    imageUrl,
    imageAlt,
    services,
}) => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
                                {badgeText}
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                {title}
                            </h1>
                            <p className="text-xl text-gray-600">
                                {description}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-teal-50 group"
                            >
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-teal-100`}>
                                        <service.icon className={`h-6 w-6 ${service.iconColor} transition-colors duration-300 group-hover:text-teal-600`} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-teal-700">{service.title}</h3>
                                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePageLayout; 