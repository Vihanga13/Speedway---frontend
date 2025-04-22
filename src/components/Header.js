import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  return (
    <nav className="w-full">
      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  src="/path-to-your-logo/speedway-logo.png" 
                  alt="Speed Way" 
                  className="h-8"
                />
                <span className="ml-2 text-xl font-bold">SPEED WAY</span>
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <Link to="/LandingPage" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  HOMES
                </Link>
              </div>
              <Link to="/InteriorParts" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">
                SHOP
              </Link>
              <Link to="/AboutUs" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">
                ABOUT US
              </Link>
              <Link to="/ContactForm" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">
                CONTACT
              </Link>
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Cart Icon with Counter */}
              <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FaShoppingCart className="h-6 w-6 text-gray-700 hover:text-red-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Login Dropdown */}
              <div className="relative">
                <button 
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                >
                  Login
                </button>
                
                {/* Login Options Dropdown */}
                {showLoginDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link 
                      to="/Customer_Login" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                    >
                      Login as Customer
                    </Link>
                    <Link 
                      to="/login/supplier" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                    >
                      Login as Supplier
                    </Link>
                    <Link 
                      to="/login/admin" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                    >
                      Login as Admin
                    </Link>
                  </div>
                )}
              </div>

              {/* User Profile Dropdown */}
              <div className="relative group">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <FaUserCircle className="h-6 w-6 text-gray-700 hover:text-red-600" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Profile
                  </Link>
                  
                  <div className="border-t border-gray-100"></div>
                  <button 
                    onClick={() => {/* Add logout logic */}} 
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-red-600 p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Secondary Navigation */}
      <div className="bg-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <Link to="/SpecialOffers" className="text-white hover:text-gray-200 text-sm font-medium">
              PRICING PLANS
            </Link>
            <Link to="/TrackDetails" className="text-white hover:text-gray-200 text-sm font-medium">
              TRACK YOUR ITEM
            </Link>
            <Link to="/OrderHistory" className="text-white hover:text-gray-200 text-sm font-medium">
              ORDER HISTORY
            </Link>
          </div>
        </div>
      </div>

      {/* Rest of the navigation code remains the same... */}
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Other mobile menu items... */}
            
            {/* Mobile Login Options */}
            <div className="px-3 py-2">
              <div className="text-gray-700 font-medium mb-2">Login Options:</div>
              <Link to="/Customer_Login" className="block px-3 py-2 text-gray-600 hover:text-red-600 text-sm">
                Login as Customer
              </Link>
              <Link to="/login/supplier" className="block px-3 py-2 text-gray-600 hover:text-red-600 text-sm">
                Login as Supplier
              </Link>
              <Link to="/login/admin" className="block px-3 py-2 text-gray-600 hover:text-red-600 text-sm">
                Login as Admin
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;