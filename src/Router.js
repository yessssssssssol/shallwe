import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/kakao/callback" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
