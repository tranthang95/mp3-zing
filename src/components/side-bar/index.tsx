import React from 'react';
import logo from '../../img/Zing_logo.png'


const SideBar:React.FC = () => {
  return (
    <div className="side-bar">
      <img className='logo' src={logo} alt="logo zing" />
      
    </div>
  )
}

export default SideBar;