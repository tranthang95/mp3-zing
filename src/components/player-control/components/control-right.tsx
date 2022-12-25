import React from 'react';
import IconMicro from '../../icons/icon-micro';
import IconMusicPlaylist from '../../icons/icon-music-playlist';
import IconVolume from '../../icons/icon-volume';

const ControlRight: React.FC = () => {

  return (
    <div className='control-right'> 
      <IconMicro />
      <IconVolume />
      <input className='control__volume' type="range" min="1" max="100" value="50"/>
      <span></span>
      <IconMusicPlaylist />
    </div>
  )
}

export default ControlRight;