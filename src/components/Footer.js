import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        {/* Top Section - Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/speed-way-logo.png" alt="Speed Way" className="h-8" />
              <span className="text-xl font-bold">SPEED <span className="text-red-600">WAY</span></span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="text-lg mb-4">Subscribe to our newsletter</h3>
            <div className="flex w-full max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Input your email"
                  className="w-full pl-10 pr-3 py-2 bg-transparent border border-gray-600 rounded-l-md focus:outline-none focus:border-purple-500"
                />
              </div>
              <button className="px-6 py-2 bg-red-700 text-white rounded-r-md hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
         
          <a href="/AboutUS" className="hover:text-red-700 transition-colors">About us</a>
          <a href="/ContactForm" className="hover:text-red-700 transition-colors">Contact us</a>
          <a href="/InteriorParts" className="hover:text-red-700 transition-colors">Shop</a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            

            {/* Copyright and Legal Links */}
            <div className="text-sm text-gray-400">
              <span>© 2024 Brand, Inc.</span>
              <span className="mx-2">•</span>
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <span className="mx-2">•</span>
              <a href="/terms" className="hover:text-white">Terms</a>
              <span className="mx-2">•</span>
              <a href="/sitemap" className="hover:text-white">Sitemap</a>
            </div>

           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;