import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { label: 'Contact Information', status: 1 },
    { label: 'Business Information', status: 2 },
    { label: 'Business Credentials', status: 3 },
    { label: 'Location Details', status: 4 }
  ];

  return (
    <div className="w-full mb-8 px-4">
      <div className="relative">
        <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200" />
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 
                  ${currentStep > step.status 
                    ? 'bg-red-500' 
                    : currentStep === step.status 
                      ? 'bg-red-500'
                      : 'bg-gray-200'}`}
              >
                {currentStep > step.status ? (
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                ) : currentStep === step.status ? (
                  <div className="w-4 h-4 rounded-full bg-white" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-gray-400" />
                )}
              </div>
              <span className={`mt-2 text-xs font-medium ${
                currentStep >= step.status 
                  ? 'text-gray-900' 
                  : 'text-gray-400'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SupplierReg1 = () => {
  const [formData, setFormData] = useState({
    contactPerson: '',
    businessEmail: '',
    businessPhone: '',   
    alternativePhone: '',
    businessHours: {
      monday: { isOpen: true, open: '09:00', close: '17:00' },
      tuesday: { isOpen: true, open: '09:00', close: '17:00' },
      wednesday: { isOpen: true, open: '09:00', close: '17:00' },
      thursday: { isOpen: true, open: '09:00', close: '17:00' },
      friday: { isOpen: true, open: '09:00', close: '17:00' },
      saturday: { isOpen: false, open: '09:00', close: '17:00' },
      sunday: { isOpen: false, open: '09:00', close: '17:00' }
    }
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBusinessHoursChange = (day, field, value) => {
    setFormData(prevState => ({
      ...prevState,
      businessHours: {
        ...prevState.businessHours,
        [day]: {
          ...prevState.businessHours[day],
          [field]: value
        }
      }
    }));
  };

  const toggleDay = (day) => {
    setFormData(prevState => ({
      ...prevState,
      businessHours: {
        ...prevState.businessHours,
        [day]: {
          ...prevState.businessHours[day],
          isOpen: !prevState.businessHours[day].isOpen
        }
      }
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Invalid email format';
    }

    if (!formData.businessPhone.trim()) {
      newErrors.businessPhone = 'Business phone is required';
    } else if (!/^\d{10}$/.test(formData.businessPhone.replace(/\D/g, ''))) {
      newErrors.businessPhone = 'Invalid phone number format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="absolute inset-0 bg-red-500 transform -rotate-2 z-0"></div>
          <img
            src="/mitsubishi-image.jpg" // Replace with your actual image path
            alt="Mitsubishi Motors"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 p-8 z-30">
            <h2 className="text-4xl font-bold text-white mb-4">Welcome to Mitsubishi</h2>
            <p className="text-white text-lg">Join our supplier network</p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
          <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
            {/* Registration Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Register</h2>
              <p className="mt-2 text-sm text-gray-600">JOIN TO US</p>
            </div>

            <ProgressBar currentStep={1} />

            <div>
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Contact Information
              </h2>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Contact Information Fields */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                    Primary Contact Person *
                  </label>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    required
                    className={`mt-1 block w-full px-3 py-2 border ${errors.contactPerson ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500`}
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                  {errors.contactPerson && (
                    <p className="mt-1 text-sm text-red-500">{errors.contactPerson}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700">
                    Business Email *
                  </label>
                  <input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    required
                    className={`mt-1 block w-full px-3 py-2 border ${errors.businessEmail ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500`}
                    value={formData.businessEmail}
                    onChange={handleChange}
                  />
                  {errors.businessEmail && (
                    <p className="mt-1 text-sm text-red-500">{errors.businessEmail}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessPhone" className="block text-sm font-medium text-gray-700">
                    Business Phone *
                  </label>
                  <input
                    id="businessPhone"
                    name="businessPhone"
                    type="tel"
                    required
                    className={`mt-1 block w-full px-3 py-2 border ${errors.businessPhone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500`}
                    value={formData.businessPhone}
                    onChange={handleChange}
                  />
                  {errors.businessPhone && (
                    <p className="mt-1 text-sm text-red-500">{errors.businessPhone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="alternativePhone" className="block text-sm font-medium text-gray-700">
                    Alternative Phone
                  </label>
                  <input
                    id="alternativePhone"
                    name="alternativePhone"
                    type="tel"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    value={formData.alternativePhone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Business Hours Section */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3">
                  {Object.entries(formData.businessHours).map(([day, hours]) => (
                    <div key={day} className="flex items-center space-x-4">
                      <div className="w-32">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={hours.isOpen}
                            onChange={() => toggleDay(day)}
                            className="mr-2 h-4 w-4 text-red-600"
                          />
                          <span className="capitalize">{day}</span>
                        </label>
                      </div>
                      
                      {hours.isOpen && (
                        <div className="flex items-center space-x-2">
                          <input
                            type="time"
                            value={hours.open}
                            onChange={(e) => handleBusinessHoursChange(day, 'open', e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded-md"
                          />
                          <span>to</span>
                          <input
                            type="time"
                            value={hours.close}
                            onChange={(e) => handleBusinessHoursChange(day, 'close', e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded-md"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
               
                <Link to="/SupplierReg2"
                  className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Next
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierReg1;
