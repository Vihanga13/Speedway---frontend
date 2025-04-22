import React, { useState } from 'react';
import { FaEdit, FaPlus, FaStore, FaChartLine, FaAd, FaCamera, FaTimes, FaUser } from 'react-icons/fa';

const SupplierProfile = () => {
  // States for supplier data
  const [supplierData, setSupplierData] = useState({
    personalInfo: {
      name: "John Doe",
      email: "john@business.com",
      phone: "+1 234 567 8900",
      profileImage: "https://example.com/profile.jpg"
    },
    businessInfo: {
      businessName: "JD Auto Parts",
      businessLicense: "BL123456789",
      registrationNumber: "REG987654321",
      establishedDate: "2020-01-01",
      businessAddress: "123 Business Street, City, Country",
      businessType: "Auto Parts Supplier",
      website: "www.jdautoparts.com"
    },
    statistics: {
      totalAds: 45,
      activeAds: 12,
      totalViews: 1500,
      totalEnquiries: 89,
      successfulDeals: 34
    }
  });

  // State for edit profile modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(supplierData);
  const [imagePreview, setImagePreview] = useState(supplierData.personalInfo.profileImage);

  // State for new advertisement form
  const [showNewAdForm, setShowNewAdForm] = useState(false);
  const [newAd, setNewAd] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    images: [],
    specifications: ''
  });

  // Handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEditFormData(prev => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            profileImage: reader.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle edit form input changes
  const handleEditInputChange = (section, field, value) => {
    setEditFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to update the profile
      setSupplierData(editFormData);
      setIsEditModalOpen(false);
      // Show success message
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  // Handle new ad submission
  const handleAdSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to create the ad
      // For now, we'll just show an alert
      alert('Advertisement created successfully');
      setShowNewAdForm(false);
      setNewAd({
        title: '',
        description: '',
        category: '',
        price: '',
        images: [],
        specifications: ''
      });
    } catch (error) {
      console.error('Error creating advertisement:', error);
      alert('Failed to create advertisement');
    }
  };

  // Edit Profile Modal Component
  const EditProfileModal = () => {
    if (!isEditModalOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsEditModalOpen(false)}></div>

          {/* Modal panel */}
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="bg-white px-4 pt-5 pb-4 sm:p-6">
              {/* Profile Image Section */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FaUser className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 cursor-pointer">
                    <FaCamera className="w-4 h-4" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Profile Photo</h3>
                  <p className="text-sm text-gray-500">Update your profile picture</p>
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      value={editFormData.personalInfo.name}
                      onChange={(e) => handleEditInputChange('personalInfo', 'name', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={editFormData.personalInfo.email}
                      onChange={(e) => handleEditInputChange('personalInfo', 'email', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      value={editFormData.personalInfo.phone}
                      onChange={(e) => handleEditInputChange('personalInfo', 'phone', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Business Information</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Business Name</label>
                    <input
                      type="text"
                      value={editFormData.businessInfo.businessName}
                      onChange={(e) => handleEditInputChange('businessInfo', 'businessName', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Business License</label>
                    <input
                      type="text"
                      value={editFormData.businessInfo.businessLicense}
                      onChange={(e) => handleEditInputChange('businessInfo', 'businessLicense', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Registration Number</label>
                    <input
                      type="text"
                      value={editFormData.businessInfo.registrationNumber}
                      onChange={(e) => handleEditInputChange('businessInfo', 'registrationNumber', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Established Date</label>
                    <input
                      type="date"
                      value={editFormData.businessInfo.establishedDate}
                      onChange={(e) => handleEditInputChange('businessInfo', 'establishedDate', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Business Address</label>
                    <textarea
                      value={editFormData.businessInfo.businessAddress}
                      onChange={(e) => handleEditInputChange('businessInfo', 'businessAddress', e.target.value)}
                      rows="3"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Business Type</label>
                    <input
                      type="text"
                      value={editFormData.businessInfo.businessType}
                      onChange={(e) => handleEditInputChange('businessInfo', 'businessType', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Website</label>
                    <input
                      type="url"
                      value={editFormData.businessInfo.website}
                      onChange={(e) => handleEditInputChange('businessInfo', 'website', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-4">
          <img 
            src={supplierData.personalInfo.profileImage} 
            alt="Profile" 
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {supplierData.personalInfo.name}
            </h1>
            <p className="text-gray-600">
              {supplierData.businessInfo.businessName}
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
        {/* Business Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaStore className="mr-2" /> Business Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Business Name</p>
                <p className="font-medium">{supplierData.businessInfo.businessName}</p>
              </div>
              <div>
                <p className="text-gray-600">Business License</p>
                <p className="font-medium">{supplierData.businessInfo.businessLicense}</p>
              </div>
              <div>
                <p className="text-gray-600">Registration Number</p>
                <p className="font-medium">{supplierData.businessInfo.registrationNumber}</p>
              </div>
              <div>
                <p className="text-gray-600">Established Date</p>
                <p className="font-medium">{supplierData.businessInfo.establishedDate}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-600">Business Address</p>
                <p className="font-medium">{supplierData.businessInfo.businessAddress}</p>
              </div>
              <div>
                <p className="text-gray-600">Business Type</p>
                <p className="font-medium">{supplierData.businessInfo.businessType}</p>
              </div>
              <div>
                <p className="text-gray-600">Website</p>
                <p className="font-medium">{supplierData.businessInfo.website}</p>
              </div>
            </div>
          </div>

          {/* Advertisement Statistics */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaChartLine className="mr-2" /> Advertisement Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Total Ads</p>
                <p className="text-2xl font-bold text-blue-600">{supplierData.statistics.totalAds}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Active Ads</p>
                <p className="text-2xl font-bold text-green-600">{supplierData.statistics.activeAds}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-purple-600">{supplierData.statistics.totalViews}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Total Enquiries</p>
                <p className="text-2xl font-bold text-orange-600">{supplierData.statistics.totalEnquiries}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Successful Deals</p>
                <p className="text-2xl font-bold text-green-600">{supplierData.statistics.successfulDeals}</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Advertisement Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaAd className="mr-2" /> New Advertisement
            </h2>
            <button
              onClick={() => setShowNewAdForm(true)}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2"
            >
              <FaPlus />
              <span>Create New Ad</span>
            </button>

            {/* New Advertisement Form */}
            {showNewAdForm && (
              <form onSubmit={handleAdSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={newAd.title}
                    onChange={(e) => setNewAd({...newAd, title: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={newAd.category}
                    onChange={(e) => setNewAd({...newAd, category: e.target.value})}
                  >
                    <option value="">Select Category</option>
                    <option value="auto-parts">Auto Parts</option>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows="4"
                    value={newAd.description}
                    onChange={(e) => setNewAd({...newAd, description: e.target.value})}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={newAd.price}
                    onChange={(e) => setNewAd({...newAd, price: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Images</label>
                  <input
                    type="file"
                    multiple
                    className="mt-1 block w-full"
                    onChange={(e) => {
                      // Handle image upload
                      const files = Array.from(e.target.files);
                      setNewAd({...newAd, images: files});
                    }}
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex-1"
                  >
                    Publish Advertisement
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewAdForm(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal />
    </div>
  );
};

export default SupplierProfile;
