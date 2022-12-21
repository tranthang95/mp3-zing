import React from "react";

import Library from "./library";
import ListMusic from "./listmusic";

const Music: React.FC = () =>{

  return (
    <div className="main-music">
      <Library />

      <ListMusic />

    </div>
  )
}

export default Music;