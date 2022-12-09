import React from 'react';
import logo from '../../img/Zing_logo.png'


const SideBar:React.FC = () => {
  return (
    <div className="sidebar">
      <img className='logo-zing' src={logo} alt="logo zing" />
      Side bar
    </div>
  )
}

export default SideBar;