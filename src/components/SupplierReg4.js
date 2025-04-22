import React, { useState } from 'react';

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

const AddressField = ({ title, required, formData, onChange, prefix }) => {
  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900">
        {title} {required && <span className="text-red-500">*</span>}
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            name={`${prefix}Street`}
            value={formData[`${prefix}Street`]}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name={`${prefix}City`}
            value={formData[`${prefix}City`]}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            State/Province
          </label>
          <input
            type="text"
            name={`${prefix}State`}
            value={formData[`${prefix}State`]}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            name={`${prefix}PostalCode`}
            value={formData[`${prefix}PostalCode`]}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>
    </div>
  );
};

const BranchLocation = ({ index, branch, onChange, onRemove }) => {
  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg relative">
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 className="text-lg font-medium text-gray-900">Branch Location {index + 1}</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Branch Name</label>
          <input
            type="text"
            value={branch.name}
            onChange={(e) => onChange(index, 'name', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={branch.address}
            onChange={(e) => onChange(index, 'address', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>
    </div>
  );
};

const SupplierReg4 = ({ onNext, onPrevious, onSubmit }) => {
  const [formData, setFormData] = useState({
    storeStreet: '',
    storeCity: '',
    storeState: '',
    storePostalCode: '',
    warehouseStreet: '',
    warehouseCity: '',
    warehouseState: '',
    warehousePostalCode: '',
    serviceAreas: '',
    hasWarehouse: false,
  });

  const [branches, setBranches] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBranchChange = (index, field, value) => {
    const newBranches = [...branches];
    newBranches[index] = { ...newBranches[index], [field]: value };
    setBranches(newBranches);
  };

  const addBranch = () => {
    setBranches([...branches, { name: '', address: '' }]);
  };

  const removeBranch = (index) => {
    setBranches(branches.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      branches
    };
    if (onSubmit) {
      onSubmit(finalData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="absolute inset-0 bg-red-500 transform -rotate-2 z-0"></div>
          <img
            src="/location-details.jpg"
            alt="Business Locations"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 p-8 z-30">
            <h2 className="text-4xl font-bold text-white mb-4">Location Details</h2>
            <p className="text-white text-lg">Expand your business reach by managing multiple locations effectively</p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
          <div className="max-w-2xl w-full space-y-8">
            <ProgressBar currentStep={4} />
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                  Location Details
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Please provide your business location details
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <AddressField
                  title="Physical Store Address"
                  required={true}
                  formData={formData}
                  onChange={handleChange}
                  prefix="store"
                />

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hasWarehouse"
                    name="hasWarehouse"
                    checked={formData.hasWarehouse}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="hasWarehouse" className="ml-2 block text-sm text-gray-900">
                    I have a separate warehouse location
                  </label>
                </div>

                {formData.hasWarehouse && (
                  <AddressField
                    title="Warehouse Address"
                    required={false}
                    formData={formData}
                    onChange={handleChange}
                    prefix="warehouse"
                  />
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Service Area Coverage *
                  </label>
                  <textarea
                    name="serviceAreas"
                    required
                    value={formData.serviceAreas}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="List the areas where you provide services..."
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">Branch Locations</h3>
                    <button
                      type="button"
                      onClick={addBranch}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Add Branch
                    </button>
                  </div>
                  
                  {branches.map((branch, index) => (
                    <BranchLocation
                      key={index}
                      index={index}
                      branch={branch}
                      onChange={handleBranchChange}
                      onRemove={removeBranch}
                    />
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Register 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierReg4;
