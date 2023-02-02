import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './component/Navbar';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import AboutUs from './pages/About/About';


import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<AboutUs />} />
          
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
