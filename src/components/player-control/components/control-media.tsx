import React from 'react';
import IconDot from '../../icons/icon-dot-three';
import IconHeart from '../../icons/icon-heart';

const ControlMedia: React.FC = () => {

  return (
    <div className='media'>
        <div className='media__left'>
          <img className='media__left-img'  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/d/6/d6654c293da3a5be167dfb51a6292ce3_1500517036.jpg" alt="media-img"/>
        </div>
        <div className="media__infor">
          <span className="song__infor-name">Hôn Anh </span>
          <span className="song__infor-author">MIN</span>
        </div>
        <div className='media__right'> 
          <button className="song__btn-heart">
            <IconHeart />
          </button>
          <button className='media__btn-dot'>
            <IconDot />
          </button>
        </div>

    </div>
  )
}
export default ControlMedia;