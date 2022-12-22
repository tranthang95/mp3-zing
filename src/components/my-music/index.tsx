import React from "react";

import Library from "./components/library";
import ListMusic from "./components/listmusic";

const MyMusic: React.FC = () =>{

  return (
    <div className="main-music">
      <Library />
      <ListMusic />

    </div>
  )
}

export default MyMusic;