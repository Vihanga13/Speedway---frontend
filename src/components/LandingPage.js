import React from 'react';
import { Users, Shield, Tag } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
    <Header />    
    
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-500">
        <div className="absolute inset-0 bg-black/50">
          <img
            src="/car-parts-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white text-center mb-12">
            Easily Find Compatible<br />Spare Parts and Suppliers
          </h1>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Brand"
              className="w-full px-4 py-2 rounded bg-white/90"
            />
            <select className="w-full px-4 py-2 rounded bg-white/90">
              <option value="">Type</option>
            </select>
            <input
              type="text"
              placeholder="Keyword"
              className="w-full px-4 py-2 rounded bg-white/90"
            />
          </div>
          <div className="flex justify-center mt-4">
            <Link to ="/SearchPage" className="bg-red-700 text-white px-8 py-2 rounded hover:bg-red-800 transition">
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Interior Parts Card */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <img
              src="/interior-parts.jpg"
              alt="Interior Parts"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">Interior Parts</h3>
              <Link to="/InteriorParts" className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition">
              Shop Now
            </Link>

            </div>
          </div>

          {/* Body Parts Card */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <img
              src="/body-parts.jpg"
              alt="Body Parts"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">Body Parts</h3>
              <Link to="/BodyParts" className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition">
              Shop Now
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-red-700 mb-4" />
              <h3 className="font-semibold mb-2">Support 24/7</h3>
              <p className="text-gray-600">Call us anytime</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-red-700 mb-4" />
              <h3 className="font-semibold mb-2">100% Safety</h3>
              <p className="text-gray-600">Only secure payments</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Tag className="w-12 h-12 text-red-700 mb-4" />
              <h3 className="font-semibold mb-2">Hot Offers</h3>
              <p className="text-gray-600">Discount up to 50%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Why Speed Way</h2>
          <p className="text-center text-gray-600 mb-8">Speed Way Statistics</p>
          
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            <div className="bg-gray-100 p-6 rounded text-center">
              <p className="text-4xl font-bold mb-2">0</p>
              <p className="text-gray-600">Customers</p>
            </div>
            <div className="bg-gray-100 p-6 rounded text-center">
              <p className="text-4xl font-bold mb-2">0</p>
              <p className="text-gray-600">Suppliers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Registration Section */}
      <section className="relative h-[500px] bg-gray-900">
        <div className="absolute inset-0 bg-black/60">
          <img
            src="/engine-bg.jpg"
            alt="Engine Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Do You Have Vehicle Parts to Sell?</h2>
          <div className="space-y-4 mb-8">
            <p>Step 1 - Click on "Register"</p>
            <p>Step 2 - Choose "Supplier"</p>
            <p>Step 3 - Enter business and personal details</p>
            <p>Step 4 - Set up a username and password</p>
          </div>
          <Link to="/SupplierReg1" className="bg-red-700 text-white px-8 py-3 rounded hover:bg-red-800 transition">
            Register As a Supplier
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    
    </>
  );
};

export default LandingPage;