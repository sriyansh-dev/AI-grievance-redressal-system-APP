import React from 'react';
const SplashScreen = () => {
  return <div className="flex flex-col items-center justify-center w-full min-h-screen bg-blue-600">
      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6">
        {/* Placeholder for app logo */}
        <div className="text-4xl font-bold text-blue-600">GR</div>
      </div>
      <h1 className="text-2xl font-bold text-white mb-8">
        Grievance Redressal
      </h1>
      <p className="text-white mb-8">"Your Voice, Our Action"</p>
      <div className="animate-spin text-white" size={32} />
    </div>;
};
export default SplashScreen;