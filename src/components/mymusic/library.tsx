import React from 'react';

const Library: React.FC = () => {

  return (
    <div className='library'>
      <div className='library__header'>
        <h1>Thư viện</h1>
        <button className='library__header-btn-play'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
            <title>play3</title>
            <path d="M6 4l20 12-20 12z"></path>
          </svg>
        </button>
      </div>

      <div className='library__playlist'>
        <div>
          <h2>Playlist</h2>
          <button className='library__playlist-btn-plus'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
              <title>add</title>
              <path d="M24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path>
            </svg>
          </button>
        </div>
        <button className='library__playlist-btn-all'>
          <span>Tất Cả</span>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>chevron-right</title>
            <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
          </svg>
        </button>
      </div>

      <div className='library__carousel'>
        <div className='item'>
          <div className='item__card'>
           <img className='item__card-img' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/a/d/adb47d53ea85e0b3c20407ce635aaf0d_1418150004.jpg" alt=""/>
          </div>
          <div className='item__name'>Tên</div>
          <div className='item__author'>Xuan thang</div>
        </div>

        <div className='item'>
          <div className='item__card'>
           <img className='item__card-img' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/1/a/1ab811cab77b8408af20768f4d1dcca2_1487673204.jpg" alt=""/> 
          </div>
          <div className='item__name'>Tên</div>
          <div className='item__author'>tx Thang</div>
        </div>

      </div>
    </div>
  )
}

export default Library;