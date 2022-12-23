import React from 'react';
import { Link } from 'react-router-dom';


import IconExplore from '../icons/icon-explore';
import IconDiscover from '../icons/icon-discover';


const SideBar:React.FC = () => {
  return (
    <div className="sidebar">
      <img className='sidebar__logo-zing' src='img/Zing_logo.png' alt="logo zing" />

      <div >
        <Link to='/mymusic' >
          <div className='sidebar__btn'>
            <IconExplore />
            <span>Cá Nhân</span>
          </div>
        </Link> 

        <Link to='/'>
          <div className='sidebar__btn'>
            <IconDiscover />
            <span>Khám Phá</span>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default SideBar;