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

const FileUploadField = ({ label, required, onChange, file, error }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-red-500 transition-colors">
            <div className="space-y-1 text-center">
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
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor={label.replace(/\s+/g, '-').toLowerCase()}
                  className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                >
                  <span>Upload a file</span>
                  <input
                    id={label.replace(/\s+/g, '-').toLowerCase()}
                    name={label.replace(/\s+/g, '-').toLowerCase()}
                    type="file"
                    className="sr-only"
                    onChange={onChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>
        {file && (
          <div className="flex items-center space-x-2">
            <svg
              className="h-5 w-5 text-green-500"
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
            <span className="text-sm text-gray-500">{file.name}</span>
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

const SupplierReg3 = ({ onNext, onPrevious }) => {
  const [files, setFiles] = useState({
    businessLicense: null,
    taxRegistration: null,
    tradeCertificates: null,
    dealershipCertificates: null
  });

  const [errors, setErrors] = useState({});

  const handleFileChange = (documentType) => (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setErrors({
          ...errors,
          [documentType]: 'File size should not exceed 10MB'
        });
        return;
      }

      // Validate file type
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          [documentType]: 'Invalid file type. Please upload PDF, JPG, or PNG'
        });
        return;
      }

      setFiles({
        ...files,
        [documentType]: file
      });
      setErrors({
        ...errors,
        [documentType]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required files
    const newErrors = {};
    if (!files.businessLicense) {
      newErrors.businessLicense = 'Business License is required';
    }
    if (!files.taxRegistration) {
      newErrors.taxRegistration = 'Tax Registration Document is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Proceed with form submission
    if (onNext) {
      onNext(files);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="absolute inset-0 bg-red-500 transform -rotate-2 z-0"></div>
          <img
            src="/mitsubishi-credentials.jpg"
            alt="Mitsubishi Business Credentials"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 p-8 z-30">
            <h2 className="text-4xl font-bold text-white mb-4">Document Verification</h2>
            <p className="text-white text-lg">Ensure compliance and build trust through proper documentation</p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
          <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
            <ProgressBar currentStep={3} />
            
            <div className="mb-8">
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Business Credentials
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Please upload the required business documents
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FileUploadField
                label="Business License"
                required
                onChange={handleFileChange('businessLicense')}
                file={files.businessLicense}
                error={errors.businessLicense}
              />

              <FileUploadField
                label="Tax Registration Documents"
                required
                onChange={handleFileChange('taxRegistration')}
                file={files.taxRegistration}
                error={errors.taxRegistration}
              />

              <FileUploadField
                label="Trade Certificates"
                onChange={handleFileChange('tradeCertificates')}
                file={files.tradeCertificates}
                error={errors.tradeCertificates}
              />

              <FileUploadField
                label="Brand Dealership Certificates"
                onChange={handleFileChange('dealershipCertificates')}
                file={files.dealershipCertificates}
                error={errors.dealershipCertificates}
              />

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Previous
                </button>
                <Link to="/SupplierReg4"
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

export default SupplierReg3;
