import React from 'react';

import SideBar from './components/side-bar';
import Header from './components/header';
import MainContent from './components/main-content';
import PlayerControl from './components/player-control';



const  App: React.FC = () =>  {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <MainContent />
      <PlayerControl />
    </div>
  );
}

export default App;
