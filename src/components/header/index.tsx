import React from "react";
import Search from "../search/searchbar";
import Login from "../login/LoginAvata";

const Header:React.FC = () => {
  return (
    <div className="header">
      
        <Search />
        <Login />
      
    </div>
  )
}

export default Header;