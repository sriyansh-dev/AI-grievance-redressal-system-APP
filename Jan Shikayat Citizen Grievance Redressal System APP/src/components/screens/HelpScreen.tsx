import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import Header from '../shared/Header';
import NavigationBar from '../shared/NavigationBar';
const faqs = [{
  question: 'How do I lodge a complaint?',
  answer: 'To lodge a complaint, go to the home screen and tap on "Lodge a New Complaint" button. Fill in all the required details including title, description, category, and location. You can also attach photos or videos as evidence. Finally, tap on "Submit Complaint" to register your grievance.'
}, {
  question: 'How can I track my complaint status?',
  answer: 'You can track your complaint status by going to the "My Complaints" section on the home screen. Tap on any complaint to view its detailed status and timeline of actions taken.'
}, {
  question: 'What should I do if my complaint is not resolved?',
  answer: 'If your complaint is not resolved within the expected timeframe, you can escalate it by opening the complaint details and tapping on the "Escalate" button. This will forward your complaint to higher authorities.'
}, {
  question: 'Can I lodge a complaint anonymously?',
  answer: 'Yes, you can lodge complaints anonymously by using the "Continue as Guest" option on the login screen. However, without an account, you won\'t be able to track the status of your complaint or receive updates.'
}, {
  question: 'How do I change my language preference?',
  answer: 'You can change your language preference by going to Settings > Language and selecting your preferred language from the list.'
}];
const HelpScreen = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return <div className="flex flex-col min-h-screen">
      <Header title="Help & Support" leftIcon={<ChevronLeft size={24} onClick={() => navigate(-1)} />} />
      <div className="p-4 flex-1">
        <h2 className="text-lg font-medium mb-4">Frequently Asked Questions</h2>
        <div className="border rounded-lg overflow-hidden mb-6">
          {faqs.map((faq, index) => <div key={index} className={index !== 0 ? 'border-t' : ''}>
              <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50" onClick={() => toggleFAQ(index)}>
                <h3 className="font-medium">{faq.question}</h3>
                {expandedIndex === index ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
              </div>
              {expandedIndex === index && <div className="px-4 pb-4">
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
        <div>
          <h2 className="text-lg font-medium mb-4">Contact Support</h2>
          <div className="space-y-3">
            <div className="flex items-center p-4 border rounded-lg">
              <Phone size={20} className="text-gray-500 mr-3" />
              <div>
                <h3 className="font-medium">Helpline</h3>
                <p className="text-sm text-blue-600">1800-123-4567</p>
              </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg">
              <Mail size={20} className="text-gray-500 mr-3" />
              <div>
                <h3 className="font-medium">Email Support</h3>
                <p className="text-sm text-blue-600">
                  support@grievance.gov.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>;
};
export default HelpScreen;