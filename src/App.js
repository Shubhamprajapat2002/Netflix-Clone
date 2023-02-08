import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';


function App() {
  return (
   
      <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/netflix-show" element={<NetflixShow />} />
        </Routes>
        <Footer />
      </div>
       </BrowserRouter>
   

  );
}

export default App;
