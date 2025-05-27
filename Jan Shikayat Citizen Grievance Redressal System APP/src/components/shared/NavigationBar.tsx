import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Settings } from 'lucide-react';
const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [{
    icon: Home,
    label: 'Home',
    path: '/home'
  }, {
    icon: FileText,
    label: 'Complaints',
    path: '/complaints'
  }, {
    icon: Settings,
    label: 'Settings',
    path: '/settings'
  }];
  return <div className="flex items-center justify-around border-t bg-white py-2">
      {navItems.map((item, index) => {
      const Icon = item.icon;
      const isActive = location.pathname === item.path;
      return <button key={index} onClick={() => navigate(item.path)} className="flex flex-col items-center py-2 px-4">
            <Icon size={24} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
            <span className={`text-xs mt-1 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
              {item.label}
            </span>
          </button>;
    })}
    </div>;
};
export default NavigationBar;