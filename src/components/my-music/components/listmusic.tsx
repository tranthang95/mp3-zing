import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const ListMusic: React.FC = () => {

  return (
   
    <div className="listmusic">
      <nav className="listmusic__nav">

        <Link className='test' to='/mymusic/song'>
          <div className='listmusic__nav-button'>
            Bài Hát
          </div>
        </Link>
        <Link to='/mymusic/podcast'>
          <div className='listmusic__nav-button'>
            Podcast
          </div>
        </Link>
        <Link to='/mymusic/album'>
          <div className='listmusic__nav-button'>
            album
          </div>
        </Link>
        <Link to='/mymusic/mv'>
          <div className='listmusic__nav-button'>
            Mv
          </div>
        </Link>
      </nav>
      <Outlet />
    </div>

  )
}

export default ListMusic