import React from 'react';
import { Link } from 'react-router-dom';


import IconExplore from '../icons/icon-explore';
import IconDiscover from '../icons/icon-discover';


const SideBar:React.FC = () => {
  return (
    <div className="sidebar">
      <img className='sidebar__logo-zing' src='img/Zing_logo.png' alt="logo zing" />
      <img className='sidebar__logo-zing-mini' src='img/logo-zing-mini.PNG' alt="logo zing mini" />

      <div className='sidebar-btn'>
        <Link to='/mymusic' >
          <div className='sidebar__btn'>
            <IconExplore />
            <span className='sidebar-title'>Cá Nhân</span>
          </div>
        </Link> 

        <Link to='/'>
          <div className='sidebar__btn'>
            <IconDiscover />
            <span className='sidebar-title'>Khám Phá</span>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default SideBar;