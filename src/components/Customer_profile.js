import React, { useState } from 'react';
import { FaEdit, FaUser, FaHistory, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar, FaBox, FaCamera, FaTrash } from 'react-icons/fa';
import imageCompression from 'browser-image-compression';

const CustomerProfile = () => {
  // Customer data state
  const [customerData, setCustomerData] = useState({
    personalInfo: {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 234 567 8900",
      profileImage: "https://example.com/profile.jpg",
      dateJoined: "2023-01-15",
      address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA"
      }
    },
    orderHistory: [
      {
        orderId: "ORD-001",
        date: "2024-02-15",
        items: [
          {
            name: "Car Battery",
            price: 129.99,
            quantity: 1,
            status: "Delivered",
            image: "https://example.com/battery.jpg"
          }
        ],
        total: 129.99,
        status: "Delivered",
        trackingNumber: "TRK123456789"
      },
      {
        orderId: "ORD-002",
        date: "2024-02-01",
        items: [
          {
            name: "Brake Pads",
            price: 45.99,
            quantity: 2,
            status: "Delivered",
            image: "https://example.com/brakes.jpg"
          }
        ],
        total: 91.98,
        status: "Delivered",
        trackingNumber: "TRK987654321"
      }
    ],
    wishlist: [
      {
        id: "PROD-001",
        name: "LED Headlights",
        price: 199.99,
        image: "https://example.com/headlights.jpg"
      },
      {
        id: "PROD-002",
        name: "Air Filter",
        price: 24.99,
        image: "https://example.com/filter.jpg"
      }
    ],
    statistics: {
      totalOrders: 15,
      totalSpent: 1250.50,
      averageRating: 4.8,
      reviewsGiven: 12
    }
  });

  // Edit profile modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(customerData.personalInfo);
  const [imagePreview, setImagePreview] = useState(customerData.personalInfo.profileImage);
  const [isLoading, setIsLoading] = useState(false);

  // Image validation and handling functions
  const validateImage = (file) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert('File is too large. Maximum size is 5MB.');
      return false;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      alert('Invalid file type. Please upload a JPEG, PNG or GIF image.');
      return false;
    }

    return true;
  };

  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true
    };
    
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error('Error compressing image:', error);
      return file;
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    if (!validateImage(file)) return;

    setIsLoading(true);
    try {
      const compressedFile = await compressImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEditFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
        setIsLoading(false);
      };
      reader.onerror = () => {
        alert('Error reading file');
        setIsLoading(false);
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error('Error handling image upload:', error);
      alert('Error uploading image');
      setIsLoading(false);
    }
  };

  // Status badge color utility
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Edit Profile Modal Component
  const EditProfileModal = () => {
    if (!isEditModalOpen) return null;

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        // Here you would typically make an API call to update the profile
        setCustomerData(prev => ({
          ...prev,
          personalInfo: editFormData
        }));
        setIsEditModalOpen(false);
        alert('Profile updated successfully');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Edit Profile</h2>
            <button 
              onClick={() => setIsEditModalOpen(false)} 
              className="text-gray-500 hover:text-gray-700"
              disabled={isLoading}
            >
              <FaEdit className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Photo Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FaUser className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                </div>
                
                {/* Camera Icon Upload Button */}
                <label className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 cursor-pointer shadow-lg">
                  <FaCamera className="w-4 h-4" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e.target.files[0])}
                    disabled={isLoading}
                  />
                </label>

                {/* Remove Photo Button */}
                {imagePreview && (
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setEditFormData(prev => ({
                        ...prev,
                        profileImage: ''
                      }));
                    }}
                    className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                    disabled={isLoading}
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500">
                Click the camera icon to upload a new photo
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({...editFormData, email: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={editFormData.phone}
                  onChange={(e) => setEditFormData({...editFormData, phone: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  value={editFormData.address.street}
                  onChange={(e) => setEditFormData({
                    ...editFormData,
                    address: {...editFormData.address, street: e.target.value}
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    value={editFormData.address.city}
                    onChange={(e) => setEditFormData({
                      ...editFormData,
                      address: {...editFormData.address, city: e.target.value}
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    value={editFormData.address.state}
                    onChange={(e) => setEditFormData({
                      ...editFormData,
                      address: {...editFormData.address, state: e.target.value}
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    value={editFormData.address.zipCode}
                    onChange={(e) => setEditFormData({
                      ...editFormData,
                      address: {...editFormData.address, zipCode: e.target.value}
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    value={editFormData.address.country}
                    onChange={(e) => setEditFormData({
                      ...editFormData,
                      address: {...editFormData.address, country: e.target.value}
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
            {customerData.personalInfo.profileImage ? (
              <img 
                src={customerData.personalInfo.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FaUser className="w-10 h-10 text-gray-400" />
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {customerData.personalInfo.name}
            </h1>
            <p className="text-gray-600">
              Member since {new Date(customerData.personalInfo.dateJoined).toLocaleDateString()}
            </p>
          </div>
          <button 
            onClick={() => setIsEditModalOpen(true)}
            className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <FaEdit />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400" />
                <span>{customerData.personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-400" />
                <span>{customerData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  {customerData.personalInfo.address.street},<br />
                  {customerData.personalInfo.address.city}, {customerData.personalInfo.address.state} {customerData.personalInfo.address.zipCode},<br />
                  {customerData.personalInfo.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Statistics */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-blue-600">{customerData.statistics.totalOrders}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-green-600">${customerData.statistics.totalSpent.toFixed(2)}</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaHistory className="mr-2" /> Order History
            </h2>
            <div className="space-y-6">
              {customerData.orderHistory.map((order) => (
                <div key={order.orderId} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">Order #{order.orderId}</h3>
                      <p className="text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Tracking Number:</p>
                      <p className="font-medium">{order.trackingNumber}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total Amount:</p>
                      <p className="text-xl font-bold">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal />
    </div>
  );
};

export default CustomerProfile;
