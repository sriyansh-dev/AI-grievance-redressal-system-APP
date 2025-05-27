import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './components/screens/SplashScreen';
import LanguageSelectionScreen from './components/screens/LanguageSelectionScreen';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import ComplaintLodgingScreen from './components/screens/ComplaintLodgingScreen';
import ComplaintStatusScreen from './components/screens/ComplaintStatusScreen';
import ComplaintDetailsScreen from './components/screens/ComplaintDetailsScreen';
import FeedbackScreen from './components/screens/FeedbackScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import HelpScreen from './components/screens/HelpScreen';
import AboutScreen from './components/screens/AboutScreen';
export function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    // Show splash screen for 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (showSplash) {
    return <SplashScreen />;
  }
  return <Router>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-md relative">
          <Routes>
            <Route path="/" element={<LanguageSelectionScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/lodge-complaint" element={<ComplaintLodgingScreen />} />
            <Route path="/complaints" element={<ComplaintStatusScreen />} />
            <Route path="/complaint/:id" element={<ComplaintDetailsScreen />} />
            <Route path="/feedback/:id" element={<FeedbackScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="/help" element={<HelpScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </Router>;
}