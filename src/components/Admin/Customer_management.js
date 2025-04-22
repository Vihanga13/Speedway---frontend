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
  Ban,
  Eye,
  Search,
  UserX,
  XCircle,
  AlertCircle
} from 'lucide-react';

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

// Sample customer data
const customerData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1234567890",
    status: "active",
    joinDate: "2024-01-15",
    totalPurchases: 12,
    totalSpent: 2500,
    lastPurchase: "2024-02-10",
    purchaseHistory: [
      {
        id: "ORD-001",
        date: "2024-02-10",
        amount: 500,
        status: "completed",
        items: ["Car Battery", "Oil Filter"]
      },
      {
        id: "ORD-002",
        date: "2024-01-25",
        amount: 300,
        status: "completed",
        items: ["Brake Pads"]
      }
    ],
    disputes: [
      {
        id: "DSP-001",
        date: "2024-02-01",
        type: "Delivery",
        status: "resolved"
      }
    ]
  }
];

// Confirmation Modal Component
const ConfirmationModal = ({ onConfirm, onCancel, type }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full">
      <div className="flex items-center mb-4">
        <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
        <h3 className="text-lg font-medium">Confirm Action</h3>
      </div>
      <p className="text-gray-600 mb-4">
        {type === 'suspend' 
          ? 'Are you sure you want to suspend this customer? They will not be able to make purchases while suspended.'
          : 'Are you sure you want to ban this customer? This action cannot be undone.'}
      </p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);

// Customer Details Modal Component
const CustomerDetailsModal = ({ customer, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Customer Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <XCircle className="h-6 w-6" />
          </button>
        </div>

        {/* Customer Information */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Name</label>
                <p className="text-gray-900">{customer.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="text-gray-900">{customer.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <p className="text-gray-900">{customer.phone}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Member Since</label>
                <p className="text-gray-900">{new Date(customer.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Account Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Total Purchases</div>
                <div className="text-xl font-bold text-gray-900">{customer.totalPurchases}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Total Spent</div>
                <div className="text-xl font-bold text-gray-900">${customer.totalSpent}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase History */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">Purchase History</h3>
          <div className="bg-white border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customer.purchaseHistory.map((purchase) => (
                  <tr key={purchase.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{purchase.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {new Date(purchase.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {purchase.items.join(", ")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">${purchase.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full
                        ${purchase.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {purchase.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disputes */}
        <div>
          <h3 className="text-lg font-medium mb-4">Disputes History</h3>
          <div className="bg-white border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customer.disputes.map((dispute) => (
                  <tr key={dispute.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{dispute.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {new Date(dispute.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{dispute.type}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full
                        ${dispute.status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {dispute.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main CustomerManagement Component
const CustomerManagement = () => {
  const [customers, setCustomers] = useState(customerData);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [actionType, setActionType] = useState(null);

  // Handler functions
  const handleStatusChange = (customerId, newStatus) => {
    setCustomers(customers.map(customer => 
      customer.id === customerId ? {...customer, status: newStatus} : customer
    ));
    setShowConfirmation(false);
  };

  const handleActionClick = (customer, type) => {
    setSelectedCustomer(customer);
    setActionType(type);
    setShowConfirmation(true);
  };

  // Filter customers based on status and search term
  const filteredCustomers = customers.filter(customer => {
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus;
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
            <p className="mt-2 text-gray-600">View and manage customer accounts and activities</p>
          </div>

          {/* Filters and Search */}
          <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="banned">Banned</option>
              </select>
            </div>
          </div>

          {/* Customers Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purchase History
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                          <div className="text-sm text-gray-500">{customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full
                        ${customer.status === 'active' ? 'bg-green-100 text-green-800' :
                          customer.status === 'suspended' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'}`}>
                        {customer.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        <div>Total Orders: {customer.totalPurchases}</div>
                        <div>Total Spent: ${customer.totalSpent}</div>
                        <div>Last Purchase: {new Date(customer.lastPurchase).toLocaleDateString()}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => {
                            setSelectedCustomer(customer);
                            setShowDetailsModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Details"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        {customer.status === 'active' && (
                          <button
                            onClick={() => handleActionClick(customer, 'suspend')}
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Suspend Customer"
                          >
                            <Ban className="h-5 w-5" />
                          </button>
                        )}
                        {customer.status !== 'banned' && (
                          <button
                            onClick={() => handleActionClick(customer, 'ban')}
                            className="text-red-600 hover:text-red-900"
                            title="Ban Customer"
                          >
                            <UserX className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modals */}
          {showDetailsModal && selectedCustomer && (
            <CustomerDetailsModal
              customer={selectedCustomer}
              onClose={() => setShowDetailsModal(false)}
            />
          )}

          {showConfirmation && selectedCustomer && (
            <ConfirmationModal
              type={actionType}
              onConfirm={() => handleStatusChange(selectedCustomer.id, actionType === 'suspend' ? 'suspended' : 'banned')}
              onCancel={() => setShowConfirmation(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
