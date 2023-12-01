import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Routes/Contact.jsx';
import Favs from './Routes/Favs.jsx';
import Home from './Routes/Home.jsx';
import Detail from './Routes/Detail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="favs" element={<Favs />} />
          <Route path="Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
