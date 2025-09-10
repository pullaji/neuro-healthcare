import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Brain, Users, Phone, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface MobileBottomNavProps {
    onBookAppointment: () => void;
}

const MobileBottomNav = ({ onBookAppointment }: MobileBottomNavProps) => {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Home', path: '/' },
        { icon: Brain, label: 'Services', path: '/services' },
        { icon: Users, label: 'Doctors', path: '/doctors' },
        { icon: Phone, label: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40 shadow-lg"
        >
            <div className="flex items-center justify-around py-2 max-w-md mx-auto">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`flex flex-col items-center justify-center space-y-1 p-2 rounded-full transition-colors w-20 h-14 ${isActive(item.path)
                                ? 'bg-teal-50 text-teal-600'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <item.icon className="h-5 w-5" />
                        <span className="text-xs font-medium truncate">{item.label}</span>
                    </Link>
                ))}
                <Button
                    onClick={onBookAppointment}
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full flex flex-col items-center justify-center w-20 h-14 shadow-lg"
                >
                    <Calendar className="h-5 w-5" />
                    <span className="text-xs font-medium">Book</span>
                </Button>
            </div>
        </motion.nav>
    );
};

export default MobileBottomNav; 