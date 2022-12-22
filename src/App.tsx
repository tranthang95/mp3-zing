import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home-page';
import MyMusic from './components/my-music';
import SideBar from './components/side-bar';
import Header from './components/header';
import PlayerControl from './components/player-control';


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
                <Route path='mymusic' element={<MyMusic />} />
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
