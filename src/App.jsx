import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import Listings from './pages/Listings';



function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}


export default App;
