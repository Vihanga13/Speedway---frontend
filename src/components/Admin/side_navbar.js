// SideNav.jsx
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
    // Add your logout logic here
    // For example:
    // logout();
    // clearLocalStorage();
    navigate('/login');
  };

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed top-0 left-0 h-screen w-64
        bg-white shadow-lg transition-transform duration-300 ease-in-out
        lg:translate-x-0 z-40
        flex flex-col
      `}>
        {/* Logo or Brand */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">SpeedWay Admin</h1>
        </div>

        {/* Navigation Items */}
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

        {/* Logout Button */}
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

export default SideNav;
