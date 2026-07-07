import React from 'react'
import Nav from '../Components/Outlets/Nav'
import Footer from '../Components/Outlets/Footer'
import { Outlet } from 'react-router'
const LayoutPage = () => {
  return (
    <div className="main-div">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutPage