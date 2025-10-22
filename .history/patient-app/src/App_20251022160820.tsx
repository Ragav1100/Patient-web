// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.tsx';
import Otp from './pages/Otp.tsx'
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import React from "react";
import Suggestion from './pages/Suggestion.tsx';
import Profile from './pages/Profile.tsx';
import Emergency from './pages/Emergency.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hospital" element={<Emergency />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
