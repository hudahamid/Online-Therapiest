import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './component/Navbar';
import Home from './pages/Home/Home';
import Blogs from "./pages/Blogs/Blogs";
import ContactUs from './pages/contact-us/Contact-us';
import About from './pages/About/About';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
