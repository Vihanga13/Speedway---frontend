// TrackOrder.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrackDetails = () => {
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '',
    phoneNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle tracking logic here
    console.log('Tracking Order:', orderDetails);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-6">TRACK YOUR ORDER</h1>
        <p className="text-gray-600 text-sm px-4 leading-relaxed">
          TO TRACK YOUR ORDER PLEASE ENTER YOUR ORDER NUMBER AND PHONE NUMBER IN THE
          BOXES BELOW AND THE "TRACK ORDER" BUTTON.
          <br />
          ORDER NUMBER IS IN THE CONFIRMATION EMAIL THAT YOU HAVE RECEIVED.
        </p>
      </div>

      {/* Track Order Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6">
        {/* Order Number Input */}
        <div className="mb-6">
          <label 
            htmlFor="orderNumber" 
            className="block text-gray-700 mb-2"
          >
            Order Number
          </label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={orderDetails.orderNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="XXXXXXXXXX"
            required
          />
        </div>

        {/* Mobile Number Input */}
        <div className="mb-4">
          <label 
            htmlFor="phoneNumber" 
            className="block text-gray-700 mb-2"
          >
            Mobile
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={orderDetails.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="XXXXXXXXXX"
            required
          />
        </div>

        {/* Phone Number Format Help Text */}
        <div className="mb-8">
          <p className="text-sm text-gray-500">
            Enter phone number without country code and hyphens.
            <br />
            (eg:If the number without is (+94)71-712-3456 format should be 0717123456)
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Link to="/OrderTracking"
            className="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800 transition-colors"
          >
            Track Order
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TrackDetails;
