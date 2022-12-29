import React from "react";

import IconMusicNotes from "../../../icons/icon-music-note";
import IconHeart from "../../../icons/icon-heart"
import IconPlay from "../../../icons/icon-play";

const Song: React.FC = () => {

  return (
    <div className="song">
      <header className="song-header">
        <div className="song__media-left">
          <div className="song-header__text song-header__text-1">bài hát</div>
        </div>
        <div className="song__media-mid">
          <div className="song-header__text">album</div>
        </div>
        <div className="song__media-right">
        <div className="song-header__text">thời gian</div>
        </div>
      </header>
  
      <main className="song-main">
        <div className="song__media">
          <div className="song__media-left">
            <div className="song__logo"> 
              <IconMusicNotes />
            </div>
            <div className="song__avata">
              <div className="song__btn-play">
                <IconPlay />
              </div>
              <img className="song__img" src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg" alt="" />
            </div>
            <div className="song__infor">
              <span className="song__infor-name">Valentine cuối cùng</span>
              <span className="song__infor-author">Amy</span>
            </div>
          </div>
          
          <div className="song__media-mid">
            <div className="song__album">Song album </div>
          </div>
          <div className="song__media-right">
            <div >
              <button className="song__btn-heart">
                <IconHeart />
              </button>
            </div>
            <div className="song__duration"> 05:32</div>
          </div>
        </div>

        <div className="song__media">
          <div className="song__media-left">
            <div className="song__logo"> 
              <IconMusicNotes />
            </div>
            <div className="song__avata">
              <div className="song__btn-play">
                <IconPlay />
              </div>
              <img className="song__img" src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg" alt="" />
            </div>
            <div className="song__infor">
              <span className="song__infor-name">Valentine cuối cùng</span>
              <span className="song__infor-author">Amy</span>
            </div>
          </div>
          <div className="song__media-mid">
            <div className="song__album">Song album</div>
          </div>
          <div className="song__media-right">
            <div >
              <button className="song__btn-heart">
                <IconHeart />
              </button>
            </div>
            <div className="song__duration"> 05:32</div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Song;