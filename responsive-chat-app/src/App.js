import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import MainProfilePage from './components/MainProfilePage';
import Locker from './components/Locker';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main-profile/:index" element={<MainProfilePage />} />
        <Route path="/Locker" element={<Locker />} />
      </Routes>
    </div>
  );
}

export default App;
