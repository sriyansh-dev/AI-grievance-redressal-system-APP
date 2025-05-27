import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
const LoginScreen = () => {
  const navigate = useNavigate();
  return <div className="flex flex-col min-h-screen p-4">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-center mb-8">
          Grievance Redressal
        </h1>
        <div className="mb-6">
          <div className="flex items-center border rounded-lg p-3 mb-4">
            <User size={20} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Email or Phone Number" className="flex-1 outline-none bg-transparent" />
          </div>
          <div className="flex items-center border rounded-lg p-3">
            <Lock size={20} className="text-gray-400 mr-2" />
            <input type="password" placeholder="Password" className="flex-1 outline-none bg-transparent" />
          </div>
          <div className="text-right mt-2">
            <button className="text-blue-600 text-sm">Forgot Password?</button>
          </div>
        </div>
        <Button onClick={() => navigate('/home')} fullWidth>
          Log In
        </Button>
        <div className="my-4 flex items-center">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 border-t"></div>
        </div>
        <button onClick={() => navigate('/home')} className="w-full p-3 border border-gray-300 rounded-lg text-center mb-4">
          Register
        </button>
        <button onClick={() => navigate('/home')} className="w-full flex items-center justify-center p-3 bg-gray-100 rounded-lg">
          Continue as Guest
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>;
};
export default LoginScreen;