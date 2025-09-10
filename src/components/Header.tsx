import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, Home, Brain, Users, Phone, Info, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header = ({ onBookAppointment }: HeaderProps) => {
  const location = useLocation();
  const [currentMenu, setCurrentMenu] = useState('main'); // 'main' or 'services'

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const mobileNavItems = [
    { icon: Home, label: 'Home', path: '/', type: 'link' },
    { icon: Info, label: 'About', path: '/about', type: 'link' },
    {
      icon: Brain, label: 'Services', path: '/services', type: 'submenu', submenu: [
        { label: 'Stroke Recovery', path: '/services/stroke-recovery' },
        { label: 'Epilepsy Care', path: '/services/epilepsy-care' },
        { label: 'Parkinsons Management', path: '/services/parkinsons-management' },
        { label: 'Neurodiagnostics', path: '/services/neurodiagnostics' },
        { label: 'Pediatric Neurology', path: '/services/pediatric-neurology' },
        { label: 'Neurocritical Care', path: '/services/neurocritical-care' },
      ]
    },
    { icon: Users, label: 'Doctors', path: '/doctors', type: 'link' },
    { icon: BookOpen, label: 'Blog', path: '/blog', type: 'link' },
    { icon: Phone, label: 'Contact', path: '/contact', type: 'link' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NH</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Neuro Healthcare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${isActive(item.path)
                  ? 'text-teal-600 border-b-2 border-teal-600 pb-1'
                  : 'text-gray-600 hover:text-teal-600'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={onBookAppointment}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:max-w-sm">
              <SheetHeader className="relative">
                {currentMenu === 'services' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-2 h-8 w-8 text-gray-500 hover:text-gray-700"
                    onClick={() => setCurrentMenu('main')}
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Back to Main Menu</span>
                  </Button>
                )}
                <SheetTitle className="text-center">
                  {currentMenu === 'main' ? 'Menu' : 'Services Treatment'}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-start pt-8">
                {currentMenu === 'main' ? (
                  mobileNavItems.map((item, index) => (
                    item.type === 'link' ? (
                      <SheetClose key={index} asChild>
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 py-3 px-4 w-full text-base font-medium transition-colors ${isActive(item.path)
                            ? 'text-teal-600 bg-teal-50'
                            : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </Link>
                      </SheetClose>
                    ) : (
                      <Button
                        key={index}
                        variant="ghost"
                        className="flex items-center justify-between space-x-3 py-3 px-4 w-full text-base font-medium transition-colors text-gray-700 hover:bg-gray-50"
                        onClick={() => setCurrentMenu('services')}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      </Button>
                    )
                  ))
                ) : (
                  mobileNavItems.find(item => item.label === 'Services')?.submenu?.map((subItem, index) => (
                    <SheetClose key={index} asChild>
                      <Link
                        to={subItem.path}
                        className={`flex items-center space-x-3 py-3 px-4 w-full text-base font-medium transition-colors ${isActive(subItem.path)
                          ? 'text-teal-600 bg-teal-50'
                          : 'text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        <span>{subItem.label}</span>
                      </Link>
                    </SheetClose>
                  ))
                )}
                <SheetClose asChild>
                  <Button
                    onClick={onBookAppointment}
                    className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-3"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
