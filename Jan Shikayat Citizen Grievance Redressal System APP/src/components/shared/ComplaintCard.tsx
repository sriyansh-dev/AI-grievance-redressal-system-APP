import React from 'react';
import { ChevronRight } from 'lucide-react';
interface Complaint {
  id: string;
  title: string;
  status: string;
  date: string;
}
interface ComplaintCardProps {
  complaint: Complaint;
  onClick: () => void;
}
const ComplaintCard = ({
  complaint,
  onClick
}: ComplaintCardProps) => {
  return <div onClick={onClick} className="border rounded-lg p-4 flex items-center cursor-pointer hover:bg-gray-50">
      <div className="flex-1">
        <h3 className="font-medium">{complaint.title}</h3>
        <div className="flex items-center mt-1">
          <span className="text-xs text-gray-500">{complaint.id}</span>
          <span className="mx-2 text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">{complaint.date}</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className={`px-3 py-1 rounded-full text-xs font-medium mr-2 ${complaint.status === 'Resolved' ? 'bg-green-100 text-green-800' : complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : complaint.status === 'Assigned' ? 'bg-purple-100 text-purple-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {complaint.status}
        </div>
        <ChevronRight size={18} className="text-gray-400" />
      </div>
    </div>;
};
export default ComplaintCard;