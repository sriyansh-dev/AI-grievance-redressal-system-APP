import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Search, Filter } from 'lucide-react';
import Header from '../shared/Header';
import ComplaintCard from '../shared/ComplaintCard';
import NavigationBar from '../shared/NavigationBar';
const complaints = [{
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
}, {
  id: 'C-2023-004',
  title: 'Garbage not collected',
  status: 'Assigned',
  date: '2023-10-20'
}, {
  id: 'C-2023-005',
  title: 'Broken park bench',
  status: 'In Progress',
  date: '2023-10-12'
}];
const ComplaintStatusScreen = () => {
  const navigate = useNavigate();
  return <div className="flex flex-col min-h-screen">
      <Header title="My Complaints" leftIcon={<ChevronLeft size={24} onClick={() => navigate(-1)} />} />
      <div className="p-4 flex-1">
        <div className="flex items-center mb-4">
          <div className="flex-1 flex items-center border rounded-lg p-2 mr-2">
            <Search size={18} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search complaints..." className="flex-1 outline-none bg-transparent" />
          </div>
          <button className="p-2 border rounded-lg">
            <Filter size={18} />
          </button>
        </div>
        <div className="space-y-3">
          {complaints.map(complaint => <ComplaintCard key={complaint.id} complaint={complaint} onClick={() => navigate(`/complaint/${complaint.id}`)} />)}
        </div>
      </div>
      <NavigationBar />
    </div>;
};
export default ComplaintStatusScreen;