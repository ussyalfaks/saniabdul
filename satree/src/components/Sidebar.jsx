import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FileText, FormInput, Menu } from 'lucide-react';
import LOGO from '../assets/logo.png'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: Home },
    { path: '/Children', name: 'Children', icon: Users },
    // { path: '/ChildrenDetails', name: 'Children Details', icon: FileText },
    // { path: '/FamilyForm', name: 'Family Form', icon: FormInput },
    { path: '/Form', name: 'Form', icon: FormInput },
  ];

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-gray-800 text-white"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <div
        className={`flex flex-col bg-gray-900 text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-30 h-full`}
      >
        <div className="flex flex-col items-center justify-center space-y-3 mb-6">
          <img
            src={LOGO}
            className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg"
            alt="SA Family Logo"
          />
          <h2 className="text-2xl font-bold text-indigo-300">SA Family</h2>
        </div>
        
        <nav className="flex-1 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition duration-200 ${
                  location.pathname === item.path
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
                onClick={toggleSidebar}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="px-4 py-2 bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-400">© 2024 SA Family</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;