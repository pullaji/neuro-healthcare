import { X } from "lucide-react";
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface UrgentAppealPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const UrgentAppealPopup: React.FC<UrgentAppealPopupProps> = ({ isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        popupRef.current?.classList.remove('scale-95');
      }, 10);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100]">
      <div ref={popupRef} className="bg-white rounded-2xl shadow-2xl w-[90vw] max-w-lg overflow-hidden flex flex-col md:flex-row transform scale-95 transition-transform duration-300">
        {/* Content Section */}
        <div className="p-6 md:w-1/2 flex flex-col justify-center items-center text-center">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors">
            <X size={24} />
          </button>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NH</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Neuro Healthcare</span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Advanced Neurological Care in Gachibowli</h2>
          <p className="text-gray-600">
            Experience world-class neurological treatment at Neuro Healthcare Clinic, Gachibowli.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <img src="/assets/images/neuro.jpg" alt="Neuro Healthcare Hospital" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default UrgentAppealPopup;
