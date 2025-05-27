import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Camera, Paperclip, Mic } from 'lucide-react';
import Header from '../shared/Header';
import Button from '../shared/Button';
const ComplaintLodgingScreen = () => {
  const navigate = useNavigate();
  return <div className="flex flex-col min-h-screen">
      <Header title="Lodge a Complaint" leftIcon={<ChevronLeft size={24} onClick={() => navigate(-1)} />} />
      <div className="p-4 flex-1">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Complaint Title*
            </label>
            <input type="text" className="w-full p-3 border rounded-lg" placeholder="Enter a title for your complaint" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <div className="relative">
              <textarea className="w-full p-3 border rounded-lg min-h-[120px]" placeholder="Describe your issue in detail..." />
              <button className="absolute right-3 bottom-3 bg-gray-100 p-2 rounded-full">
                <Mic size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category*
            </label>
            <select className="w-full p-3 border rounded-lg bg-white">
              <option value="">Select a category</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="utilities">Utilities</option>
              <option value="sanitation">Sanitation</option>
              <option value="emergency">Emergency</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location*
            </label>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <MapPin size={24} className="text-gray-400 mr-2" />
                <span className="text-gray-500">Select location on map</span>
              </div>
              <div className="p-3 flex items-center justify-between border-t">
                <span className="text-sm text-gray-500">
                  Use current location
                </span>
                <button className="text-blue-600 text-sm">Select</button>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attachments
            </label>
            <div className="flex space-x-3 mb-2">
              <button className="flex-1 flex flex-col items-center justify-center h-24 border border-dashed rounded-lg">
                <Camera size={24} className="text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Take Photo</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center h-24 border border-dashed rounded-lg">
                <Paperclip size={24} className="text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Upload File</span>
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Supported formats: JPG, PNG, MP4, MP3 (max 10MB)
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <Button onClick={() => {
        // Show success message and redirect
        alert('Complaint submitted successfully! Your complaint ID: C-2023-004');
        navigate('/home');
      }} fullWidth>
          Submit Complaint
        </Button>
      </div>
    </div>;
};
export default ComplaintLodgingScreen;