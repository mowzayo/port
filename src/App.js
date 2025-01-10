import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WebDeveloper from "./pages/WebDeveloper";
import Contact from "./pages/Contact";
import DataAnalyst from './pages/Dataanalyst';
import Projects from "./pages/Projects";






import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Web-developer" element={<WebDeveloper />} />
          <Route path="/Contact" element={<Contact />} />
           <Route path="/Projects" element={<Projects />} /> 
          <Route path="/data-analyst" element={<DataAnalyst />} />
         
        </Routes>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;