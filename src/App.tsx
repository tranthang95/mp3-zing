import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home-page';
import MyMusic from './components/my-music';
import SideBar from './components/side-bar';
import Header from './components/header';
import PlayerControl from './components/player-control';

import Song from './components/my-music/components/pages/song-page';
import MV from './components/my-music/components/pages/song-page'
import PodCast from './components/my-music/components/pages/podcast-page';
import Album from './components/my-music/components/pages/album-page';


const  App: React.FunctionComponent = () =>  {
  return (
    <BrowserRouter>
      <div className='page'>
        <div className="container">
          <SideBar />
          <div className='container__main'>
            <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='mymusic' element={<MyMusic />} >
                  <Route path='song' element={<Song />} />
                  <Route path='mv' element={<MV />} />
                  <Route path='podcast' element={<PodCast />} />
                  <Route path='album' element={<Album />} />
                </Route>
                <Route path='*' element={<Home />} />
              </Routes>
          </div>
        </div>
        <div  className='playercontrol'>
          <PlayerControl />
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
