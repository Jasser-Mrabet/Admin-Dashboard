import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    // Header Section
    <header className='header'>
      {/* Menu Icon */}
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>

      {/* Search Icon */}
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>

      {/* Right Section */}
      <div className='header-right'>
        {/* Bell Icon */}
        <BsFillBellFill className='icon' />

        {/* Envelope Icon */}
        <BsFillEnvelopeFill className='icon' />

        {/* Person Icon */}
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
