import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-8">
      {/* About Section */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-6">About Speedway</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Welcome to Speed Way, your trusted partner for sourcing emergency vehicle spare parts.
            </p>
            <p className="text-gray-700 mb-8">
              "Speedway" is the latest from IT sector from the company which is designed to help 
              customers as well as the suppliers to search for spare parts easier than before
            </p>
            
            {/* What Speedway can do section */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold mb-4">What "Speedway" can do for you?</h2>
              <p className="text-gray-600">
                Registered customers of Speedway.lk can search for items, they are looking like normal 
                other websites. But as a special function in Speedway.lk, customers can send requests for 
                Quotation and suppliers will quote back. So customers have the best opportunity to choose 
                the best prices from the suppliers. And also our reliable delivery service is another special function
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/api/placeholder/400/300" 
              alt="Inventory Management" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img 
              src="/api/placeholder/400/300" 
              alt="Auto Parts" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img 
              src="/api/placeholder/400/300" 
              alt="Warehouse" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img 
              src="/api/placeholder/400/300" 
              alt="Online Ordering" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">What "Speedway.lk" will offer?</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <p className="text-gray-700">Transparent pricing with no hidden costs</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <p className="text-gray-700">Effortless order placement via a user-friendly interface</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <p className="text-gray-700">Fast and dependable delivery services</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default AboutUs;