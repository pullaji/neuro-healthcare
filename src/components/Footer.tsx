import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#181F2A] text-gray-200 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Logo & Mission */}
                <div className="md:col-span-1 flex flex-col gap-4">
                    <Link to="/" className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">NH</span>
                        </div>
                        <span className="text-xl font-bold text-white">Neuro Healthcare</span>
                    </Link>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Dedicated to bringing positive change to communities worldwide through healthcare initiatives and wellness programs.
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition"><Facebook className="w-5 h-5" /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition"><Twitter className="w-5 h-5" /></a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition"><Instagram className="w-5 h-5" /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
                        <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
                        <li><a href="/blog" className="hover:text-blue-400 transition">Blogs</a></li>
                        <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
                        <li><a href="/appointments" className="hover:text-blue-400 transition">Book Appointment</a></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="font-semibold text-white mb-4 text-lg">Our Services</h3>
                    <ul className="space-y-2">
                        <li>Brain Imaging</li>
                        <li>Neurological Rehabilitation</li>
                        <li>Sleep Studies</li>
                        <li>Epilepsy Care</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold text-white mb-4 text-lg">Contact Info</h3>
                    <ul className="space-y-3 text-gray-400 text-base">
                        <li className="flex items-start gap-2"><MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                            <span>Neuro Healthcare<br />Plot No. 123, Cyber Towers Road<br />Gachibowli, Hyderabad - 500032<br />Telangana, India</span>
                        </li>
                        <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-blue-400" /> +91 98765 43210</li>
                        <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-400" /> sumanth.chava@neurohealthcare.in</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
                <span className="text-gray-400">© 2024 HealthCare+. All rights reserved.</span>
                <div className="flex space-x-6 mt-2 md:mt-0">
                    <a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a>
                    <a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
                    <a href="/cookie" className="hover:text-blue-400 transition">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 