import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import { useEffect, useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';
import Login from './components/Login';
import { Game } from './components/Game';
import Home from './components/Home';
import SingUp from './components/SignUp';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}
