import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, FileText, Shield } from 'lucide-react';
import Header from '../shared/Header';
import NavigationBar from '../shared/NavigationBar';
const AboutScreen = () => {
  const navigate = useNavigate();
  return <div className="flex flex-col min-h-screen">
      <Header title="About" leftIcon={<ChevronLeft size={24} onClick={() => navigate(-1)} />} />
      <div className="p-4 flex-1">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-white">GR</span>
          </div>
          <h1 className="text-xl font-bold">Grievance Redressal</h1>
          <p className="text-sm text-gray-500 mt-1">Version 1.0.0</p>
        </div>
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            The Citizen Grievance Redressal App is an initiative by the
            Government to provide citizens with a platform to report issues and
            get them resolved efficiently. Our mission is to improve public
            services through citizen feedback and participation.
          </p>
          <p className="text-sm text-gray-600">
            This app allows you to lodge complaints related to various public
            services, track their status, and provide feedback on the resolution
            process. Your voice matters in making our community better.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden mb-6">
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 border-b" onClick={() => {}}>
            <div className="flex items-center">
              <FileText size={20} className="text-gray-500 mr-3" />
              <span>Terms of Service</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50" onClick={() => {}}>
            <div className="flex items-center">
              <Shield size={20} className="text-gray-500 mr-3" />
              <span>Privacy Policy</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Developed by</p>
          <p className="text-sm font-medium">
            Department of Information Technology
          </p>
          <p className="text-xs text-gray-500 mt-1">Government of India</p>
          <p className="text-xs text-gray-400 mt-6">
            © 2023 All Rights Reserved
          </p>
        </div>
      </div>
      <NavigationBar />
    </div>;
};
export default AboutScreen;