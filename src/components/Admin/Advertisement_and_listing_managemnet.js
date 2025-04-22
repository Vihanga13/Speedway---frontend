import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Image,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Star,
  Search,
  AlertCircle,
  Eye,
} from 'lucide-react';
import { 
  FaHome, 
  FaUsers, 
  FaTruck, 
  FaList,
  FaBars,
  FaSignOutAlt 
} from 'react-icons/fa';

// Sample data
const listingsData = [
  {
    id: 1,
    title: "Toyota Camry 2020 Brake Pads",
    supplier: "AutoParts Plus",
    price: 89.99,
    status: "pending",
    category: "Brake System",
    condition: "New",
    brand: "Toyota",
    description: "Genuine Toyota brake pads for Camry 2020 model",
    images: ["brake-pad-1.jpg", "brake-pad-2.jpg"],
    datePosted: "2024-02-14",
    isFeatured: false,
    views: 145,
    compatibility: ["Toyota Camry 2018-2022"],
    specifications: {
      manufacturer: "Toyota",
      partNumber: "04465-33471",
      warranty: "1 year"
    }
  },
];

const AdvertisementManagement = () => {
  const [listings, setListings] = useState(listingsData);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaHome size={20} />
    },
    {
      path: '/Customer-management',
      name: 'Customer Management',
      icon: <FaUsers size={20} />
    },
    {
      path: '/Supplier-management',
      name: 'Supplier Management',
      icon: <FaTruck size={20} />
    },
    {
      path: '/Advertisement-management',
      name: 'Advertisement & Listing',
      icon: <FaList size={20} />
    }
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  // Listing Details/Edit Modal Component
  const ListingModal = ({ listing, isEdit, onClose, onSave }) => {
    const [editedListing, setEditedListing] = useState(listing);

    const handleSave = () => {
      onSave(editedListing);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        {/* Your existing modal content */}
      </div>
    );
  };

  // Confirmation Modal Component
  const ConfirmationModal = ({ onConfirm, onCancel, type }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      {/* Your existing confirmation modal content */}
    </div>
  );

  // Handler functions
  const handleStatusChange = (listingId, newStatus) => {
    setListings(listings.map(listing => 
      listing.id === listingId ? {...listing, status: newStatus} : listing
    ));
    setShowConfirmation(false);
  };

  const handleFeatureToggle = (listingId) => {
    setListings(listings.map(listing => 
      listing.id === listingId ? {...listing, isFeatured: !listing.isFeatured} : listing
    ));
  };

  const handleSaveChanges = (editedListing) => {
    setListings(listings.map(listing => 
      listing.id === editedListing.id ? editedListing : listing
    ));
    setShowEditModal(false);
  };

  const handleRemoveListing = (listingId) => {
    setListings(listings.filter(listing => listing.id !== listingId));
    setShowConfirmation(false);
  };

  // Filter listings
  const filteredListings = listings.filter(listing => {
    const matchesStatus = filterStatus === 'all' || listing.status === filterStatus;
    const matchesCategory = categoryFilter === 'all' || listing.category === categoryFilter;
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="relative">
        <button 
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={20} />
        </button>

        <div className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed top-0 left-0 h-screen w-64
          bg-white shadow-lg transition-transform duration-300 ease-in-out
          lg:translate-x-0 z-40
          flex flex-col
        `}>
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-800">SpeedWay Admin</h1>
          </div>

          <nav className="mt-6 px-4 flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-lg mb-2
                  transition-colors duration-200
                  ${location.pathname === item.path 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <span className={`
                  ${location.pathname === item.path 
                    ? 'text-blue-600' 
                    : 'text-gray-500'
                  }
                `}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-3 w-full rounded-lg
                       text-gray-600 hover:bg-red-50 hover:text-red-600
                       transition-colors duration-200"
            >
              <FaSignOutAlt size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Advertisement Management</h1>
            <p className="mt-2 text-gray-600">Manage and monitor spare parts listings</p>
          </div>

          {/* Filters and Search */}
          <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search listings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="all">All Categories</option>
                <option value="Brake System">Brake System</option>
                <option value="Engine Parts">Engine Parts</option>
                <option value="Suspension">Suspension</option>
                <option value="Electrical">Electrical</option>
              </select>
            </div>
          </div>

          {/* Listings Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Featured
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredListings.map((listing) => (
                  <tr key={listing.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={listing.images[0]}
                          alt={listing.title}
                          className="h-16 w-16 object-cover rounded"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                          <div className="text-sm text-gray-500">{listing.supplier}</div>
                          <div className="text-xs text-gray-500">{listing.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${listing.status === 'approved' ? 'bg-green-100 text-green-800' :
                          listing.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'}`}>
                        {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ${listing.price}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleFeatureToggle(listing.id)}
                        className={`text-yellow-400 hover:text-yellow-500`}
                      >
                        <Star className={`h-5 w-5 ${listing.isFeatured ? 'fill-current' : ''}`} />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedListing(listing);
                            setShowDetailsModal(true);
                          }}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedListing(listing);
                            setShowEditModal(true);
                          }}
                          className="text-blue-400 hover:text-blue-500"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedListing(listing);
                            setActionType('remove');
                            setShowConfirmation(true);
                          }}
                          className="text-red-400 hover:text-red-500"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showDetailsModal && selectedListing && (
        <ListingModal
          listing={selectedListing}
          isEdit={false}
          onClose={() => setShowDetailsModal(false)}
        />
      )}

      {showEditModal && selectedListing && (
        <ListingModal
          listing={selectedListing}
          isEdit={true}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveChanges}
        />
      )}

      {showConfirmation && selectedListing && (
        <ConfirmationModal
          type={actionType}
          onConfirm={() => {
            if (actionType === 'remove') {
              handleRemoveListing(selectedListing.id);
            } else {
              handleStatusChange(selectedListing.id, actionType === 'approve' ? 'approved' : 'rejected');
            }
          }}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default AdvertisementManagement;
