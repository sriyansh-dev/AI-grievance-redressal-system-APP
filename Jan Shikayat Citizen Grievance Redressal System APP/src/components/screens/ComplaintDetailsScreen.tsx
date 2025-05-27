import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, MapPin, Image, ArrowUp, MessageCircle } from 'lucide-react';
import Header from '../shared/Header';
import Button from '../shared/Button';
const ComplaintDetailsScreen = () => {
  const navigate = useNavigate();
  const {
    id
  } = useParams();
  // Mock data for the complaint
  const complaint = {
    id: id || 'C-2023-001',
    title: 'Pothole on Main Street',
    description: "There is a large pothole on Main Street near the intersection with Oak Avenue. It's approximately 2 feet wide and 6 inches deep. It's causing damage to vehicles and is a safety hazard.",
    category: 'Infrastructure',
    location: '123 Main Street, Cityville',
    status: 'In Progress',
    dateSubmitted: '2023-10-15',
    timeline: [{
      date: '2023-10-15',
      action: 'Complaint received',
      details: 'Your complaint has been successfully recorded in our system.'
    }, {
      date: '2023-10-16',
      action: 'Assigned to officer',
      details: 'Complaint assigned to Public Works Department, Officer: John Smith'
    }, {
      date: '2023-10-18',
      action: 'Site inspection',
      details: 'Officer visited the location and verified the issue'
    }, {
      date: '2023-10-20',
      action: 'Work scheduled',
      details: 'Repair work scheduled for next week'
    }]
  };
  return <div className="flex flex-col min-h-screen">
      <Header title="Complaint Details" leftIcon={<ChevronLeft size={24} onClick={() => navigate(-1)} />} />
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-medium">{complaint.title}</h2>
            <p className="text-sm text-gray-500">
              {complaint.id} • {complaint.dateSubmitted}
            </p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${complaint.status === 'Resolved' ? 'bg-green-100 text-green-800' : complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {complaint.status}
          </div>
        </div>
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">
              Description
            </h3>
            <p className="text-sm">{complaint.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Category</h3>
            <p className="text-sm">{complaint.category}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Location</h3>
            <div className="flex items-center">
              <MapPin size={16} className="text-gray-400 mr-1" />
              <p className="text-sm">{complaint.location}</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">
              Attachments
            </h3>
            <div className="flex space-x-2">
              <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                <Image size={20} className="text-gray-400" />
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                <Image size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Timeline</h3>
          <div className="space-y-4">
            {complaint.timeline.map((event, index) => <div key={index} className="relative pl-6 pb-4">
                <div className="absolute left-0 top-0 h-full">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  {index < complaint.timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 ml-1.5"></div>}
                </div>
                <div>
                  <h4 className="text-sm font-medium">{event.action}</h4>
                  <p className="text-xs text-gray-500">{event.date}</p>
                  <p className="text-sm mt-1">{event.details}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div className="p-4 border-t flex space-x-3">
        <Button onClick={() => navigate(`/feedback/${complaint.id}`)} variant="outline" fullWidth>
          <MessageCircle size={16} className="mr-2" />
          Add Information
        </Button>
        <Button onClick={() => alert('Complaint escalated to higher authority')} fullWidth>
          <ArrowUp size={16} className="mr-2" />
          Escalate
        </Button>
      </div>
    </div>;
};
export default ComplaintDetailsScreen;