import React from "react";
import Search from "./components/search-bar";
import Login from "./components/login-avata";

const Header:React.FC = () => {
  return (
    <div className="header">
      
        <Search />
        <Login />
      
    </div>
  )
}

export default Header;