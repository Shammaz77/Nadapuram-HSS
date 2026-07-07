import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Acadamics from '../Pages/Acadamics';
import AboutPage from '../Pages/AboutPage';
import Contact from '../Pages/Contact';
import Admission from '../Pages/Admission';
import AdmissionForm from '../Pages/AdmissionForm';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} /> 
          <Route path="/about" element={<AboutPage />} />
          <Route path="/acadamics" element={<Acadamics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admissionform" element={<AdmissionForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default Router