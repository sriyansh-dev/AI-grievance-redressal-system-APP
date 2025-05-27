import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Droplet, Zap, Menu } from 'lucide-react';
import Header from '../shared/Header';
import NavigationBar from '../shared/NavigationBar';
import ComplaintCard from '../shared/ComplaintCard';
const recentComplaints = [{
  id: 'C-2023-001',
  title: 'Pothole on Main Street',
  status: 'In Progress',
  date: '2023-10-15'
}, {
  id: 'C-2023-002',
  title: 'Streetlight not working',
  status: 'Received',
  date: '2023-10-18'
}, {
  id: 'C-2023-003',
  title: 'Water supply issue',
  status: 'Resolved',
  date: '2023-10-10'
}];
const HomeScreen = () => {
  const navigate = useNavigate();
  return <div className="flex flex-col min-h-screen">
      <Header title="Home" rightIcon={<Menu size={24} />} />
      <div className="p-4 flex-1">
        <h2 className="text-lg font-medium mb-4">Hello, Citizen</h2>
        <div className="flex items-center border rounded-lg p-2 mb-6">
          <Search size={20} className="text-gray-400 mr-2" />
          <input type="text" placeholder="Search complaints..." className="flex-1 outline-none bg-transparent" />
        </div>
        <button onClick={() => navigate('/lodge-complaint')} className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium mb-8">
          Lodge a New Complaint
        </button>
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <span className="text-sm text-center">Report Pothole</span>
            </div>
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Droplet size={20} className="text-blue-600" />
              </div>
              <span className="text-sm text-center">Water Issue</span>
            </div>
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Zap size={20} className="text-blue-600" />
              </div>
              <span className="text-sm text-center">Power Outage</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium">My Complaints</h3>
            <button onClick={() => navigate('/complaints')} className="text-blue-600 text-sm">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentComplaints.map(complaint => <ComplaintCard key={complaint.id} complaint={complaint} onClick={() => navigate(`/complaint/${complaint.id}`)} />)}
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>;
};
export default HomeScreen;