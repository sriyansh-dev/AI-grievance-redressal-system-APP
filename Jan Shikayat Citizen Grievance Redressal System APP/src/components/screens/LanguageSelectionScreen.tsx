import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../shared/Button';
const languages = [{
  code: 'en',
  name: 'English'
}, {
  code: 'hi',
  name: 'हिंदी (Hindi)'
}, {
  code: 'ta',
  name: 'தமிழ் (Tamil)'
}, {
  code: 'te',
  name: 'తెలుగు (Telugu)'
}, {
  code: 'bn',
  name: 'বাংলা (Bengali)'
}, {
  code: 'mr',
  name: 'मराठी (Marathi)'
}, {
  code: 'gu',
  name: 'ગુજરાતી (Gujarati)'
}, {
  code: 'kn',
  name: 'ಕನ್ನಡ (Kannada)'
}];
const LanguageSelectionScreen = () => {
  const navigate = useNavigate();
  return <div className="flex flex-col min-h-screen p-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-center my-6">
          Select Your Language
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Choose your preferred language
        </p>
        <div className="border rounded-lg overflow-hidden">
          {languages.map((lang, index) => <div key={lang.code} className={`p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 ${index !== languages.length - 1 ? 'border-b' : ''}`}>
              <span>{lang.name}</span>
              <ChevronRight size={18} className="text-gray-400" />
            </div>)}
        </div>
      </div>
      <div className="mt-6">
        <Button onClick={() => navigate('/login')} fullWidth>
          Next
        </Button>
      </div>
    </div>;
};
export default LanguageSelectionScreen;