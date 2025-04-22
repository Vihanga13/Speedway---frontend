import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const SupplierReg2 = ({ onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    registrationNumber: '',
    businessType: '',
    yearsInBusiness: '',
    businessDescription: '',
    logo: null
  });

  const [errors, setErrors] = useState({});
  const [logoPreview, setLogoPreview] = useState(null);

  const businessTypes = [
    { value: 'shop', label: 'Shop' },
    { value: 'distributor', label: 'Distributor' },
    { value: 'dealer', label: 'Dealer' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          logo: 'Logo size should not exceed 2MB'
        }));
        return;
      }

      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          logo: 'Please upload a valid image file (JPG, PNG)'
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);

      setFormData(prev => ({
        ...prev,
        logo: file
      }));
      setErrors(prev => ({
        ...prev,
        logo: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'Registration number is required';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Business type is required';
    }

    if (!formData.yearsInBusiness) {
      newErrors.yearsInBusiness = 'Years in business is required';
    } else if (isNaN(formData.yearsInBusiness) || formData.yearsInBusiness < 0) {
      newErrors.yearsInBusiness = 'Please enter a valid number';
    }

    if (!formData.businessDescription.trim()) {
      newErrors.businessDescription = 'Business description is required';
    }

    if (!formData.logo) {
      newErrors.logo = 'Business logo is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      onNext(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="absolute inset-0 bg-red-500 transform -rotate-2 z-0"></div>
          <img
            src="/mitsubishi-supplier.jpg"
            alt="Mitsubishi Supplier Network"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 p-8 z-30">
            <h2 className="text-4xl font-bold text-white mb-4">Growing Together</h2>
            <p className="text-white text-lg">Build your business with Mitsubishi Motors</p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
          <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
            <ProgressBar currentStep={2} />
            
            <div className="mb-8">
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Business Information
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Please provide your business details
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${
                    errors.businessName ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>
                )}
              </div>

              {/* Registration Number */}
              <div>
                <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">
                  Business Registration Number *
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${
                    errors.registrationNumber ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
                />
                {errors.registrationNumber && (
                  <p className="mt-1 text-sm text-red-500">{errors.registrationNumber}</p>
                )}
              </div>

              {/* Business Type */}
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                  Type of Business *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${
                    errors.businessType ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
                >
                  <option value="">Select business type</option>
                  {businessTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.businessType && (
                  <p className="mt-1 text-sm text-red-500">{errors.businessType}</p>
                )}
              </div>

              {/* Years in Business */}
              <div>
                <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700">
                  Years in Business *
                </label>
                <input
                  type="number"
                  id="yearsInBusiness"
                  name="yearsInBusiness"
                  min="0"
                  value={formData.yearsInBusiness}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${
                    errors.yearsInBusiness ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
                />
                {errors.yearsInBusiness && (
                  <p className="mt-1 text-sm text-red-500">{errors.yearsInBusiness}</p>
                )}
              </div>

              {/* Business Logo */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Business Logo *
                </label>
                <div className="mt-1 flex items-center space-x-5">
                  <div className="flex justify-center items-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg overflow-hidden">
                    {logoPreview ? (
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => document.getElementById('logo-upload').click()}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Upload Logo
                    </button>
                    <input
                      id="logo-upload"
                      name="logo"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleLogoChange}
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      PNG, JPG up to 2MB
                    </p>
                  </div>
                </div>
                {errors.logo && (
                  <p className="mt-1 text-sm text-red-500">{errors.logo}</p>
                )}
              </div>

              {/* Business Description */}
              <div>
                <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700">
                  Business Description *
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  rows={4}
                  value={formData.businessDescription}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${
                    errors.businessDescription ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500`}
                  placeholder="Describe your business..."
                />
                {errors.businessDescription && (
                  <p className="mt-1 text-sm text-red-500">{errors.businessDescription}</p>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Previous
                </button>
                <Link to="/SupplierReg3"
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

export default SupplierReg2;
