import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaUsers, 
  FaTruck, 
  FaList,
  FaBars,
  FaSignOutAlt 
} from 'react-icons/fa';
import {
  CheckCircle,
  XCircle,
  Edit,
  Ban,
  Search,
} from 'lucide-react';

// Sample data
const supplierData = [
  {
    id: 1,
    businessName: "AutoParts Plus",
    status: "pending",
    contactPerson: "John Doe",
    email: "john@autoparts.com",
    phone: "+1234567890",
    address: "123 Business St, City",
    registrationDate: "2024-02-10",
    documentsVerified: false,
    adsPosted: 15,
    salesCount: 45,
    rating: 4.5
  },
  {
    id: 2,
    businessName: "Car Parts Co",
    status: "approved",
    contactPerson: "Jane Smith",
    email: "jane@carparts.com",
    phone: "+0987654321",
    address: "456 Auto Ave, Town",
    registrationDate: "2024-01-15",
    documentsVerified: true,
    adsPosted: 25,
    salesCount: 78,
    rating: 4.8
  },
  // Add more sample data as needed
];

// SideNav Component
const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

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

  return (
    <div className="relative">
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      <div className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
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
  );
};

// Supplier Details Modal Component
const SupplierDetailsModal = ({ supplier, onClose, onSave }) => {
  const [editedSupplier, setEditedSupplier] = useState(supplier);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Supplier Details</h2>
          
          {/* Supplier Edit Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Name</label>
              <input
                type="text"
                value={editedSupplier.businessName}
                onChange={(e) => setEditedSupplier({...editedSupplier, businessName: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Person</label>
                <input
                  type="text"
                  value={editedSupplier.contactPerson}
                  onChange={(e) => setEditedSupplier({...editedSupplier, contactPerson: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  value={editedSupplier.phone}
                  onChange={(e) => setEditedSupplier({...editedSupplier, phone: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={editedSupplier.email}
                onChange={(e) => setEditedSupplier({...editedSupplier, email: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                value={editedSupplier.address}
                onChange={(e) => setEditedSupplier({...editedSupplier, address: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                rows={3}
              />
            </div>

            {/* Document Verification Section */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-medium">Documents</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Business Registration</span>
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Tax Certificate</span>
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-medium">Performance Metrics</h3>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500">Ads Posted</div>
                  <div className="text-xl font-bold">{editedSupplier.adsPosted}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500">Sales</div>
                  <div className="text-xl font-bold">{editedSupplier.salesCount}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500">Rating</div>
                  <div className="text-xl font-bold">{editedSupplier.rating}/5</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(editedSupplier)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main SupplierManagement Component
const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState(supplierData);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Handler functions
  const handleStatusChange = (supplierId, newStatus) => {
    setSuppliers(suppliers.map(supplier => 
      supplier.id === supplierId ? {...supplier, status: newStatus} : supplier
    ));
  };

  const handleEdit = (supplier) => {
    setSelectedSupplier(supplier);
    setShowDetailsModal(true);
  };

  const handleSaveChanges = (editedSupplier) => {
    setSuppliers(suppliers.map(supplier => 
      supplier.id === editedSupplier.id ? editedSupplier : supplier
    ));
    setShowDetailsModal(false);
  };

  // Filter suppliers based on status and search term
  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesStatus = filterStatus === 'all' || supplier.status === filterStatus;
    const matchesSearch = supplier.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Supplier Management</h1>
            <p className="mt-2 text-gray-600">Manage and monitor supplier registrations and activities</p>
          </div>

          {/* Filters and Search */}
          <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search suppliers..."
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
                <option value="suspended">Suspended</option>
              </select>
            </div>
          </div>

          {/* Suppliers Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Business Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSuppliers.map((supplier) => (
                  <tr key={supplier.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{supplier.businessName}</div>
                          <div className="text-sm text-gray-500">{supplier.email}</div>
                          <div className="text-sm text-gray-500">{supplier.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full
                        ${supplier.status === 'approved' ? 'bg-green-100 text-green-800' :
                          supplier.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          supplier.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'}`}>
                        {supplier.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        <div>Ads: {supplier.adsPosted}</div>
                        <div>Sales: {supplier.salesCount}</div>
                        <div>Rating: {supplier.rating}/5</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleEdit(supplier)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        {supplier.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleStatusChange(supplier.id, 'approved')}
                              className="text-green-600 hover:text-green-900"
                            >
                              <CheckCircle className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleStatusChange(supplier.id, 'rejected')}
                              className="text-red-600 hover:text-red-900"
                            >
                              <XCircle className="h-5 w-5" />
                            </button>
                          </>
                        )}
                        {supplier.status === 'approved' && (
                          <button
                            onClick={() => handleStatusChange(supplier.id, 'suspended')}
                            className="text-yellow-600 hover:text-yellow-900"
                          >
                            <Ban className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Supplier Details Modal */}
          {showDetailsModal && selectedSupplier && (
            <SupplierDetailsModal
              supplier={selectedSupplier}
              onClose={() => setShowDetailsModal(false)}
              onSave={handleSaveChanges}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplierManagement;
