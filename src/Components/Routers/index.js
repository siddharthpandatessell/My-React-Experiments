import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClassicResponsive from '../Layouts/ClassicResponsive';
// import './main.css';

export const MyRouter = () => 

  (<BrowserRouter>
    <Routes>
      <Route path="home" element={<ClassicResponsive page="Home" />} />
      <Route path="about" element={<ClassicResponsive page="About" />} />
      <Route path="services" element={<ClassicResponsive page="Services" />} />
      <Route path="contact-us" element={<ClassicResponsive page="Contact Us" />} />
        <Route
          path="*"
          element={
            <ClassicResponsive page="Null" />
          }
        />
    </Routes>
  </BrowserRouter>);
