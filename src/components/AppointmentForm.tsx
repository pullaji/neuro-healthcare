import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, FileText, ChevronRight, ChevronLeft, X, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AppointmentFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentForm = ({ isOpen, onClose }: AppointmentFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    preferredDate: '',
    preferredTime: '',
    department: '',
    doctor: '',
    concern: '',
    previousVisit: '',
    insurance: ''
  });

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Appointment request submitted successfully! We'll contact you within 24 hours.");
    onClose();
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="border-0 shadow-none">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Book Appointment</CardTitle>
                <CardDescription className="text-teal-100">
                  Step {currentStep} of {totalSteps}
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex space-x-2">
                {[...Array(totalSteps)].map((_, index) => (
                  <div
                    key={index}
                    className={`flex-1 h-2 rounded-full transition-colors ${index + 1 <= currentStep ? 'bg-white' : 'bg-white/30'
                      }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <User className="h-5 w-5 text-teal-600" />
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender</Label>
                        <Select onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="h-5 w-5 text-teal-600" />
                      <h3 className="text-lg font-semibold">Appointment Details</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="14:00">02:00 PM</SelectItem>
                            <SelectItem value="15:00">03:00 PM</SelectItem>
                            <SelectItem value="16:00">04:00 PM</SelectItem>
                            <SelectItem value="17:00">05:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="department">Department *</Label>
                      <Select onValueChange={(value) => handleInputChange('department', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="neurology">Neurology</SelectItem>
                          <SelectItem value="neurosurgery">Neurosurgery</SelectItem>
                          <SelectItem value="pediatric-neurology">Pediatric Neurology</SelectItem>
                          <SelectItem value="neuroradiology">Neuroradiology</SelectItem>
                          <SelectItem value="neuropsychology">Neuropsychology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="doctor">Preferred Doctor</Label>
                      <Select onValueChange={(value) => handleInputChange('doctor', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select doctor (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-rajesh">Dr. Rajesh Kumar</SelectItem>
                          <SelectItem value="dr-priya">Dr. Priya Sharma</SelectItem>
                          <SelectItem value="dr-arun">Dr. Arun Patel</SelectItem>
                          <SelectItem value="any">Any Available Doctor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <FileText className="h-5 w-5 text-teal-600" />
                      <h3 className="text-lg font-semibold">Medical Information</h3>
                    </div>

                    <div>
                      <Label htmlFor="concern">Primary Concern/Symptoms *</Label>
                      <Textarea
                        id="concern"
                        value={formData.concern}
                        onChange={(e) => handleInputChange('concern', e.target.value)}
                        placeholder="Please describe your symptoms or reason for visit"
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="previousVisit">Previous Visit to Neuro Healthcare?</Label>
                      <RadioGroup
                        id="previousVisit"
                        defaultValue="no"
                        onValueChange={(value) => handleInputChange('previousVisit', value)}
                      >
                        <div className="flex items-center space-between">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes">Yes, I'm a returning patient</Label>
                        </div>
                        <div className="flex items-center space-between">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no">No, this is my first visit</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="insurance">Insurance Provider</Label>
                      <Input
                        id="insurance"
                        value={formData.insurance}
                        onChange={(e) => handleInputChange('insurance', e.target.value)}
                        placeholder="Enter your insurance provider (if any)"
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Please bring any relevant medical records,
                        previous test results, and current medications to your appointment.
                      </p>
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <h3 className="text-lg font-semibold">Review & Confirm</h3>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div>
                        <span className="font-medium">Patient:</span> {formData.firstName} {formData.lastName}
                      </div>
                      <div>
                        <span className="font-medium">Contact:</span> {formData.phone} | {formData.email}
                      </div>
                      <div>
                        <span className="font-medium">Appointment:</span> {formData.preferredDate} at {formData.preferredTime}
                      </div>
                      <div>
                        <span className="font-medium">Department:</span> {formData.department}
                      </div>
                      {formData.doctor && (
                        <div>
                          <span className="font-medium">Doctor:</span> {formData.doctor}
                        </div>
                      )}
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>What happens next?</strong><br />
                        1. Our team will review your request within 24 hours<br />
                        2. We'll call you to confirm the appointment<br />
                        3. You'll receive a confirmation SMS with details<br />
                        4. Please arrive 15 minutes early for registration
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-teal-600 hover:bg-teal-700 text-white flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white flex items-center space-x-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Submit Request</span>
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default AppointmentForm;
