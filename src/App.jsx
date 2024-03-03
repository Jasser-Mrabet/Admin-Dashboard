import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/SideBar'; 
import Home from './Components/Home';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header openSidebar={openSidebar} /> 
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} /> 
      <Home />
    </div>
  );
}

export default App;
