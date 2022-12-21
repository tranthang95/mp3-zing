import React from "react"

import SideBar from '../components/side-bar';
import Header from '../components/header';
import Music from "../components/mymusic";
import PlayerControl from '../components/player-control';


const Mymusic: React.FC = () => {

  return (
    <div className='page'>
      <div className="container">
        <SideBar />
        <div className='container__main'>
          <Header />
          <Music />
        </div>
      </div>
      <div  className='playercontrol'>
        <PlayerControl />
      </div>
    </div>
  )
}

export default Mymusic;
