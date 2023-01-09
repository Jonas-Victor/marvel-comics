import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Global.css';
import Home from './Pages/Home/Home';
import Details from './Pages/Home/Details';
import Search from './Pages/Home/Search/Search';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/search" element={<Search />} />
    </Routes>

  </BrowserRouter>,
)
