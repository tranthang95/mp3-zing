import React from 'react';
import IconPlay from '../../icons/icon-play';
import IconPlus from '../../icons/icon-plus';
import IconCheRight from '../../icons/icon-chevron-right';
import ButtonOption from './buttons-option';

const Library: React.FC = () => {

  return (
    <div className='library'>
      <div className='library__header'>
        <h1>Thư viện</h1>
        <button className='library__header-btn-play'>
          <IconPlay />
        </button>
      </div>

      <div className='library__playlist'>
        <div>
          <h2>Playlist</h2>
          <button className='library__playlist-btn-plus'>
            <IconPlus />
          </button>
        </div>
        <button className='library__playlist-btn-all'>
          <span>Tất Cả</span>
          <IconCheRight />
        </button>
      </div>

      <div className='library__carousel'>
        
          <div className='carousel__items'>
            <div className='item'>
              <div className='item__container'>
                <ButtonOption />
                <div className='item__card'>
                  <img className='item__card-img' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/a/d/adb47d53ea85e0b3c20407ce635aaf0d_1418150004.jpg" alt=""/>
                </div>
              </div>
              <div className='item__name'>Tên</div>
              <div className='item__author'>Xuan thang</div>
            </div>       

            <div className='item'>
              <div className='item__container'>
                <ButtonOption />
                <div className='item__card'>
                  <img className='item__card-img' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/a/d/adb47d53ea85e0b3c20407ce635aaf0d_1418150004.jpg" alt=""/>
                </div>
              </div>
              <div className='item__name'>Tên</div>
              <div className='item__author'>Xuan thang</div>
            </div>

            <div className='item'>
              <div className='item__container'>
                <ButtonOption />
                <div className='item__card'>
                  <img className='item__card-img' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/1/a/1ab811cab77b8408af20768f4d1dcca2_1487673204.jpg" alt=""/> 
                </div>
              </div>
              <div className='item__name'>Tên</div>
              <div className='item__author'>tx Thang</div>
            </div>

            <div className='item'>
              <div className='item__container'>
                <ButtonOption />
                <div className='item__card'>
                  <img className='item__card-img' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/a/d/adb47d53ea85e0b3c20407ce635aaf0d_1418150004.jpg" alt=""/>
                </div>
              </div>
              <div className='item__name'>Tên</div>
              <div className='item__author'>Xuan thang</div>
            </div>

            <div className='item'>
              <div className='item__container'>
                <ButtonOption />
                <div className='item__card'>
                  <img className='item__card-img' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/a/d/adb47d53ea85e0b3c20407ce635aaf0d_1418150004.jpg" alt=""/>
                </div>
              </div>
              <div className='item__name'>Tên</div>
              <div className='item__author'>Xuan thang</div>
            </div>

            <div className='item'>
              <div className='item__container'>
                <ButtonOption />
                <div className='item__card'>
                  <img className='item__card-img' src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/a/d/adb47d53ea85e0b3c20407ce635aaf0d_1418150004.jpg" alt=""/>
                </div>
              </div>
              <div className='item__name'>Tên</div>
              <div className='item__author'>Xuan thang</div>
            </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Library;