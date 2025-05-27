import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Globe, Bell, Eye, User, HelpCircle, Info, LogOut } from 'lucide-react';
import Header from '../shared/Header';
import NavigationBar from '../shared/NavigationBar';
const SettingsScreen = () => {
  const navigate = useNavigate();
  const settingsItems = [{
    title: 'Language',
    icon: <Globe size={20} className="text-gray-500" />,
    value: 'English',
    action: () => navigate('/')
  }, {
    title: 'Notifications',
    icon: <Bell size={20} className="text-gray-500" />,
    action: () => {}
  }, {
    title: 'Accessibility',
    icon: <Eye size={20} className="text-gray-500" />,
    action: () => {}
  }, {
    title: 'Account',
    icon: <User size={20} className="text-gray-500" />,
    action: () => {}
  }, {
    title: 'Help & Support',
    icon: <HelpCircle size={20} className="text-gray-500" />,
    action: () => navigate('/help')
  }, {
    title: 'About',
    icon: <Info size={20} className="text-gray-500" />,
    action: () => navigate('/about')
  }];
  return <div className="flex flex-col min-h-screen">
      <Header title="Settings" leftIcon={<ChevronLeft size={24} onClick={() => navigate(-1)} />} />
      <div className="p-4 flex-1">
        <div className="border rounded-lg overflow-hidden">
          {settingsItems.map((item, index) => <div key={index} onClick={item.action} className={`p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 ${index !== settingsItems.length - 1 ? 'border-b' : ''}`}>
              <div className="flex items-center">
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </div>
              <div className="flex items-center">
                {item.value && <span className="text-sm text-gray-500 mr-2">
                    {item.value}
                  </span>}
                <ChevronRight size={18} className="text-gray-400" />
              </div>
            </div>)}
        </div>
        <button onClick={() => navigate('/login')} className="w-full mt-6 p-4 flex items-center justify-center text-red-600 border border-red-200 rounded-lg">
          <LogOut size={18} className="mr-2" />
          Sign Out
        </button>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Grievance Redressal App</p>
          <p className="text-xs text-gray-400 mt-1">Version 1.0.0</p>
        </div>
      </div>
      <NavigationBar />
    </div>;
};
export default SettingsScreen;