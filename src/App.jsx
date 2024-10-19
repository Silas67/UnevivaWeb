import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './pages/home';
import  Shop  from './pages/shop';
import  Contact  from './pages/contact';
import  About  from './pages/about';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <Nav/>
        <Routes>
            
            <Route path="/"
                element={<Home/>} />
            <Route path="/about"
                element={<About/>} />
            <Route path="/shop"
                element={<Shop/>} />
            <Route path="/contact"
                element={<Contact/>} />
            <Route path="*" element={<div>Page not found</div>} />
        </Routes>
    </Router>
  );
};

export default App