import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminId: '',
    password: '',
    securityCode: '',
    rememberDevice: false
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Add your admin login logic here
      console.log('Admin login attempt:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // If login successful, redirect to admin dashboard
      // navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="rounded-full bg-red-100 p-3">
            <Lock className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Portal
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Secure access for administrative controls
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="adminId" className="block text-sm font-medium text-gray-700">
                Admin ID
              </label>
              <div className="mt-1">
                <input
                  id="adminId"
                  name="adminId"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  value={formData.adminId}
                  onChange={(e) => setFormData({...formData, adminId: e.target.value})}
                  placeholder="Enter your admin ID"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700">
                Security Code
              </label>
              <div className="mt-1">
                <input
                  id="securityCode"
                  name="securityCode"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  value={formData.securityCode}
                  onChange={(e) => setFormData({...formData, securityCode: e.target.value})}
                  placeholder="Enter 2FA security code"
                  maxLength={6}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Enter the 6-digit code from your authenticator app
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-device"
                  name="remember-device"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  checked={formData.rememberDevice}
                  onChange={(e) => setFormData({...formData, rememberDevice: e.target.checked})}
                />
                <label htmlFor="remember-device" className="ml-2 block text-sm text-gray-900">
                  Remember this device
                </label>
              </div>

              <div className="text-sm">
                <Link to="/admin/forgot-password" className="font-medium text-red-600 hover:text-red-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                  ${isLoading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'} 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Need help?</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/admin/support"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Contact System Administrator
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>This is a secure system and all activities are monitored.</p>
        <p>Unauthorized access attempts will be reported.</p>
      </div>
    </div>
  );
};

export default AdminLogin;