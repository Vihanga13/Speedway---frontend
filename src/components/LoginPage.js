import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [showRegisterOptions, setShowRegisterOptions] = useState(false);

  // Function to handle registration option selection

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        <div className="absolute inset-0 bg-red-600 w-8" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <img
            src="/mitsubishi-car.jpg"
            alt="Mitsubishi Car"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-red-600 w-8 h-full" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          {/* Welcome Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-red-600">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-500">LOGIN TO CONTINUE</p>
          </div>

          {/* Login Form */}
          <form className="mt-8 space-y-6">
            {/* Email Field */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="xxxxxxxxxx"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <Eye className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Account Type Dropdown */}
            <div>
              <label className="text-sm font-medium text-gray-700">Account Type</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500">
                <option>Supplier</option>
                <option>Customer</option>
                <option>Dealer</option>
              </select>
            </div>

            {/* Forget Password Link */}
            <div className="text-right">
              <button type="button" className="text-sm text-gray-500 hover:text-red-600">
                Forget Password ?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              LOGIN
            </button>

            {/* Register Section */}
            <div className="text-center text-sm relative">
              <span className="text-gray-500">DON'T HAVE AN ACCOUNT ? </span>
              <button
                type="button"
                onClick={() => setShowRegisterOptions(!showRegisterOptions)}
                className="text-red-600 hover:text-red-700"
              >
                REGISTER
              </button>

              {/* Registration Options Dropdown */}
              {showRegisterOptions && (
  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 left-1/2 transform -translate-x-1/2">
    <div className="py-1" role="menu" aria-orientation="vertical">
      <Link
        to="/CustomerReg"
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Register as Customer
      </Link>
      <Link
        to="/SupplierReg1"
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Register as Supplier
      </Link>
    </div>
  </div>
)}

            </div>

            {/* Terms and Privacy */}
            <div className="text-center text-xs text-gray-500">
              By signing up to create an account I accept Company's{' '}
              <button type="button" className="text-red-600 hover:text-red-700">
                Terms of use
              </button>{' '}
              &{' '}
              <button type="button" className="text-red-600 hover:text-red-700">
                Privacy Policy
              </button>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
