// SubmitAdvertisement.jsx
import React, { useState } from 'react';

const SubmitAdd = () => {
  const [formData, setFormData] = useState({
    category: '',
    partName: '',
    description: '',
    price: '',
    images: []
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Main Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Submit Your Advertisement</h1>
        <p className="text-gray-600">Fill in the details below to list your vehicle spare parts</p>
      </div>

      {/* Product Information Form */}
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Product Information</h2>

          {/* Part Category */}
          <div className="mb-6">
            <label className="block mb-2">
              Part Category <span className="text-red-500">*</span>
            </label>
            <select 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              required
            >
              <option value="">Select Category</option>
              <option value="engine">Engine Parts</option>
              <option value="brakes">Brake System</option>
              <option value="suspension">Suspension</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          {/* Part Name */}
          <div className="mb-6">
            <label className="block mb-2">
              Part Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.partName}
              onChange={(e) => setFormData({...formData, partName: e.target.value})}
              required
            />
          </div>

          {/* Part Description */}
          <div className="mb-6">
            <label className="block mb-2">Part Description</label>
            <textarea
              className="w-full p-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          {/* Price */}
          <div className="mb-6">
            <label className="block mb-2">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block mb-2">Product Images</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                multiple
                accept="image/png,image/jpeg"
                className="hidden"
                id="image-upload"
                onChange={handleImageUpload}
              />
              <label 
                htmlFor="image-upload"
                className="cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <svg 
                    className="w-12 h-12 text-gray-400 mb-3"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-gray-600 mb-1">Upload an image</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800 transition-colors"
            >
              Submit Advertisement
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitAdd;
