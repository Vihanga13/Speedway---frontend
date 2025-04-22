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
  People,
  LocalShipping,
  ShoppingCart,
  Campaign,
  PendingActions,
  AttachMoney,
  Person,
  Report,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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
          <h1 className="text-xl font-bold text-gray-800">Your Logo</h1>
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

// Sample data
const salesData = [
  { month: 'Jan', sales: 4000, registrations: 240 },
  { month: 'Feb', sales: 3000, registrations: 198 },
  { month: 'Mar', sales: 5000, registrations: 300 },
  { month: 'Apr', sales: 2780, registrations: 208 },
  { month: 'May', sales: 1890, registrations: 290 },
  { month: 'Jun', sales: 2390, registrations: 230 },
];

const popularPartsData = [
  { name: 'Brake Pads', sales: 400 },
  { name: 'Oil Filter', sales: 300 },
  { name: 'Air Filter', sales: 250 },
  { name: 'Spark Plugs', sales: 200 },
  { name: 'Battery', sales: 150 },
];

const Dashboard = () => {
  const stats = [
    { title: 'Total Customers', value: '1,234', icon: <People className="text-blue-500" /> },
    { title: 'Total Suppliers', value: '56', icon: <LocalShipping className="text-green-500" /> },
    { title: 'Total Sales', value: '789', icon: <ShoppingCart className="text-purple-500" /> },
    { title: 'Active Ads', value: '23', icon: <Campaign className="text-yellow-500" /> },
    { title: 'Pending Approvals', value: '12', icon: <PendingActions className="text-red-500" /> },
    { title: 'Revenue', value: '$45,678', icon: <AttachMoney className="text-emerald-500" /> },
  ];

  const activities = [
    {
      text: 'New supplier registration: ABC Parts',
      time: '5 minutes ago',
      icon: <Person className="text-blue-500" />,
    },
    {
      text: 'New purchase: Order #12345',
      time: '10 minutes ago',
      icon: <ShoppingCart className="text-green-500" />,
    },
    {
      text: 'Reported issue: Part quality concern',
      time: '15 minutes ago',
      icon: <Report className="text-red-500" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="container mx-auto px-4 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gray-50">{stat.icon}</div>
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Sales Trends Chart */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Sales Trends</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      dot={{ strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="registrations" 
                      stroke="#82ca9d"
                      strokeWidth={2}
                      dot={{ strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Popular Parts Chart */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Popular Parts</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={popularPartsData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Bar 
                      dataKey="sales" 
                      fill="#8884d8"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="divide-y divide-gray-200">
              {activities.map((activity, index) => (
                <div key={index} className="py-4 flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-gray-50">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
