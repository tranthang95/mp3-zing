import React from "react";
import Search from "../search";

const Header:React.FC = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Search />
        Header avatar
      </div>
    </div>
  )
}

export default Header;