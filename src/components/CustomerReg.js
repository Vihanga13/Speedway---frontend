// RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerReg = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    idNumber: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="h-full relative">
          <img
            src="/path-to-your-mitsubishi-image.jpg"
            alt="Mitsubishi Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/30"></div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Register</h2>
          <p className="text-center text-gray-600 mb-8">JOIN TO US</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Malki Perera"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Example@gmail.com"
              />
            </div>

            {/* Mobile Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="XXXXXXXXXX"
              />
            </div>

            {/* ID Number Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Number
              </label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="XXXXXXXXXX"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              REGISTER
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              ALREADY HAVE AN ACCOUNT?{' '}
              <Link to="/loginpage" className="text-red-500 hover:text-red-600">
                LOGIN 
              </Link>
            </p>

            {/* Terms and Privacy */}
            <p className="text-center text-xs text-gray-500">
              By signing up to create an account I accept Company's{' '}
              <a href="/terms" className="text-red-500 hover:text-red-600">
                Terms of use
              </a>{' '}
              &{' '}
              <a href="/privacy" className="text-red-500 hover:text-red-600">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerReg;
