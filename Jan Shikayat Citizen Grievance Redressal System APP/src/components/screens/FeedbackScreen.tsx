import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Star } from 'lucide-react';
import Header from '../shared/Header';
import Button from '../shared/Button';
const FeedbackScreen = () => {
  const navigate = useNavigate();
  const {
    id
  } = useParams();
  const [rating, setRating] = useState(0);
  return <div className="flex flex-col min-h-screen">
      <Header title="Feedback" leftIcon={<ChevronLeft size={24} onClick={() => navigate(-1)} />} />
      <div className="p-4 flex-1">
        <div className="text-center mb-6">
          <h2 className="text-lg font-medium mb-1">Rate Your Experience</h2>
          <p className="text-sm text-gray-500">Complaint ID: {id}</p>
        </div>
        <div className="flex justify-center mb-8">
          {[1, 2, 3, 4, 5].map(value => <button key={value} onClick={() => setRating(value)} className="mx-2">
              <Star size={40} className={value <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
            </button>)}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Comments (Optional)
          </label>
          <textarea className="w-full p-3 border rounded-lg min-h-[120px]" placeholder="Share your experience with the complaint resolution process..." />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Suggestions for Improvement (Optional)
          </label>
          <textarea className="w-full p-3 border rounded-lg min-h-[80px]" placeholder="How can we improve our service?" />
        </div>
      </div>
      <div className="p-4 border-t">
        <Button onClick={() => {
        alert('Thank you for your feedback!');
        navigate('/home');
      }} fullWidth disabled={rating === 0}>
          Submit Feedback
        </Button>
      </div>
    </div>;
};
export default FeedbackScreen;