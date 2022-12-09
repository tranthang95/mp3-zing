import React from 'react';
import logo from '../../img/Zing_logo.png'


const SideBar:React.FC = () => {
  return (
    <div className="sidebar">
      <div className='sidebar__container'>
        <div className='img'>
          <img className='img__logo-zing' src={logo} alt="logo zing" />
        </div>
        <div className='btn btn-explore'>
          Khám Phá
        </div>
        <div className='btn btn-user'>
          Cá Nhân
        </div>
      </div>
    </div>
  )
}

export default SideBar;