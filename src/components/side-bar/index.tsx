import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/Zing_logo.png'


const SideBar:React.FC = () => {
  return (
    <div className="sidebar">
      <img className='sidebar__logo-zing' src={logo} alt="logo zing" />
    
      
      <div >
        <Link to='mymusic' >
          <div className='sidebar__btn'>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='sidebar__btn-explore'  viewBox="0 0 20 20">
              <title>folder-music</title>
              <path d="M18.405 2.799c-0.112-0.44-0.656-0.799-1.21-0.799h-14.39c-0.555 0-1.099 0.359-1.21 0.799l-0.201 1.201h17.211l-0.2-1.201zM19.412 5h-18.825c-0.342 0-0.609 0.294-0.577 0.635l0.923 11.669c0.038 0.394 0.37 0.696 0.766 0.696h16.601c0.397 0 0.728-0.302 0.766-0.696l0.923-11.669c0.033-0.341-0.235-0.635-0.577-0.635zM11.942 12.521c-0.128 0.265-0.258 0.279-0.202 0 0.146-0.721 0.047-2.269-1.043-2.441v3.294c0 0.674-0.311 1.262-1.136 1.528-0.802 0.256-1.699-0.011-1.908-0.586s0.261-1.276 1.052-1.564c0.442-0.161 0.954-0.203 1.299-0.070v-4.682h0.694c-0.001 1.633 2.818 1.275 1.244 4.521z"></path>
              </svg>
              <span>Cá Nhân</span>
            </div>
        </Link> 

        <Link to='/'>
          <div className='sidebar__btn'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='sidebar__btn-explore' viewBox="0 0 24 24">
            <title>disc</title>
            <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path>
            </svg>
            <span>Khám Phá</span>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default SideBar;