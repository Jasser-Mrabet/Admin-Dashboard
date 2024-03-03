import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    // Sidebar Section
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      {/* Sidebar Title */}
      <div className='sidebar-title'>
        {/* Sidebar Brand */}
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header'/> SHOP
        </div>

        {/* Close Icon */}
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      {/* Sidebar Navigation List */}
      <ul className='sidebar-list'>
        {/* Dashboard */}
        <li className='sidebar-list-item'>
          <a href="#">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>

        {/* Products */}
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillArchiveFill className='icon'/> Products
          </a>
        </li>

        {/* Categories */}
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillGrid3X3GapFill className='icon'/> Categories
          </a>
        </li>

        {/* Customers */}
        <li className='sidebar-list-item'>
          <a href="#">
            <BsPeopleFill className='icon'/> Customers
          </a>
        </li>

        {/* Inventory */}
        <li className='sidebar-list-item'>
          <a href="#">
            <BsListCheck className='icon'/> Inventory
          </a>
        </li>

        {/* Reports */}
        <li className='sidebar-list-item'>
          <a href="#">
            <BsMenuButtonWideFill className='icon'/> Reports
          </a>
        </li>

        {/* Setting */}
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillGearFill className='icon'/> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
